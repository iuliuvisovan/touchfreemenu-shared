import { MenuProduct } from "./products";
import { CurrencyCode } from "./users";
export declare type OrderProduct = {
    productId: string;
    price: number;
    quantity: number;
    asSeenByConsumer: MenuProduct;
};
export declare type ConsumerOrder = {
    id: string;
    targetUserId: string;
    targetUsername: string;
    ip: string;
    deviceId: string;
    deviceType: string;
    deviceName: string;
    tableNumber: string;
    products: OrderProduct[];
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
    timestamp: number;
    createdAt: Date;
};
export declare enum WaiterResponseType {
    Accepted = "accepted",
    AcceptedWithModifications = "acceptedWithModifications",
    Confirmed = "confirmed",
    Rejected = "rejected"
}
export declare type ConsumerOrderPostBody = {
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
    products: {
        productId: string;
        quantity: number;
    }[];
};
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
