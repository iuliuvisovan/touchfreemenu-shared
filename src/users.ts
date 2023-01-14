import { LanguageCode, MenuProduct } from './products'

export type User = {
  id: string
  _id?: string
  username: string
  password: string
  passwordHash: string
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
  coords?: LocationInfo
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
  ordering?: {
    isCallWaiterEnabled?: boolean
    isTableOrderingEnabled?: boolean
  }
  defaultCurrency?: CurrencyCode
  defaultMenuLanguage?: LanguageCode
  wifiInfo?: WifiInfo
  isUsingMenuSections?: boolean
}
export type UserViewModel = {
  id: string
  username: string
  name: string
  logoUrl?: string
  coverPhotoUrl?: string
  city: string
  phoneNumber?: string
  styling: {
    themeColor: string
    logoScale: number
    logoBackgroundColor: string
    coverPhotoScale: number
  }
  menuLanguages?: LanguageCode[]
  businessInfo?: BusinessMedium[]
  activeProductSuggestion?: ProductSuggestion
  ordering?: {
    isCallWaiterEnabled?: boolean
    isTableOrderingEnabled?: boolean
  }
  defaultCurrency?: CurrencyCode
  defaultMenuLanguage?: LanguageCode
  wifiInfo?: WifiInfo
  isUsingMenuSections?: boolean
}

export enum CurrencyCode {
  Ron = 'ron',
  Mdl = 'mdl',
  Eur = 'eur',
}

export const EuroEquivalences: { [key in CurrencyCode]: number } = {
  [CurrencyCode.Ron]: 4.95,
  [CurrencyCode.Mdl]: 20.66,
  [CurrencyCode.Eur]: 1,
}

export type UserDevice = {
  deviceId: string
  deviceType: string
  deviceName: string
  pushNotificationsToken: string
  waiterName: string
  isPushNotificationsEnabled: boolean
  addedAt: Date
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

export type WifiInfo = {
  networkName?: string
  password?: string
  isVisible?: boolean
}

export type LocationInfo = {
  latitude: number
  longitude: number
  isVisible?: boolean
  addressObject?: AddressObject
}

export type AddressComponent = {
  long_name: string
  short_name: string
  types: string[]
}

export type AddressObject = {
  address_components: AddressComponent[]
}

export type CreateAccountRequestBody = {
  email: string
  name: string
  username: string
  city: string
  password: string
  captchaToken: string
}

export type UserPatchBody =
  | {
      type: UserPatchType.WifiInfo
      data: WifiInfo
    }
  | {
      type: UserPatchType.Location
      data: LocationInfo
    }
  | {
      type: UserPatchType.IsUsingMenuSections
      data: boolean
    }
  | {
      type: UserPatchType.DefaultMenuLanguage
      data: LanguageCode
    }
  | {
      type: UserPatchType.DefaultCurrency
      data: CurrencyCode
    }
  | {
      type: UserPatchType.FromAdminInterface
      data: {
        name: string
        city: string
        coords?: {
          latitude: number
          longitude: number
        }
      }
    }

export enum UserPatchType {
  WifiInfo = 'wifiInfo',
  Location = 'location',
  BusinessMedium = 'businessMedium',
  DefaultCurrency = 'defaultCurrency',
  PartyMode = 'partyMode',
  IsUsingPartyMode = 'isUsingPartyMode',
  FromAdminInterface = 'fromAdminInterface',
  IsUsingMenuSections = 'isUsingMenuSections',
  DefaultMenuLanguage = 'defaultMenuLanguage',
}

export function formatAddress(addressObject: AddressObject | undefined) {
  if (!addressObject) {
    return ''
  }

  const { address_components } = addressObject
  const streetName = address_components.find(x => x.types.includes('route'))?.short_name || ''
  const streetNumber = address_components.find(x => x.types.includes('street_number'))?.short_name
  const city = address_components.find(x => x.types.includes('locality'))?.short_name
  const biggerCity = (address_components.find(x => x.types.includes('administrative_area_level_2'))?.short_name || '').replace(
    /municipiul|comuna|orasul|orașul/i,
    ''
  )

  const streetAddress = `${streetName.replace(/strada/i, 'str.').replace(/bulevardul/i, 'Bd.') || ''} ${streetNumber || ''}`
  const relevantCity = biggerCity || city

  return [streetAddress, relevantCity].filter(x => (x || '')?.trim()).join(', ')
}
