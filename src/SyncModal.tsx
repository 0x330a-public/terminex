import {useEffect, useState} from "react";
import {ed25519} from "@noble/curves/ed25519";

export interface SyncModalParams {
    id: string;
    callback: (newPubKey: Buffer) => void;
}

export const SyncModal = ({id, callback}: SyncModalParams) => {

    const [newKey, setNewKey] = useState<Uint8Array | undefined>(undefined);
    const [tempKey, setNewTempKey] = useState<string>("");

    // For debugging the contract / signature creation in signature metadata validation
    useEffect(() => {
        const randKey = ed25519.utils.randomPrivateKey();
        const pubKey = ed25519.getPublicKey(randKey);
        setNewKey(pubKey)
    }, []);


    const setNewValue = (newHex: string) => {
        setNewTempKey(newHex);
        try {
            ed25519.ExtendedPoint.fromHex(newHex);
            setNewKey(Buffer.from(newHex, "hex"));
        } catch (e) {
            setNewKey(undefined);
        }
    };

    return (
        <dialog id={id} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Add a new Key via compatible app</h3>
                <p className="py-4">Enter new key and metadata</p>
                {/*<p className="py-4">node listen: {node?.store?.peers()}</p>*/}
                <label className={"form-control"}>
                    <textarea className={"m-2 textarea textarea-bordered"} placeholder={"Public Key: aabbcc..."}
                              onChange={(e) => setNewValue(e.target.value)} value={tempKey}/>
                </label>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn btn-outline btn-error m-1"
                                onClick={() => {
                                    setNewKey(undefined);
                                    setNewTempKey("");
                                }}>
                            Cancel
                        </button>
                        <button className="btn btn-outline m-1" disabled={!newKey || !tempKey}
                                onClick={() => {
                                    callback(Buffer.from(newKey!));
                                    setNewKey(undefined);
                                    setNewTempKey("");
                                    (document.getElementById(id) as HTMLDialogElement).close();
                                }}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </dialog>
    );
}