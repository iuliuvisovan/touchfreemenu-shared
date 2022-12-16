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
};
export declare type WaiterCallPatchBody = {
    type: WaiterCallPatchType.ClientPushToken;
    data: string;
} | {
    type: WaiterCallPatchType.WaiterResponse;
    data: WaiterResponseType;
};
export declare enum WaiterCallPatchType {
    ClientPushToken = "clientPushToken",
    WaiterResponse = "waiterResponse"
}
