import { LanguageCode, MenuProduct } from './products';
export declare type User = {
    id: string;
    _id?: string;
    username: string;
    password: string;
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
    coords?: {
        latitude: number;
        longitude: number;
    };
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
    usesDemoProducts: boolean;
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
    isCallWaiterEnabled?: boolean;
    defaultCurrency?: CurrencyCode;
};
export declare enum CurrencyCode {
    Ron = "ron",
    Mdl = "mdl"
}
export declare const EuroEquivalences: {
    ron: number;
    mdl: number;
};
export declare type UserDevice = {
    deviceId: string;
    waiterName: string;
    deviceType: string;
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
export declare type CreateAccountRequestBody = {
    email: string;
    name: string;
    username: string;
    city: string;
    password: string;
    captchaToken: string;
};
