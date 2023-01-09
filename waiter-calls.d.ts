import { WaiterResponseType } from './consumer-orders';
export declare type WaiterCall = {
    id: string;
    targetUserId: string;
    targetUsername: string;
    tableNumber: string;
    consumer: {
        ip: string;
        deviceId: string;
        deviceType: string;
        deviceName: string;
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
    timestamp: number;
    createdAt: Date;
    isDeleted?: boolean;
};
export declare type CreateWaiterCallRequestBody = {
    targetUserId: string;
    targetUsername: string;
    tableNumber: string;
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
export declare type WaiterCallPatchBody = {
    type: WaiterCallPatchType.ConsumerPushToken;
    data: string;
} | {
    type: WaiterCallPatchType.WaiterResponse;
    data: WaiterResponseType;
};
export declare enum WaiterCallPatchType {
    ConsumerPushToken = "consumerPushToken",
    WaiterResponse = "waiterResponse"
}
