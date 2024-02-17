import {useEffect} from "react";
import {SyncModal} from "./SyncModal.tsx";


export const Keys = () => {

    useEffect(() => {
        const peerToPeerListener = async () => {

        };

        peerToPeerListener().catch(e => {
            console.error(e);
        });
    }, []);

    const modalId = "sync_modal"
    const modal = <SyncModal id={modalId} callback={(newPubKey)=>{
        console.log("Write contract with", newPubKey.toString('hex'));
    }}/>

    // const gridPrototype = () => (
    //     <div className={"card m-2 bg-neutral text-neutral-content shadow-xl"}>
    //         <div className={"card-body"}>
    //             <h2 className={"text-base"}>This is where a pubkey will be</h2>
    //         </div>
    //     </div>
    // );

    const keyGrid = <>
        <div className={"w-max mx-auto my-8 text-xl font-bold"}>Assigned Keys:</div>
        <div className={"grid grid-cols-3 m-4 w-max mx-auto"}>

        </div>
        <div className={"mx-auto w-max"}>
            <button className={"btn btn-outline w-max text-base font-bold"} onClick={() => {
                const dialog: HTMLDialogElement = document.getElementById(modalId)! as HTMLDialogElement
                dialog.showModal();
            }}>Add a new key
            </button>
        </div>
    </>

    return (
        <>
            {keyGrid}
            {modal}
        </>
    );
};