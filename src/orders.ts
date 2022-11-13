export enum OrderStatus {
  Initiated = 'INITIATED',
  WaitingForOnlinePayment = 'WAITING_FOR_ONLINE_PAYMENT',
  WaitingForBankPayment = 'WAITING_FOR_BANK_PAYMENT',
  Paid = 'PAID',
  CurrentlyFulfilling = 'CURRENTLY_FULLFILLING',
  PendingActivation = 'PENDING_ACTIVATION',
  Activated = 'ACTIVATED',
  Failed = 'FAILED',
}

export enum BillingType {
  Company = 'Company',
  NaturalPerson = 'NaturalPerson',
}

export type BillingInfo = {
  billingType: BillingType
  //company name in case of 'company', person's full name in case of 'natural_person'
  name: string
  cui?: string
  address: string
  city: string
  county: string
  country: string
  phoneNumber: string
}

export type ShippingInfo = {
  name: string
  address: string
  city: string
  county: string
  zipCode: string
  country: string
  phoneNumber: string
  extraInfo: string
}

export enum ProductType {
  Subscription = 'Subscription',
  Holder = 'Holder',
}

export enum PaymentType {
  BankTransfer = 'BankTransfer',
  OnlineCard = 'OnlineCard',
}

export type OrderProduct = {
  type: ProductType
  code: ProductCode
  quantity: number
  currentPrice?: number
}

export type Order = {
  id: string
  products: OrderProduct[]
  userId: string
  username?: string
  status: OrderStatus
  paymentType: PaymentType
  requestedAmount: number
  billingInfo: BillingInfo
  shippingInfo: ShippingInfo
  paidWithCardMask?: string
  mobilPayResponse?: string
  localError?: string
  extraCommentsFromUser?: string
  orderNumber?: string
  proformaInvoiceId?: string
  finalInvoiceId?: string
  createdAt?: Date
  courierCompany?: CourierCompany
  withWifiInfo?: boolean
  awb?: string
}

export type OrderIntent = {
  laminatedHolderCount?: number
  plexiglassHolderCount?: number
  stickerHolderCount?: number
  subscriptionCode?: SubscriptionCode
  billingInfo?: BillingInfo
  shippingInfo?: ShippingInfo
  paymentType?: PaymentType
  extraCommentsFromUser?: string
  withWifiInfo?: boolean
}

export enum CourierCompany {
  Cargus = 'cargus',
  FanCourier = 'fan_courier',
  Sameday = 'sameday',
  Dpd = 'dpd',
  NemoExpress = 'nemo_express',
  Gls = 'gls',
}

export enum SubscriptionCode {
  TFMC1 = 'TFM-C-1',
  TFMC6 = 'TFM-C-6',
  TFMC12 = 'TFM-C-12',
}

export enum HolderCode {
  Plexiglass = 'QRH-PLEX',
  Laminated = 'QRH-LAM',
  Sticker = 'QRH-STICK',
}

export type ProductCode = SubscriptionCode | HolderCode

export type Subscription = {
  code: SubscriptionCode
  name: string
  price: number
  durationInDays: number
}

export type Holder = {
  code: HolderCode
  name: string
  price: number
  priceIncreaseSegment?: number
}

export type PaymentRequest = {
  env_key: string
  data: string
  url: string
}

export const AVAILABLE_HOLDERS: Holder[] = [
  {
    code: HolderCode.Plexiglass,
    name: 'Holder vertical plexiglas - A6',
    price: 15,
  },
  {
    code: HolderCode.Laminated,
    name: 'Card laminat - A6',
    price: 3,
    priceIncreaseSegment: 10,
  },
  {
    code: HolderCode.Sticker,
    name: 'Sticker personalizat - 10x7cm',
    price: 2,
    priceIncreaseSegment: 16,
  },
]

export const AVAILABLE_SUBSCRIPTIONS: Subscription[] = [
  {
    code: SubscriptionCode.TFMC1,
    name: 'MeniuDigital Complet - o lună',
    price: 49,
    durationInDays: 30,
  },
  {
    code: SubscriptionCode.TFMC6,
    name: 'MeniuDigital Complet - 6 luni',
    price: 289,
    durationInDays: 180,
  },
  {
    code: SubscriptionCode.TFMC12,
    name: 'MeniuDigital Complet - 12 luni',
    price: 499,
    durationInDays: 365,
  },
]

export const computeIntentPrice = (orderIntent: OrderIntent) => {
  const { plexiglassHolderCount = 0, laminatedHolderCount = 0, stickerHolderCount = 0, subscriptionCode = '' } = orderIntent

  const plexiglassPrice = AVAILABLE_HOLDERS.find(x => x.code === HolderCode.Plexiglass)?.price || 0
  const laminatedPrice = AVAILABLE_HOLDERS.find(x => x.code === HolderCode.Laminated)?.price || 0
  const stickerPrice = AVAILABLE_HOLDERS.find(x => x.code === HolderCode.Sticker)?.price || 0
  const currentSubscriptionPrice = AVAILABLE_SUBSCRIPTIONS.find(x => x.code === subscriptionCode)?.price || 0

  const deliveryPrice = +plexiglassHolderCount + +laminatedHolderCount + +stickerHolderCount > 0 ? 15 : 0

  const totalPrice =
    plexiglassHolderCount * plexiglassPrice +
    laminatedHolderCount * laminatedPrice +
    stickerHolderCount * stickerPrice +
    currentSubscriptionPrice +
    deliveryPrice

  return totalPrice
}

export const DELIVERY_PRICE = 15

export const computeIntentSummary = (orderIntent: OrderIntent) => {
  const { plexiglassHolderCount = 0, laminatedHolderCount = 0, stickerHolderCount = 0, subscriptionCode = '' } = orderIntent

  const plexiglassPrice = AVAILABLE_HOLDERS.find(x => x.code === HolderCode.Plexiglass)?.price || 0
  const laminatedPrice = AVAILABLE_HOLDERS.find(x => x.code === HolderCode.Laminated)?.price || 0
  const stickerPrice = AVAILABLE_HOLDERS.find(x => x.code === HolderCode.Sticker)?.price || 0
  const currentSubscriptionPrice = AVAILABLE_SUBSCRIPTIONS.find(x => x.code === subscriptionCode)?.price || 0

  const holderPrice = +plexiglassHolderCount + +laminatedHolderCount + +stickerHolderCount
  const deliveryPrice = holderPrice > 0 ? DELIVERY_PRICE : 0

  const totalPrice =
    plexiglassHolderCount * plexiglassPrice +
    laminatedHolderCount * laminatedPrice +
    stickerHolderCount * stickerPrice +
    currentSubscriptionPrice +
    deliveryPrice

  return {
    totalPrice,
    holderPrice,
    deliveryPrice,
    subscriptionPrice: currentSubscriptionPrice,
    hasDelivery: deliveryPrice > 0,
    hasHolders: holderPrice > 0,
    hasSubscription: subscriptionCode.length > 0,
  }
}
