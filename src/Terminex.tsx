import {useDisconnect} from "wagmi";

export const Terminex = () => {
    const { disconnect} = useDisconnect();

    return (
        <>
            <h1>Connected.</h1>
            <button onClick={() => disconnect()}>Disconnect?</button>
        </>
    );
};