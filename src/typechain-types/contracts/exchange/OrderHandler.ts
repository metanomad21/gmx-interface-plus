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

export declare namespace OracleUtils {
  export type SetPricesParamsStruct = {
    signerInfo: PromiseOrValue<BigNumberish>;
    tokens: PromiseOrValue<string>[];
    compactedOracleBlockNumbers: PromiseOrValue<BigNumberish>[];
    compactedOracleTimestamps: PromiseOrValue<BigNumberish>[];
    compactedDecimals: PromiseOrValue<BigNumberish>[];
    compactedMinPrices: PromiseOrValue<BigNumberish>[];
    compactedMinPricesIndexes: PromiseOrValue<BigNumberish>[];
    compactedMaxPrices: PromiseOrValue<BigNumberish>[];
    compactedMaxPricesIndexes: PromiseOrValue<BigNumberish>[];
    signatures: PromiseOrValue<BytesLike>[];
    priceFeedTokens: PromiseOrValue<string>[];
  };

  export type SetPricesParamsStructOutput = [
    BigNumber,
    string[],
    BigNumber[],
    BigNumber[],
    BigNumber[],
    BigNumber[],
    BigNumber[],
    BigNumber[],
    BigNumber[],
    string[],
    string[]
  ] & {
    signerInfo: BigNumber;
    tokens: string[];
    compactedOracleBlockNumbers: BigNumber[];
    compactedOracleTimestamps: BigNumber[];
    compactedDecimals: BigNumber[];
    compactedMinPrices: BigNumber[];
    compactedMinPricesIndexes: BigNumber[];
    compactedMaxPrices: BigNumber[];
    compactedMaxPricesIndexes: BigNumber[];
    signatures: string[];
    priceFeedTokens: string[];
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

export interface OrderHandlerInterface extends utils.Interface {
  functions: {
    "_executeOrder(bytes32,(uint256,address[],uint256[],uint256[],uint256[],uint256[],uint256[],uint256[],uint256[],bytes[],address[]),address,uint256)": FunctionFragment;
    "createOrder(address,((address,address,address,address,address[]),(uint256,uint256,uint256,uint256,uint256,uint256),uint8,bool,bool))": FunctionFragment;
    "dataStore()": FunctionFragment;
    "eventEmitter()": FunctionFragment;
    "executeAdl(address,address,address,bool,uint256,(uint256,address[],uint256[],uint256[],uint256[],uint256[],uint256[],uint256[],uint256[],bytes[],address[]))": FunctionFragment;
    "executeLiquidation(address,address,address,bool,(uint256,address[],uint256[],uint256[],uint256[],uint256[],uint256[],uint256[],uint256[],bytes[],address[]))": FunctionFragment;
    "executeOrder(bytes32,(uint256,address[],uint256[],uint256[],uint256[],uint256[],uint256[],uint256[],uint256[],bytes[],address[]))": FunctionFragment;
    "feeReceiver()": FunctionFragment;
    "gov()": FunctionFragment;
    "marketStore()": FunctionFragment;
    "oracle()": FunctionFragment;
    "orderStore()": FunctionFragment;
    "positionStore()": FunctionFragment;
    "recoverNativeToken(address,uint256)": FunctionFragment;
    "referralStorage()": FunctionFragment;
    "roleStore()": FunctionFragment;
    "setGov(address)": FunctionFragment;
    "swapHandler()": FunctionFragment;
    "updateAdlState(address,bool,(uint256,address[],uint256[],uint256[],uint256[],uint256[],uint256[],uint256[],uint256[],bytes[],address[]))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_executeOrder"
      | "createOrder"
      | "dataStore"
      | "eventEmitter"
      | "executeAdl"
      | "executeLiquidation"
      | "executeOrder"
      | "feeReceiver"
      | "gov"
      | "marketStore"
      | "oracle"
      | "orderStore"
      | "positionStore"
      | "recoverNativeToken"
      | "referralStorage"
      | "roleStore"
      | "setGov"
      | "swapHandler"
      | "updateAdlState"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_executeOrder",
    values: [
      PromiseOrValue<BytesLike>,
      OracleUtils.SetPricesParamsStruct,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createOrder",
    values: [PromiseOrValue<string>, OrderBaseUtils.CreateOrderParamsStruct]
  ): string;
  encodeFunctionData(functionFragment: "dataStore", values?: undefined): string;
  encodeFunctionData(functionFragment: "eventEmitter", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "executeAdl",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>,
      PromiseOrValue<BigNumberish>,
      OracleUtils.SetPricesParamsStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executeLiquidation",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>,
      OracleUtils.SetPricesParamsStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executeOrder",
    values: [PromiseOrValue<BytesLike>, OracleUtils.SetPricesParamsStruct]
  ): string;
  encodeFunctionData(functionFragment: "feeReceiver", values?: undefined): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(functionFragment: "marketStore", values?: undefined): string;
  encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
  encodeFunctionData(functionFragment: "orderStore", values?: undefined): string;
  encodeFunctionData(functionFragment: "positionStore", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recoverNativeToken",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "referralStorage", values?: undefined): string;
  encodeFunctionData(functionFragment: "roleStore", values?: undefined): string;
  encodeFunctionData(functionFragment: "setGov", values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: "swapHandler", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateAdlState",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>, OracleUtils.SetPricesParamsStruct]
  ): string;

  decodeFunctionResult(functionFragment: "_executeOrder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createOrder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dataStore", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "eventEmitter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "executeAdl", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "executeLiquidation", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "executeOrder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeReceiver", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "marketStore", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "orderStore", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "positionStore", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "recoverNativeToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "referralStorage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "roleStore", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swapHandler", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updateAdlState", data: BytesLike): Result;

  events: {
    "OracleError(string)": EventFragment;
    "SetGov(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OracleError"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetGov"): EventFragment;
}

export interface OracleErrorEventObject {
  reason: string;
}
export type OracleErrorEvent = TypedEvent<[string], OracleErrorEventObject>;

export type OracleErrorEventFilter = TypedEventFilter<OracleErrorEvent>;

export interface SetGovEventObject {
  prevGov: string;
  nextGov: string;
}
export type SetGovEvent = TypedEvent<[string, string], SetGovEventObject>;

export type SetGovEventFilter = TypedEventFilter<SetGovEvent>;

export interface OrderHandler extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OrderHandlerInterface;

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
    _executeOrder(
      key: PromiseOrValue<BytesLike>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      keeper: PromiseOrValue<string>,
      startingGas: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createOrder(
      account: PromiseOrValue<string>,
      params: OrderBaseUtils.CreateOrderParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    dataStore(overrides?: CallOverrides): Promise<[string]>;

    eventEmitter(overrides?: CallOverrides): Promise<[string]>;

    executeAdl(
      account: PromiseOrValue<string>,
      market: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      isLong: PromiseOrValue<boolean>,
      sizeDeltaUsd: PromiseOrValue<BigNumberish>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeLiquidation(
      account: PromiseOrValue<string>,
      market: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      isLong: PromiseOrValue<boolean>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeOrder(
      key: PromiseOrValue<BytesLike>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    feeReceiver(overrides?: CallOverrides): Promise<[string]>;

    gov(overrides?: CallOverrides): Promise<[string]>;

    marketStore(overrides?: CallOverrides): Promise<[string]>;

    oracle(overrides?: CallOverrides): Promise<[string]>;

    orderStore(overrides?: CallOverrides): Promise<[string]>;

    positionStore(overrides?: CallOverrides): Promise<[string]>;

    recoverNativeToken(
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    referralStorage(overrides?: CallOverrides): Promise<[string]>;

    roleStore(overrides?: CallOverrides): Promise<[string]>;

    setGov(
      _gov: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapHandler(overrides?: CallOverrides): Promise<[string]>;

    updateAdlState(
      market: PromiseOrValue<string>,
      isLong: PromiseOrValue<boolean>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  _executeOrder(
    key: PromiseOrValue<BytesLike>,
    oracleParams: OracleUtils.SetPricesParamsStruct,
    keeper: PromiseOrValue<string>,
    startingGas: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createOrder(
    account: PromiseOrValue<string>,
    params: OrderBaseUtils.CreateOrderParamsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  dataStore(overrides?: CallOverrides): Promise<string>;

  eventEmitter(overrides?: CallOverrides): Promise<string>;

  executeAdl(
    account: PromiseOrValue<string>,
    market: PromiseOrValue<string>,
    collateralToken: PromiseOrValue<string>,
    isLong: PromiseOrValue<boolean>,
    sizeDeltaUsd: PromiseOrValue<BigNumberish>,
    oracleParams: OracleUtils.SetPricesParamsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeLiquidation(
    account: PromiseOrValue<string>,
    market: PromiseOrValue<string>,
    collateralToken: PromiseOrValue<string>,
    isLong: PromiseOrValue<boolean>,
    oracleParams: OracleUtils.SetPricesParamsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeOrder(
    key: PromiseOrValue<BytesLike>,
    oracleParams: OracleUtils.SetPricesParamsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  feeReceiver(overrides?: CallOverrides): Promise<string>;

  gov(overrides?: CallOverrides): Promise<string>;

  marketStore(overrides?: CallOverrides): Promise<string>;

  oracle(overrides?: CallOverrides): Promise<string>;

  orderStore(overrides?: CallOverrides): Promise<string>;

  positionStore(overrides?: CallOverrides): Promise<string>;

  recoverNativeToken(
    receiver: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  referralStorage(overrides?: CallOverrides): Promise<string>;

  roleStore(overrides?: CallOverrides): Promise<string>;

  setGov(
    _gov: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapHandler(overrides?: CallOverrides): Promise<string>;

  updateAdlState(
    market: PromiseOrValue<string>,
    isLong: PromiseOrValue<boolean>,
    oracleParams: OracleUtils.SetPricesParamsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _executeOrder(
      key: PromiseOrValue<BytesLike>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      keeper: PromiseOrValue<string>,
      startingGas: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    createOrder(
      account: PromiseOrValue<string>,
      params: OrderBaseUtils.CreateOrderParamsStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    dataStore(overrides?: CallOverrides): Promise<string>;

    eventEmitter(overrides?: CallOverrides): Promise<string>;

    executeAdl(
      account: PromiseOrValue<string>,
      market: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      isLong: PromiseOrValue<boolean>,
      sizeDeltaUsd: PromiseOrValue<BigNumberish>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    executeLiquidation(
      account: PromiseOrValue<string>,
      market: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      isLong: PromiseOrValue<boolean>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    executeOrder(
      key: PromiseOrValue<BytesLike>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    feeReceiver(overrides?: CallOverrides): Promise<string>;

    gov(overrides?: CallOverrides): Promise<string>;

    marketStore(overrides?: CallOverrides): Promise<string>;

    oracle(overrides?: CallOverrides): Promise<string>;

    orderStore(overrides?: CallOverrides): Promise<string>;

    positionStore(overrides?: CallOverrides): Promise<string>;

    recoverNativeToken(
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    referralStorage(overrides?: CallOverrides): Promise<string>;

    roleStore(overrides?: CallOverrides): Promise<string>;

    setGov(_gov: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    swapHandler(overrides?: CallOverrides): Promise<string>;

    updateAdlState(
      market: PromiseOrValue<string>,
      isLong: PromiseOrValue<boolean>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OracleError(string)"(reason?: null): OracleErrorEventFilter;
    OracleError(reason?: null): OracleErrorEventFilter;

    "SetGov(address,address)"(prevGov?: null, nextGov?: null): SetGovEventFilter;
    SetGov(prevGov?: null, nextGov?: null): SetGovEventFilter;
  };

  estimateGas: {
    _executeOrder(
      key: PromiseOrValue<BytesLike>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      keeper: PromiseOrValue<string>,
      startingGas: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createOrder(
      account: PromiseOrValue<string>,
      params: OrderBaseUtils.CreateOrderParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    dataStore(overrides?: CallOverrides): Promise<BigNumber>;

    eventEmitter(overrides?: CallOverrides): Promise<BigNumber>;

    executeAdl(
      account: PromiseOrValue<string>,
      market: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      isLong: PromiseOrValue<boolean>,
      sizeDeltaUsd: PromiseOrValue<BigNumberish>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeLiquidation(
      account: PromiseOrValue<string>,
      market: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      isLong: PromiseOrValue<boolean>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeOrder(
      key: PromiseOrValue<BytesLike>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    feeReceiver(overrides?: CallOverrides): Promise<BigNumber>;

    gov(overrides?: CallOverrides): Promise<BigNumber>;

    marketStore(overrides?: CallOverrides): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<BigNumber>;

    orderStore(overrides?: CallOverrides): Promise<BigNumber>;

    positionStore(overrides?: CallOverrides): Promise<BigNumber>;

    recoverNativeToken(
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    referralStorage(overrides?: CallOverrides): Promise<BigNumber>;

    roleStore(overrides?: CallOverrides): Promise<BigNumber>;

    setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    swapHandler(overrides?: CallOverrides): Promise<BigNumber>;

    updateAdlState(
      market: PromiseOrValue<string>,
      isLong: PromiseOrValue<boolean>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _executeOrder(
      key: PromiseOrValue<BytesLike>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      keeper: PromiseOrValue<string>,
      startingGas: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createOrder(
      account: PromiseOrValue<string>,
      params: OrderBaseUtils.CreateOrderParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    dataStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    eventEmitter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    executeAdl(
      account: PromiseOrValue<string>,
      market: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      isLong: PromiseOrValue<boolean>,
      sizeDeltaUsd: PromiseOrValue<BigNumberish>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeLiquidation(
      account: PromiseOrValue<string>,
      market: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      isLong: PromiseOrValue<boolean>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeOrder(
      key: PromiseOrValue<BytesLike>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    feeReceiver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    marketStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    orderStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    positionStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recoverNativeToken(
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    referralStorage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    roleStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setGov(
      _gov: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapHandler(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateAdlState(
      market: PromiseOrValue<string>,
      isLong: PromiseOrValue<boolean>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}