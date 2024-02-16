import './App.css'
import {useAccount} from "wagmi";
import {Disconnected} from "./Disconnected.tsx";
import {Terminex} from "./Terminex.tsx";

function App() {

    const { address, isConnecting, isConnected, isDisconnected } = useAccount();

    return(
        isDisconnected ? <Disconnected/>
            : isConnecting ? <p className={"hero-content min-h-screen"}>Connecting...</p>
                : isConnected ? <Terminex address={address!}/> : <></>
    )
}

export default App
