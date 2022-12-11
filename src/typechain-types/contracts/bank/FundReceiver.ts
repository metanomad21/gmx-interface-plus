/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";

export interface FundReceiverInterface extends utils.Interface {
  functions: {
    "dataStore()": FunctionFragment;
    "gov()": FunctionFragment;
    "recoverNativeToken(address,uint256)": FunctionFragment;
    "roleStore()": FunctionFragment;
    "setGov(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "dataStore" | "gov" | "recoverNativeToken" | "roleStore" | "setGov"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "dataStore", values?: undefined): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recoverNativeToken",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "roleStore", values?: undefined): string;
  encodeFunctionData(functionFragment: "setGov", values: [PromiseOrValue<string>]): string;

  decodeFunctionResult(functionFragment: "dataStore", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "recoverNativeToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "roleStore", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;

  events: {
    "SetGov(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SetGov"): EventFragment;
}

export interface SetGovEventObject {
  prevGov: string;
  nextGov: string;
}
export type SetGovEvent = TypedEvent<[string, string], SetGovEventObject>;

export type SetGovEventFilter = TypedEventFilter<SetGovEvent>;

export interface FundReceiver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FundReceiverInterface;

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

  functions: {
    dataStore(overrides?: CallOverrides): Promise<[string]>;

    gov(overrides?: CallOverrides): Promise<[string]>;

    recoverNativeToken(
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    roleStore(overrides?: CallOverrides): Promise<[string]>;

    setGov(
      _gov: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  dataStore(overrides?: CallOverrides): Promise<string>;

  gov(overrides?: CallOverrides): Promise<string>;

  recoverNativeToken(
    receiver: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  roleStore(overrides?: CallOverrides): Promise<string>;

  setGov(
    _gov: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    dataStore(overrides?: CallOverrides): Promise<string>;

    gov(overrides?: CallOverrides): Promise<string>;

    recoverNativeToken(
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    roleStore(overrides?: CallOverrides): Promise<string>;

    setGov(_gov: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "SetGov(address,address)"(prevGov?: null, nextGov?: null): SetGovEventFilter;
    SetGov(prevGov?: null, nextGov?: null): SetGovEventFilter;
  };

  estimateGas: {
    dataStore(overrides?: CallOverrides): Promise<BigNumber>;

    gov(overrides?: CallOverrides): Promise<BigNumber>;

    recoverNativeToken(
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    roleStore(overrides?: CallOverrides): Promise<BigNumber>;

    setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;
  };

  populateTransaction: {
    dataStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recoverNativeToken(
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    roleStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setGov(
      _gov: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}