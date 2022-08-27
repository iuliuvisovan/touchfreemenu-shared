import { LanguageCode, MenuProduct } from './products';
export declare type User = {
    id: string;
    _id?: string;
    username: string;
    password: string;
    name: string;
    email: string;
    logoUrl?: string;
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
    registrationRequestId: string;
    name: string;
    username: string;
    city: string;
    password: string;
};
