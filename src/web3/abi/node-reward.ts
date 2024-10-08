export default [
  {
    inputs: [
      { internalType: 'address', name: '_token', type: 'address' },
      { internalType: 'address', name: '_nodeStakeContract', type: 'address' },
      { internalType: 'address', name: '_signerA', type: 'address' },
      { internalType: 'address', name: '_signerB', type: 'address' },
      { internalType: 'address', name: '_signerC', type: 'address' },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'address', name: 'holder', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
      { indexed: false, internalType: 'string', name: 'nodeId', type: 'string' },
      { indexed: false, internalType: 'string', name: 'nonce', type: 'string' },
    ],
    name: 'Claimed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'address', name: 'holder', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'WithdrawedForEmergency',
    type: 'event',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_tokenAmount', type: 'uint256' },
      { internalType: 'address', name: '_beneficiary', type: 'address' },
      { internalType: 'string', name: '_nodeId', type: 'string' },
      { internalType: 'string', name: '_nonce', type: 'string' },
      { internalType: 'bytes', name: '_signatureA', type: 'bytes' },
      { internalType: 'bytes', name: '_signatureB', type: 'bytes' },
      { internalType: 'bytes', name: '_signatureC', type: 'bytes' },
    ],
    name: 'ClaimWithSignature',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  { inputs: [], name: 'canClaim', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function' },
  {
    inputs: [],
    name: 'nodeStakeContract',
    outputs: [{ internalType: 'contract INodeStake', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  { inputs: [], name: 'owner', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
  { inputs: [{ internalType: 'bool', name: '_canClaim', type: 'bool' }], name: 'setCanClaim', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [
      { internalType: 'address', name: '_signerA', type: 'address' },
      { internalType: 'address', name: '_signerB', type: 'address' },
      { internalType: 'address', name: '_signerC', type: 'address' },
    ],
    name: 'setManager',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  { inputs: [], name: 'signerA', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
  { inputs: [], name: 'signerB', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
  { inputs: [], name: 'signerC', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
  { inputs: [], name: 'token', outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
  {
    inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '_tokenAmount', type: 'uint256' }],
    name: 'withdrawRewardForEmergency',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
