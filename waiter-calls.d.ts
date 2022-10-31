export declare type WaiterCall = {
    targetUserId: string;
    targetUsername: string;
    tableNumber: string;
    ip: string;
    deviceId: string;
    deviceType: string;
    deviceName: string;
    coordinates: {
        latitude: number;
        longitude: number;
    };
    waiterRepliedWithOmw: {
        deviceId: string;
        waiterName: string;
    };
    timestamp: number;
    createdAt: Date;
};
