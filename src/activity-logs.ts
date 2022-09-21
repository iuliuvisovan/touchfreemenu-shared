export type ActivityLog = {
  createdAt: string
  isVisitor?: boolean
  userId?: string
  username: string
  actionName: UserAction
  geoIpLocation: string
  browser: string
  device: string
  ip: string
  actionData: Object
}

export enum UserAction {
  CreateRegistrationRequest = 'CreateRegistrationRequest',
  RegisterWithFacebook = 'RegisterWithFacebook',
  FinalizeAccountFromSocial = 'FinalizeAccountFromSocial',
  CreateAccount = 'CreateAccount',
  ResendActivationEmail = 'ResendActivationEmail',
  ConfirmEmailAddress = 'ConfirmEmailAddress',
  SetLogo = 'SetLogo',
  PayOrderViaOnlineCard = 'PayOrderViaOnlineCard',
  Login = 'Login',
  LoginWithFacebook = 'LoginWithFacebook',
  GetRegistrationRequest = 'GetRegistrationRequest',
  ClickOnResetLink = 'ClickOnResetLink',
  SendPasswordResetEmail = 'SendPasswordResetEmail',
  CompletePasswordReset = 'CompletePasswordReset',
  SetBusinessMedium = 'SetBusinessMedium',
  SetProductSuggestion = 'SetProductSuggestion',
  CreateCategory = 'CreateCategory',
  CreateProduct = 'CreateProduct',
  EditCategory = 'EditCategory',
  EditProduct = 'EditProduct',
  ToggleProductStock = 'ToggleProductStock',
  CancelOrder = 'CancelOrder',
  GetCurrentUser = 'GetCurrentUser',
  AdminConfirmBankPayment = 'AdminConfirmBankPayment',
  AdminConfirmDelivery = 'AdminConfirmDelivery',
  AdminRemindExpiry = 'AdminRemindExpiry',
  ViewArticle = 'ViewArticle',
  RequestNewLanguages = 'RequestNewLanguages',
  RequestSetLanguages = 'RequestSetLanguages',
  SucceedSetLanguages = 'SucceedSetLanguages',
}
