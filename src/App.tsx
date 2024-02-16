import './App.css'
import {useAccount} from "wagmi";
import {Disconnected} from "./Disconnected.tsx";
import {Terminex} from "./Terminex.tsx";

function App() {

    const { address, isConnecting, isConnected, isDisconnected } = useAccount();

    return(
        isDisconnected ? <Disconnected/>
            : isConnecting ? <h3>Connecting...</h3>
                : isConnected ? <Terminex address={address!}/> : <></>
    )
}

export default App
