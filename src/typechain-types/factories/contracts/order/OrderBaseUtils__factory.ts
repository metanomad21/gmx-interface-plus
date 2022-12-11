/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { OrderBaseUtils, OrderBaseUtilsInterface } from "../../../contracts/order/OrderBaseUtils";

const _abi = [
  {
    inputs: [],
    name: "EmptyOrder",
    type: "error",
  },
  {
    inputs: [],
    name: "UnsupportedOrderType",
    type: "error",
  },
];

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220fce606dad121ca3326d412945452300cafce861c51d9e8d5d3801f0a6783114264736f6c63430008100033";

type OrderBaseUtilsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: OrderBaseUtilsConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class OrderBaseUtils__factory extends ContractFactory {
  constructor(...args: OrderBaseUtilsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<OrderBaseUtils> {
    return super.deploy(overrides || {}) as Promise<OrderBaseUtils>;
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OrderBaseUtils {
    return super.attach(address) as OrderBaseUtils;
  }
  override connect(signer: Signer): OrderBaseUtils__factory {
    return super.connect(signer) as OrderBaseUtils__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OrderBaseUtilsInterface {
    return new utils.Interface(_abi) as OrderBaseUtilsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): OrderBaseUtils {
    return new Contract(address, _abi, signerOrProvider) as OrderBaseUtils;
  }
}