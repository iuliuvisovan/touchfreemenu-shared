export declare enum OrderStatus {
    Initiated = "INITIATED",
    InProgress = "IN_PROGRESS",
    Failed = "FAILED",
    Paid = "PAID",
    CurrentlyFulfilling = "CURRENTLY_FULLFILLING",
    Fulfilled = "FULFILLED",
    Activated = "ACTIVATED"
}
export declare enum BillingType {
    Company = "company",
    NaturalPerson = "natural_person"
}
export declare type BillingInfo = {
    billingType: BillingType;
    name: string;
    cui?: string;
    address: string;
    city: string;
    county: string;
    country: string;
    phoneNumber: string;
};
export declare type ShippingInfo = {
    name: string;
    address: string;
    city: string;
    county: string;
    zipCode: string;
    country: string;
    phoneNumber: string;
    extraInfo: string;
};
export declare enum ProductType {
    Subscription = "Subscription",
    Holder = "Holder"
}
export declare enum PaymentType {
    BankTransfer = "BankTransfer",
    OnlineCard = "OnlineCard"
}
export declare type OrderProduct = {
    type: ProductType;
    code: ProductCode;
    quantity: number;
    currentPrice?: number;
};
export declare type Order = {
    id: string;
    products: OrderProduct[];
    userId: string;
    status: OrderStatus;
    paymentType: PaymentType;
    requestedAmount: number;
    billingInfo: BillingInfo;
    shippingInfo: ShippingInfo;
    capturedAmount?: number;
    paidWithCardMask?: string;
    mobilPayResponse?: string;
    localError?: string;
    extraCommentsFromUser?: string;
};
export declare type OrderIntent = {
    laminatedHolderCount?: number;
    plexiglassHolderCount?: number;
    subscriptionCode?: SubscriptionCode;
    billingInfo?: BillingInfo;
    shippingInfo?: ShippingInfo;
    paymentType?: PaymentType;
    extraCommentsFromUser?: string;
};
export declare enum SubscriptionCode {
    TFMC1 = "TFM-C-1",
    TFMC6 = "TFM-C-6",
    TFMC12 = "TFM-C-12"
}
export declare enum HolderCode {
    Plexiglass = "QRH-PLEX",
    Laminated = "QRH-LAM"
}
export declare type ProductCode = SubscriptionCode | HolderCode;
export declare type Subscription = {
    code: SubscriptionCode;
    name: string;
    price: number;
    durationInDays: number;
};
export declare type Holder = {
    code: HolderCode;
    name: string;
    price: number;
    priceIncreaseSegment?: number;
};
export declare type PaymentRequest = {
    env_key: string;
    data: any;
    url: string;
};
export declare const AVAILABLE_HOLDERS: Holder[];
export declare const AVAILABLE_SUBSCRIPTIONS: Subscription[];
export declare const computeIntentPrice: (orderIntent: OrderIntent) => number;
