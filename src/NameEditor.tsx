import {Address} from "viem";
import useSWR from "swr";
import {useState} from "react";
import axios from "axios";


export interface NameEditorParams {
    account: Address,
}

interface FetchParams {
    url: string,
    username: string,
}

const TooShortError = "Username is too short";

const fetcher = ({url, username}: FetchParams) => {
    // probably 4 is a safe minimum to query
    if (username.length < 4) return Promise.reject(TooShortError);

    return axios.get(url, {
        params: {
            fname: username
        }
    }).then(res => {
        console.log(res)
        res.data
    });
}

export const NameEditor = ({account}: NameEditorParams) => {

    const [usernameRequest, setUsernameRequest] = useState<string>("");

    const { data } = useSWR({ url: "/api/nameQuery", username: usernameRequest}, fetcher);

    return (<>
        <div className={"mx-auto w-max flex flex-col"}>
            <div className={"text-base"}>{account}</div>
            <div className={"text-base"}>can register: {data}</div>
            <input className={"form input input-bordered w-full max-w-xs"}
                   placeholder={"Username to register"}
                   value={usernameRequest}
                   onChange={(e) => setUsernameRequest(e.target.value)}
            />
        </div>
    </>);
}