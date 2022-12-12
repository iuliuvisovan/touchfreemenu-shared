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
    currency: CurrencyCode;
    product: T;
};
export declare type ConsumerOrder = {
    id: string;
    orderNumber?: string;
    totalValue: number;
    products: ConsumerOrderProduct<MenuProduct>[];
    targetUserId: string;
    targetUsername?: string;
    paymentType: ConsumerOrderPaymentType;
    billingInfo: BillingInfo;
    shippingInfo: ShippingInfo;
    paidWithCardMask?: string;
    paymentProcessorResponse?: string;
    localError?: string;
    extraCommentsFromUser?: string;
    proformaInvoiceId?: string;
    finalInvoiceId?: string;
    createdAt?: Date;
};
export declare enum ConsumerOrderType {
    AtTable = "AT_TABLE",
    Delivery = "DELIVERY",
    PickUp = "PICK_UP"
}
export declare type ConsumerOrderIntent = {
    type: ConsumerOrderType;
    products: ConsumerOrderProduct<ProcessedMenuProduct>[];
};
export declare const computeConsumerIntentPrice: (orderIntent: ConsumerOrderIntent) => number[];
