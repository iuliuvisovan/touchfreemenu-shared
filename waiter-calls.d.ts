export declare type WaiterCall = {
    targetUserId: string;
    targetUsername: string;
    tableNumber: string;
    ip: string;
    deviceId: string;
    coordinates: {
        latitude: number;
        longitude: number;
    };
    timestamp: number;
    createdAt: Date;
};
