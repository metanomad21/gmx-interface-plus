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

export interface OracleStoreInterface extends utils.Interface {
  functions: {
    "addSigner(address)": FunctionFragment;
    "getSigner(uint256)": FunctionFragment;
    "getSignerCount()": FunctionFragment;
    "getSigners(uint256,uint256)": FunctionFragment;
    "gov()": FunctionFragment;
    "removeSigner(address)": FunctionFragment;
    "roleStore()": FunctionFragment;
    "setGov(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addSigner"
      | "getSigner"
      | "getSignerCount"
      | "getSigners"
      | "gov"
      | "removeSigner"
      | "roleStore"
      | "setGov"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "addSigner", values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: "getSigner", values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: "getSignerCount", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getSigners",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(functionFragment: "removeSigner", values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: "roleStore", values?: undefined): string;
  encodeFunctionData(functionFragment: "setGov", values: [PromiseOrValue<string>]): string;

  decodeFunctionResult(functionFragment: "addSigner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getSigner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getSignerCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getSigners", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "removeSigner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "roleStore", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;

  events: {
    "SetGov(address,address)": EventFragment;
    "SignerAdded(address)": EventFragment;
    "SignerRemoved(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SetGov"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SignerAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SignerRemoved"): EventFragment;
}

export interface SetGovEventObject {
  prevGov: string;
  nextGov: string;
}
export type SetGovEvent = TypedEvent<[string, string], SetGovEventObject>;

export type SetGovEventFilter = TypedEventFilter<SetGovEvent>;

export interface SignerAddedEventObject {
  signer: string;
}
export type SignerAddedEvent = TypedEvent<[string], SignerAddedEventObject>;

export type SignerAddedEventFilter = TypedEventFilter<SignerAddedEvent>;

export interface SignerRemovedEventObject {
  signer: string;
}
export type SignerRemovedEvent = TypedEvent<[string], SignerRemovedEventObject>;

export type SignerRemovedEventFilter = TypedEventFilter<SignerRemovedEvent>;

export interface OracleStore extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OracleStoreInterface;

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
    addSigner(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getSigner(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;

    getSignerCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getSigners(
      start: PromiseOrValue<BigNumberish>,
      end: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    gov(overrides?: CallOverrides): Promise<[string]>;

    removeSigner(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    roleStore(overrides?: CallOverrides): Promise<[string]>;

    setGov(
      _gov: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addSigner(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getSigner(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

  getSignerCount(overrides?: CallOverrides): Promise<BigNumber>;

  getSigners(
    start: PromiseOrValue<BigNumberish>,
    end: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  gov(overrides?: CallOverrides): Promise<string>;

  removeSigner(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  roleStore(overrides?: CallOverrides): Promise<string>;

  setGov(
    _gov: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addSigner(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    getSigner(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

    getSignerCount(overrides?: CallOverrides): Promise<BigNumber>;

    getSigners(
      start: PromiseOrValue<BigNumberish>,
      end: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    gov(overrides?: CallOverrides): Promise<string>;

    removeSigner(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    roleStore(overrides?: CallOverrides): Promise<string>;

    setGov(_gov: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "SetGov(address,address)"(prevGov?: null, nextGov?: null): SetGovEventFilter;
    SetGov(prevGov?: null, nextGov?: null): SetGovEventFilter;

    "SignerAdded(address)"(signer?: null): SignerAddedEventFilter;
    SignerAdded(signer?: null): SignerAddedEventFilter;

    "SignerRemoved(address)"(signer?: null): SignerRemovedEventFilter;
    SignerRemoved(signer?: null): SignerRemovedEventFilter;
  };

  estimateGas: {
    addSigner(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getSigner(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    getSignerCount(overrides?: CallOverrides): Promise<BigNumber>;

    getSigners(
      start: PromiseOrValue<BigNumberish>,
      end: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    gov(overrides?: CallOverrides): Promise<BigNumber>;

    removeSigner(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    roleStore(overrides?: CallOverrides): Promise<BigNumber>;

    setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;
  };

  populateTransaction: {
    addSigner(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getSigner(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSignerCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSigners(
      start: PromiseOrValue<BigNumberish>,
      end: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeSigner(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    roleStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setGov(
      _gov: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}