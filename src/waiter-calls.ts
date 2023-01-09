import { WaiterResponseType } from './consumer-orders'

export type WaiterCall = {
  id: string
  targetUserId: string
  targetUsername: string
  tableNumber: string
  consumer: {
    ip: string
    deviceId: string
    deviceType: string
    deviceName: string
    coordinates: { latitude: number; longitude: number }
    pushToken?: string
  }
  waiterResponse?: {
    type: WaiterResponseType
    timestamp: number
    deviceId: string
    waiterName: string
  }
  timestamp: number
  createdAt: Date
  isDeleted?: boolean
}

export type CreateWaiterCallRequestBody = {
  targetUserId: string
  targetUsername: string
  tableNumber: string
  consumer: {
    deviceId: string
    deviceType: string
    deviceName: string
    coordinates: { latitude: number; longitude: number }
  }
}

export type WaiterCallPatchBody =
  | {
      type: WaiterCallPatchType.ConsumerPushToken
      data: string
    }
  | {
      type: WaiterCallPatchType.WaiterResponse
      data: WaiterResponseType
    }

export enum WaiterCallPatchType {
  ConsumerPushToken = 'consumerPushToken',
  WaiterResponse = 'waiterResponse',
}
