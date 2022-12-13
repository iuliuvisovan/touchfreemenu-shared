import { BillingInfo, ShippingInfo } from './holder-orders';
import { MenuProduct, ProcessedMenuProduct } from './products';
import { CurrencyCode } from './users';
export declare enum ConsumerOrderPaymentType {
    BankTransfer = "BankTransfer",
    OnlineCard = "OnlineCard",
    Cash = "Cash"
}
export declare type ConsumerOrderProduct<T> = {
    quantity: number;
    price: number;
    addedInOrderAt: number;
    asSeenByConsumer: T;
};
export declare type ConsumerOrder = {
    id: string;
    orderNumber?: string;
    targetUserId: string;
    targetUsername?: string;
    ip: string;
    deviceId: string;
    deviceType: string;
    deviceName: string;
    tableNumber: string;
    products: ConsumerOrderProduct<MenuProduct>[];
    currency: CurrencyCode;
    clientCoordinates: {
        latitude: number;
        longitude: number;
    };
    clientPushToken?: string;
    waiterResponse?: {
        type: WaiterResponseType;
        timestamp: number;
        deviceId: string;
        waiterName: string;
    };
    totalValue?: number;
    paymentType?: ConsumerOrderPaymentType;
    billingInfo?: BillingInfo;
    shippingInfo?: ShippingInfo;
    paidWithCardMask?: string;
    paymentProcessorResponse?: string;
    localError?: string;
    extraCommentsFromUser?: string;
    proformaInvoiceId?: string;
    finalInvoiceId?: string;
    timestamp: number;
    createdAt?: Date;
};
export declare enum ConsumerOrderType {
    AtTable = "AT_TABLE",
    Delivery = "DELIVERY",
    PickUp = "PICK_UP"
}
export declare type ConsumerOrderIntentProduct<T> = {
    quantity: number;
    product: T;
};
export declare type ConsumerOrderIntent = {
    type: ConsumerOrderType;
    targetUserId: string;
    targetUsername: string;
    tableNumber: string;
    deviceId: string;
    deviceType: string;
    deviceName: string;
    clientCoordinates: {
        latitude: number;
        longitude: number;
    };
    products: ConsumerOrderIntentProduct<ProcessedMenuProduct>[];
};
export declare enum WaiterResponseType {
    Accepted = "ACCEPTED",
    AcceptedWithModifications = "ACCEPTED_WITH_MODIFICATIONS",
    Confirmed = "CONFIRMED",
    Rejected = "REJECTED"
}
export declare type ConsumerOrderPatchBody = {
    type: ClientPushTokenType.ClientPushToken;
    data: string;
} | {
    type: WaiterResponseType;
    data: undefined;
};
export declare enum ClientPushTokenType {
    ClientPushToken = "clientPushToken"
}
export declare const computeConsumerIntentPrice: (orderIntent: ConsumerOrderIntent, isUserPartyMode?: boolean) => number;
