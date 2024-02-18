import {SyncModal} from "./SyncModal.tsx";
import {Address, bytesToHex, encodeAbiParameters, WalletClient} from "viem";
import {keyGatewayAddress, useReadKeyRegistryKeysOf} from "./generated.ts";
import {useWriteContract} from "wagmi";
import {CHAIN_ID} from "./main.tsx";
import {useEffect} from "react";

const gatewayAbi = [{
    "inputs": [{
        "internalType": "address",
        "name": "_keyRegistry",
        "type": "address"
    }, {"internalType": "address", "name": "_initialOwner", "type": "address"}],
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "inputs": [{"internalType": "address", "name": "account", "type": "address"}, {
        "internalType": "uint256",
        "name": "currentNonce",
        "type": "uint256"
    }], "name": "InvalidAccountNonce", "type": "error"
}, {"inputs": [], "name": "InvalidShortString", "type": "error"}, {
    "inputs": [],
    "name": "InvalidSignature",
    "type": "error"
}, {"inputs": [], "name": "OnlyGuardian", "type": "error"}, {
    "inputs": [],
    "name": "SignatureExpired",
    "type": "error"
}, {
    "inputs": [{"internalType": "string", "name": "str", "type": "string"}],
    "name": "StringTooLong",
    "type": "error"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "guardian", "type": "address"}],
    "name": "Add",
    "type": "event"
}, {"anonymous": false, "inputs": [], "name": "EIP712DomainChanged", "type": "event"}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "OwnershipTransferStarted",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "OwnershipTransferred",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "account", "type": "address"}],
    "name": "Paused",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "guardian", "type": "address"}],
    "name": "Remove",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "account", "type": "address"}],
    "name": "Unpaused",
    "type": "event"
}, {
    "inputs": [],
    "name": "ADD_TYPEHASH",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "VERSION",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "acceptOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint32", "name": "keyType", "type": "uint32"}, {
        "internalType": "bytes",
        "name": "key",
        "type": "bytes"
    }, {"internalType": "uint8", "name": "metadataType", "type": "uint8"}, {
        "internalType": "bytes",
        "name": "metadata",
        "type": "bytes"
    }], "name": "add", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "fidOwner", "type": "address"}, {
        "internalType": "uint32",
        "name": "keyType",
        "type": "uint32"
    }, {"internalType": "bytes", "name": "key", "type": "bytes"}, {
        "internalType": "uint8",
        "name": "metadataType",
        "type": "uint8"
    }, {"internalType": "bytes", "name": "metadata", "type": "bytes"}, {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
    }, {"internalType": "bytes", "name": "sig", "type": "bytes"}],
    "name": "addFor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "guardian", "type": "address"}],
    "name": "addGuardian",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "domainSeparatorV4",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "eip712Domain",
    "outputs": [{"internalType": "bytes1", "name": "fields", "type": "bytes1"}, {
        "internalType": "string",
        "name": "name",
        "type": "string"
    }, {"internalType": "string", "name": "version", "type": "string"}, {
        "internalType": "uint256",
        "name": "chainId",
        "type": "uint256"
    }, {"internalType": "address", "name": "verifyingContract", "type": "address"}, {
        "internalType": "bytes32",
        "name": "salt",
        "type": "bytes32"
    }, {"internalType": "uint256[]", "name": "extensions", "type": "uint256[]"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "guardian", "type": "address"}],
    "name": "guardians",
    "outputs": [{"internalType": "bool", "name": "isGuardian", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "structHash", "type": "bytes32"}],
    "name": "hashTypedDataV4",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "keyRegistry",
    "outputs": [{"internalType": "contract IKeyRegistry", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "owner", "type": "address"}],
    "name": "nonces",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "owner",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {"inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {
    "inputs": [],
    "name": "paused",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "pendingOwner",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "guardian", "type": "address"}],
    "name": "removeGuardian",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {"inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {
    "inputs": [],
    "name": "useNonce",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
}];

export interface KeyProps {
    fid: bigint;
    account: Address;
    domain: readonly [`0x${string}`, string, string, bigint, `0x${string}`, `0x${string}`, readonly bigint[]];
    client: WalletClient;
}

const metadataTypes = [
    {
        components: [
            {
                name: "requestFid",
                type: "uint256",
            },
            {
                name: "requestSigner",
                type: "address",
            },
            {
                name: "signature",
                type: "bytes",
            },
            {
                name: "deadline",
                type: "uint256",
            },
        ],
        name: "SignedKeyRequestMetadata",
        type: "tuple",
    },
];

const signTypes = {
    SignedKeyRequest: [
        {name: "requestFid", type: "uint256"},
        {name: "key", type: "bytes"},
        {name: "deadline", type: "uint256"}
    ]
};

const KEY_REGISTERED = 1;
const METADATA_SIGNATURE = 1;

const TIMEOUT = 36000000n;

export const Keys = ({fid, account, domain, client}: KeyProps) => {

    const {data: keyData} = useReadKeyRegistryKeysOf({
        args: [fid, KEY_REGISTERED]
    });

    const [, name, version, chainId, verifyingContract, , ] = domain;

    const registeredKeys = keyData ?? [];

    const {writeContract: addKey, isPending: addPending, error: addError} = useWriteContract();

    useEffect(() => {
        // maybe toast this in future or sth
        console.log("Add error:", addError);
    }, [addError]);

    const modalId = "sync_modal"
    const modal = <SyncModal id={modalId} callback={async (newPubKey) => {
        const hex = bytesToHex(newPubKey);
        const deadline = (TIMEOUT + BigInt(Date.now())) / 1000n;
        if (registeredKeys.includes(hex)) {
            // don't add it
            console.error("Already registered this key!");
        } else {
            // write contract
            const signature = await client.signTypedData({
                account,
                domain: {
                    name,
                    version,
                    chainId: Number(chainId),
                    verifyingContract
                },
                types: signTypes,
                primaryType: "SignedKeyRequest",
                message: {
                    requestFid: fid,
                    key: hex,
                    deadline
                }
            });

            const metadataStruct = {
                requestFid: fid,
                requestSigner: account,
                signature: signature,
                deadline: deadline,
            };
            const encodedStruct = encodeAbiParameters(
                metadataTypes,
                [metadataStruct],
            );

            addKey({
                address: keyGatewayAddress[CHAIN_ID],
                abi: gatewayAbi,
                functionName: "add",
                args: [
                    KEY_REGISTERED,
                    hex,
                    METADATA_SIGNATURE,
                    encodedStruct
                ]
            })
        }
    }}/>

    const gridPrototype = (key: `0x${string}`) => (
        <div className={"card m-2 bg-neutral text-neutral-content shadow-xl"}>
            <div className={"card-body"}>
                <h2 className={"text-base"}>{key}</h2>
            </div>
        </div>
    );

    const keyGrid = <>
        <div className={"w-max mx-auto my-8 text-xl font-bold"}>Assigned Keys:</div>
        <div className={"grid sm:grid-cols-1 grid-cols-3 m-4 w-max mx-auto"}>
            {registeredKeys.map((key) => gridPrototype(key))}
        </div>
        {!addPending && !addError &&
            <div className={"mx-auto w-max"}>
                <button className={"btn btn-outline w-max text-base font-bold"} onClick={() => {
                    const dialog: HTMLDialogElement = document.getElementById(modalId)! as HTMLDialogElement
                    dialog.showModal();
                }}>Add a new key
                </button>
            </div>
        }
        { addPending &&
            <div className={"mx-auto w-max"}>
                <div className={"m-8 loading-spinner loading"}/>
                <p className={"text-base mx-auto"}>Loading...</p>
            </div>
        }
    </>

    return (
        <>
            {keyGrid}
            {modal}
        </>
    );
};