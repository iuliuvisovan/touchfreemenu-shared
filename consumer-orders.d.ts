import { BillingInfo, ShippingInfo } from './holder-orders';
import { LanguageCode } from './products';
import { CurrencyCode } from './users';
export type ConsumerOrder = {
    id: string;
    orderNumber?: string;
    targetUserId: string;
    type: ConsumerOrderType;
    targetUsername?: string;
    tableNumber: string;
    products: ConsumerOrderProduct[];
    currencyCode: CurrencyCode;
    languageCode: LanguageCode;
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
    payment?: {
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
    deleted?: {
        at: Date;
        byWaiterDeviceId: string;
        byWaiterName: string;
    };
    reported?: {
        at: Date;
        byWaiterDeviceId: string;
        byWaiterName: string;
    };
};
export type ConsumerOrderViewModel = ConsumerOrder & {
    products: ConsumerOrderProductViewModel[];
};
export type CreateConsumerOrderRequestBody = {
    targetUserId: string;
    tableNumber: string;
    type: ConsumerOrderType;
    products: ConsumerOrderProduct[];
    currencyCode: CurrencyCode;
    languageCode: LanguageCode;
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
    paymentType?: ConsumerOrderPaymentType;
    shipping?: ShippingInfo;
    billing?: BillingInfo;
};
type ConsumerOrderProductViewModel = ConsumerOrderProduct & {
    imageUrl: string;
    thumbnailUrl: string;
    isWhiteSquare: boolean;
    isGeneric: boolean;
};
export type ConsumerOrderProduct = {
    quantity: number;
    addedInOrderAt: number;
    productId: string;
    name: string;
    oldPrice?: number;
    effectivePrice?: number;
    quantities?: string;
    kcalories?: string;
} & (ChildProductInfo & ParentProductInfo);
export type ParentProductInfo = {
    nutritionalDeclaration?: string;
    allergens?: string[];
    properties?: string[];
};
export type ChildProductInfo = {
    parentProduct?: ParentProductInfo & {
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
export type ConsumerOrderPatchBody = {
    type: ConsumerOrderPatchType.ConsumerPushToken;
    data: string;
} | {
    type: ConsumerOrderPatchType.WaiterResponse;
    data: WaiterResponseType;
};
export declare const computeConsumerOrderPrice: ({ products }: {
    products: ConsumerOrderProduct[];
}) => number;
export {};
