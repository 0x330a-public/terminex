import {useDisconnect} from "wagmi";
import {useReadIdGatewayPrice, useReadIdRegistryIdOf, useWriteIdGatewayRegister} from "./generated.ts";
import {parseEther} from "viem";

export interface TerminexProps {address: `0x${string}`}

export const Terminex = ({address}: TerminexProps) => {
    const { disconnect} = useDisconnect();

    const id = useReadIdRegistryIdOf({
        args: [address]
    });

    const {data} = useReadIdGatewayPrice();

    // const { writeContract, error, isPending, isSuccess} = useWriteIdGatewayRegister();
    const {writeContract,status, error , isPending, isSuccess} = useWriteIdGatewayRegister()

    const numStorage = 0n;

    return (
        <>
            <h1>Terminex</h1>
            <h4>Connected to <code>{address}</code></h4>
            <button onClick={() => disconnect()}>Disconnect</button>
            <br/>
            <p>Has an account already? {id.data ? "yes" : "no"}</p>
            {id.data && <p>fid: {id.data.toString()}</p>}
            <p>Registration price: {parseEther((data ?? 0n).toString(), "wei").toString()}</p>
            <p>Has rented {numStorage.toString()} storage units</p>
            {
                !id.data && <>
                    <button disabled={isPending || isSuccess}
                            onClick={() => {
                                writeContract({
                                    value: data!,
                                    args: [address]
                                });
                            }}
                    >
                    Register for Farcaster
                    </button>
                    { (error || status) && <p>Error: {error?.message ?? "n/a"}, status: {status}</p>}
                </>
            }
        </>
    );
};