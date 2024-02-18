import {useDisconnect, useWalletClient, useWriteContract} from "wagmi";
import {
    idGatewayAddress,
    useReadIdGatewayPrice,
    useReadIdRegistryIdOf,
    useReadSignedKeyRequestValidatorEip712Domain
} from "./generated.ts";
import {formatEther} from "viem";
import {Keys} from "./Keys.tsx";
import {CHAIN_ID} from "./main.tsx";

const abi = [{"inputs":[{"internalType":"address","name":"_idRegistry","type":"address"},{"internalType":"address","name":"_storageRegistry","type":"address"},{"internalType":"address","name":"_initialOwner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"CallFailed","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"currentNonce","type":"uint256"}],"name":"InvalidAccountNonce","type":"error"},{"inputs":[],"name":"InvalidShortString","type":"error"},{"inputs":[],"name":"InvalidSignature","type":"error"},{"inputs":[],"name":"OnlyGuardian","type":"error"},{"inputs":[],"name":"SignatureExpired","type":"error"},{"inputs":[{"internalType":"string","name":"str","type":"string"}],"name":"StringTooLong","type":"error"},{"inputs":[],"name":"Unauthorized","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"guardian","type":"address"}],"name":"Add","type":"event"},{"anonymous":false,"inputs":[],"name":"EIP712DomainChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"guardian","type":"address"}],"name":"Remove","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldStorageRegistry","type":"address"},{"indexed":false,"internalType":"address","name":"newStorageRegistry","type":"address"}],"name":"SetStorageRegistry","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"REGISTER_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VERSION","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"guardian","type":"address"}],"name":"addGuardian","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"domainSeparatorV4","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"eip712Domain","outputs":[{"internalType":"bytes1","name":"fields","type":"bytes1"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"version","type":"string"},{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"address","name":"verifyingContract","type":"address"},{"internalType":"bytes32","name":"salt","type":"bytes32"},{"internalType":"uint256[]","name":"extensions","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"guardian","type":"address"}],"name":"guardians","outputs":[{"internalType":"bool","name":"isGuardian","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"structHash","type":"bytes32"}],"name":"hashTypedDataV4","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"idRegistry","outputs":[{"internalType":"contract IIdRegistry","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"extraStorage","type":"uint256"}],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recovery","type":"address"}],"name":"register","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"recovery","type":"address"},{"internalType":"uint256","name":"extraStorage","type":"uint256"}],"name":"register","outputs":[{"internalType":"uint256","name":"fid","type":"uint256"},{"internalType":"uint256","name":"overpayment","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"recovery","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"registerFor","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"recovery","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bytes","name":"sig","type":"bytes"},{"internalType":"uint256","name":"extraStorage","type":"uint256"}],"name":"registerFor","outputs":[{"internalType":"uint256","name":"fid","type":"uint256"},{"internalType":"uint256","name":"overpayment","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"guardian","type":"address"}],"name":"removeGuardian","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_storageRegistry","type":"address"}],"name":"setStorageRegistry","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"storageRegistry","outputs":[{"internalType":"contract IStorageRegistry","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"useNonce","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
export interface TerminexProps {
    address: `0x${string}`
}

export const Terminex = ({address}: TerminexProps) => {

    const {disconnectAsync} = useDisconnect();
    const {data:client} = useWalletClient();

    const {data:id, isPending:idPending} = useReadIdRegistryIdOf({
        args: [address]
    });

    const trimmed = `${address.substring(0, 6)}...${address.substring(address.length - 4)}`

    const {data:price} = useReadIdGatewayPrice();
    const {data:signedKeyRequestDomain} = useReadSignedKeyRequestValidatorEip712Domain();

    const {writeContract, status, error, isPending, isSuccess} = useWriteContract();

    const unregistered = !id && !idPending && <>
        <p className={"text-base"}>Registration price: {formatEther(price ?? 0n)} ETH</p>
        {
            !id &&
            <div className={"card-actions justify-start"}>
                <button className={"btn btn-outline"} disabled={isPending || isSuccess} onClick={() => {
                    writeContract({
                        abi,
                        address: idGatewayAddress[CHAIN_ID],
                        functionName: "register",
                        value: price!,
                        args: [address]
                    });
                }}>Register
                </button>
            </div>
        }
        { status !== "idle" && <p className={"text-base"}>Registration: {status}</p> }
        { error && <p className={"text-error w-min"}>{error.message}</p> }
    </>;

    const registered = !idPending && <>
        <h2 className={"text-sm"}>fid: {(id ?? 0n).toString()}</h2>
        <p className={"text-base"}>User is currently registered for Farcaster</p>
    </>;

    return (
        <>
            <div className={"navbar"}>
                <div className={"flex-1"}>
                    <p className={"p-4 text-2xl font-bold"}>Terminex</p>
                </div>
                <div className={"flex-none btn btn-outline border-2"}>
                    <button onClick={async() => await disconnectAsync()}>Disconnect</button>
                </div>
            </div>
            <div className={"card m-16 w-max mx-auto bg-neutral text-neutral-content shadow-xl"}>
                <div className={"card-body"}>
                    <h2 className={"card-title"}>Connected to {trimmed}</h2>
                    {unregistered || registered}
                </div>
            </div>

            { signedKeyRequestDomain && client && id &&
                <Keys domain={signedKeyRequestDomain} account={address} fid={id} client={client}/>
            }
        </>
    );
};