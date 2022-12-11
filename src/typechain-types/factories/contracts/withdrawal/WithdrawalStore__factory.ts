/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { WithdrawalStore, WithdrawalStoreInterface } from "../../../contracts/withdrawal/WithdrawalStore";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract RoleStore",
        name: "_roleStore",
        type: "address",
      },
      {
        internalType: "contract DataStore",
        name: "_dataStore",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "NativeTokenTransferError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokenTransferError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "msgSender",
        type: "address",
      },
      {
        internalType: "string",
        name: "role",
        type: "string",
      },
    ],
    name: "Unauthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "prevGov",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "nextGov",
        type: "address",
      },
    ],
    name: "SetGov",
    type: "event",
  },
  {
    inputs: [],
    name: "dataStore",
    outputs: [
      {
        internalType: "contract DataStore",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "get",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                internalType: "address",
                name: "receiver",
                type: "address",
              },
              {
                internalType: "address",
                name: "callbackContract",
                type: "address",
              },
              {
                internalType: "address",
                name: "market",
                type: "address",
              },
            ],
            internalType: "struct Withdrawal.Addresses",
            name: "addresses",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "marketTokensLongAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "marketTokensShortAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "minLongTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "minShortTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "updatedAtBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "executionFee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "callbackGasLimit",
                type: "uint256",
              },
            ],
            internalType: "struct Withdrawal.Numbers",
            name: "numbers",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "shouldUnwrapNativeToken",
                type: "bool",
              },
            ],
            internalType: "struct Withdrawal.Flags",
            name: "flags",
            type: "tuple",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Withdrawal.Props",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getWithdrawalCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
    ],
    name: "getWithdrawalKeys",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gov",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "recordTransferIn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "recoverNativeToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "roleStore",
    outputs: [
      {
        internalType: "contract RoleStore",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                internalType: "address",
                name: "receiver",
                type: "address",
              },
              {
                internalType: "address",
                name: "callbackContract",
                type: "address",
              },
              {
                internalType: "address",
                name: "market",
                type: "address",
              },
            ],
            internalType: "struct Withdrawal.Addresses",
            name: "addresses",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "marketTokensLongAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "marketTokensShortAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "minLongTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "minShortTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "updatedAtBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "executionFee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "callbackGasLimit",
                type: "uint256",
              },
            ],
            internalType: "struct Withdrawal.Numbers",
            name: "numbers",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "shouldUnwrapNativeToken",
                type: "bool",
              },
            ],
            internalType: "struct Withdrawal.Flags",
            name: "flags",
            type: "tuple",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Withdrawal.Props",
        name: "withdrawal",
        type: "tuple",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_gov",
        type: "address",
      },
    ],
    name: "setGov",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "tokenBalances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "transferOut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "bool",
        name: "shouldUnwrapNativeToken",
        type: "bool",
      },
    ],
    name: "transferOut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "withdrawals",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "address",
            name: "callbackContract",
            type: "address",
          },
          {
            internalType: "address",
            name: "market",
            type: "address",
          },
        ],
        internalType: "struct Withdrawal.Addresses",
        name: "addresses",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "marketTokensLongAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "marketTokensShortAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minLongTokenAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minShortTokenAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "updatedAtBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "executionFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "callbackGasLimit",
            type: "uint256",
          },
        ],
        internalType: "struct Withdrawal.Numbers",
        name: "numbers",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "bool",
            name: "shouldUnwrapNativeToken",
            type: "bool",
          },
        ],
        internalType: "struct Withdrawal.Flags",
        name: "flags",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162001f7238038062001f728339810160408190526200003491620000e0565b81818181818181620000463362000066565b6001600160a01b039081166080521660a052506200011f95505050505050565b600080546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527f53351836099c03ffc3b1727d8abd4b0222afa87d4ed76ae3102d51369ef7f785910160405180910390a15050565b6001600160a01b0381168114620000dd57600080fd5b50565b60008060408385031215620000f457600080fd5b82516200010181620000c7565b60208401519092506200011481620000c7565b809150509250929050565b60805160a051611e0a620001686000396000818161020e015281816104d60152818161052a01528181610a310152610e79015260008181610160015261096b0152611e0a6000f3fe6080604052600436106100bc5760003560e01c806312d43a51146100c85780632d891fba146100fe578063352f9aed146101205780634a4a7b041461014e578063509e382514610182578063523fba7f146101a2578063556c4c44146101cf578063660d0d67146101fc5780636bd3d45114610230578063781952a81461025057806388d44f41146102655780638eaa6ac01461028557806395bc2673146102b2578063cfad57a2146102d2578063efbf64a7146102f257600080fd5b366100c357005b600080fd5b3480156100d457600080fd5b506000546100e8906001600160a01b031681565b6040516100f5919061157b565b60405180910390f35b34801561010a57600080fd5b5061011e6101193660046115a4565b610322565b005b34801561012c57600080fd5b5061014061013b3660046115e6565b610382565b6040519081526020016100f5565b34801561015a57600080fd5b506100e87f000000000000000000000000000000000000000000000000000000000000000081565b34801561018e57600080fd5b5061011e61019d3660046117ab565b6103a5565b3480156101ae57600080fd5b506101406101bd3660046115e6565b60016020526000908152604090205481565b3480156101db57600080fd5b506101ef6101ea3660046118b4565b6104aa565b6040516100f591906118d6565b34801561020857600080fd5b506100e87f000000000000000000000000000000000000000000000000000000000000000081565b34801561023c57600080fd5b5061011e61024b36600461191a565b6104bf565b34801561025c57600080fd5b50610140610500565b34801561027157600080fd5b5061011e610280366004611946565b610511565b34801561029157600080fd5b506102a56102a0366004611999565b610595565b6040516100f59190611a79565b3480156102be57600080fd5b5061011e6102cd366004611999565b61070d565b3480156102de57600080fd5b5061011e6102ed3660046115e6565b6107b7565b3480156102fe57600080fd5b5061031261030d366004611999565b610811565b6040516100f59493929190611ac8565b61037260405160200161033490611b0c565b604051602081830303815290604052805190602001206040518060400160405280600a81526020016921a7a72a2927a62622a960b11b815250610954565b61037d838383610a04565b505050565b600061039660405160200161033490611b0c565b61039f82610a61565b92915050565b6103b760405160200161033490611b0c565b6000828152600260208181526040928390208451805182546001600160a01b03199081166001600160a01b0392831617845582850151600185018054831691841691909117905582870151958401805482169683169690961790955560609182015160038401805490961691161790935584820151805160048301559182015160058201558184015160068201558183015160078201556080820151600882015560a0820151600982015560c090910151600a8201559183015151600b8301805460ff1916911515919091179055820151829190600c82019061049a9082611bb8565b5061037d91506003905083610b12565b60606104b860038484610b1e565b9392505050565b6104d160405160200161033490611b0c565b6104fc7f00000000000000000000000000000000000000000000000000000000000000008383610bde565b5050565b600061050c6003610d95565b905090565b61052360405160200161033490611b0c565b600061054e7f0000000000000000000000000000000000000000000000000000000000000000610d9f565b9050806001600160a01b0316856001600160a01b031614801561056e5750815b156105835761057e858585610e4c565b61058e565b61058e858585610a04565b5050505050565b61059d61149f565b60008281526002602081815260409283902083516101008101855281546001600160a01b0390811660808084019182526001850154831660a08086019190915296850154831660c080860191909152600386015490931660e08086019190915291845287519182018852600485015482526005850154828701526006850154828901526007850154606080840191909152600886015491830191909152600985015496820196909652600a840154918101919091528184015284519283018552600b82015460ff161515835293840191909152600c81018054919284019161068490611b30565b80601f01602080910402602001604051908101604052809291908181526020018280546106b090611b30565b80156106fd5780601f106106d2576101008083540402835291602001916106fd565b820191906000526020600020905b8154815290600101906020018083116106e057829003601f168201915b5050505050815250509050919050565b61071f60405160200161033490611b0c565b6000818152600260208190526040822080546001600160a01b0319908116825560018201805482169055918101805483169055600381018054909216909155600481018290556005810182905560068101829055600781018290556008810182905560098101829055600a8101829055600b8101805460ff19169055906107a9600c83018261152d565b506104fc9050600382610ea0565b6000546001600160a01b03163314610805576040805163a35b150b60e01b81523360048201526024810191909152600360448201526223a7ab60e91b60648201526084015b60405180910390fd5b61080e81610eac565b50565b60026020818152600092835260409283902083516080808201865282546001600160a01b0390811683526001840154811683860152948301548516828701526003830154909416606080830191909152855160e08101875260048401548152600584015481860152600684015481880152600784015491810191909152600883015494810194909452600982015460a0850152600a82015460c08501528451928301909452600b81015460ff1615158252600c810180546108d190611b30565b80601f01602080910402602001604051908101604052809291908181526020018280546108fd90611b30565b801561094a5780601f1061091f5761010080835404028352916020019161094a565b820191906000526020600020905b81548152906001019060200180831161092d57829003601f168201915b5050505050905084565b60405163ac4ab3fb60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063ac4ab3fb906109a29033908690600401611c77565b602060405180830381865afa1580156109bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e39190611c90565b6104fc57338160405163a35b150b60e01b81526004016107fc929190611cad565b306001600160a01b03821603610a2c5760405162461bcd60e51b81526004016107fc90611cd1565b610a587f0000000000000000000000000000000000000000000000000000000000000000848385610f0d565b61037d83611043565b6001600160a01b0381166000818152600160205260408082205490516370a0823160e01b8152919290918391906370a0823190610aa290309060040161157b565b602060405180830381865afa158015610abf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae39190611d01565b6001600160a01b03851660009081526001602052604090208190559050610b0a8282611d30565b949350505050565b60006104b883836110cc565b60606000610b2b85610d95565b905080831115610b39578092505b6000610b458585611d30565b6001600160401b03811115610b5c57610b5c611603565b604051908082528060200260200182016040528015610b85578160200160208202803683370190505b509050845b84811015610bd457610b9c878261111b565b82610ba78884611d30565b81518110610bb757610bb7611d43565b602090810291909101015280610bcc81611d59565b915050610b8a565b5095945050505050565b80600003610beb57505050565b6000836001600160a01b031663bd02d0f5604051602001610c3d906020808252601f908201527f4e41544956455f544f4b454e5f5452414e534645525f4741535f4c494d495400604082015260600190565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b8152600401610c7191815260200190565b602060405180830381865afa158015610c8e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb29190611d01565b9050600080846001600160a01b0316848490604051600060405180830381858888f193505050503d8060008114610d05576040519150601f19603f3d011682016040523d82523d6000602084013e610d0a565b606091505b50915091508115610d1d57505050505050565b600081604051602001610d309190611d72565b60405160208183030381529060405290507f6c4e9d88878940a822d239187b8b00d62a80dce222d53bc5f1fb072d9c34b68181604051610d709190611d72565b60405180910390a18585604051633828654560e11b81526004016107fc929190611c77565b600061039f825490565b6000816001600160a01b03166321f8a721604051602001610dd79060208082526003908201526215d39560ea1b604082015260600190565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b8152600401610e0b91815260200190565b602060405180830381865afa158015610e28573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039f9190611d85565b306001600160a01b03821603610e745760405162461bcd60e51b81526004016107fc90611cd1565b610a587f0000000000000000000000000000000000000000000000000000000000000000848385611127565b60006104b88383611192565b600080546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527f53351836099c03ffc3b1727d8abd4b0222afa87d4ed76ae3102d51369ef7f785910160405180910390a15050565b801561103d576000846001600160a01b031663bd02d0f5610f2d86611285565b6040518263ffffffff1660e01b8152600401610f4b91815260200190565b602060405180830381865afa158015610f68573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f8c9190611d01565b9050600080610f9d8686868661130d565b915091508115610faf5750505061103d565b600081604051602001610fc29190611d72565b60405160208183030381529060405290507f9db60cdf21cde7f760995e23662841725e6aa63be48799796db12b7b2e6b17e2816040516110029190611d72565b60405180910390a160405163012f3b8f60e71b81526001600160a01b03808916600483015287166024820152604481018690526064016107fc565b50505050565b6040516370a0823160e01b81526001600160a01b038216906370a082319061106f90309060040161157b565b602060405180830381865afa15801561108c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110b09190611d01565b6001600160a01b03909116600090815260016020526040902055565b60008181526001830160205260408120546111135750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561039f565b50600061039f565b60006104b88383611475565b801561103d57604051632e1a7d4d60e01b8152600481018290526001600160a01b03841690632e1a7d4d90602401600060405180830381600087803b15801561116f57600080fd5b505af1158015611183573d6000803e3d6000fd5b5050505061103d848383610bde565b6000818152600183016020526040812054801561127b5760006111b6600183611d30565b85549091506000906111ca90600190611d30565b905081811461122f5760008660000182815481106111ea576111ea611d43565b906000526020600020015490508087600001848154811061120d5761120d611d43565b6000918252602080832090910192909255918252600188019052604090208390555b855486908061124057611240611da2565b60019003818190600052602060002001600090559055856001016000868152602001908152602001600020600090556001935050505061039f565b600091505061039f565b60006040516020016112c3906020808252601890820152771513d2d15397d514905394d1915497d1d054d7d31253525560421b604082015260600190565b60408051601f198184030181528282528051602091820120908301526001600160a01b03841690820152606001604051602081830303815290604052805190602001209050919050565b60006060600063a9059cbb60e01b868660405160240161132e929190611c77565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050509050600080886001600160a01b0316868460405161137f9190611db8565b60006040518083038160008787f1925050503d80600081146113bd576040519150601f19603f3d011682016040523d82523d6000602084013e6113c2565b606091505b50915091508115611463578051600003611420576001600160a01b0389163b6114205760006040518060400160405280601481526020017310d85b1b081d1bc81b9bdb8b58dbdb9d1c9858dd60621b8152509450945050505061146c565b600081511180156114425750808060200190518101906114409190611c90565b155b156114555760009450925061146c915050565b60019450925061146c915050565b60009450925050505b94509492505050565b600082600001828154811061148c5761148c611d43565b9060005260206000200154905092915050565b60408051610100810190915260006080820181815260a0830182905260c0830182905260e0830191909152819081526020016115116040518060e00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b8152604080516020808201835260008252830152606091015290565b50805461153990611b30565b6000825580601f10611549575050565b601f01602090049060005260206000209081019061080e91905b808211156115775760008155600101611563565b5090565b6001600160a01b0391909116815260200190565b6001600160a01b038116811461080e57600080fd5b6000806000606084860312156115b957600080fd5b83356115c48161158f565b92506020840135915060408401356115db8161158f565b809150509250925092565b6000602082840312156115f857600080fd5b81356104b88161158f565b634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b038111828210171561163b5761163b611603565b60405290565b600060e0828403121561165357600080fd5b60405160e081016001600160401b038111828210171561167557611675611603565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015260c083013560c08201525092915050565b801515811461080e57600080fd5b6000602082840312156116e457600080fd5b604051602081016001600160401b038111828210171561170657611706611603565b6040529050808235611717816116c4565b905292915050565b600082601f83011261173057600080fd5b81356001600160401b038082111561174a5761174a611603565b604051601f8301601f19908116603f0116810190828211818310171561177257611772611603565b8160405283815286602085880101111561178b57600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156117be57600080fd5b8235915060208301356001600160401b03808211156117dc57600080fd5b908401908186036101a08112156117f257600080fd5b6117fa611619565b608082121561180857600080fd5b611810611619565b9150833561181d8161158f565b8252602084013561182d8161158f565b602083015260408401356118408161158f565b604083015260608401356118538161158f565b60608301528181526118688860808601611641565b602082015261187b8861016086016116d2565b604082015261018084013591508282111561189557600080fd5b6118a18883860161171f565b6060820152809450505050509250929050565b600080604083850312156118c757600080fd5b50508035926020909101359150565b6020808252825182820181905260009190848201906040850190845b8181101561190e578351835292840192918401916001016118f2565b50909695505050505050565b6000806040838503121561192d57600080fd5b82356119388161158f565b946020939093013593505050565b6000806000806080858703121561195c57600080fd5b84356119678161158f565b935060208501359250604085013561197e8161158f565b9150606085013561198e816116c4565b939692955090935050565b6000602082840312156119ab57600080fd5b5035919050565b80516001600160a01b03908116835260208083015182169084015260408083015182169084015260609182015116910152565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c08301525050565b60005b83811015611a44578181015183820152602001611a2c565b50506000910152565b60008151808452611a65816020860160208601611a29565b601f01601f19169290920160200192915050565b60208152611a8b6020820183516119b2565b60006020830151611a9f60a08401826119e5565b50604083015151151561018083015260608301516101a080840152610b0a6101c0840182611a4d565b60006101a0611ad783886119b2565b611ae460808401876119e5565b8451151561016084015280610180840152611b0181840185611a4d565b979650505050505050565b6020808252600a908201526921a7a72a2927a62622a960b11b604082015260600190565b600181811c90821680611b4457607f821691505b602082108103611b6457634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561037d57600081815260208120601f850160051c81016020861015611b915750805b601f850160051c820191505b81811015611bb057828155600101611b9d565b505050505050565b81516001600160401b03811115611bd157611bd1611603565b611be581611bdf8454611b30565b84611b6a565b602080601f831160018114611c1a5760008415611c025750858301515b600019600386901b1c1916600185901b178555611bb0565b600085815260208120601f198616915b82811015611c4957888601518255948401946001909101908401611c2a565b5085821015611c675787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6001600160a01b03929092168252602082015260400190565b600060208284031215611ca257600080fd5b81516104b8816116c4565b6001600160a01b0383168152604060208201819052600090610b0a90830184611a4d565b6020808252601690820152752130b7359d1034b73b30b634b2103932b1b2b4bb32b960511b604082015260600190565b600060208284031215611d1357600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561039f5761039f611d1a565b634e487b7160e01b600052603260045260246000fd5b600060018201611d6b57611d6b611d1a565b5060010190565b6020815260006104b86020830184611a4d565b600060208284031215611d9757600080fd5b81516104b88161158f565b634e487b7160e01b600052603160045260246000fd5b60008251611dca818460208701611a29565b919091019291505056fea2646970667358221220af8758d3d60896a69a449aec56dc0e2eeb4eed764cb4d995fb05823721590ecb64736f6c63430008100033";

type WithdrawalStoreConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: WithdrawalStoreConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class WithdrawalStore__factory extends ContractFactory {
  constructor(...args: WithdrawalStoreConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _roleStore: PromiseOrValue<string>,
    _dataStore: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WithdrawalStore> {
    return super.deploy(_roleStore, _dataStore, overrides || {}) as Promise<WithdrawalStore>;
  }
  override getDeployTransaction(
    _roleStore: PromiseOrValue<string>,
    _dataStore: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_roleStore, _dataStore, overrides || {});
  }
  override attach(address: string): WithdrawalStore {
    return super.attach(address) as WithdrawalStore;
  }
  override connect(signer: Signer): WithdrawalStore__factory {
    return super.connect(signer) as WithdrawalStore__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WithdrawalStoreInterface {
    return new utils.Interface(_abi) as WithdrawalStoreInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): WithdrawalStore {
    return new Contract(address, _abi, signerOrProvider) as WithdrawalStore;
  }
}