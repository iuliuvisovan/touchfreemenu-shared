import { BillingInfo, ShippingInfo } from './holder-orders';
import { ProcessedMenuProduct } from './products';
export declare enum ConsumerOrderPaymentType {
    BankTransfer = "BankTransfer",
    OnlineCard = "OnlineCard",
    Cash = "Cash"
}
export declare type ConsumerOrderProduct = {
    quantity: number;
    product: ProcessedMenuProduct;
};
export declare type ConsumerOrder = {
    id: string;
    orderNumber?: string;
    totalValue: number;
    products: ConsumerOrderProduct[];
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
    products: ConsumerOrderProduct[];
};
export declare const computeConsumerIntentPrice: (orderIntent: ConsumerOrderIntent) => number[];
