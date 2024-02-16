import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Bundler
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000FC04c910A0b5feA33b03E0447AD0B0aA)
 */
export const bundlerAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_idGateway', internalType: 'address', type: 'address' },
      { name: '_keyGateway', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'CallFailed' },
  { type: 'error', inputs: [], name: 'Unauthorized' },
  {
    type: 'function',
    inputs: [],
    name: 'VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'idGateway',
    outputs: [
      { name: '', internalType: 'contract IIdGateway', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'keyGateway',
    outputs: [
      { name: '', internalType: 'contract IKeyGateway', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'extraStorage', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'price',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'registerParams',
        internalType: 'struct IBundler.RegistrationParams',
        type: 'tuple',
        components: [
          { name: 'to', internalType: 'address', type: 'address' },
          { name: 'recovery', internalType: 'address', type: 'address' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
          { name: 'sig', internalType: 'bytes', type: 'bytes' },
        ],
      },
      {
        name: 'signerParams',
        internalType: 'struct IBundler.SignerParams[]',
        type: 'tuple[]',
        components: [
          { name: 'keyType', internalType: 'uint32', type: 'uint32' },
          { name: 'key', internalType: 'bytes', type: 'bytes' },
          { name: 'metadataType', internalType: 'uint8', type: 'uint8' },
          { name: 'metadata', internalType: 'bytes', type: 'bytes' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
          { name: 'sig', internalType: 'bytes', type: 'bytes' },
        ],
      },
      { name: 'extraStorage', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'register',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

/**
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000FC04c910A0b5feA33b03E0447AD0B0aA)
 */
export const bundlerAddress = {
  10: '0x00000000FC04c910A0b5feA33b03E0447AD0B0aA',
} as const

/**
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000FC04c910A0b5feA33b03E0447AD0B0aA)
 */
export const bundlerConfig = {
  address: bundlerAddress,
  abi: bundlerAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IdGateway
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const idGatewayAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_idRegistry', internalType: 'address', type: 'address' },
      { name: '_storageRegistry', internalType: 'address', type: 'address' },
      { name: '_initialOwner', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'CallFailed' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  { type: 'error', inputs: [], name: 'InvalidSignature' },
  { type: 'error', inputs: [], name: 'OnlyGuardian' },
  { type: 'error', inputs: [], name: 'SignatureExpired' },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  { type: 'error', inputs: [], name: 'Unauthorized' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'guardian',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Add',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferStarted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Paused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'guardian',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Remove',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldStorageRegistry',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newStorageRegistry',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetStorageRegistry',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unpaused',
  },
  {
    type: 'function',
    inputs: [],
    name: 'REGISTER_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'guardian', internalType: 'address', type: 'address' }],
    name: 'addGuardian',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'domainSeparatorV4',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'guardian', internalType: 'address', type: 'address' }],
    name: 'guardians',
    outputs: [{ name: 'isGuardian', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'structHash', internalType: 'bytes32', type: 'bytes32' }],
    name: 'hashTypedDataV4',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'idRegistry',
    outputs: [
      { name: '', internalType: 'contract IIdRegistry', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pendingOwner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'extraStorage', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'price',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'price',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'recovery', internalType: 'address', type: 'address' }],
    name: 'register',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recovery', internalType: 'address', type: 'address' },
      { name: 'extraStorage', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'register',
    outputs: [
      { name: 'fid', internalType: 'uint256', type: 'uint256' },
      { name: 'overpayment', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'recovery', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'sig', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'registerFor',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'recovery', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'sig', internalType: 'bytes', type: 'bytes' },
      { name: 'extraStorage', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'registerFor',
    outputs: [
      { name: 'fid', internalType: 'uint256', type: 'uint256' },
      { name: 'overpayment', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'guardian', internalType: 'address', type: 'address' }],
    name: 'removeGuardian',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_storageRegistry', internalType: 'address', type: 'address' },
    ],
    name: 'setStorageRegistry',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'storageRegistry',
    outputs: [
      { name: '', internalType: 'contract IStorageRegistry', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'useNonce',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

/**
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const idGatewayAddress = {
  10: '0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69',
} as const

/**
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const idGatewayConfig = {
  address: idGatewayAddress,
  abi: idGatewayAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IdRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const idRegistryAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_migrator', internalType: 'address', type: 'address' },
      { name: '_initialOwner', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'AlreadyMigrated' },
  { type: 'error', inputs: [], name: 'GatewayFrozen' },
  { type: 'error', inputs: [], name: 'HasId' },
  { type: 'error', inputs: [], name: 'HasNoId' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  { type: 'error', inputs: [], name: 'InvalidSignature' },
  { type: 'error', inputs: [], name: 'OnlyGuardian' },
  { type: 'error', inputs: [], name: 'OnlyMigrator' },
  { type: 'error', inputs: [], name: 'PermissionRevoked' },
  { type: 'error', inputs: [], name: 'SignatureExpired' },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  { type: 'error', inputs: [], name: 'Unauthorized' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'guardian',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Add',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'fid', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'AdminReset',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'recovery',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ChangeRecoveryAddress',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'idGateway',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'FreezeIdGateway',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'migratedAt',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Migrated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferStarted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Paused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Recover',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'recovery',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Register',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'guardian',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Remove',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldCounter',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newCounter',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SetIdCounter',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldIdGateway',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newIdGateway',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetIdGateway',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldMigrator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newMigrator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetMigrator',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unpaused',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CHANGE_RECOVERY_ADDRESS_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'TRANSFER_AND_CHANGE_RECOVERY_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'TRANSFER_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'guardian', internalType: 'address', type: 'address' }],
    name: 'addGuardian',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'ids',
        internalType: 'struct IIdRegistry.BulkRegisterData[]',
        type: 'tuple[]',
        components: [
          { name: 'fid', internalType: 'uint24', type: 'uint24' },
          { name: 'custody', internalType: 'address', type: 'address' },
          { name: 'recovery', internalType: 'address', type: 'address' },
        ],
      },
    ],
    name: 'bulkRegisterIds',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'ids',
        internalType: 'struct IIdRegistry.BulkRegisterDefaultRecoveryData[]',
        type: 'tuple[]',
        components: [
          { name: 'fid', internalType: 'uint24', type: 'uint24' },
          { name: 'custody', internalType: 'address', type: 'address' },
        ],
      },
      { name: 'recovery', internalType: 'address', type: 'address' },
    ],
    name: 'bulkRegisterIdsWithDefaultRecovery',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'ids', internalType: 'uint24[]', type: 'uint24[]' }],
    name: 'bulkResetIds',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'recovery', internalType: 'address', type: 'address' }],
    name: 'changeRecoveryAddress',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'recovery', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'sig', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'changeRecoveryAddressFor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'fid', internalType: 'uint256', type: 'uint256' }],
    name: 'custodyOf',
    outputs: [{ name: 'custody', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'domainSeparatorV4',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'freezeIdGateway',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'gatewayFrozen',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'gracePeriod',
    outputs: [{ name: '', internalType: 'uint24', type: 'uint24' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'guardian', internalType: 'address', type: 'address' }],
    name: 'guardians',
    outputs: [{ name: 'isGuardian', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'structHash', internalType: 'bytes32', type: 'bytes32' }],
    name: 'hashTypedDataV4',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'idCounter',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'idGateway',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'idOf',
    outputs: [{ name: 'fid', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'isMigrated',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'migrate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'migratedAt',
    outputs: [{ name: '', internalType: 'uint40', type: 'uint40' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'migrator',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pendingOwner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'sig', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'recover',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'recoveryDeadline', internalType: 'uint256', type: 'uint256' },
      { name: 'recoverySig', internalType: 'bytes', type: 'bytes' },
      { name: 'toDeadline', internalType: 'uint256', type: 'uint256' },
      { name: 'toSig', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'recoverFor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'fid', internalType: 'uint256', type: 'uint256' }],
    name: 'recoveryOf',
    outputs: [{ name: 'recovery', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'recovery', internalType: 'address', type: 'address' },
    ],
    name: 'register',
    outputs: [{ name: 'fid', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'guardian', internalType: 'address', type: 'address' }],
    name: 'removeGuardian',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_counter', internalType: 'uint256', type: 'uint256' }],
    name: 'setIdCounter',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_idGateway', internalType: 'address', type: 'address' }],
    name: 'setIdGateway',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_migrator', internalType: 'address', type: 'address' }],
    name: 'setMigrator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'sig', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'transfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'recovery', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'sig', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'transferAndChangeRecovery',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'recovery', internalType: 'address', type: 'address' },
      { name: 'fromDeadline', internalType: 'uint256', type: 'uint256' },
      { name: 'fromSig', internalType: 'bytes', type: 'bytes' },
      { name: 'toDeadline', internalType: 'uint256', type: 'uint256' },
      { name: 'toSig', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'transferAndChangeRecoveryFor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'fromDeadline', internalType: 'uint256', type: 'uint256' },
      { name: 'fromSig', internalType: 'bytes', type: 'bytes' },
      { name: 'toDeadline', internalType: 'uint256', type: 'uint256' },
      { name: 'toSig', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'transferFor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'useNonce',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'custodyAddress', internalType: 'address', type: 'address' },
      { name: 'fid', internalType: 'uint256', type: 'uint256' },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
      { name: 'sig', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'verifyFidSignature',
    outputs: [{ name: 'isValid', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

/**
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const idRegistryAddress = {
  10: '0x00000000Fc6c5F01Fc30151999387Bb99A9f489b',
} as const

/**
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const idRegistryConfig = {
  address: idRegistryAddress,
  abi: idRegistryAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// KeyRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const keyRegistryAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_idRegistry', internalType: 'address', type: 'address' },
      { name: '_migrator', internalType: 'address', type: 'address' },
      { name: '_initialOwner', internalType: 'address', type: 'address' },
      { name: '_maxKeysPerFid', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'AlreadyMigrated' },
  { type: 'error', inputs: [], name: 'ExceedsMaximum' },
  { type: 'error', inputs: [], name: 'GatewayFrozen' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  { type: 'error', inputs: [], name: 'InvalidKeyType' },
  { type: 'error', inputs: [], name: 'InvalidMaxKeys' },
  { type: 'error', inputs: [], name: 'InvalidMetadata' },
  { type: 'error', inputs: [], name: 'InvalidMetadataType' },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  { type: 'error', inputs: [], name: 'InvalidSignature' },
  { type: 'error', inputs: [], name: 'InvalidState' },
  { type: 'error', inputs: [], name: 'OnlyGuardian' },
  { type: 'error', inputs: [], name: 'OnlyMigrator' },
  { type: 'error', inputs: [], name: 'PermissionRevoked' },
  { type: 'error', inputs: [], name: 'SignatureExpired' },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  { type: 'error', inputs: [], name: 'Unauthorized' },
  {
    type: 'error',
    inputs: [
      { name: 'keyType', internalType: 'uint32', type: 'uint32' },
      { name: 'metadataType', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'ValidatorNotFound',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'fid', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'keyType',
        internalType: 'uint32',
        type: 'uint32',
        indexed: true,
      },
      { name: 'key', internalType: 'bytes', type: 'bytes', indexed: true },
      {
        name: 'keyBytes',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
      {
        name: 'metadataType',
        internalType: 'uint8',
        type: 'uint8',
        indexed: false,
      },
      {
        name: 'metadata',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'Add',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'guardian',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Add',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'fid', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'key', internalType: 'bytes', type: 'bytes', indexed: true },
      {
        name: 'keyBytes',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'AdminReset',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'keyGateway',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'FreezeKeyGateway',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'migratedAt',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Migrated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferStarted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Paused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'fid', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'key', internalType: 'bytes', type: 'bytes', indexed: true },
      {
        name: 'keyBytes',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'Remove',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'guardian',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Remove',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldIdRegistry',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newIdRegistry',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetIdRegistry',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldKeyGateway',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newKeyGateway',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetKeyGateway',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldMax',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newMax',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SetMaxKeysPerFid',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldMigrator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newMigrator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetMigrator',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'keyType',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'metadataType',
        internalType: 'uint8',
        type: 'uint8',
        indexed: false,
      },
      {
        name: 'oldValidator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newValidator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetValidator',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unpaused',
  },
  {
    type: 'function',
    inputs: [],
    name: 'REMOVE_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'fidOwner', internalType: 'address', type: 'address' },
      { name: 'keyType', internalType: 'uint32', type: 'uint32' },
      { name: 'key', internalType: 'bytes', type: 'bytes' },
      { name: 'metadataType', internalType: 'uint8', type: 'uint8' },
      { name: 'metadata', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'add',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'guardian', internalType: 'address', type: 'address' }],
    name: 'addGuardian',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'items',
        internalType: 'struct IKeyRegistry.BulkAddData[]',
        type: 'tuple[]',
        components: [
          { name: 'fid', internalType: 'uint256', type: 'uint256' },
          {
            name: 'keys',
            internalType: 'struct IKeyRegistry.BulkAddKey[]',
            type: 'tuple[]',
            components: [
              { name: 'key', internalType: 'bytes', type: 'bytes' },
              { name: 'metadata', internalType: 'bytes', type: 'bytes' },
            ],
          },
        ],
      },
    ],
    name: 'bulkAddKeysForMigration',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'items',
        internalType: 'struct IKeyRegistry.BulkResetData[]',
        type: 'tuple[]',
        components: [
          { name: 'fid', internalType: 'uint256', type: 'uint256' },
          { name: 'keys', internalType: 'bytes[]', type: 'bytes[]' },
        ],
      },
    ],
    name: 'bulkResetKeysForMigration',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'domainSeparatorV4',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'freezeKeyGateway',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'gatewayFrozen',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'gracePeriod',
    outputs: [{ name: '', internalType: 'uint24', type: 'uint24' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'guardian', internalType: 'address', type: 'address' }],
    name: 'guardians',
    outputs: [{ name: 'isGuardian', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'structHash', internalType: 'bytes32', type: 'bytes32' }],
    name: 'hashTypedDataV4',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'idRegistry',
    outputs: [
      { name: '', internalType: 'contract IdRegistryLike', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'isMigrated',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'fid', internalType: 'uint256', type: 'uint256' },
      {
        name: 'state',
        internalType: 'enum IKeyRegistry.KeyState',
        type: 'uint8',
      },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'keyAt',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'fid', internalType: 'uint256', type: 'uint256' },
      { name: 'key', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'keyDataOf',
    outputs: [
      {
        name: '',
        internalType: 'struct IKeyRegistry.KeyData',
        type: 'tuple',
        components: [
          {
            name: 'state',
            internalType: 'enum IKeyRegistry.KeyState',
            type: 'uint8',
          },
          { name: 'keyType', internalType: 'uint32', type: 'uint32' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'keyGateway',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'fid', internalType: 'uint256', type: 'uint256' },
      { name: 'key', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'keys',
    outputs: [
      {
        name: 'state',
        internalType: 'enum IKeyRegistry.KeyState',
        type: 'uint8',
      },
      { name: 'keyType', internalType: 'uint32', type: 'uint32' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'fid', internalType: 'uint256', type: 'uint256' },
      {
        name: 'state',
        internalType: 'enum IKeyRegistry.KeyState',
        type: 'uint8',
      },
    ],
    name: 'keysOf',
    outputs: [{ name: '', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'fid', internalType: 'uint256', type: 'uint256' },
      {
        name: 'state',
        internalType: 'enum IKeyRegistry.KeyState',
        type: 'uint8',
      },
      { name: 'startIdx', internalType: 'uint256', type: 'uint256' },
      { name: 'batchSize', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'keysOf',
    outputs: [
      { name: 'page', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'nextIdx', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'maxKeysPerFid',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'migrate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'migratedAt',
    outputs: [{ name: '', internalType: 'uint40', type: 'uint40' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'migrator',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pendingOwner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'key', internalType: 'bytes', type: 'bytes' }],
    name: 'remove',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'fidOwner', internalType: 'address', type: 'address' },
      { name: 'key', internalType: 'bytes', type: 'bytes' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'sig', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'removeFor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'guardian', internalType: 'address', type: 'address' }],
    name: 'removeGuardian',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_idRegistry', internalType: 'address', type: 'address' }],
    name: 'setIdRegistry',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_keyGateway', internalType: 'address', type: 'address' }],
    name: 'setKeyGateway',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_maxKeysPerFid', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setMaxKeysPerFid',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_migrator', internalType: 'address', type: 'address' }],
    name: 'setMigrator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'keyType', internalType: 'uint32', type: 'uint32' },
      { name: 'metadataType', internalType: 'uint8', type: 'uint8' },
      {
        name: 'validator',
        internalType: 'contract IMetadataValidator',
        type: 'address',
      },
    ],
    name: 'setValidator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'fid', internalType: 'uint256', type: 'uint256' },
      {
        name: 'state',
        internalType: 'enum IKeyRegistry.KeyState',
        type: 'uint8',
      },
    ],
    name: 'totalKeys',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'useNonce',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'keyType', internalType: 'uint32', type: 'uint32' },
      { name: 'metadataType', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'validators',
    outputs: [
      {
        name: 'validator',
        internalType: 'contract IMetadataValidator',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
] as const

/**
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const keyRegistryAddress = {
  10: '0x00000000Fc1237824fb747aBDE0FF18990E59b7e',
} as const

/**
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const keyRegistryConfig = {
  address: keyRegistryAddress,
  abi: keyRegistryAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// StorageRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const storageRegistryAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: '_priceFeed',
        internalType: 'contract AggregatorV3Interface',
        type: 'address',
      },
      {
        name: '_uptimeFeed',
        internalType: 'contract AggregatorV3Interface',
        type: 'address',
      },
      {
        name: '_initialUsdUnitPrice',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: '_initialMaxUnits', internalType: 'uint256', type: 'uint256' },
      { name: '_initialVault', internalType: 'address', type: 'address' },
      { name: '_initialRoleAdmin', internalType: 'address', type: 'address' },
      { name: '_initialOwner', internalType: 'address', type: 'address' },
      { name: '_initialOperator', internalType: 'address', type: 'address' },
      { name: '_initialTreasurer', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'CallFailed' },
  { type: 'error', inputs: [], name: 'ContractDeprecated' },
  { type: 'error', inputs: [], name: 'ExceedsCapacity' },
  { type: 'error', inputs: [], name: 'GracePeriodNotOver' },
  { type: 'error', inputs: [], name: 'IncompleteRound' },
  { type: 'error', inputs: [], name: 'InvalidAddress' },
  { type: 'error', inputs: [], name: 'InvalidAmount' },
  { type: 'error', inputs: [], name: 'InvalidBatchInput' },
  { type: 'error', inputs: [], name: 'InvalidDeprecationTimestamp' },
  { type: 'error', inputs: [], name: 'InvalidFixedPrice' },
  { type: 'error', inputs: [], name: 'InvalidMaxAnswer' },
  { type: 'error', inputs: [], name: 'InvalidMinAnswer' },
  { type: 'error', inputs: [], name: 'InvalidPayment' },
  { type: 'error', inputs: [], name: 'InvalidPrice' },
  { type: 'error', inputs: [], name: 'InvalidRangeInput' },
  { type: 'error', inputs: [], name: 'InvalidRoundTimestamp' },
  { type: 'error', inputs: [], name: 'NotOperator' },
  { type: 'error', inputs: [], name: 'NotOwner' },
  { type: 'error', inputs: [], name: 'NotTreasurer' },
  { type: 'error', inputs: [], name: 'PriceOutOfBounds' },
  { type: 'error', inputs: [], name: 'SequencerDown' },
  { type: 'error', inputs: [], name: 'StaleAnswer' },
  { type: 'error', inputs: [], name: 'Unauthorized' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Paused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'payer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'fid', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'units',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Rent',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldDuration',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newDuration',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SetCacheDuration',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldTimestamp',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newTimestamp',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SetDeprecationTimestamp',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldPrice',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newPrice',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SetFixedEthUsdPrice',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldPeriod',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newPeriod',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SetGracePeriod',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldAge',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newAge',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SetMaxAge',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldPrice',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newPrice',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SetMaxAnswer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldMax',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newMax',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SetMaxUnits',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldPrice',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newPrice',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SetMinAnswer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldPrice',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newPrice',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SetPrice',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldFeed',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newFeed',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetPriceFeed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldFeed',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newFeed',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetUptimeFeed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldVault',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newVault',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetVault',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unpaused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Withdraw',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'fids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'units', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'batchCredit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'fids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'units', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'batchRent',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'start', internalType: 'uint256', type: 'uint256' },
      { name: 'end', internalType: 'uint256', type: 'uint256' },
      { name: 'units', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'continuousCredit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'fid', internalType: 'uint256', type: 'uint256' },
      { name: 'units', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'credit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'deprecationTimestamp',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'ethUsdPrice',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'fixedEthUsdPrice',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getRoleMember',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleMemberCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lastPriceFeedUpdateBlock',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lastPriceFeedUpdateTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'maxUnits',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'prevEthUsdPrice',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'units', internalType: 'uint256', type: 'uint256' }],
    name: 'price',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'priceFeed',
    outputs: [
      {
        name: '',
        internalType: 'contract AggregatorV3Interface',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'priceFeedCacheDuration',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'priceFeedMaxAge',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'priceFeedMaxAnswer',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'priceFeedMinAnswer',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'refreshPrice',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'fid', internalType: 'uint256', type: 'uint256' },
      { name: 'units', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'rent',
    outputs: [
      { name: 'overpayment', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rentedUnits',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'duration', internalType: 'uint256', type: 'uint256' }],
    name: 'setCacheDuration',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
    name: 'setDeprecationTimestamp',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'fixedPrice', internalType: 'uint256', type: 'uint256' }],
    name: 'setFixedEthUsdPrice',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'period', internalType: 'uint256', type: 'uint256' }],
    name: 'setGracePeriod',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'age', internalType: 'uint256', type: 'uint256' }],
    name: 'setMaxAge',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'maxPrice', internalType: 'uint256', type: 'uint256' }],
    name: 'setMaxAnswer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'max', internalType: 'uint256', type: 'uint256' }],
    name: 'setMaxUnits',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'minPrice', internalType: 'uint256', type: 'uint256' }],
    name: 'setMinAnswer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'usdPrice', internalType: 'uint256', type: 'uint256' }],
    name: 'setPrice',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'feed',
        internalType: 'contract AggregatorV3Interface',
        type: 'address',
      },
    ],
    name: 'setPriceFeed',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'feed',
        internalType: 'contract AggregatorV3Interface',
        type: 'address',
      },
    ],
    name: 'setUptimeFeed',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'vaultAddr', internalType: 'address', type: 'address' }],
    name: 'setVault',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unitPrice',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'uptimeFeed',
    outputs: [
      {
        name: '',
        internalType: 'contract AggregatorV3Interface',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'uptimeFeedGracePeriod',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'usdUnitPrice',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'vault',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const storageRegistryAddress = {
  10: '0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D',
} as const

/**
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const storageRegistryConfig = {
  address: storageRegistryAddress,
  abi: storageRegistryAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bundlerAbi}__
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000FC04c910A0b5feA33b03E0447AD0B0aA)
 */
export const useReadBundler = /*#__PURE__*/ createUseReadContract({
  abi: bundlerAbi,
  address: bundlerAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bundlerAbi}__ and `functionName` set to `"VERSION"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000FC04c910A0b5feA33b03E0447AD0B0aA)
 */
export const useReadBundlerVersion = /*#__PURE__*/ createUseReadContract({
  abi: bundlerAbi,
  address: bundlerAddress,
  functionName: 'VERSION',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bundlerAbi}__ and `functionName` set to `"idGateway"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000FC04c910A0b5feA33b03E0447AD0B0aA)
 */
export const useReadBundlerIdGateway = /*#__PURE__*/ createUseReadContract({
  abi: bundlerAbi,
  address: bundlerAddress,
  functionName: 'idGateway',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bundlerAbi}__ and `functionName` set to `"keyGateway"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000FC04c910A0b5feA33b03E0447AD0B0aA)
 */
export const useReadBundlerKeyGateway = /*#__PURE__*/ createUseReadContract({
  abi: bundlerAbi,
  address: bundlerAddress,
  functionName: 'keyGateway',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bundlerAbi}__ and `functionName` set to `"price"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000FC04c910A0b5feA33b03E0447AD0B0aA)
 */
export const useReadBundlerPrice = /*#__PURE__*/ createUseReadContract({
  abi: bundlerAbi,
  address: bundlerAddress,
  functionName: 'price',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bundlerAbi}__
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000FC04c910A0b5feA33b03E0447AD0B0aA)
 */
export const useWriteBundler = /*#__PURE__*/ createUseWriteContract({
  abi: bundlerAbi,
  address: bundlerAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bundlerAbi}__ and `functionName` set to `"register"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000FC04c910A0b5feA33b03E0447AD0B0aA)
 */
export const useWriteBundlerRegister = /*#__PURE__*/ createUseWriteContract({
  abi: bundlerAbi,
  address: bundlerAddress,
  functionName: 'register',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bundlerAbi}__
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000FC04c910A0b5feA33b03E0447AD0B0aA)
 */
export const useSimulateBundler = /*#__PURE__*/ createUseSimulateContract({
  abi: bundlerAbi,
  address: bundlerAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bundlerAbi}__ and `functionName` set to `"register"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000FC04c910A0b5feA33b03E0447AD0B0aA)
 */
export const useSimulateBundlerRegister =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bundlerAbi,
    address: bundlerAddress,
    functionName: 'register',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idGatewayAbi}__
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useReadIdGateway = /*#__PURE__*/ createUseReadContract({
  abi: idGatewayAbi,
  address: idGatewayAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"REGISTER_TYPEHASH"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useReadIdGatewayRegisterTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: idGatewayAbi,
    address: idGatewayAddress,
    functionName: 'REGISTER_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"VERSION"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useReadIdGatewayVersion = /*#__PURE__*/ createUseReadContract({
  abi: idGatewayAbi,
  address: idGatewayAddress,
  functionName: 'VERSION',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"domainSeparatorV4"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useReadIdGatewayDomainSeparatorV4 =
  /*#__PURE__*/ createUseReadContract({
    abi: idGatewayAbi,
    address: idGatewayAddress,
    functionName: 'domainSeparatorV4',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"eip712Domain"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useReadIdGatewayEip712Domain = /*#__PURE__*/ createUseReadContract(
  {
    abi: idGatewayAbi,
    address: idGatewayAddress,
    functionName: 'eip712Domain',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"guardians"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useReadIdGatewayGuardians = /*#__PURE__*/ createUseReadContract({
  abi: idGatewayAbi,
  address: idGatewayAddress,
  functionName: 'guardians',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"hashTypedDataV4"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useReadIdGatewayHashTypedDataV4 =
  /*#__PURE__*/ createUseReadContract({
    abi: idGatewayAbi,
    address: idGatewayAddress,
    functionName: 'hashTypedDataV4',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"idRegistry"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useReadIdGatewayIdRegistry = /*#__PURE__*/ createUseReadContract({
  abi: idGatewayAbi,
  address: idGatewayAddress,
  functionName: 'idRegistry',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"nonces"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useReadIdGatewayNonces = /*#__PURE__*/ createUseReadContract({
  abi: idGatewayAbi,
  address: idGatewayAddress,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useReadIdGatewayOwner = /*#__PURE__*/ createUseReadContract({
  abi: idGatewayAbi,
  address: idGatewayAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"paused"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useReadIdGatewayPaused = /*#__PURE__*/ createUseReadContract({
  abi: idGatewayAbi,
  address: idGatewayAddress,
  functionName: 'paused',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"pendingOwner"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useReadIdGatewayPendingOwner = /*#__PURE__*/ createUseReadContract(
  {
    abi: idGatewayAbi,
    address: idGatewayAddress,
    functionName: 'pendingOwner',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"price"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useReadIdGatewayPrice = /*#__PURE__*/ createUseReadContract({
  abi: idGatewayAbi,
  address: idGatewayAddress,
  functionName: 'price',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"storageRegistry"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useReadIdGatewayStorageRegistry =
  /*#__PURE__*/ createUseReadContract({
    abi: idGatewayAbi,
    address: idGatewayAddress,
    functionName: 'storageRegistry',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idGatewayAbi}__
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useWriteIdGateway = /*#__PURE__*/ createUseWriteContract({
  abi: idGatewayAbi,
  address: idGatewayAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"acceptOwnership"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useWriteIdGatewayAcceptOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: idGatewayAbi,
    address: idGatewayAddress,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"addGuardian"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useWriteIdGatewayAddGuardian =
  /*#__PURE__*/ createUseWriteContract({
    abi: idGatewayAbi,
    address: idGatewayAddress,
    functionName: 'addGuardian',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"pause"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useWriteIdGatewayPause = /*#__PURE__*/ createUseWriteContract({
  abi: idGatewayAbi,
  address: idGatewayAddress,
  functionName: 'pause',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"register"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useWriteIdGatewayRegister = /*#__PURE__*/ createUseWriteContract({
  abi: idGatewayAbi,
  address: idGatewayAddress,
  functionName: 'register',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"registerFor"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useWriteIdGatewayRegisterFor =
  /*#__PURE__*/ createUseWriteContract({
    abi: idGatewayAbi,
    address: idGatewayAddress,
    functionName: 'registerFor',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"removeGuardian"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useWriteIdGatewayRemoveGuardian =
  /*#__PURE__*/ createUseWriteContract({
    abi: idGatewayAbi,
    address: idGatewayAddress,
    functionName: 'removeGuardian',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useWriteIdGatewayRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: idGatewayAbi,
    address: idGatewayAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"setStorageRegistry"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useWriteIdGatewaySetStorageRegistry =
  /*#__PURE__*/ createUseWriteContract({
    abi: idGatewayAbi,
    address: idGatewayAddress,
    functionName: 'setStorageRegistry',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useWriteIdGatewayTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: idGatewayAbi,
    address: idGatewayAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"unpause"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useWriteIdGatewayUnpause = /*#__PURE__*/ createUseWriteContract({
  abi: idGatewayAbi,
  address: idGatewayAddress,
  functionName: 'unpause',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"useNonce"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useWriteIdGatewayUseNonce = /*#__PURE__*/ createUseWriteContract({
  abi: idGatewayAbi,
  address: idGatewayAddress,
  functionName: 'useNonce',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idGatewayAbi}__
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useSimulateIdGateway = /*#__PURE__*/ createUseSimulateContract({
  abi: idGatewayAbi,
  address: idGatewayAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"acceptOwnership"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useSimulateIdGatewayAcceptOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idGatewayAbi,
    address: idGatewayAddress,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"addGuardian"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useSimulateIdGatewayAddGuardian =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idGatewayAbi,
    address: idGatewayAddress,
    functionName: 'addGuardian',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"pause"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useSimulateIdGatewayPause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idGatewayAbi,
    address: idGatewayAddress,
    functionName: 'pause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"register"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useSimulateIdGatewayRegister =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idGatewayAbi,
    address: idGatewayAddress,
    functionName: 'register',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"registerFor"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useSimulateIdGatewayRegisterFor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idGatewayAbi,
    address: idGatewayAddress,
    functionName: 'registerFor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"removeGuardian"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useSimulateIdGatewayRemoveGuardian =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idGatewayAbi,
    address: idGatewayAddress,
    functionName: 'removeGuardian',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useSimulateIdGatewayRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idGatewayAbi,
    address: idGatewayAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"setStorageRegistry"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useSimulateIdGatewaySetStorageRegistry =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idGatewayAbi,
    address: idGatewayAddress,
    functionName: 'setStorageRegistry',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useSimulateIdGatewayTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idGatewayAbi,
    address: idGatewayAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"unpause"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useSimulateIdGatewayUnpause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idGatewayAbi,
    address: idGatewayAddress,
    functionName: 'unpause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idGatewayAbi}__ and `functionName` set to `"useNonce"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useSimulateIdGatewayUseNonce =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idGatewayAbi,
    address: idGatewayAddress,
    functionName: 'useNonce',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link idGatewayAbi}__
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useWatchIdGatewayEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: idGatewayAbi, address: idGatewayAddress },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link idGatewayAbi}__ and `eventName` set to `"Add"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useWatchIdGatewayAddEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: idGatewayAbi,
    address: idGatewayAddress,
    eventName: 'Add',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link idGatewayAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useWatchIdGatewayEip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: idGatewayAbi,
    address: idGatewayAddress,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link idGatewayAbi}__ and `eventName` set to `"OwnershipTransferStarted"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useWatchIdGatewayOwnershipTransferStartedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: idGatewayAbi,
    address: idGatewayAddress,
    eventName: 'OwnershipTransferStarted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link idGatewayAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useWatchIdGatewayOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: idGatewayAbi,
    address: idGatewayAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link idGatewayAbi}__ and `eventName` set to `"Paused"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useWatchIdGatewayPausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: idGatewayAbi,
    address: idGatewayAddress,
    eventName: 'Paused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link idGatewayAbi}__ and `eventName` set to `"Remove"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useWatchIdGatewayRemoveEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: idGatewayAbi,
    address: idGatewayAddress,
    eventName: 'Remove',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link idGatewayAbi}__ and `eventName` set to `"SetStorageRegistry"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useWatchIdGatewaySetStorageRegistryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: idGatewayAbi,
    address: idGatewayAddress,
    eventName: 'SetStorageRegistry',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link idGatewayAbi}__ and `eventName` set to `"Unpaused"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69)
 */
export const useWatchIdGatewayUnpausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: idGatewayAbi,
    address: idGatewayAddress,
    eventName: 'Unpaused',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idRegistryAbi}__
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useReadIdRegistry = /*#__PURE__*/ createUseReadContract({
  abi: idRegistryAbi,
  address: idRegistryAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"CHANGE_RECOVERY_ADDRESS_TYPEHASH"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useReadIdRegistryChangeRecoveryAddressTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'CHANGE_RECOVERY_ADDRESS_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"TRANSFER_AND_CHANGE_RECOVERY_TYPEHASH"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useReadIdRegistryTransferAndChangeRecoveryTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'TRANSFER_AND_CHANGE_RECOVERY_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"TRANSFER_TYPEHASH"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useReadIdRegistryTransferTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'TRANSFER_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"VERSION"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useReadIdRegistryVersion = /*#__PURE__*/ createUseReadContract({
  abi: idRegistryAbi,
  address: idRegistryAddress,
  functionName: 'VERSION',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"custodyOf"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useReadIdRegistryCustodyOf = /*#__PURE__*/ createUseReadContract({
  abi: idRegistryAbi,
  address: idRegistryAddress,
  functionName: 'custodyOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"domainSeparatorV4"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useReadIdRegistryDomainSeparatorV4 =
  /*#__PURE__*/ createUseReadContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'domainSeparatorV4',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"eip712Domain"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useReadIdRegistryEip712Domain =
  /*#__PURE__*/ createUseReadContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'eip712Domain',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"gatewayFrozen"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useReadIdRegistryGatewayFrozen =
  /*#__PURE__*/ createUseReadContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'gatewayFrozen',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"gracePeriod"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useReadIdRegistryGracePeriod = /*#__PURE__*/ createUseReadContract(
  {
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'gracePeriod',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"guardians"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useReadIdRegistryGuardians = /*#__PURE__*/ createUseReadContract({
  abi: idRegistryAbi,
  address: idRegistryAddress,
  functionName: 'guardians',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"hashTypedDataV4"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useReadIdRegistryHashTypedDataV4 =
  /*#__PURE__*/ createUseReadContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'hashTypedDataV4',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"idCounter"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useReadIdRegistryIdCounter = /*#__PURE__*/ createUseReadContract({
  abi: idRegistryAbi,
  address: idRegistryAddress,
  functionName: 'idCounter',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"idGateway"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useReadIdRegistryIdGateway = /*#__PURE__*/ createUseReadContract({
  abi: idRegistryAbi,
  address: idRegistryAddress,
  functionName: 'idGateway',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"idOf"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useReadIdRegistryIdOf = /*#__PURE__*/ createUseReadContract({
  abi: idRegistryAbi,
  address: idRegistryAddress,
  functionName: 'idOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"isMigrated"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useReadIdRegistryIsMigrated = /*#__PURE__*/ createUseReadContract({
  abi: idRegistryAbi,
  address: idRegistryAddress,
  functionName: 'isMigrated',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"migratedAt"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useReadIdRegistryMigratedAt = /*#__PURE__*/ createUseReadContract({
  abi: idRegistryAbi,
  address: idRegistryAddress,
  functionName: 'migratedAt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"migrator"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useReadIdRegistryMigrator = /*#__PURE__*/ createUseReadContract({
  abi: idRegistryAbi,
  address: idRegistryAddress,
  functionName: 'migrator',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useReadIdRegistryName = /*#__PURE__*/ createUseReadContract({
  abi: idRegistryAbi,
  address: idRegistryAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"nonces"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useReadIdRegistryNonces = /*#__PURE__*/ createUseReadContract({
  abi: idRegistryAbi,
  address: idRegistryAddress,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useReadIdRegistryOwner = /*#__PURE__*/ createUseReadContract({
  abi: idRegistryAbi,
  address: idRegistryAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"paused"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useReadIdRegistryPaused = /*#__PURE__*/ createUseReadContract({
  abi: idRegistryAbi,
  address: idRegistryAddress,
  functionName: 'paused',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"pendingOwner"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useReadIdRegistryPendingOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'pendingOwner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"recoveryOf"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useReadIdRegistryRecoveryOf = /*#__PURE__*/ createUseReadContract({
  abi: idRegistryAbi,
  address: idRegistryAddress,
  functionName: 'recoveryOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"verifyFidSignature"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useReadIdRegistryVerifyFidSignature =
  /*#__PURE__*/ createUseReadContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'verifyFidSignature',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idRegistryAbi}__
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWriteIdRegistry = /*#__PURE__*/ createUseWriteContract({
  abi: idRegistryAbi,
  address: idRegistryAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"acceptOwnership"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWriteIdRegistryAcceptOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"addGuardian"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWriteIdRegistryAddGuardian =
  /*#__PURE__*/ createUseWriteContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'addGuardian',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"bulkRegisterIds"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWriteIdRegistryBulkRegisterIds =
  /*#__PURE__*/ createUseWriteContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'bulkRegisterIds',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"bulkRegisterIdsWithDefaultRecovery"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWriteIdRegistryBulkRegisterIdsWithDefaultRecovery =
  /*#__PURE__*/ createUseWriteContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'bulkRegisterIdsWithDefaultRecovery',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"bulkResetIds"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWriteIdRegistryBulkResetIds =
  /*#__PURE__*/ createUseWriteContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'bulkResetIds',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"changeRecoveryAddress"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWriteIdRegistryChangeRecoveryAddress =
  /*#__PURE__*/ createUseWriteContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'changeRecoveryAddress',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"changeRecoveryAddressFor"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWriteIdRegistryChangeRecoveryAddressFor =
  /*#__PURE__*/ createUseWriteContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'changeRecoveryAddressFor',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"freezeIdGateway"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWriteIdRegistryFreezeIdGateway =
  /*#__PURE__*/ createUseWriteContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'freezeIdGateway',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"migrate"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWriteIdRegistryMigrate = /*#__PURE__*/ createUseWriteContract({
  abi: idRegistryAbi,
  address: idRegistryAddress,
  functionName: 'migrate',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"pause"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWriteIdRegistryPause = /*#__PURE__*/ createUseWriteContract({
  abi: idRegistryAbi,
  address: idRegistryAddress,
  functionName: 'pause',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"recover"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWriteIdRegistryRecover = /*#__PURE__*/ createUseWriteContract({
  abi: idRegistryAbi,
  address: idRegistryAddress,
  functionName: 'recover',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"recoverFor"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWriteIdRegistryRecoverFor =
  /*#__PURE__*/ createUseWriteContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'recoverFor',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"register"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWriteIdRegistryRegister = /*#__PURE__*/ createUseWriteContract({
  abi: idRegistryAbi,
  address: idRegistryAddress,
  functionName: 'register',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"removeGuardian"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWriteIdRegistryRemoveGuardian =
  /*#__PURE__*/ createUseWriteContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'removeGuardian',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWriteIdRegistryRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"setIdCounter"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWriteIdRegistrySetIdCounter =
  /*#__PURE__*/ createUseWriteContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'setIdCounter',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"setIdGateway"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWriteIdRegistrySetIdGateway =
  /*#__PURE__*/ createUseWriteContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'setIdGateway',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"setMigrator"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWriteIdRegistrySetMigrator =
  /*#__PURE__*/ createUseWriteContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'setMigrator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWriteIdRegistryTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: idRegistryAbi,
  address: idRegistryAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"transferAndChangeRecovery"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWriteIdRegistryTransferAndChangeRecovery =
  /*#__PURE__*/ createUseWriteContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'transferAndChangeRecovery',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"transferAndChangeRecoveryFor"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWriteIdRegistryTransferAndChangeRecoveryFor =
  /*#__PURE__*/ createUseWriteContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'transferAndChangeRecoveryFor',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"transferFor"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWriteIdRegistryTransferFor =
  /*#__PURE__*/ createUseWriteContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'transferFor',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWriteIdRegistryTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"unpause"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWriteIdRegistryUnpause = /*#__PURE__*/ createUseWriteContract({
  abi: idRegistryAbi,
  address: idRegistryAddress,
  functionName: 'unpause',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"useNonce"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWriteIdRegistryUseNonce = /*#__PURE__*/ createUseWriteContract({
  abi: idRegistryAbi,
  address: idRegistryAddress,
  functionName: 'useNonce',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idRegistryAbi}__
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useSimulateIdRegistry = /*#__PURE__*/ createUseSimulateContract({
  abi: idRegistryAbi,
  address: idRegistryAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"acceptOwnership"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useSimulateIdRegistryAcceptOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"addGuardian"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useSimulateIdRegistryAddGuardian =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'addGuardian',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"bulkRegisterIds"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useSimulateIdRegistryBulkRegisterIds =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'bulkRegisterIds',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"bulkRegisterIdsWithDefaultRecovery"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useSimulateIdRegistryBulkRegisterIdsWithDefaultRecovery =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'bulkRegisterIdsWithDefaultRecovery',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"bulkResetIds"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useSimulateIdRegistryBulkResetIds =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'bulkResetIds',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"changeRecoveryAddress"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useSimulateIdRegistryChangeRecoveryAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'changeRecoveryAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"changeRecoveryAddressFor"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useSimulateIdRegistryChangeRecoveryAddressFor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'changeRecoveryAddressFor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"freezeIdGateway"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useSimulateIdRegistryFreezeIdGateway =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'freezeIdGateway',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"migrate"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useSimulateIdRegistryMigrate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'migrate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"pause"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useSimulateIdRegistryPause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'pause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"recover"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useSimulateIdRegistryRecover =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'recover',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"recoverFor"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useSimulateIdRegistryRecoverFor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'recoverFor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"register"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useSimulateIdRegistryRegister =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'register',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"removeGuardian"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useSimulateIdRegistryRemoveGuardian =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'removeGuardian',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useSimulateIdRegistryRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"setIdCounter"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useSimulateIdRegistrySetIdCounter =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'setIdCounter',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"setIdGateway"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useSimulateIdRegistrySetIdGateway =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'setIdGateway',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"setMigrator"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useSimulateIdRegistrySetMigrator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'setMigrator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useSimulateIdRegistryTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"transferAndChangeRecovery"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useSimulateIdRegistryTransferAndChangeRecovery =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'transferAndChangeRecovery',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"transferAndChangeRecoveryFor"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useSimulateIdRegistryTransferAndChangeRecoveryFor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'transferAndChangeRecoveryFor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"transferFor"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useSimulateIdRegistryTransferFor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'transferFor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useSimulateIdRegistryTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"unpause"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useSimulateIdRegistryUnpause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'unpause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link idRegistryAbi}__ and `functionName` set to `"useNonce"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useSimulateIdRegistryUseNonce =
  /*#__PURE__*/ createUseSimulateContract({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    functionName: 'useNonce',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link idRegistryAbi}__
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWatchIdRegistryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: idRegistryAbi,
    address: idRegistryAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link idRegistryAbi}__ and `eventName` set to `"Add"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWatchIdRegistryAddEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    eventName: 'Add',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link idRegistryAbi}__ and `eventName` set to `"AdminReset"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWatchIdRegistryAdminResetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    eventName: 'AdminReset',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link idRegistryAbi}__ and `eventName` set to `"ChangeRecoveryAddress"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWatchIdRegistryChangeRecoveryAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    eventName: 'ChangeRecoveryAddress',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link idRegistryAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWatchIdRegistryEip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link idRegistryAbi}__ and `eventName` set to `"FreezeIdGateway"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWatchIdRegistryFreezeIdGatewayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    eventName: 'FreezeIdGateway',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link idRegistryAbi}__ and `eventName` set to `"Migrated"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWatchIdRegistryMigratedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    eventName: 'Migrated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link idRegistryAbi}__ and `eventName` set to `"OwnershipTransferStarted"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWatchIdRegistryOwnershipTransferStartedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    eventName: 'OwnershipTransferStarted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link idRegistryAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWatchIdRegistryOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link idRegistryAbi}__ and `eventName` set to `"Paused"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWatchIdRegistryPausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    eventName: 'Paused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link idRegistryAbi}__ and `eventName` set to `"Recover"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWatchIdRegistryRecoverEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    eventName: 'Recover',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link idRegistryAbi}__ and `eventName` set to `"Register"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWatchIdRegistryRegisterEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    eventName: 'Register',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link idRegistryAbi}__ and `eventName` set to `"Remove"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWatchIdRegistryRemoveEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    eventName: 'Remove',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link idRegistryAbi}__ and `eventName` set to `"SetIdCounter"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWatchIdRegistrySetIdCounterEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    eventName: 'SetIdCounter',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link idRegistryAbi}__ and `eventName` set to `"SetIdGateway"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWatchIdRegistrySetIdGatewayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    eventName: 'SetIdGateway',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link idRegistryAbi}__ and `eventName` set to `"SetMigrator"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWatchIdRegistrySetMigratorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    eventName: 'SetMigrator',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link idRegistryAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWatchIdRegistryTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link idRegistryAbi}__ and `eventName` set to `"Unpaused"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc6c5F01Fc30151999387Bb99A9f489b)
 */
export const useWatchIdRegistryUnpausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: idRegistryAbi,
    address: idRegistryAddress,
    eventName: 'Unpaused',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link keyRegistryAbi}__
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useReadKeyRegistry = /*#__PURE__*/ createUseReadContract({
  abi: keyRegistryAbi,
  address: keyRegistryAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"REMOVE_TYPEHASH"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useReadKeyRegistryRemoveTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'REMOVE_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"VERSION"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useReadKeyRegistryVersion = /*#__PURE__*/ createUseReadContract({
  abi: keyRegistryAbi,
  address: keyRegistryAddress,
  functionName: 'VERSION',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"domainSeparatorV4"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useReadKeyRegistryDomainSeparatorV4 =
  /*#__PURE__*/ createUseReadContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'domainSeparatorV4',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"eip712Domain"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useReadKeyRegistryEip712Domain =
  /*#__PURE__*/ createUseReadContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'eip712Domain',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"gatewayFrozen"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useReadKeyRegistryGatewayFrozen =
  /*#__PURE__*/ createUseReadContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'gatewayFrozen',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"gracePeriod"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useReadKeyRegistryGracePeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'gracePeriod',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"guardians"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useReadKeyRegistryGuardians = /*#__PURE__*/ createUseReadContract({
  abi: keyRegistryAbi,
  address: keyRegistryAddress,
  functionName: 'guardians',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"hashTypedDataV4"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useReadKeyRegistryHashTypedDataV4 =
  /*#__PURE__*/ createUseReadContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'hashTypedDataV4',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"idRegistry"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useReadKeyRegistryIdRegistry = /*#__PURE__*/ createUseReadContract(
  {
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'idRegistry',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"isMigrated"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useReadKeyRegistryIsMigrated = /*#__PURE__*/ createUseReadContract(
  {
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'isMigrated',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"keyAt"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useReadKeyRegistryKeyAt = /*#__PURE__*/ createUseReadContract({
  abi: keyRegistryAbi,
  address: keyRegistryAddress,
  functionName: 'keyAt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"keyDataOf"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useReadKeyRegistryKeyDataOf = /*#__PURE__*/ createUseReadContract({
  abi: keyRegistryAbi,
  address: keyRegistryAddress,
  functionName: 'keyDataOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"keyGateway"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useReadKeyRegistryKeyGateway = /*#__PURE__*/ createUseReadContract(
  {
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'keyGateway',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"keys"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useReadKeyRegistryKeys = /*#__PURE__*/ createUseReadContract({
  abi: keyRegistryAbi,
  address: keyRegistryAddress,
  functionName: 'keys',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"keysOf"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useReadKeyRegistryKeysOf = /*#__PURE__*/ createUseReadContract({
  abi: keyRegistryAbi,
  address: keyRegistryAddress,
  functionName: 'keysOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"maxKeysPerFid"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useReadKeyRegistryMaxKeysPerFid =
  /*#__PURE__*/ createUseReadContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'maxKeysPerFid',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"migratedAt"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useReadKeyRegistryMigratedAt = /*#__PURE__*/ createUseReadContract(
  {
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'migratedAt',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"migrator"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useReadKeyRegistryMigrator = /*#__PURE__*/ createUseReadContract({
  abi: keyRegistryAbi,
  address: keyRegistryAddress,
  functionName: 'migrator',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"nonces"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useReadKeyRegistryNonces = /*#__PURE__*/ createUseReadContract({
  abi: keyRegistryAbi,
  address: keyRegistryAddress,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useReadKeyRegistryOwner = /*#__PURE__*/ createUseReadContract({
  abi: keyRegistryAbi,
  address: keyRegistryAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"paused"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useReadKeyRegistryPaused = /*#__PURE__*/ createUseReadContract({
  abi: keyRegistryAbi,
  address: keyRegistryAddress,
  functionName: 'paused',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"pendingOwner"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useReadKeyRegistryPendingOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'pendingOwner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"totalKeys"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useReadKeyRegistryTotalKeys = /*#__PURE__*/ createUseReadContract({
  abi: keyRegistryAbi,
  address: keyRegistryAddress,
  functionName: 'totalKeys',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"validators"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useReadKeyRegistryValidators = /*#__PURE__*/ createUseReadContract(
  {
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'validators',
  },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link keyRegistryAbi}__
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWriteKeyRegistry = /*#__PURE__*/ createUseWriteContract({
  abi: keyRegistryAbi,
  address: keyRegistryAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"acceptOwnership"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWriteKeyRegistryAcceptOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"add"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWriteKeyRegistryAdd = /*#__PURE__*/ createUseWriteContract({
  abi: keyRegistryAbi,
  address: keyRegistryAddress,
  functionName: 'add',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"addGuardian"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWriteKeyRegistryAddGuardian =
  /*#__PURE__*/ createUseWriteContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'addGuardian',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"bulkAddKeysForMigration"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWriteKeyRegistryBulkAddKeysForMigration =
  /*#__PURE__*/ createUseWriteContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'bulkAddKeysForMigration',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"bulkResetKeysForMigration"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWriteKeyRegistryBulkResetKeysForMigration =
  /*#__PURE__*/ createUseWriteContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'bulkResetKeysForMigration',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"freezeKeyGateway"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWriteKeyRegistryFreezeKeyGateway =
  /*#__PURE__*/ createUseWriteContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'freezeKeyGateway',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"migrate"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWriteKeyRegistryMigrate = /*#__PURE__*/ createUseWriteContract({
  abi: keyRegistryAbi,
  address: keyRegistryAddress,
  functionName: 'migrate',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"pause"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWriteKeyRegistryPause = /*#__PURE__*/ createUseWriteContract({
  abi: keyRegistryAbi,
  address: keyRegistryAddress,
  functionName: 'pause',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"remove"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWriteKeyRegistryRemove = /*#__PURE__*/ createUseWriteContract({
  abi: keyRegistryAbi,
  address: keyRegistryAddress,
  functionName: 'remove',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"removeFor"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWriteKeyRegistryRemoveFor =
  /*#__PURE__*/ createUseWriteContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'removeFor',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"removeGuardian"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWriteKeyRegistryRemoveGuardian =
  /*#__PURE__*/ createUseWriteContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'removeGuardian',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWriteKeyRegistryRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"setIdRegistry"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWriteKeyRegistrySetIdRegistry =
  /*#__PURE__*/ createUseWriteContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'setIdRegistry',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"setKeyGateway"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWriteKeyRegistrySetKeyGateway =
  /*#__PURE__*/ createUseWriteContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'setKeyGateway',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"setMaxKeysPerFid"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWriteKeyRegistrySetMaxKeysPerFid =
  /*#__PURE__*/ createUseWriteContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'setMaxKeysPerFid',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"setMigrator"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWriteKeyRegistrySetMigrator =
  /*#__PURE__*/ createUseWriteContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'setMigrator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"setValidator"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWriteKeyRegistrySetValidator =
  /*#__PURE__*/ createUseWriteContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'setValidator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWriteKeyRegistryTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"unpause"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWriteKeyRegistryUnpause = /*#__PURE__*/ createUseWriteContract({
  abi: keyRegistryAbi,
  address: keyRegistryAddress,
  functionName: 'unpause',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"useNonce"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWriteKeyRegistryUseNonce = /*#__PURE__*/ createUseWriteContract(
  {
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'useNonce',
  },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link keyRegistryAbi}__
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useSimulateKeyRegistry = /*#__PURE__*/ createUseSimulateContract({
  abi: keyRegistryAbi,
  address: keyRegistryAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"acceptOwnership"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useSimulateKeyRegistryAcceptOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"add"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useSimulateKeyRegistryAdd =
  /*#__PURE__*/ createUseSimulateContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'add',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"addGuardian"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useSimulateKeyRegistryAddGuardian =
  /*#__PURE__*/ createUseSimulateContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'addGuardian',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"bulkAddKeysForMigration"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useSimulateKeyRegistryBulkAddKeysForMigration =
  /*#__PURE__*/ createUseSimulateContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'bulkAddKeysForMigration',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"bulkResetKeysForMigration"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useSimulateKeyRegistryBulkResetKeysForMigration =
  /*#__PURE__*/ createUseSimulateContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'bulkResetKeysForMigration',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"freezeKeyGateway"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useSimulateKeyRegistryFreezeKeyGateway =
  /*#__PURE__*/ createUseSimulateContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'freezeKeyGateway',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"migrate"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useSimulateKeyRegistryMigrate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'migrate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"pause"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useSimulateKeyRegistryPause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'pause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"remove"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useSimulateKeyRegistryRemove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'remove',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"removeFor"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useSimulateKeyRegistryRemoveFor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'removeFor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"removeGuardian"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useSimulateKeyRegistryRemoveGuardian =
  /*#__PURE__*/ createUseSimulateContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'removeGuardian',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useSimulateKeyRegistryRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"setIdRegistry"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useSimulateKeyRegistrySetIdRegistry =
  /*#__PURE__*/ createUseSimulateContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'setIdRegistry',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"setKeyGateway"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useSimulateKeyRegistrySetKeyGateway =
  /*#__PURE__*/ createUseSimulateContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'setKeyGateway',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"setMaxKeysPerFid"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useSimulateKeyRegistrySetMaxKeysPerFid =
  /*#__PURE__*/ createUseSimulateContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'setMaxKeysPerFid',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"setMigrator"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useSimulateKeyRegistrySetMigrator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'setMigrator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"setValidator"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useSimulateKeyRegistrySetValidator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'setValidator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useSimulateKeyRegistryTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"unpause"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useSimulateKeyRegistryUnpause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'unpause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link keyRegistryAbi}__ and `functionName` set to `"useNonce"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useSimulateKeyRegistryUseNonce =
  /*#__PURE__*/ createUseSimulateContract({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    functionName: 'useNonce',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link keyRegistryAbi}__
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWatchKeyRegistryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link keyRegistryAbi}__ and `eventName` set to `"Add"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWatchKeyRegistryAddEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    eventName: 'Add',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link keyRegistryAbi}__ and `eventName` set to `"AdminReset"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWatchKeyRegistryAdminResetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    eventName: 'AdminReset',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link keyRegistryAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWatchKeyRegistryEip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link keyRegistryAbi}__ and `eventName` set to `"FreezeKeyGateway"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWatchKeyRegistryFreezeKeyGatewayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    eventName: 'FreezeKeyGateway',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link keyRegistryAbi}__ and `eventName` set to `"Migrated"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWatchKeyRegistryMigratedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    eventName: 'Migrated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link keyRegistryAbi}__ and `eventName` set to `"OwnershipTransferStarted"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWatchKeyRegistryOwnershipTransferStartedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    eventName: 'OwnershipTransferStarted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link keyRegistryAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWatchKeyRegistryOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link keyRegistryAbi}__ and `eventName` set to `"Paused"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWatchKeyRegistryPausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    eventName: 'Paused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link keyRegistryAbi}__ and `eventName` set to `"Remove"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWatchKeyRegistryRemoveEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    eventName: 'Remove',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link keyRegistryAbi}__ and `eventName` set to `"SetIdRegistry"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWatchKeyRegistrySetIdRegistryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    eventName: 'SetIdRegistry',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link keyRegistryAbi}__ and `eventName` set to `"SetKeyGateway"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWatchKeyRegistrySetKeyGatewayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    eventName: 'SetKeyGateway',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link keyRegistryAbi}__ and `eventName` set to `"SetMaxKeysPerFid"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWatchKeyRegistrySetMaxKeysPerFidEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    eventName: 'SetMaxKeysPerFid',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link keyRegistryAbi}__ and `eventName` set to `"SetMigrator"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWatchKeyRegistrySetMigratorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    eventName: 'SetMigrator',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link keyRegistryAbi}__ and `eventName` set to `"SetValidator"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWatchKeyRegistrySetValidatorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    eventName: 'SetValidator',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link keyRegistryAbi}__ and `eventName` set to `"Unpaused"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000Fc1237824fb747aBDE0FF18990E59b7e)
 */
export const useWatchKeyRegistryUnpausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: keyRegistryAbi,
    address: keyRegistryAddress,
    eventName: 'Unpaused',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageRegistryAbi}__
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useReadStorageRegistry = /*#__PURE__*/ createUseReadContract({
  abi: storageRegistryAbi,
  address: storageRegistryAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useReadStorageRegistryDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"VERSION"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useReadStorageRegistryVersion =
  /*#__PURE__*/ createUseReadContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'VERSION',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"deprecationTimestamp"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useReadStorageRegistryDeprecationTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'deprecationTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"ethUsdPrice"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useReadStorageRegistryEthUsdPrice =
  /*#__PURE__*/ createUseReadContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'ethUsdPrice',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"fixedEthUsdPrice"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useReadStorageRegistryFixedEthUsdPrice =
  /*#__PURE__*/ createUseReadContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'fixedEthUsdPrice',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"getRoleAdmin"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useReadStorageRegistryGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"getRoleMember"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useReadStorageRegistryGetRoleMember =
  /*#__PURE__*/ createUseReadContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'getRoleMember',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"getRoleMemberCount"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useReadStorageRegistryGetRoleMemberCount =
  /*#__PURE__*/ createUseReadContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'getRoleMemberCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"hasRole"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useReadStorageRegistryHasRole =
  /*#__PURE__*/ createUseReadContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'hasRole',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"lastPriceFeedUpdateBlock"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useReadStorageRegistryLastPriceFeedUpdateBlock =
  /*#__PURE__*/ createUseReadContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'lastPriceFeedUpdateBlock',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"lastPriceFeedUpdateTime"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useReadStorageRegistryLastPriceFeedUpdateTime =
  /*#__PURE__*/ createUseReadContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'lastPriceFeedUpdateTime',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"maxUnits"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useReadStorageRegistryMaxUnits =
  /*#__PURE__*/ createUseReadContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'maxUnits',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"paused"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useReadStorageRegistryPaused = /*#__PURE__*/ createUseReadContract(
  {
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'paused',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"prevEthUsdPrice"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useReadStorageRegistryPrevEthUsdPrice =
  /*#__PURE__*/ createUseReadContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'prevEthUsdPrice',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"price"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useReadStorageRegistryPrice = /*#__PURE__*/ createUseReadContract({
  abi: storageRegistryAbi,
  address: storageRegistryAddress,
  functionName: 'price',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"priceFeed"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useReadStorageRegistryPriceFeed =
  /*#__PURE__*/ createUseReadContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'priceFeed',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"priceFeedCacheDuration"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useReadStorageRegistryPriceFeedCacheDuration =
  /*#__PURE__*/ createUseReadContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'priceFeedCacheDuration',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"priceFeedMaxAge"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useReadStorageRegistryPriceFeedMaxAge =
  /*#__PURE__*/ createUseReadContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'priceFeedMaxAge',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"priceFeedMaxAnswer"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useReadStorageRegistryPriceFeedMaxAnswer =
  /*#__PURE__*/ createUseReadContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'priceFeedMaxAnswer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"priceFeedMinAnswer"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useReadStorageRegistryPriceFeedMinAnswer =
  /*#__PURE__*/ createUseReadContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'priceFeedMinAnswer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"rentedUnits"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useReadStorageRegistryRentedUnits =
  /*#__PURE__*/ createUseReadContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'rentedUnits',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useReadStorageRegistrySupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"unitPrice"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useReadStorageRegistryUnitPrice =
  /*#__PURE__*/ createUseReadContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'unitPrice',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"uptimeFeed"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useReadStorageRegistryUptimeFeed =
  /*#__PURE__*/ createUseReadContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'uptimeFeed',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"uptimeFeedGracePeriod"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useReadStorageRegistryUptimeFeedGracePeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'uptimeFeedGracePeriod',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"usdUnitPrice"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useReadStorageRegistryUsdUnitPrice =
  /*#__PURE__*/ createUseReadContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'usdUnitPrice',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"vault"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useReadStorageRegistryVault = /*#__PURE__*/ createUseReadContract({
  abi: storageRegistryAbi,
  address: storageRegistryAddress,
  functionName: 'vault',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storageRegistryAbi}__
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWriteStorageRegistry = /*#__PURE__*/ createUseWriteContract({
  abi: storageRegistryAbi,
  address: storageRegistryAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"batchCredit"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWriteStorageRegistryBatchCredit =
  /*#__PURE__*/ createUseWriteContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'batchCredit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"batchRent"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWriteStorageRegistryBatchRent =
  /*#__PURE__*/ createUseWriteContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'batchRent',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"continuousCredit"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWriteStorageRegistryContinuousCredit =
  /*#__PURE__*/ createUseWriteContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'continuousCredit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"credit"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWriteStorageRegistryCredit =
  /*#__PURE__*/ createUseWriteContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'credit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"grantRole"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWriteStorageRegistryGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"pause"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWriteStorageRegistryPause =
  /*#__PURE__*/ createUseWriteContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'pause',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"refreshPrice"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWriteStorageRegistryRefreshPrice =
  /*#__PURE__*/ createUseWriteContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'refreshPrice',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"renounceRole"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWriteStorageRegistryRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"rent"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWriteStorageRegistryRent = /*#__PURE__*/ createUseWriteContract(
  {
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'rent',
  },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"revokeRole"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWriteStorageRegistryRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"setCacheDuration"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWriteStorageRegistrySetCacheDuration =
  /*#__PURE__*/ createUseWriteContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'setCacheDuration',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"setDeprecationTimestamp"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWriteStorageRegistrySetDeprecationTimestamp =
  /*#__PURE__*/ createUseWriteContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'setDeprecationTimestamp',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"setFixedEthUsdPrice"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWriteStorageRegistrySetFixedEthUsdPrice =
  /*#__PURE__*/ createUseWriteContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'setFixedEthUsdPrice',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"setGracePeriod"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWriteStorageRegistrySetGracePeriod =
  /*#__PURE__*/ createUseWriteContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'setGracePeriod',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"setMaxAge"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWriteStorageRegistrySetMaxAge =
  /*#__PURE__*/ createUseWriteContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'setMaxAge',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"setMaxAnswer"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWriteStorageRegistrySetMaxAnswer =
  /*#__PURE__*/ createUseWriteContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'setMaxAnswer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"setMaxUnits"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWriteStorageRegistrySetMaxUnits =
  /*#__PURE__*/ createUseWriteContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'setMaxUnits',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"setMinAnswer"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWriteStorageRegistrySetMinAnswer =
  /*#__PURE__*/ createUseWriteContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'setMinAnswer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"setPrice"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWriteStorageRegistrySetPrice =
  /*#__PURE__*/ createUseWriteContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'setPrice',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"setPriceFeed"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWriteStorageRegistrySetPriceFeed =
  /*#__PURE__*/ createUseWriteContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'setPriceFeed',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"setUptimeFeed"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWriteStorageRegistrySetUptimeFeed =
  /*#__PURE__*/ createUseWriteContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'setUptimeFeed',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"setVault"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWriteStorageRegistrySetVault =
  /*#__PURE__*/ createUseWriteContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'setVault',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"unpause"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWriteStorageRegistryUnpause =
  /*#__PURE__*/ createUseWriteContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'unpause',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"withdraw"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWriteStorageRegistryWithdraw =
  /*#__PURE__*/ createUseWriteContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storageRegistryAbi}__
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useSimulateStorageRegistry =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"batchCredit"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useSimulateStorageRegistryBatchCredit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'batchCredit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"batchRent"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useSimulateStorageRegistryBatchRent =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'batchRent',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"continuousCredit"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useSimulateStorageRegistryContinuousCredit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'continuousCredit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"credit"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useSimulateStorageRegistryCredit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'credit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"grantRole"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useSimulateStorageRegistryGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"pause"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useSimulateStorageRegistryPause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'pause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"refreshPrice"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useSimulateStorageRegistryRefreshPrice =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'refreshPrice',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"renounceRole"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useSimulateStorageRegistryRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"rent"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useSimulateStorageRegistryRent =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'rent',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"revokeRole"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useSimulateStorageRegistryRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"setCacheDuration"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useSimulateStorageRegistrySetCacheDuration =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'setCacheDuration',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"setDeprecationTimestamp"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useSimulateStorageRegistrySetDeprecationTimestamp =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'setDeprecationTimestamp',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"setFixedEthUsdPrice"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useSimulateStorageRegistrySetFixedEthUsdPrice =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'setFixedEthUsdPrice',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"setGracePeriod"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useSimulateStorageRegistrySetGracePeriod =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'setGracePeriod',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"setMaxAge"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useSimulateStorageRegistrySetMaxAge =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'setMaxAge',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"setMaxAnswer"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useSimulateStorageRegistrySetMaxAnswer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'setMaxAnswer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"setMaxUnits"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useSimulateStorageRegistrySetMaxUnits =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'setMaxUnits',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"setMinAnswer"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useSimulateStorageRegistrySetMinAnswer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'setMinAnswer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"setPrice"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useSimulateStorageRegistrySetPrice =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'setPrice',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"setPriceFeed"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useSimulateStorageRegistrySetPriceFeed =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'setPriceFeed',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"setUptimeFeed"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useSimulateStorageRegistrySetUptimeFeed =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'setUptimeFeed',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"setVault"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useSimulateStorageRegistrySetVault =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'setVault',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"unpause"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useSimulateStorageRegistryUnpause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'unpause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storageRegistryAbi}__ and `functionName` set to `"withdraw"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useSimulateStorageRegistryWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link storageRegistryAbi}__
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWatchStorageRegistryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link storageRegistryAbi}__ and `eventName` set to `"Paused"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWatchStorageRegistryPausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    eventName: 'Paused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link storageRegistryAbi}__ and `eventName` set to `"Rent"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWatchStorageRegistryRentEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    eventName: 'Rent',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link storageRegistryAbi}__ and `eventName` set to `"RoleAdminChanged"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWatchStorageRegistryRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link storageRegistryAbi}__ and `eventName` set to `"RoleGranted"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWatchStorageRegistryRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link storageRegistryAbi}__ and `eventName` set to `"RoleRevoked"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWatchStorageRegistryRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link storageRegistryAbi}__ and `eventName` set to `"SetCacheDuration"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWatchStorageRegistrySetCacheDurationEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    eventName: 'SetCacheDuration',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link storageRegistryAbi}__ and `eventName` set to `"SetDeprecationTimestamp"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWatchStorageRegistrySetDeprecationTimestampEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    eventName: 'SetDeprecationTimestamp',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link storageRegistryAbi}__ and `eventName` set to `"SetFixedEthUsdPrice"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWatchStorageRegistrySetFixedEthUsdPriceEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    eventName: 'SetFixedEthUsdPrice',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link storageRegistryAbi}__ and `eventName` set to `"SetGracePeriod"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWatchStorageRegistrySetGracePeriodEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    eventName: 'SetGracePeriod',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link storageRegistryAbi}__ and `eventName` set to `"SetMaxAge"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWatchStorageRegistrySetMaxAgeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    eventName: 'SetMaxAge',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link storageRegistryAbi}__ and `eventName` set to `"SetMaxAnswer"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWatchStorageRegistrySetMaxAnswerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    eventName: 'SetMaxAnswer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link storageRegistryAbi}__ and `eventName` set to `"SetMaxUnits"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWatchStorageRegistrySetMaxUnitsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    eventName: 'SetMaxUnits',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link storageRegistryAbi}__ and `eventName` set to `"SetMinAnswer"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWatchStorageRegistrySetMinAnswerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    eventName: 'SetMinAnswer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link storageRegistryAbi}__ and `eventName` set to `"SetPrice"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWatchStorageRegistrySetPriceEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    eventName: 'SetPrice',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link storageRegistryAbi}__ and `eventName` set to `"SetPriceFeed"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWatchStorageRegistrySetPriceFeedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    eventName: 'SetPriceFeed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link storageRegistryAbi}__ and `eventName` set to `"SetUptimeFeed"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWatchStorageRegistrySetUptimeFeedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    eventName: 'SetUptimeFeed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link storageRegistryAbi}__ and `eventName` set to `"SetVault"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWatchStorageRegistrySetVaultEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    eventName: 'SetVault',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link storageRegistryAbi}__ and `eventName` set to `"Unpaused"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWatchStorageRegistryUnpausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    eventName: 'Unpaused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link storageRegistryAbi}__ and `eventName` set to `"Withdraw"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D)
 */
export const useWatchStorageRegistryWithdrawEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: storageRegistryAbi,
    address: storageRegistryAddress,
    eventName: 'Withdraw',
  })
