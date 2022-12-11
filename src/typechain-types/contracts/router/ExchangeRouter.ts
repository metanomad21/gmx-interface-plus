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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";

export declare namespace DepositUtils {
  export type CreateDepositParamsStruct = {
    receiver: PromiseOrValue<string>;
    callbackContract: PromiseOrValue<string>;
    market: PromiseOrValue<string>;
    minMarketTokens: PromiseOrValue<BigNumberish>;
    shouldUnwrapNativeToken: PromiseOrValue<boolean>;
    executionFee: PromiseOrValue<BigNumberish>;
    callbackGasLimit: PromiseOrValue<BigNumberish>;
  };

  export type CreateDepositParamsStructOutput = [string, string, string, BigNumber, boolean, BigNumber, BigNumber] & {
    receiver: string;
    callbackContract: string;
    market: string;
    minMarketTokens: BigNumber;
    shouldUnwrapNativeToken: boolean;
    executionFee: BigNumber;
    callbackGasLimit: BigNumber;
  };
}

export declare namespace OrderBaseUtils {
  export type CreateOrderParamsAddressesStruct = {
    receiver: PromiseOrValue<string>;
    callbackContract: PromiseOrValue<string>;
    market: PromiseOrValue<string>;
    initialCollateralToken: PromiseOrValue<string>;
    swapPath: PromiseOrValue<string>[];
  };

  export type CreateOrderParamsAddressesStructOutput = [string, string, string, string, string[]] & {
    receiver: string;
    callbackContract: string;
    market: string;
    initialCollateralToken: string;
    swapPath: string[];
  };

  export type CreateOrderParamsNumbersStruct = {
    sizeDeltaUsd: PromiseOrValue<BigNumberish>;
    triggerPrice: PromiseOrValue<BigNumberish>;
    acceptablePrice: PromiseOrValue<BigNumberish>;
    executionFee: PromiseOrValue<BigNumberish>;
    callbackGasLimit: PromiseOrValue<BigNumberish>;
    minOutputAmount: PromiseOrValue<BigNumberish>;
  };

  export type CreateOrderParamsNumbersStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    sizeDeltaUsd: BigNumber;
    triggerPrice: BigNumber;
    acceptablePrice: BigNumber;
    executionFee: BigNumber;
    callbackGasLimit: BigNumber;
    minOutputAmount: BigNumber;
  };

  export type CreateOrderParamsStruct = {
    addresses: OrderBaseUtils.CreateOrderParamsAddressesStruct;
    numbers: OrderBaseUtils.CreateOrderParamsNumbersStruct;
    orderType: PromiseOrValue<BigNumberish>;
    isLong: PromiseOrValue<boolean>;
    shouldUnwrapNativeToken: PromiseOrValue<boolean>;
  };

  export type CreateOrderParamsStructOutput = [
    OrderBaseUtils.CreateOrderParamsAddressesStructOutput,
    OrderBaseUtils.CreateOrderParamsNumbersStructOutput,
    number,
    boolean,
    boolean
  ] & {
    addresses: OrderBaseUtils.CreateOrderParamsAddressesStructOutput;
    numbers: OrderBaseUtils.CreateOrderParamsNumbersStructOutput;
    orderType: number;
    isLong: boolean;
    shouldUnwrapNativeToken: boolean;
  };
}

export declare namespace WithdrawalUtils {
  export type CreateWithdrawalParamsStruct = {
    receiver: PromiseOrValue<string>;
    callbackContract: PromiseOrValue<string>;
    market: PromiseOrValue<string>;
    marketTokensLongAmount: PromiseOrValue<BigNumberish>;
    marketTokensShortAmount: PromiseOrValue<BigNumberish>;
    minLongTokenAmount: PromiseOrValue<BigNumberish>;
    minShortTokenAmount: PromiseOrValue<BigNumberish>;
    shouldUnwrapNativeToken: PromiseOrValue<boolean>;
    executionFee: PromiseOrValue<BigNumberish>;
    callbackGasLimit: PromiseOrValue<BigNumberish>;
  };

  export type CreateWithdrawalParamsStructOutput = [
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    BigNumber,
    BigNumber
  ] & {
    receiver: string;
    callbackContract: string;
    market: string;
    marketTokensLongAmount: BigNumber;
    marketTokensShortAmount: BigNumber;
    minLongTokenAmount: BigNumber;
    minShortTokenAmount: BigNumber;
    shouldUnwrapNativeToken: boolean;
    executionFee: BigNumber;
    callbackGasLimit: BigNumber;
  };
}

export interface ExchangeRouterInterface extends utils.Interface {
  functions: {
    "cancelOrder(bytes32)": FunctionFragment;
    "claimAffiliateRewards(address[],address[],address)": FunctionFragment;
    "claimFundingFees(address[],address[],address)": FunctionFragment;
    "createDeposit((address,address,address,uint256,bool,uint256,uint256))": FunctionFragment;
    "createOrder(((address,address,address,address,address[]),(uint256,uint256,uint256,uint256,uint256,uint256),uint8,bool,bool),bytes32)": FunctionFragment;
    "createWithdrawal((address,address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256))": FunctionFragment;
    "dataStore()": FunctionFragment;
    "depositHandler()": FunctionFragment;
    "depositStore()": FunctionFragment;
    "eventEmitter()": FunctionFragment;
    "gov()": FunctionFragment;
    "multicall(bytes[])": FunctionFragment;
    "orderHandler()": FunctionFragment;
    "orderStore()": FunctionFragment;
    "recoverNativeToken(address,uint256)": FunctionFragment;
    "referralStorage()": FunctionFragment;
    "roleStore()": FunctionFragment;
    "router()": FunctionFragment;
    "sendTokens(address,address,uint256)": FunctionFragment;
    "sendWnt(address,uint256)": FunctionFragment;
    "setGov(address)": FunctionFragment;
    "updateOrder(bytes32,uint256,uint256,uint256)": FunctionFragment;
    "withdrawalHandler()": FunctionFragment;
    "withdrawalStore()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cancelOrder"
      | "claimAffiliateRewards"
      | "claimFundingFees"
      | "createDeposit"
      | "createOrder"
      | "createWithdrawal"
      | "dataStore"
      | "depositHandler"
      | "depositStore"
      | "eventEmitter"
      | "gov"
      | "multicall"
      | "orderHandler"
      | "orderStore"
      | "recoverNativeToken"
      | "referralStorage"
      | "roleStore"
      | "router"
      | "sendTokens"
      | "sendWnt"
      | "setGov"
      | "updateOrder"
      | "withdrawalHandler"
      | "withdrawalStore"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "cancelOrder", values: [PromiseOrValue<BytesLike>]): string;
  encodeFunctionData(
    functionFragment: "claimAffiliateRewards",
    values: [PromiseOrValue<string>[], PromiseOrValue<string>[], PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "claimFundingFees",
    values: [PromiseOrValue<string>[], PromiseOrValue<string>[], PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "createDeposit", values: [DepositUtils.CreateDepositParamsStruct]): string;
  encodeFunctionData(
    functionFragment: "createOrder",
    values: [OrderBaseUtils.CreateOrderParamsStruct, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "createWithdrawal",
    values: [WithdrawalUtils.CreateWithdrawalParamsStruct]
  ): string;
  encodeFunctionData(functionFragment: "dataStore", values?: undefined): string;
  encodeFunctionData(functionFragment: "depositHandler", values?: undefined): string;
  encodeFunctionData(functionFragment: "depositStore", values?: undefined): string;
  encodeFunctionData(functionFragment: "eventEmitter", values?: undefined): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(functionFragment: "multicall", values: [PromiseOrValue<BytesLike>[]]): string;
  encodeFunctionData(functionFragment: "orderHandler", values?: undefined): string;
  encodeFunctionData(functionFragment: "orderStore", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recoverNativeToken",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "referralStorage", values?: undefined): string;
  encodeFunctionData(functionFragment: "roleStore", values?: undefined): string;
  encodeFunctionData(functionFragment: "router", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sendTokens",
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "sendWnt",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "setGov", values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: "updateOrder",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "withdrawalHandler", values?: undefined): string;
  encodeFunctionData(functionFragment: "withdrawalStore", values?: undefined): string;

  decodeFunctionResult(functionFragment: "cancelOrder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimAffiliateRewards", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimFundingFees", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createDeposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createOrder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createWithdrawal", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dataStore", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositHandler", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositStore", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "eventEmitter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "orderHandler", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "orderStore", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "recoverNativeToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "referralStorage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "roleStore", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sendTokens", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sendWnt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updateOrder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdrawalHandler", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdrawalStore", data: BytesLike): Result;

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

export interface ExchangeRouter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ExchangeRouterInterface;

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
    cancelOrder(
      key: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimAffiliateRewards(
      markets: PromiseOrValue<string>[],
      tokens: PromiseOrValue<string>[],
      receiver: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimFundingFees(
      markets: PromiseOrValue<string>[],
      tokens: PromiseOrValue<string>[],
      receiver: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createDeposit(
      params: DepositUtils.CreateDepositParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createOrder(
      params: OrderBaseUtils.CreateOrderParamsStruct,
      referralCode: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createWithdrawal(
      params: WithdrawalUtils.CreateWithdrawalParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    dataStore(overrides?: CallOverrides): Promise<[string]>;

    depositHandler(overrides?: CallOverrides): Promise<[string]>;

    depositStore(overrides?: CallOverrides): Promise<[string]>;

    eventEmitter(overrides?: CallOverrides): Promise<[string]>;

    gov(overrides?: CallOverrides): Promise<[string]>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    orderHandler(overrides?: CallOverrides): Promise<[string]>;

    orderStore(overrides?: CallOverrides): Promise<[string]>;

    recoverNativeToken(
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    referralStorage(overrides?: CallOverrides): Promise<[string]>;

    roleStore(overrides?: CallOverrides): Promise<[string]>;

    router(overrides?: CallOverrides): Promise<[string]>;

    sendTokens(
      token: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sendWnt(
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setGov(
      _gov: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateOrder(
      key: PromiseOrValue<BytesLike>,
      sizeDeltaUsd: PromiseOrValue<BigNumberish>,
      acceptablePrice: PromiseOrValue<BigNumberish>,
      triggerPrice: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawalHandler(overrides?: CallOverrides): Promise<[string]>;

    withdrawalStore(overrides?: CallOverrides): Promise<[string]>;
  };

  cancelOrder(
    key: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimAffiliateRewards(
    markets: PromiseOrValue<string>[],
    tokens: PromiseOrValue<string>[],
    receiver: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimFundingFees(
    markets: PromiseOrValue<string>[],
    tokens: PromiseOrValue<string>[],
    receiver: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createDeposit(
    params: DepositUtils.CreateDepositParamsStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createOrder(
    params: OrderBaseUtils.CreateOrderParamsStruct,
    referralCode: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createWithdrawal(
    params: WithdrawalUtils.CreateWithdrawalParamsStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  dataStore(overrides?: CallOverrides): Promise<string>;

  depositHandler(overrides?: CallOverrides): Promise<string>;

  depositStore(overrides?: CallOverrides): Promise<string>;

  eventEmitter(overrides?: CallOverrides): Promise<string>;

  gov(overrides?: CallOverrides): Promise<string>;

  multicall(
    data: PromiseOrValue<BytesLike>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  orderHandler(overrides?: CallOverrides): Promise<string>;

  orderStore(overrides?: CallOverrides): Promise<string>;

  recoverNativeToken(
    receiver: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  referralStorage(overrides?: CallOverrides): Promise<string>;

  roleStore(overrides?: CallOverrides): Promise<string>;

  router(overrides?: CallOverrides): Promise<string>;

  sendTokens(
    token: PromiseOrValue<string>,
    receiver: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sendWnt(
    receiver: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setGov(
    _gov: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateOrder(
    key: PromiseOrValue<BytesLike>,
    sizeDeltaUsd: PromiseOrValue<BigNumberish>,
    acceptablePrice: PromiseOrValue<BigNumberish>,
    triggerPrice: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawalHandler(overrides?: CallOverrides): Promise<string>;

  withdrawalStore(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    cancelOrder(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;

    claimAffiliateRewards(
      markets: PromiseOrValue<string>[],
      tokens: PromiseOrValue<string>[],
      receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    claimFundingFees(
      markets: PromiseOrValue<string>[],
      tokens: PromiseOrValue<string>[],
      receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    createDeposit(params: DepositUtils.CreateDepositParamsStruct, overrides?: CallOverrides): Promise<string>;

    createOrder(
      params: OrderBaseUtils.CreateOrderParamsStruct,
      referralCode: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    createWithdrawal(params: WithdrawalUtils.CreateWithdrawalParamsStruct, overrides?: CallOverrides): Promise<string>;

    dataStore(overrides?: CallOverrides): Promise<string>;

    depositHandler(overrides?: CallOverrides): Promise<string>;

    depositStore(overrides?: CallOverrides): Promise<string>;

    eventEmitter(overrides?: CallOverrides): Promise<string>;

    gov(overrides?: CallOverrides): Promise<string>;

    multicall(data: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<string[]>;

    orderHandler(overrides?: CallOverrides): Promise<string>;

    orderStore(overrides?: CallOverrides): Promise<string>;

    recoverNativeToken(
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    referralStorage(overrides?: CallOverrides): Promise<string>;

    roleStore(overrides?: CallOverrides): Promise<string>;

    router(overrides?: CallOverrides): Promise<string>;

    sendTokens(
      token: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    sendWnt(
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setGov(_gov: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    updateOrder(
      key: PromiseOrValue<BytesLike>,
      sizeDeltaUsd: PromiseOrValue<BigNumberish>,
      acceptablePrice: PromiseOrValue<BigNumberish>,
      triggerPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawalHandler(overrides?: CallOverrides): Promise<string>;

    withdrawalStore(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "SetGov(address,address)"(prevGov?: null, nextGov?: null): SetGovEventFilter;
    SetGov(prevGov?: null, nextGov?: null): SetGovEventFilter;
  };

  estimateGas: {
    cancelOrder(
      key: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimAffiliateRewards(
      markets: PromiseOrValue<string>[],
      tokens: PromiseOrValue<string>[],
      receiver: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimFundingFees(
      markets: PromiseOrValue<string>[],
      tokens: PromiseOrValue<string>[],
      receiver: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createDeposit(
      params: DepositUtils.CreateDepositParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createOrder(
      params: OrderBaseUtils.CreateOrderParamsStruct,
      referralCode: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createWithdrawal(
      params: WithdrawalUtils.CreateWithdrawalParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    dataStore(overrides?: CallOverrides): Promise<BigNumber>;

    depositHandler(overrides?: CallOverrides): Promise<BigNumber>;

    depositStore(overrides?: CallOverrides): Promise<BigNumber>;

    eventEmitter(overrides?: CallOverrides): Promise<BigNumber>;

    gov(overrides?: CallOverrides): Promise<BigNumber>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    orderHandler(overrides?: CallOverrides): Promise<BigNumber>;

    orderStore(overrides?: CallOverrides): Promise<BigNumber>;

    recoverNativeToken(
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    referralStorage(overrides?: CallOverrides): Promise<BigNumber>;

    roleStore(overrides?: CallOverrides): Promise<BigNumber>;

    router(overrides?: CallOverrides): Promise<BigNumber>;

    sendTokens(
      token: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sendWnt(
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    updateOrder(
      key: PromiseOrValue<BytesLike>,
      sizeDeltaUsd: PromiseOrValue<BigNumberish>,
      acceptablePrice: PromiseOrValue<BigNumberish>,
      triggerPrice: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawalHandler(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawalStore(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cancelOrder(
      key: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimAffiliateRewards(
      markets: PromiseOrValue<string>[],
      tokens: PromiseOrValue<string>[],
      receiver: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimFundingFees(
      markets: PromiseOrValue<string>[],
      tokens: PromiseOrValue<string>[],
      receiver: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createDeposit(
      params: DepositUtils.CreateDepositParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createOrder(
      params: OrderBaseUtils.CreateOrderParamsStruct,
      referralCode: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createWithdrawal(
      params: WithdrawalUtils.CreateWithdrawalParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    dataStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    depositHandler(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    depositStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    eventEmitter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    orderHandler(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    orderStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recoverNativeToken(
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    referralStorage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    roleStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    router(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sendTokens(
      token: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sendWnt(
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setGov(
      _gov: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateOrder(
      key: PromiseOrValue<BytesLike>,
      sizeDeltaUsd: PromiseOrValue<BigNumberish>,
      acceptablePrice: PromiseOrValue<BigNumberish>,
      triggerPrice: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawalHandler(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawalStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}