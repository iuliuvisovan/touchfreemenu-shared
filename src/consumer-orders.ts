import { MenuProduct } from "./products"
import { CurrencyCode } from "./users"

export type OrderProduct = {
  productId: string,
  price: number,
  quantity: number,
  asSeenByConsumer: MenuProduct
}

export type ConsumerOrder = {
  id: string
  targetUserId: string
  targetUsername: string
  ip: string
  deviceId: string
  deviceType: string
  deviceName: string
  tableNumber: string
  products: OrderProduct[]
  currency: CurrencyCode
  clientCoordinates: { latitude: number; longitude: number }
  clientPushToken?: string
  waiterResponse?: {
    type: WaiterResponseType
    timestamp: number
    deviceId: string
    waiterName: string
  }
  timestamp: number
  createdAt: Date
}

export enum WaiterResponseType {
  Accepted = 'accepted',
  AcceptedWithModifications = 'acceptedWithModifications',
  Confirmed = 'confirmed',
  Rejected = 'rejected',
}

export type ConsumerOrderPostBody = {
  targetUserId: string
  targetUsername: string
  tableNumber: string
  deviceId: string
  deviceType: string
  deviceName: string
  clientCoordinates: { latitude: number; longitude: number }
  products: { productId: string, quantity: number }[]
}

export type ConsumerOrderPatchBody =
  | {
    type: ClientPushTokenType.ClientPushToken
    data: string
  }
  | {
    type: WaiterResponseType
    data: undefined
  }

export enum ClientPushTokenType {
  ClientPushToken = 'clientPushToken'
}
