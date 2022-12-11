/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { DepositStore, DepositStoreInterface } from "../../../contracts/deposit/DepositStore";

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
            internalType: "struct Deposit.Addresses",
            name: "addresses",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "longTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shortTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "minMarketTokens",
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
            internalType: "struct Deposit.Numbers",
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
            internalType: "struct Deposit.Flags",
            name: "flags",
            type: "tuple",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Deposit.Props",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDepositCount",
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
    name: "getDepositKeys",
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
            internalType: "struct Deposit.Addresses",
            name: "addresses",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "longTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shortTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "minMarketTokens",
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
            internalType: "struct Deposit.Numbers",
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
            internalType: "struct Deposit.Flags",
            name: "flags",
            type: "tuple",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Deposit.Props",
        name: "deposit",
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
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162001d6838038062001d688339810160408190526200003491620000e0565b81818181818181620000463362000066565b6001600160a01b039081166080521660a052506200011f95505050505050565b600080546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527f53351836099c03ffc3b1727d8abd4b0222afa87d4ed76ae3102d51369ef7f785910160405180910390a15050565b6001600160a01b0381168114620000dd57600080fd5b50565b60008060408385031215620000f457600080fd5b82516200010181620000c7565b60208401519092506200011481620000c7565b809150509250929050565b60805160a051611c0062000168600039600081816101b601528181610381015281816103c4015281816108920152610c0401526000818161015501526107cc0152611c006000f3fe6080604052600436106100b15760003560e01c806312d43a51146100bd5780632d891fba146100f3578063352f9aed146101155780634a4a7b0414610143578063523fba7f14610177578063660d0d67146101a45780636bd3d451146101d857806388d44f41146101f85780638eaa6ac0146102185780639363a1411461024557806393a971181461025a57806395bc267314610287578063ba76abf3146102a7578063cfad57a2146102c757600080fd5b366100b857005b600080fd5b3480156100c957600080fd5b506000546100dd906001600160a01b031681565b6040516100ea91906113d5565b60405180910390f35b3480156100ff57600080fd5b5061011361010e3660046113fe565b6102e7565b005b34801561012157600080fd5b50610135610130366004611440565b610347565b6040519081526020016100ea565b34801561014f57600080fd5b506100dd7f000000000000000000000000000000000000000000000000000000000000000081565b34801561018357600080fd5b50610135610192366004611440565b60016020526000908152604090205481565b3480156101b057600080fd5b506100dd7f000000000000000000000000000000000000000000000000000000000000000081565b3480156101e457600080fd5b506101136101f336600461145d565b61036a565b34801561020457600080fd5b50610113610213366004611497565b6103ab565b34801561022457600080fd5b506102386102333660046114ea565b61042f565b6040516100ea9190611553565b34801561025157600080fd5b50610135610597565b34801561026657600080fd5b5061027a610275366004611603565b6105a8565b6040516100ea9190611625565b34801561029357600080fd5b506101136102a23660046114ea565b6105bd565b3480156102b357600080fd5b506101136102c23660046117f9565b610660565b3480156102d357600080fd5b506101136102e2366004611440565b61075b565b6103376040516020016102f990611902565b604051602081830303815290604052805190602001206040518060400160405280600a81526020016921a7a72a2927a62622a960b11b8152506107b5565b610342838383610865565b505050565b600061035b6040516020016102f990611902565b610364826108c2565b92915050565b61037c6040516020016102f990611902565b6103a77f00000000000000000000000000000000000000000000000000000000000000008383610973565b5050565b6103bd6040516020016102f990611902565b60006103e87f0000000000000000000000000000000000000000000000000000000000000000610b2a565b9050806001600160a01b0316856001600160a01b03161480156104085750815b1561041d57610418858585610bd7565b610428565b610428858585610865565b5050505050565b610437611300565b60008281526002602081815260409283902083516101008101855281546001600160a01b0390811660808084019182526001850154831660a08086019190915296850154831660c080860191909152600386015490931660e0850152908352865191820187526004840154825260058401548286015260068401548288015260078401546060808401919091526008850154918301919091526009840154958201959095528184015284519283018552600a82015460ff161515835293840191909152600b81018054919284019161050e90611926565b80601f016020809104026020016040519081016040528092919081815260200182805461053a90611926565b80156105875780601f1061055c57610100808354040283529160200191610587565b820191906000526020600020905b81548152906001019060200180831161056a57829003601f168201915b5050505050815250509050919050565b60006105a36003610c2b565b905090565b60606105b660038484610c35565b9392505050565b6105cf6040516020016102f990611902565b6000818152600260208190526040822080546001600160a01b0319908116825560018201805482169055918101805483169055600381018054909216909155600481018290556005810182905560068101829055600781018290556008810182905560098101829055600a8101805460ff1916905590610652600b830182611387565b506103a79050600382610cf5565b6106726040516020016102f990611902565b6000828152600260208181526040928390208451805182546001600160a01b03199081166001600160a01b0392831617845582850151600185018054831691841691909117905582870151958401805482169683169690961790955560609182015160038401805490961691161790935584820151805160048301559182015160058201558184015160068201558183015160078201556080820151600882015560a09091015160098201559183015151600a8301805460ff1916911515919091179055820151829190600b82019061074b90826119ae565b5061034291506003905083610d01565b6000546001600160a01b031633146107a9576040805163a35b150b60e01b81523360048201526024810191909152600360448201526223a7ab60e91b60648201526084015b60405180910390fd5b6107b281610d0d565b50565b60405163ac4ab3fb60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063ac4ab3fb906108039033908690600401611a6d565b602060405180830381865afa158015610820573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108449190611a86565b6103a757338160405163a35b150b60e01b81526004016107a0929190611aa3565b306001600160a01b0382160361088d5760405162461bcd60e51b81526004016107a090611ac7565b6108b97f0000000000000000000000000000000000000000000000000000000000000000848385610d6e565b61034283610ea4565b6001600160a01b0381166000818152600160205260408082205490516370a0823160e01b8152919290918391906370a08231906109039030906004016113d5565b602060405180830381865afa158015610920573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109449190611af7565b6001600160a01b0385166000908152600160205260409020819055905061096b8282611b26565b949350505050565b8060000361098057505050565b6000836001600160a01b031663bd02d0f56040516020016109d2906020808252601f908201527f4e41544956455f544f4b454e5f5452414e534645525f4741535f4c494d495400604082015260600190565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b8152600401610a0691815260200190565b602060405180830381865afa158015610a23573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a479190611af7565b9050600080846001600160a01b0316848490604051600060405180830381858888f193505050503d8060008114610a9a576040519150601f19603f3d011682016040523d82523d6000602084013e610a9f565b606091505b50915091508115610ab257505050505050565b600081604051602001610ac59190611b39565b60405160208183030381529060405290507f6c4e9d88878940a822d239187b8b00d62a80dce222d53bc5f1fb072d9c34b68181604051610b059190611b39565b60405180910390a18585604051633828654560e11b81526004016107a0929190611a6d565b6000816001600160a01b03166321f8a721604051602001610b629060208082526003908201526215d39560ea1b604082015260600190565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b8152600401610b9691815260200190565b602060405180830381865afa158015610bb3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103649190611b4c565b306001600160a01b03821603610bff5760405162461bcd60e51b81526004016107a090611ac7565b6108b97f0000000000000000000000000000000000000000000000000000000000000000848385610f2d565b6000610364825490565b60606000610c4285610c2b565b905080831115610c50578092505b6000610c5c8585611b26565b6001600160401b03811115610c7357610c73611669565b604051908082528060200260200182016040528015610c9c578160200160208202803683370190505b509050845b84811015610ceb57610cb38782610f98565b82610cbe8884611b26565b81518110610cce57610cce611b69565b602090810291909101015280610ce381611b7f565b915050610ca1565b5095945050505050565b60006105b68383610fa4565b60006105b68383611097565b600080546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527f53351836099c03ffc3b1727d8abd4b0222afa87d4ed76ae3102d51369ef7f785910160405180910390a15050565b8015610e9e576000846001600160a01b031663bd02d0f5610d8e866110e6565b6040518263ffffffff1660e01b8152600401610dac91815260200190565b602060405180830381865afa158015610dc9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ded9190611af7565b9050600080610dfe8686868661116e565b915091508115610e1057505050610e9e565b600081604051602001610e239190611b39565b60405160208183030381529060405290507f9db60cdf21cde7f760995e23662841725e6aa63be48799796db12b7b2e6b17e281604051610e639190611b39565b60405180910390a160405163012f3b8f60e71b81526001600160a01b03808916600483015287166024820152604481018690526064016107a0565b50505050565b6040516370a0823160e01b81526001600160a01b038216906370a0823190610ed09030906004016113d5565b602060405180830381865afa158015610eed573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f119190611af7565b6001600160a01b03909116600090815260016020526040902055565b8015610e9e57604051632e1a7d4d60e01b8152600481018290526001600160a01b03841690632e1a7d4d90602401600060405180830381600087803b158015610f7557600080fd5b505af1158015610f89573d6000803e3d6000fd5b50505050610e9e848383610973565b60006105b683836112d6565b6000818152600183016020526040812054801561108d576000610fc8600183611b26565b8554909150600090610fdc90600190611b26565b9050818114611041576000866000018281548110610ffc57610ffc611b69565b906000526020600020015490508087600001848154811061101f5761101f611b69565b6000918252602080832090910192909255918252600188019052604090208390555b855486908061105257611052611b98565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610364565b6000915050610364565b60008181526001830160205260408120546110de57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610364565b506000610364565b6000604051602001611124906020808252601890820152771513d2d15397d514905394d1915497d1d054d7d31253525560421b604082015260600190565b60408051601f198184030181528282528051602091820120908301526001600160a01b03841690820152606001604051602081830303815290604052805190602001209050919050565b60006060600063a9059cbb60e01b868660405160240161118f929190611a6d565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050509050600080886001600160a01b031686846040516111e09190611bae565b60006040518083038160008787f1925050503d806000811461121e576040519150601f19603f3d011682016040523d82523d6000602084013e611223565b606091505b509150915081156112c4578051600003611281576001600160a01b0389163b6112815760006040518060400160405280601481526020017310d85b1b081d1bc81b9bdb8b58dbdb9d1c9858dd60621b815250945094505050506112cd565b600081511180156112a35750808060200190518101906112a19190611a86565b155b156112b6576000945092506112cd915050565b6001945092506112cd915050565b60009450925050505b94509492505050565b60008260000182815481106112ed576112ed611b69565b9060005260206000200154905092915050565b60408051610100810190915260006080820181815260a0830182905260c0830182905260e08301919091528190815260200161136b6040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b8152604080516020808201835260008252830152606091015290565b50805461139390611926565b6000825580601f106113a3575050565b601f0160209004906000526020600020908101906107b291905b808211156113d157600081556001016113bd565b5090565b6001600160a01b0391909116815260200190565b6001600160a01b03811681146107b257600080fd5b60008060006060848603121561141357600080fd5b833561141e816113e9565b9250602084013591506040840135611435816113e9565b809150509250925092565b60006020828403121561145257600080fd5b81356105b6816113e9565b6000806040838503121561147057600080fd5b823561147b816113e9565b946020939093013593505050565b80151581146107b257600080fd5b600080600080608085870312156114ad57600080fd5b84356114b8816113e9565b93506020850135925060408501356114cf816113e9565b915060608501356114df81611489565b939692955090935050565b6000602082840312156114fc57600080fd5b5035919050565b60005b8381101561151e578181015183820152602001611506565b50506000910152565b6000815180845261153f816020860160208601611503565b601f01601f19169290920160200192915050565b602081526000825160018060a01b0380825116602085015280602083015116604085015280604083015116606085015280606083015116608085015250506020830151805160a0840152602081015160c0840152604081015160e08401526060810151610100840152608081015161012084015260a08101516101408401525060408301516115e86101608401825115159052565b5060608301516101808381015261096b6101a0840182611527565b6000806040838503121561161657600080fd5b50508035926020909101359150565b6020808252825182820181905260009190848201906040850190845b8181101561165d57835183529284019291840191600101611641565b50909695505050505050565b634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b03811182821017156116a1576116a1611669565b60405290565b600060c082840312156116b957600080fd5b60405160c081016001600160401b03811182821017156116db576116db611669565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a08201525092915050565b60006020828403121561173257600080fd5b604051602081016001600160401b038111828210171561175457611754611669565b604052905080823561176581611489565b905292915050565b600082601f83011261177e57600080fd5b81356001600160401b038082111561179857611798611669565b604051601f8301601f19908116603f011681019082821181831017156117c0576117c0611669565b816040528381528660208588010111156117d957600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806040838503121561180c57600080fd5b8235915060208301356001600160401b038082111561182a57600080fd5b9084019081860361018081121561184057600080fd5b61184861167f565b608082121561185657600080fd5b61185e61167f565b9150833561186b816113e9565b8252602084013561187b816113e9565b6020830152604084013561188e816113e9565b604083015260608401356118a1816113e9565b60608301528181526118b688608086016116a7565b60208201526118c9886101408601611720565b60408201526101608401359150828211156118e357600080fd5b6118ef8883860161176d565b6060820152809450505050509250929050565b6020808252600a908201526921a7a72a2927a62622a960b11b604082015260600190565b600181811c9082168061193a57607f821691505b60208210810361195a57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561034257600081815260208120601f850160051c810160208610156119875750805b601f850160051c820191505b818110156119a657828155600101611993565b505050505050565b81516001600160401b038111156119c7576119c7611669565b6119db816119d58454611926565b84611960565b602080601f831160018114611a1057600084156119f85750858301515b600019600386901b1c1916600185901b1785556119a6565b600085815260208120601f198616915b82811015611a3f57888601518255948401946001909101908401611a20565b5085821015611a5d5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6001600160a01b03929092168252602082015260400190565b600060208284031215611a9857600080fd5b81516105b681611489565b6001600160a01b038316815260406020820181905260009061096b90830184611527565b6020808252601690820152752130b7359d1034b73b30b634b2103932b1b2b4bb32b960511b604082015260600190565b600060208284031215611b0957600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561036457610364611b10565b6020815260006105b66020830184611527565b600060208284031215611b5e57600080fd5b81516105b6816113e9565b634e487b7160e01b600052603260045260246000fd5b600060018201611b9157611b91611b10565b5060010190565b634e487b7160e01b600052603160045260246000fd5b60008251611bc0818460208701611503565b919091019291505056fea26469706673582212200ee995de88aa4dda30972f945c5c85a072c52caf726aecf7aed3b711f2fa9eeb64736f6c63430008100033";

type DepositStoreConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: DepositStoreConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class DepositStore__factory extends ContractFactory {
  constructor(...args: DepositStoreConstructorParams) {
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
  ): Promise<DepositStore> {
    return super.deploy(_roleStore, _dataStore, overrides || {}) as Promise<DepositStore>;
  }
  override getDeployTransaction(
    _roleStore: PromiseOrValue<string>,
    _dataStore: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_roleStore, _dataStore, overrides || {});
  }
  override attach(address: string): DepositStore {
    return super.attach(address) as DepositStore;
  }
  override connect(signer: Signer): DepositStore__factory {
    return super.connect(signer) as DepositStore__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DepositStoreInterface {
    return new utils.Interface(_abi) as DepositStoreInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): DepositStore {
    return new Contract(address, _abi, signerOrProvider) as DepositStore;
  }
}