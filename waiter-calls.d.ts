export declare type WaiterCall = {
    targetUserId: string;
    targetUsername: string;
    tableNumber: string;
    ip: string;
    deviceId: string;
    deviceType: string;
    deviceName: string;
    clientCoordinates: {
        latitude: number;
        longitude: number;
    };
    clientPushToken?: string;
    waiterRepliedWithOmw?: {
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
    type: WaiterCallPatchType.OnMyWay;
    data: undefined;
};
export declare enum WaiterCallPatchType {
    ClientPushToken = 0,
    OnMyWay = 1
}
