import { LanguageCode, MenuProduct } from './products'

export type User = {
  id: string
  _id?: string
  username: string
  password: string
  name: string
  email: string
  logoKey?: string
  logoUrl?: string
  coverPhotoKey?: string
  coverPhotoUrl?: string
  joinDate: Date
  subscriptionExpiresAt?: Date
  isSuperAdmin?: boolean
  inPartyMode?: boolean
  city: string
  phoneNumber?: string
  customDomain?: string
  coords?: {
    latitude: number
    longitude: number
  }
  factureazaClientId?: string
  facebookUserId?: string
  googleUserId?: string
  appleUserId?: string
  styling: {
    themeColor: string
    logoScale: number
    logoBackgroundColor: string
    coverPhotoScale: number
  }
  usesDemoProducts: boolean
  shouldNotSendNavigationEmails: boolean
  lastRemindedAboutExpiryAt?: Date
  hasNoPassword?: boolean
  menuLanguages?: LanguageCode[]
  newAuthToken?: string
  businessInfo?: BusinessMedium[]
  activeProductSuggestion?: ProductSuggestion
  referralSource?: ReferralSource
  isEmailConfirmed?: boolean
  isUsingPartyMode?: boolean
  devices: UserDevice[]
  isCallWaiterEnabled?: boolean
}

export type UserDevice = {
  deviceId: string,
  waiterName: string,
  deviceType: string,
  addedAt: Date,
}

export enum ReferralSource {
  Facebook = 'facebook',
  Google = 'google',
  None = 'none',
}

export enum BusinessMediumType {
  Facebook = 'facebook',
  Instagram = 'instagram',
  GoogleMaps = 'googleMaps',
  Coordinates = 'coordinates',
  Website = 'website',
  Email = 'email',
  PhoneNumber = 'phoneNumber',
}

export type ProductSuggestion = {
  isActive: boolean
  productId: string
  product?: MenuProduct
}

export type BusinessMedium = {
  url: string
  isVisible: boolean
  type: BusinessMediumType
}

export type CreateAccountRequestBody = {
  email: string
  name: string
  username: string
  city: string
  password: string
  captchaToken: string
}
