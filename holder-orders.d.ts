export declare enum HolderOrderStatus {
    Initiated = "INITIATED",
    WaitingForOnlinePayment = "WAITING_FOR_ONLINE_PAYMENT",
    WaitingForBankPayment = "WAITING_FOR_BANK_PAYMENT",
    Paid = "PAID",
    CurrentlyFulfilling = "CURRENTLY_FULLFILLING",
    PendingActivation = "PENDING_ACTIVATION",
    Activated = "ACTIVATED",
    Failed = "FAILED"
}
export declare enum BillingType {
    Company = "Company",
    NaturalPerson = "NaturalPerson"
}
export type BillingInfo = {
    billingType: BillingType;
    name: string;
    cui?: string;
    address: string;
    city: string;
    county: string;
    country: string;
    phoneNumber: string;
};
export type ShippingInfo = {
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
export declare enum HolderOrderPaymentType {
    BankTransfer = "BankTransfer",
    OnlineCard = "OnlineCard"
}
export type HolderProduct = {
    type: ProductType;
    code: ProductCode;
    quantity: number;
    currentPrice?: number;
};
export type HolderOrder = {
    id: string;
    products: HolderProduct[];
    userId: string;
    username?: string;
    status: HolderOrderStatus;
    paymentType: HolderOrderPaymentType;
    requestedAmount: number;
    billingInfo: BillingInfo;
    shippingInfo: ShippingInfo;
    paidWithCardMask?: string;
    mobilPayResponse?: string;
    localError?: string;
    extraCommentsFromUser?: string;
    orderNumber?: string;
    proformaInvoiceId?: string;
    finalInvoiceId?: string;
    createdAt?: Date;
    courierCompany?: CourierCompany;
    withWifiInfo?: boolean;
    awb?: string;
};
export type HolderOrderIntent = {
    laminatedHolderCount?: number;
    plexiglassHolderCount?: number;
    stickerHolderCount?: number;
    subscriptionCode?: SubscriptionCode;
    billingInfo?: BillingInfo;
    shippingInfo?: ShippingInfo;
    paymentType?: HolderOrderPaymentType;
    extraCommentsFromUser?: string;
    withWifiInfo?: boolean;
};
export declare enum CourierCompany {
    Cargus = "cargus",
    FanCourier = "fan_courier",
    Sameday = "sameday",
    Dpd = "dpd",
    NemoExpress = "nemo_express",
    Gls = "gls"
}
export declare enum SubscriptionCode {
    TFMC1 = "TFM-C-1",
    TFMC6 = "TFM-C-6",
    TFMC12 = "TFM-C-12"
}
export declare enum HolderCode {
    Plexiglass = "QRH-PLEX",
    Laminated = "QRH-LAM",
    Sticker = "QRH-STICK"
}
export type ProductCode = SubscriptionCode | HolderCode;
export type Subscription = {
    code: SubscriptionCode;
    name: string;
    price: number;
    durationInDays: number;
};
export type Holder = {
    code: HolderCode;
    name: string;
    price: number;
    priceIncreaseSegment?: number;
};
export type PaymentRequest = {
    env_key: string;
    data: string;
    url: string;
};
export declare const AVAILABLE_HOLDERS: Holder[];
export declare const AVAILABLE_SUBSCRIPTIONS: Subscription[];
export declare const computeIntentPrice: (orderIntent: HolderOrderIntent) => number;
export declare const DELIVERY_PRICE = 15;
export declare const computeIntentSummary: (orderIntent: HolderOrderIntent) => {
    totalPrice: number;
    holderPrice: number;
    deliveryPrice: number;
    subscriptionPrice: number;
    hasDelivery: boolean;
    hasHolders: boolean;
    hasSubscription: boolean;
};
