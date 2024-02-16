import {ConnectKitButton} from "connectkit";

export const Disconnected = () => {

    return (
        <div className={"hero min-h-screen"}>
            <div className={"hero-content text-start flex-col items-center"}>
                <h1 className={"text-5xl font-bold"}>Connect to Terminex</h1>
                <br/>
                <ConnectKitButton/>
            </div>
        </div>
    );

};