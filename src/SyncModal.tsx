

export interface SyncModalParams {
    id: string;
    callback: (newPubKey: Buffer)=>void;
}
export const SyncModal = ({id, callback}: SyncModalParams)=> {

    return (
        <dialog id={id} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Add a new Key via compatible app</h3>
                <p className="py-4">Scan the QR code in app to add a new key to your fid</p>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn btn-outline py-1" onClick={()=>callback(Buffer.from("aabbccaabbcc", "hex"))}>Cancel</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
}