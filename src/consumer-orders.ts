import { BillingInfo, ShippingInfo } from './holder-orders'
import { MenuProduct } from './products'


export enum ConsumerOrderPaymentType {
  BankTransfer = 'BankTransfer',
  OnlineCard = 'OnlineCard',
  Cash = 'Cash',
}

export type ConsumerOrderProduct = {
  quantity: number
  product: MenuProduct
}

export type ConsumerOrder = {
  id: string
  orderNumber?: string
  totalValue: number
  products: ConsumerOrderProduct[]
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
  products: ConsumerOrderProduct[]
}

export const computeConsumerIntentPrice = (orderIntent: ConsumerOrderIntent) => {
  const totalPrice = orderIntent.products.map(productIntent => {
    const { product, quantity } = productIntent
    const effectiveProductPrice = product.isDiscounted ? product.discountedPrice : product.price

    return effectiveProductPrice! * quantity
  })

  return totalPrice
}
