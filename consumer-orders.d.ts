import { BillingInfo, ShippingInfo } from './holder-orders';
import { CurrencyCode } from './users';
export declare type ConsumerOrder = {
    id: string;
    orderNumber?: string;
    targetUserId: string;
    type: ConsumerOrderType;
    targetUsername?: string;
    tableNumber: string;
    products: ConsumerOrderProduct[];
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
export declare type CreateConsumerOrderRequestBody = {
    targetUserId: string;
    tableNumber: string;
    type: ConsumerOrderType;
    products: ConsumerOrderProduct[];
    currency: CurrencyCode;
    extraComments?: string;
    consumer: {
        deviceId: string;
        deviceType: string;
        deviceName: string;
        coordinates: {
            latitude: number;
            longitude: number;
        };
    };
    payment: {
        type?: ConsumerOrderPaymentType;
    };
    shipping?: ShippingInfo;
    billing?: BillingInfo;
};
export declare type ConsumerOrderProduct = {
    quantity: number;
    addedInOrderAt: number;
    productId: string;
    name: string;
    oldPrice?: number;
    effectivePrice?: number;
    quantities?: string;
    kcalories?: string;
} & (ChildProductInfo & ParentProductInfo);
export declare type ParentProductInfo = {
    imageUrl?: string;
    thumbnailUrl?: string;
    nutritionalDeclaration?: string;
    allergens?: string[];
    properties?: string[];
};
export declare type ChildProductInfo = {
    parentProduct: ParentProductInfo & {
        productId: string;
        name: string;
    };
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
export declare const computeConsumerOrderPrice: (order: ConsumerOrder | CreateConsumerOrderRequestBody) => number;
