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
  price: number
  addedInOrderAt: number
  asSeenByConsumer: T
}

export type ConsumerOrder = {
  id: string
  orderNumber?: string
  targetUserId: string
  targetUsername?: string
  ip: string
  deviceId: string
  deviceType: string
  deviceName: string
  tableNumber: string
  products: ConsumerOrderProduct<MenuProduct>[]
  currency: CurrencyCode
  clientCoordinates: { latitude: number; longitude: number }
  clientPushToken?: string
  waiterResponse?: {
    type: WaiterResponseType
    timestamp: number
    deviceId: string
    waiterName: string
  }
  totalValue?: number
  paymentType?: ConsumerOrderPaymentType
  billingInfo?: BillingInfo
  shippingInfo?: ShippingInfo
  paidWithCardMask?: string
  paymentProcessorResponse?: string
  localError?: string
  extraCommentsFromUser?: string
  proformaInvoiceId?: string
  finalInvoiceId?: string
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
  deviceId: string
  deviceType: string
  deviceName: string
  clientCoordinates: { latitude: number; longitude: number }
  products: ConsumerOrderIntentProduct<ProcessedMenuProduct>[]
}

export enum WaiterResponseType {
  Accepted = 'ACCEPTED',
  AcceptedWithModifications = 'ACCEPTED_WITH_MODIFICATIONS',
  Confirmed = 'CONFIRMED',
  Rejected = 'REJECTED',
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

export const computeConsumerIntentPrice = (orderIntent: ConsumerOrderIntent, isUserPartyMode = false) => {
  const totalPrice = orderIntent.products
    .map(productIntent => {
      const { product, quantity } = productIntent
      const { price, isDiscounted, discountedPrice, priceDuringEvent } = product || {}

      const effectiveProductPrice = (isUserPartyMode && priceDuringEvent)
        ? priceDuringEvent
        : (isDiscounted && discountedPrice)
          ? discountedPrice
          : price

      return +effectiveProductPrice! * +quantity
    })
    .reduce((a, b) => a + b)

  return totalPrice
}
