import { LanguageCode, MenuProduct } from './products';
export declare type User = {
    id: string;
    _id?: string;
    username: string;
    password: string;
    passwordHash: string;
    name: string;
    email: string;
    logoKey?: string;
    logoUrl?: string;
    coverPhotoKey?: string;
    coverPhotoUrl?: string;
    joinDate: Date;
    subscriptionExpiresAt?: Date;
    isSuperAdmin?: boolean;
    inPartyMode?: boolean;
    city: string;
    phoneNumber?: string;
    customDomain?: string;
    coords?: LocationInfo;
    factureazaClientId?: string;
    facebookUserId?: string;
    googleUserId?: string;
    appleUserId?: string;
    styling: {
        themeColor: string;
        logoScale: number;
        logoBackgroundColor: string;
        coverPhotoScale: number;
    };
    usesDemoProducts?: boolean;
    shouldNotSendNavigationEmails: boolean;
    lastRemindedAboutExpiryAt?: Date;
    hasNoPassword?: boolean;
    menuLanguages?: LanguageCode[];
    newAuthToken?: string;
    businessInfo?: BusinessMedium[];
    activeProductSuggestion?: ProductSuggestion;
    referralSource?: ReferralSource;
    isEmailConfirmed?: boolean;
    isUsingPartyMode?: boolean;
    devices: UserDevice[];
    ordering?: {
        isCallWaiterEnabled?: boolean;
        isTableOrderingEnabled?: boolean;
    };
    defaultCurrency?: CurrencyCode;
    defaultMenuLanguage?: LanguageCode;
    wifiInfo?: WifiInfo;
    isUsingMenuSections?: boolean;
};
export declare type UserViewModel = {
    id: string;
    username: string;
    name: string;
    logoUrl?: string;
    coverPhotoUrl?: string;
    city: string;
    phoneNumber?: string;
    styling: {
        themeColor: string;
        logoScale: number;
        logoBackgroundColor: string;
        coverPhotoScale: number;
    };
    menuLanguages?: LanguageCode[];
    businessInfo?: BusinessMedium[];
    activeProductSuggestion?: ProductSuggestion;
    ordering?: {
        isCallWaiterEnabled?: boolean;
        isTableOrderingEnabled?: boolean;
    };
    defaultCurrency?: CurrencyCode;
    defaultMenuLanguage?: LanguageCode;
    wifiInfo?: WifiInfo;
    isUsingMenuSections?: boolean;
};
export declare enum CurrencyCode {
    Ron = "ron",
    Mdl = "mdl",
    Eur = "eur"
}
export declare const EuroEquivalences: {
    [key in CurrencyCode]: number;
};
export declare type UserDevice = {
    deviceId: string;
    deviceType: string;
    deviceName: string;
    pushNotificationsToken: string;
    waiterName: string;
    isPushNotificationsEnabled: boolean;
    addedAt: Date;
};
export declare enum ReferralSource {
    Facebook = "facebook",
    Google = "google",
    None = "none"
}
export declare enum BusinessMediumType {
    Facebook = "facebook",
    Instagram = "instagram",
    GoogleMaps = "googleMaps",
    Coordinates = "coordinates",
    Website = "website",
    Email = "email",
    PhoneNumber = "phoneNumber"
}
export declare type ProductSuggestion = {
    isActive: boolean;
    productId: string;
    product?: MenuProduct;
};
export declare type BusinessMedium = {
    url: string;
    isVisible: boolean;
    type: BusinessMediumType;
};
export declare type WifiInfo = {
    networkName?: string;
    password?: string;
    isVisible?: boolean;
};
export declare type LocationInfo = {
    latitude: number;
    longitude: number;
    isVisible?: boolean;
    addressObject?: AddressObject;
};
export declare type AddressComponent = {
    long_name: string;
    short_name: string;
    types: string[];
};
export declare type AddressObject = {
    address_components: AddressComponent[];
};
export declare type CreateAccountRequestBody = {
    email: string;
    name: string;
    username: string;
    city: string;
    password: string;
    captchaToken: string;
};
export declare type UserPatchBody = {
    type: UserPatchType.WifiInfo;
    data: WifiInfo;
} | {
    type: UserPatchType.Location;
    data: LocationInfo;
} | {
    type: UserPatchType.IsUsingMenuSections;
    data: boolean;
} | {
    type: UserPatchType.DefaultMenuLanguage;
    data: LanguageCode;
} | {
    type: UserPatchType.DefaultCurrency;
    data: CurrencyCode;
} | {
    type: UserPatchType.FromAdminInterface;
    data: {
        name: string;
        city: string;
        coords?: {
            latitude: number;
            longitude: number;
        };
    };
};
export declare enum UserPatchType {
    WifiInfo = "wifiInfo",
    Location = "location",
    BusinessMedium = "businessMedium",
    DefaultCurrency = "defaultCurrency",
    PartyMode = "partyMode",
    IsUsingPartyMode = "isUsingPartyMode",
    FromAdminInterface = "fromAdminInterface",
    IsUsingMenuSections = "isUsingMenuSections",
    DefaultMenuLanguage = "defaultMenuLanguage"
}
export declare function formatAddress(addressObject: AddressObject | undefined): string;
