export type User = {
  id: string
  username: string
  password: string
  name: string
  email: string
  logoUrl?: string
  coverPhotoUrl?: string
  joinDate: Date
  subscriptionExpiresAt?: Date
  city: string
  phoneNumber?: string
  coords?: {
    latitude: number
    longitude: number
  }
  factureazaClientId?: string
  styling: {
    themeColor: string
    logoScale: number
    logoBackgroundColor: string
    coverPhotoScale: number
  }
  usesDemoProducts: boolean
  shouldNotSendNavigationEmails: boolean
}

export type CreateAccountRequestBody = {
  confirmationToken: string
  name: string
  username: string
  city: string
  password: string
}
