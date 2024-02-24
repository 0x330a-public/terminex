import {Address} from "viem";


export interface NameEditorParams {
    account: Address,
}

export const NameEditor = ({account}: NameEditorParams) => {
    return <>{account}</>
}