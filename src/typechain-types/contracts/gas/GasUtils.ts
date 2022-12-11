/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BigNumber, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";

export interface GasUtilsInterface extends utils.Interface {
  functions: {};

  events: {
    "KeeperExecutionFee(address,uint256)": EventFragment;
    "UserRefundFee(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "KeeperExecutionFee"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UserRefundFee"): EventFragment;
}

export interface KeeperExecutionFeeEventObject {
  keeper: string;
  amount: BigNumber;
}
export type KeeperExecutionFeeEvent = TypedEvent<[string, BigNumber], KeeperExecutionFeeEventObject>;

export type KeeperExecutionFeeEventFilter = TypedEventFilter<KeeperExecutionFeeEvent>;

export interface UserRefundFeeEventObject {
  user: string;
  amount: BigNumber;
}
export type UserRefundFeeEvent = TypedEvent<[string, BigNumber], UserRefundFeeEventObject>;

export type UserRefundFeeEventFilter = TypedEventFilter<UserRefundFeeEvent>;

export interface GasUtils extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GasUtilsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {};

  callStatic: {};

  filters: {
    "KeeperExecutionFee(address,uint256)"(keeper?: null, amount?: null): KeeperExecutionFeeEventFilter;
    KeeperExecutionFee(keeper?: null, amount?: null): KeeperExecutionFeeEventFilter;

    "UserRefundFee(address,uint256)"(user?: null, amount?: null): UserRefundFeeEventFilter;
    UserRefundFee(user?: null, amount?: null): UserRefundFeeEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}