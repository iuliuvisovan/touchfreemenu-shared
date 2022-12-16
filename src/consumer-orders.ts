import { BillingInfo, ShippingInfo } from './holder-orders'
import { MenuProduct, ProcessedMenuProduct } from './products'
import { CurrencyCode } from './users'

export enum ConsumerOrderPaymentType {
  BankTransfer = 'BankTransfer',
  OnlineCard = 'OnlineCard',
  Cash = 'Cash',
}

export type ConsumerOrderProduct<T> = {
  quantity: number
  currency: CurrencyCode
  addedInOrderAt: number
  product: T
}

export type ConsumerOrder = {
  id: string
  orderNumber?: string
  targetUserId: string
  targetUsername?: string
  tableNumber: string
  products: ConsumerOrderProduct<MenuProduct>[]
  currency: CurrencyCode
  extraComments?: string
  consumer: {
    deviceId: string
    deviceType: string
    deviceName: string
    ip: string
    coordinates: { latitude: number; longitude: number }
    pushToken?: string
  }
  waiterResponse?: {
    type: WaiterResponseType
    timestamp: number
    deviceId: string
    waiterName: string
  }
  payment: {
    proformaInvoiceId?: string
    finalInvoiceId?: string
    type?: ConsumerOrderPaymentType
    paidWithCardMask?: string
    paymentProcessorResponse?: string
  }
  shipping?: ShippingInfo
  billing?: BillingInfo
  localError?: string
  timestamp: number
  createdAt?: Date
}

export enum ConsumerOrderType {
  AtTable = 'AT_TABLE',
  Delivery = 'DELIVERY',
  PickUp = 'PICK_UP',
}

export type ConsumerOrderIntentProduct<T> = {
  quantity: number
  product: T
}

export type ConsumerOrderIntent = {
  type: ConsumerOrderType
  targetUserId: string
  targetUsername: string
  tableNumber: string
  products: ConsumerOrderIntentProduct<ProcessedMenuProduct>[]
  consumer: {
    deviceId: string
    deviceType: string
    deviceName: string
    coordinates: { latitude: number; longitude: number }
  }
}

export enum WaiterResponseType {
  Accepted = 'ACCEPTED',
  Rejected = 'REJECTED',
}

export enum ConsumerOrderPatchType {
  ClientPushToken = 'clientPushToken',
  WaiterResponse = 'waiterResponse',
  NotifyConsumer = 'notifyConsumer',
}

export type ConsumerOrderPatchBody =
  | {
      type: ConsumerOrderPatchType.ClientPushToken
      data: string
    }
  | {
      type: ConsumerOrderPatchType.WaiterResponse
      data: WaiterResponseType
    }
  | {
      type: ConsumerOrderPatchType.NotifyConsumer
      data: undefined
    }

export const computeConsumerOrderPrice = (order: ConsumerOrderIntent, isUserPartyMode = false) => {
  const totalPrice = order.products
    .map(productIntent => {
      const { product, quantity } = productIntent
      const { price, isDiscounted, discountedPrice, priceDuringEvent } = product || {}

      const effectiveProductPrice =
        isUserPartyMode && priceDuringEvent ? priceDuringEvent : isDiscounted && discountedPrice ? discountedPrice : price

      return +effectiveProductPrice! * +quantity
    })
    .reduce((a, b) => a + b)

  return totalPrice
}
