export type ActionLog = {
  type: ActionType
  createdAt: string
  isVisitor?: boolean
  userId?: string
  username: string
  geoIpLocation: string
  browser: string
  referrer: string
  device: string
  ip: string
  timestamp: number
  actionData: Object
}

export enum ActionType {
  CreateRegistrationRequest = 'CreateRegistrationRequest',
  RegisterWithFacebook = 'RegisterWithFacebook',
  FinalizeAccountFromSocial = 'FinalizeAccountFromSocial',
  CreateAccount = 'CreateAccount',
  ResendActivationEmail = 'ResendActivationEmail',
  ConfirmEmailAddress = 'ConfirmEmailAddress',
  SetLogo = 'SetLogo',
  SetLogoScale = 'SetLogoScale',
  SetCoverPhoto = 'SetCoverPhoto',
  SetCoverPhotoScale = 'SetCoverPhotoScale',
  CreateOrder = 'CreateOrder',
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
  AddChildProduct = 'AddChildProduct',
  EditChildProduct = 'EditChildProduct',
  RemoveCategory = 'RemoveCategory',
  RemoveProduct = 'RemoveProduct',
  MoveCategory = 'MoveCategory',
  MoveProduct = 'MoveProduct',
  TransferProduct = 'TransferProduct',
  ToggleProductStock = 'ToggleProductStock',
  TogglePartyMode = 'TogglePartyMode',
  ToggleIsUsingPartyMode = 'ToggleIsUsingPartyMode',
  CancelOrder = 'CancelOrder',
  GetCurrentUser = 'GetCurrentUser',
  AdminConfirmBankPayment = 'AdminConfirmBankPayment',
  AdminConfirmDelivery = 'AdminConfirmDelivery',
  AdminRemindExpiry = 'AdminRemindExpiry',
  ViewArticle = 'ViewArticle',
  RequestNewLanguages = 'RequestNewLanguages',
  RequestSetLanguages = 'RequestSetLanguages',
  SucceedSetLanguages = 'SucceedSetLanguages',
  ChangePassword = 'ChangePassword',
  UpdateCurrentUser = 'UpdateCurrentUser',
  RemoveDevice = 'RemoveDevice',
  AddDevice = 'AddDevice',
  UpdateDevice = 'UpdateDevice',
}
