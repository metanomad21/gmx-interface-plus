/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { DataStore, DataStoreInterface } from "../../../contracts/data/DataStore";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract RoleStore",
        name: "_roleStore",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "addressValues",
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
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "int256",
        name: "value",
        type: "int256",
      },
    ],
    name: "applyDeltaToInt",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
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
      {
        internalType: "int256",
        name: "value",
        type: "int256",
      },
      {
        internalType: "bool",
        name: "ensurePositiveValue",
        type: "bool",
      },
    ],
    name: "applyDeltaToUint",
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
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "int256",
        name: "value",
        type: "int256",
      },
    ],
    name: "applyDeltaToUint",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "boolValues",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
    name: "dataValues",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
        internalType: "int256",
        name: "value",
        type: "int256",
      },
    ],
    name: "decrementInt",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
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
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "decrementUint",
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
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "getAddress",
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
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "getBool",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    name: "getData",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
    name: "getInt",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
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
    name: "getString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    name: "getUint",
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
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "int256",
        name: "value",
        type: "int256",
      },
    ],
    name: "incrementInt",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
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
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "incrementUint",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "intValues",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
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
        internalType: "address",
        name: "value",
        type: "address",
      },
    ],
    name: "setAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
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
      {
        internalType: "bool",
        name: "value",
        type: "bool",
      },
    ],
    name: "setBool",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
      {
        internalType: "bytes32",
        name: "value",
        type: "bytes32",
      },
    ],
    name: "setData",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
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
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "int256",
        name: "value",
        type: "int256",
      },
    ],
    name: "setInt",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
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
      {
        internalType: "string",
        name: "value",
        type: "string",
      },
    ],
    name: "setString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
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
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setUint",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "stringValues",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
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
    name: "uintValues",
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
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161107738038061107783398101604081905261002f916100ac565b806100393361004b565b6001600160a01b0316608052506100dc565b600080546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527f53351836099c03ffc3b1727d8abd4b0222afa87d4ed76ae3102d51369ef7f785910160405180910390a15050565b6000602082840312156100be57600080fd5b81516001600160a01b03811681146100d557600080fd5b9392505050565b608051610f796100fe6000396000818161025a01526109120152610f796000f3fe608060405234801561001057600080fd5b50600436106101545760003560e01c806312d43a511461015957806321f8a7211461018957806322538dae146101b2578063340dbab3146101db5780633e49bed0146101fc57806344a242b11461020f57806346d28424146102425780634a4a7b041461025557806354f6127f1461027c5780635cf740951461029c5780636e899550146102bc5780636fae54f0146102dc578063743df325146102ef578063749ebfb81461030f5780637ae1cfca14610322578063986e791a146103455780639deed1c814610358578063abfdcced1461036b578063bd02d0f51461037e578063ca446dd91461039e578063cbb093dd146103b1578063cfad57a2146103c4578063d38eebc7146103d9578063dc97d962146103f9578063e2a4853a14610419578063e4e36c4e146103b1578063e98aabc11461042c578063f15caeac1461043f575b600080fd5b60005461016c906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61016c610197366004610aa9565b6000908152600360205260409020546001600160a01b031690565b61016c6101c0366004610aa9565b6003602052600090815260409020546001600160a01b031681565b6101ee6101e9366004610ac2565b610452565b604051908152602001610180565b6101ee61020a366004610ac2565b6104d9565b61023261021d366004610aa9565b60046020526000908152604090205460ff1681565b6040519015158152602001610180565b6101ee610250366004610af2565b610503565b61016c7f000000000000000000000000000000000000000000000000000000000000000081565b6101ee61028a366004610aa9565b60009081526006602052604090205490565b6101ee6102aa366004610aa9565b60066020526000908152604090205481565b6102cf6102ca366004610b41565b610594565b6040516101809190610c41565b6101ee6102ea366004610ac2565b6105c8565b6101ee6102fd366004610aa9565b60026020526000908152604090205481565b6101ee61031d366004610ac2565b610610565b610232610330366004610aa9565b60009081526004602052604090205460ff1690565b6102cf610353366004610aa9565b61063a565b6101ee610366366004610ac2565b6106dc565b610232610379366004610c54565b610709565b6101ee61038c366004610aa9565b60009081526001602052604090205490565b61016c6103ac366004610ca0565b61073c565b6101ee6103bf366004610ac2565b61077c565b6103d76103d2366004610ccc565b6107aa565b005b6101ee6103e7366004610aa9565b60016020526000908152604090205481565b6101ee610407366004610aa9565b60009081526002602052604090205490565b6101ee610427366004610ac2565b610804565b6101ee61043a366004610ac2565b61082e565b6102cf61044d366004610aa9565b61085c565b60006104a460405160200161046690610ce7565b604051602081830303815290604052805190602001206040518060400160405280600a81526020016921a7a72a2927a62622a960b11b8152506108f6565b6000838152600160205260408120546104be908490610d21565b60008581526001602052604090208190559150505b92915050565b60006104ed60405160200161046690610ce7565b5060009182526002602052604090912081905590565b600061051760405160200161046690610ce7565b6000848152600160205260409020548280156105335750600084125b801561054e57508061054c61054786610d34565b6109aa565b115b1561056b575050600083815260016020526040812081905561058d565b60006105778286610a00565b6000878152600160205260409020819055925050505b9392505050565b60606105a860405160200161046690610ce7565b60008381526005602052604090206105c08382610dd9565b509092915050565b60006105dc60405160200161046690610ce7565b6000838152600260205260408120546105f6908490610e98565b600085815260026020526040902081905591505092915050565b600061062460405160200161046690610ce7565b5060009182526006602052604090912081905590565b600081815260056020526040902080546060919061065790610d50565b80601f016020809104026020016040519081016040528092919081815260200182805461068390610d50565b80156106d05780601f106106a5576101008083540402835291602001916106d0565b820191906000526020600020905b8154815290600101906020018083116106b357829003601f168201915b50505050509050919050565b60006106f060405160200161046690610ce7565b6000838152600160205260408120546104be9084610a00565b600061071d60405160200161046690610ce7565b50600091825260046020526040909120805460ff191682151517905590565b600061075060405160200161046690610ce7565b5060009182526003602052604090912080546001600160a01b0319166001600160a01b03831617905590565b600061079060405160200161046690610ce7565b6000838152600260205260408120546105f6908490610ebf565b6000546001600160a01b031633146107f8576040805163a35b150b60e01b81523360048201526024810191909152600360448201526223a7ab60e91b60648201526084015b60405180910390fd5b61080181610a37565b50565b600061081860405160200161046690610ce7565b5060009182526001602052604090912081905590565b600061084260405160200161046690610ce7565b6000838152600160205260408120546104be908490610ee7565b6005602052600090815260409020805461087590610d50565b80601f01602080910402602001604051908101604052809291908181526020018280546108a190610d50565b80156108ee5780601f106108c3576101008083540402835291602001916108ee565b820191906000526020600020905b8154815290600101906020018083116108d157829003601f168201915b505050505081565b60405163ac4ab3fb60e01b8152336004820152602481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063ac4ab3fb90604401602060405180830381865afa158015610961573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109859190610efa565b6109a657338160405163a35b150b60e01b81526004016107ef929190610f17565b5050565b6000808212156109fc5760405162461bcd60e51b815260206004820181905260248201527f53616665436173743a2076616c7565206d75737420626520706f73697469766560448201526064016107ef565b5090565b600080821315610a2457610a1382610a98565b610a1d9084610d21565b90506104d3565b610a2d82610a98565b61058d9084610ee7565b600080546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527f53351836099c03ffc3b1727d8abd4b0222afa87d4ed76ae3102d51369ef7f785910160405180910390a15050565b6000808212156109fc575060000390565b600060208284031215610abb57600080fd5b5035919050565b60008060408385031215610ad557600080fd5b50508035926020909101359150565b801515811461080157600080fd5b600080600060608486031215610b0757600080fd5b83359250602084013591506040840135610b2081610ae4565b809150509250925092565b634e487b7160e01b600052604160045260246000fd5b60008060408385031215610b5457600080fd5b8235915060208301356001600160401b0380821115610b7257600080fd5b818501915085601f830112610b8657600080fd5b813581811115610b9857610b98610b2b565b604051601f8201601f19908116603f01168101908382118183101715610bc057610bc0610b2b565b81604052828152886020848701011115610bd957600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b6000815180845260005b81811015610c2157602081850181015186830182015201610c05565b506000602082860101526020601f19601f83011685010191505092915050565b60208152600061058d6020830184610bfb565b60008060408385031215610c6757600080fd5b823591506020830135610c7981610ae4565b809150509250929050565b80356001600160a01b0381168114610c9b57600080fd5b919050565b60008060408385031215610cb357600080fd5b82359150610cc360208401610c84565b90509250929050565b600060208284031215610cde57600080fd5b61058d82610c84565b6020808252600a908201526921a7a72a2927a62622a960b11b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b808201808211156104d3576104d3610d0b565b6000600160ff1b8201610d4957610d49610d0b565b5060000390565b600181811c90821680610d6457607f821691505b602082108103610d8457634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115610dd457600081815260208120601f850160051c81016020861015610db15750805b601f850160051c820191505b81811015610dd057828155600101610dbd565b5050505b505050565b81516001600160401b03811115610df257610df2610b2b565b610e0681610e008454610d50565b84610d8a565b602080601f831160018114610e3b5760008415610e235750858301515b600019600386901b1c1916600185901b178555610dd0565b600085815260208120601f198616915b82811015610e6a57888601518255948401946001909101908401610e4b565b5085821015610e885787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b8181036000831280158383131683831282161715610eb857610eb8610d0b565b5092915050565b8082018281126000831280158216821582161715610edf57610edf610d0b565b505092915050565b818103818111156104d3576104d3610d0b565b600060208284031215610f0c57600080fd5b815161058d81610ae4565b6001600160a01b0383168152604060208201819052600090610f3b90830184610bfb565b94935050505056fea2646970667358221220ade85ae8aa8460888d1b754636219dcde4774c4d32642407f075dec04b12770064736f6c63430008100033";

type DataStoreConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: DataStoreConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class DataStore__factory extends ContractFactory {
  constructor(...args: DataStoreConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _roleStore: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DataStore> {
    return super.deploy(_roleStore, overrides || {}) as Promise<DataStore>;
  }
  override getDeployTransaction(
    _roleStore: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_roleStore, overrides || {});
  }
  override attach(address: string): DataStore {
    return super.attach(address) as DataStore;
  }
  override connect(signer: Signer): DataStore__factory {
    return super.connect(signer) as DataStore__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DataStoreInterface {
    return new utils.Interface(_abi) as DataStoreInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): DataStore {
    return new Contract(address, _abi, signerOrProvider) as DataStore;
  }
}