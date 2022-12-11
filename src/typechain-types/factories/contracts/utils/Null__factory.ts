/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { Null, NullInterface } from "../../../contracts/utils/Null";

const _abi = [
  {
    inputs: [],
    name: "BYTES",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60e3610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063e88343e6146038575b600080fd5b604d6040518060200160405280600081525081565b604051605891906061565b60405180910390f35b600060208083528351808285015260005b81811015608c578581018301518582016040015282016072565b506000604082860101526040601f19601f830116850101925050509291505056fea26469706673582212209576e220adf0612371e9562343a8b8aff40334f44c0913f203838c98eb36fe2364736f6c63430008100033";

type NullConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: NullConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Null__factory extends ContractFactory {
  constructor(...args: NullConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<Null> {
    return super.deploy(overrides || {}) as Promise<Null>;
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Null {
    return super.attach(address) as Null;
  }
  override connect(signer: Signer): Null__factory {
    return super.connect(signer) as Null__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NullInterface {
    return new utils.Interface(_abi) as NullInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Null {
    return new Contract(address, _abi, signerOrProvider) as Null;
  }
}