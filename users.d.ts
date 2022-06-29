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
};
export declare type CreateAccountRequestBody = {
    confirmationToken: string;
    name: string;
    username: string;
    city: string;
    password: string;
};
