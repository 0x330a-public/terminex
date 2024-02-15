import './App.css'
import {useAccount} from "wagmi";
import {Disconnected} from "./Disconnected.tsx";
import {Terminex} from "./Terminex.tsx";

function App() {

    const { isConnecting, isConnected, isDisconnected } = useAccount();

    return(
        isDisconnected ? <Disconnected/>
            : isConnecting ? <h3>Connecting...</h3>
                : isConnected ? <Terminex/> : <></>
    )
}

export default App
