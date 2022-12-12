import { BillingInfo, ShippingInfo } from './holder-orders'
import { MenuProduct, ProcessedMenuProduct } from './products'

export enum ConsumerOrderPaymentType {
  BankTransfer = 'BankTransfer',
  OnlineCard = 'OnlineCard',
  Cash = 'Cash',
}

export type ConsumerOrderProduct<T> = {
  quantity: number
  product: T
}

export type ConsumerOrder = {
  id: string
  orderNumber?: string
  totalValue: number
  products: ConsumerOrderProduct<MenuProduct>[]
  targetUserId: string
  targetUsername?: string
  paymentType: ConsumerOrderPaymentType
  billingInfo: BillingInfo
  shippingInfo: ShippingInfo
  paidWithCardMask?: string
  paymentProcessorResponse?: string
  localError?: string
  extraCommentsFromUser?: string
  proformaInvoiceId?: string
  finalInvoiceId?: string
  createdAt?: Date
}

export enum ConsumerOrderType {
  AtTable = 'AT_TABLE',
  Delivery = 'DELIVERY',
  PickUp = 'PICK_UP',
}

export type ConsumerOrderIntent = {
  type: ConsumerOrderType
  products: ConsumerOrderProduct<ProcessedMenuProduct>[]
}

export const computeConsumerIntentPrice = (orderIntent: ConsumerOrderIntent) => {
  const totalPrice = orderIntent.products.map(productIntent => {
    const { product, quantity } = productIntent
    const effectiveProductPrice = product.isDiscounted ? product.discountedPrice : product.price

    return effectiveProductPrice! * quantity
  })

  return totalPrice
}