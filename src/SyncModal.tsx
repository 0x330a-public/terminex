import {ed25519} from "@noble/curves/ed25519";
import QRCode from "react-qr-code";
import {useEffect, useState} from "react";
import {useWaku} from "@waku/react";

export interface SyncModalParams {
    id: string;
    callback: (newPubKey: Buffer)=>void;
}
export const SyncModal = ({id, callback}: SyncModalParams) => {

    const { node, isLoading } = useWaku();

    const [newRandom, setNewRandom ] = useState<Uint8Array | undefined>(undefined);

    useEffect(()=> {
        setNewRandom(ed25519.utils.randomPrivateKey());
    }, [node]);

    return (
        <dialog id={id} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Add a new Key via compatible app</h3>
                <p className="py-4">Scan the QR code in app to add a new key to your fid</p>
                {/*<p className="py-4">node listen: {node?.store?.peers()}</p>*/}
                    { isLoading || !newRandom ?
                        <div className={"loading loading-spinner text-primary mx-auto w-max"}/>
                        :
                        <div className={"w-max mx-auto bg-white p-2 rounded-xl"}>
                            <QRCode size={256} value={Buffer.from(newRandom!).toString("hex")}/>
                        </div>
                    }
                        <div className="modal-action">
                    <form method="dialog">
                        <button className="btn btn-outline py-1" onClick={()=>callback(Buffer.from("aabbccaabbcc", "hex"))}>Cancel</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
}