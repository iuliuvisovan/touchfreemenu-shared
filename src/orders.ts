export enum OrderStatus {
  Initiated = 'INITIATED',
  InProgress = 'IN_PROGRESS',
  Failed = 'FAILED',
  Paid = 'PAID',
  CurrentlyFulfilling = 'CURRENTLY_FULLFILLING',
  Fulfilled = 'FULFILLED',
}

export enum BillingType {
  Company = 'company',
  NaturalPerson = 'natural_person',
}

export type BillingInfo = {
  billingType: BillingType;
  //company name in case of 'company', person's full name in case of 'natural_person'
  name: string;
  cui?: string;
  address: string;
  city: string;
  county: string;
  country: string;
  phoneNumber: string;
};

export type ShippingInfo = {
  name: string;
  address: string;
  city: string;
  county: string;
  country: string;
  phoneNumber: string;
  extraInfo: string;
};

export enum ProductType {
  Subscription = 'Subscription',
  Holder = 'Holder',
}

export enum PaymentType {
  BankTransfer = 'BankTransfer',
  OnlineCard = 'OnlineCard',
}

export type OrderProduct = {
  type: ProductType;
  code: ProductCode;
  quantity: number;
};

export type Order = {
  products: OrderProduct[];
  userId: string;
  status: OrderStatus;
  paymentType: PaymentType;
  requestedAmount: number;
  billingInfo: BillingInfo;
  shippingInfo: ShippingInfo;
  capturedAmount?: number;
  paidWithCardMask?: string;
  mobilPayResponse?: string;
  localError?: string;
  extraCommentsFromUser?: string;
};

export type OrderIntent = {
  laminatedHolderCount?: number;
  plexiglassHolderCount?: number;
  subscriptionCode?: SubscriptionCode;
  billingInfo?: BillingInfo;
  shippingInfo?: ShippingInfo;
  paymentType?: PaymentType;
  extraCommentsFromUser?: string;
};

export enum SubscriptionCode {
  TFMC1 = 'TFM-C-1',
  TFMC6 = 'TFM-C-6',
  TFMC12 = 'TFM-C-12',
}

export enum HolderCode {
  Plexiglass = 'QRH-PLEX',
  Laminated = 'QRH-LAM',
}

export type ProductCode = SubscriptionCode | HolderCode;

export type Subscription = {
  code: SubscriptionCode;
  name: string;
  price: number;
  durationInDays: number;
};

export type Holder = {
  code: HolderCode;
  name: string;
  price: number;
  priceIncreaseSegment?: number;
};

export type PaymentRequest = {
  env_key: string;
  data: any;
  url: string;
};

export const availableHolders: Holder[] = [
  {
    code: HolderCode.Plexiglass,
    name: 'Holder vertical plexiglas - A6',
    price: 15,
  },
  {
    code: HolderCode.Laminated,
    name: 'Holder orizontal laminat - A6',
    price: 3,
    priceIncreaseSegment: 10,
  },
];

export const availableSubscriptions: Subscription[] = [
  {
    code: SubscriptionCode.TFMC1,
    name: 'Touch-Free Menu Complet - o lună',
    price: 49,
    durationInDays: 30,
  },
  {
    code: SubscriptionCode.TFMC6,
    name: 'Touch-Free Menu Complet - 6 luni',
    price: 289,
    durationInDays: 180,
  },
  {
    code: SubscriptionCode.TFMC12,
    name: 'Touch-Free Menu Complet - 12 luni',
    price: 499,
    durationInDays: 365,
  },
];

export const computeIntentPrice = (orderIntent: OrderIntent) => {
  const { plexiglassHolderCount = 0, laminatedHolderCount = 0, subscriptionCode = '' } = orderIntent;

  const plexiglassPrice = availableHolders.find((x) => x.code === HolderCode.Plexiglass)?.price || 0;
  const laminatedPrice = availableHolders.find((x) => x.code === HolderCode.Laminated)?.price || 0;
  const currentSubscriptionPrice = availableSubscriptions.find((x) => x.code === subscriptionCode)?.price || 0;

  const totalPrice = plexiglassHolderCount * plexiglassPrice + laminatedHolderCount * laminatedPrice + currentSubscriptionPrice;

  return totalPrice;
};
