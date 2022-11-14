export type WaiterCall = {
  targetUserId: string
  targetUsername: string
  tableNumber: string
  ip: string
  deviceId: string
  deviceType: string
  deviceName: string
  clientCoordinates: { latitude: number; longitude: number }
  clientPushToken?: string
  waiterRepliedWithOmw?: {
    deviceId: string
    waiterName: string
  }
  timestamp: number
  createdAt: Date
}

export type WaiterCallPatchBody =
  | {
      type: WaiterCallPatchType.ClientPushToken
      data: string
    }
  | {
      type: WaiterCallPatchType.OnMyWay
      data: undefined
    }

export enum WaiterCallPatchType {
  ClientPushToken,
  OnMyWay,
}
