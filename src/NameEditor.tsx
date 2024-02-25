import {Address, WalletClient} from "viem";
import useSWR from "swr";
import {useState} from "react";
import axios from "axios";
import {NameResponse} from "../api/nameQuery.ts";
import {RegisterRequest, RegisterResponse} from "../api/registerName.ts";


export interface NameEditorParams {
    fid: bigint,
    account: Address,
    client: WalletClient,
}

interface FetchParams {
    url: string,
    username: string,
}

const TooShortError = "Username is too short";

const fetcher = ({url, username}: FetchParams): Promise<void|NameResponse> => {
    // probably 4 is a safe minimum to query
    if (username.length < 4) return Promise.reject(TooShortError);

    return axios.get(url, {
        params: {
            fname: username
        }
    }).then(res => res.data);
}

const EIP_712_USERNAME_PROOF = [
    { name: "name", type: "string" },
    { name: "timestamp", type: "uint256" },
    { name: "owner", type: "address" },
];

const EIP_712_USERNAME_DOMAIN = {
    name: "Farcaster name verification",
    version: "1",
    chainId: 1,
    verifyingContract: "0xe3Be01D99bAa8dB9905b33a3cA391238234B79D1" as Address, // name registry contract, will be the farcaster ENS CCIP contract later
};

const USERNAME_PROOF_EIP_712_TYPES = {
    domain: EIP_712_USERNAME_DOMAIN,
    types: { UserNameProof: EIP_712_USERNAME_PROOF },
};

export const NameEditor = ({fid, account, client}: NameEditorParams) => {

    const [usernameRequest, setUsernameRequest] = useState<string>("");

    const { data, error, isLoading } = useSWR({ url: "/api/nameQuery", username: usernameRequest}, fetcher);

    const [response, setResponse] = useState<RegisterResponse|undefined>();

    const usernameValid = usernameRequest.length > 4 && data?.inUse === false;

    const registerName = async (nameToRegister:string) => {

        setResponse(undefined);

        const timestamp = Math.floor(Date.now() / 1000);

        const signature = await client.signTypedData({
            account,
            domain: EIP_712_USERNAME_DOMAIN,
            types: USERNAME_PROOF_EIP_712_TYPES.types,
            primaryType: "UserNameProof",
            message: {
                name: nameToRegister,
                owner: account,
                timestamp,
            }
        });

        const requestData: RegisterRequest = {
            name: nameToRegister, // Name to register
            from: 0,  // Fid to transfer from (0 for a new registration)
            to: Number(fid), // Fid to transfer to (0 to unregister)
            fid: Number(fid), // Fid making the request (must match from or to)
            owner: account, // Custody address of fid making the request
            timestamp,  // Current timestamp in seconds
            signature  // EIP-712 signature signed by the custody address of the fid
        }

        const registrationResponse = await axios.post("/api/registerName", requestData) as RegisterResponse;
        setResponse(registrationResponse);
    };

    return <>
        <div className={"mx-auto w-max flex flex-col my-4"}>
            { (isLoading || usernameValid) &&  <div className={"text-base"}>can register: { isLoading ? "checking..." : data?.inUse === false ? "yes" : "no"}</div> }
            <input className={"form input input-bordered w-full max-w-xs mx-auto my-4"}
                   placeholder={"Username to register"}
                   value={usernameRequest}
                   onChange={(e) => setUsernameRequest(e.target.value)}
            />
            <button
                className={"btn btn-outline"}
                disabled={!usernameValid || error || isLoading}
                onClick={()=>registerName(usernameRequest)}>Register
            </button>
            { response && <div className={"text-base"}>Registration response: {response.success}</div> }
        </div>
    </>;
}