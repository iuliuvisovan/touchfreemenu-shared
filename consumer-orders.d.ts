import { BillingInfo, ShippingInfo } from './holder-orders';
import { MenuProduct, ProductViewModel } from './products';
import { CurrencyCode } from './users';
export declare type ConsumerOrder = {
    id: string;
    orderNumber?: string;
    targetUserId: string;
    targetUsername?: string;
    tableNumber: string;
    products: ConsumerOrderProduct<MenuProduct>[];
    totalValue: number;
    currency: CurrencyCode;
    extraComments?: string;
    consumer: {
        deviceId: string;
        deviceType: string;
        deviceName: string;
        ip: string;
        coordinates: {
            latitude: number;
            longitude: number;
        };
        pushToken?: string;
    };
    waiterResponse?: {
        type: WaiterResponseType;
        timestamp: number;
        deviceId: string;
        waiterName: string;
    };
    payment: {
        proformaInvoiceId?: string;
        finalInvoiceId?: string;
        type?: ConsumerOrderPaymentType;
        paidWithCardMask?: string;
        paymentProcessorResponse?: string;
    };
    shipping?: ShippingInfo;
    billing?: BillingInfo;
    localError?: string;
    timestamp: number;
    createdAt?: Date;
};
export declare type ConsumerOrderProduct<T> = {
    quantity: number;
    currency: CurrencyCode;
    addedInOrderAt: number;
    product: T;
};
export declare enum ConsumerOrderPaymentType {
    BankTransfer = "BankTransfer",
    OnlineCard = "OnlineCard",
    Cash = "Cash"
}
export declare enum ConsumerOrderType {
    AtTable = "AT_TABLE",
    Delivery = "DELIVERY",
    PickUp = "PICK_UP"
}
export declare type ConsumerOrderIntentProduct = {
    quantity: number;
    product: ProductViewModel;
};
export declare type ConsumerOrderIntent = {
    type: ConsumerOrderType;
    targetUserId: string;
    targetUsername: string;
    tableNumber: string;
    products: ConsumerOrderIntentProduct[];
    consumer: {
        deviceId: string;
        deviceType: string;
        deviceName: string;
        coordinates: {
            latitude: number;
            longitude: number;
        };
    };
};
export declare enum WaiterResponseType {
    Accepted = "ACCEPTED",
    Rejected = "REJECTED"
}
export declare enum ConsumerOrderPatchType {
    ConsumerPushToken = "consumerPushToken",
    WaiterResponse = "waiterResponse"
}
export declare type ConsumerOrderPatchBody = {
    type: ConsumerOrderPatchType.ConsumerPushToken;
    data: string;
} | {
    type: ConsumerOrderPatchType.WaiterResponse;
    data: WaiterResponseType;
};
export declare const computeConsumerOrderPrice: (order: ConsumerOrder, isUserPartyMode: boolean) => number;
