export declare type User = {
    id: string;
    username: string;
    password: string;
    name: string;
    email: string;
    logoUrl?: string;
    coverPhotoUrl?: string;
    joinDate: Date;
    subscriptionExpiresAt?: Date;
    city: string;
    phoneNumber?: string;
    coords?: {
        latitude: number;
        longitude: number;
    };
    factureazaClientId?: string;
    styling: {
        themeColor: string;
        logoScale: number;
        logoBackgroundColor: string;
        coverPhotoScale: number;
    };
    usesDemoProducts: boolean;
    shouldNotSendNavigationEmails: boolean;
};
export declare enum UserAction {
    Register = "Register",
    ConfirmAndCreateAccount = "ConfirmAndCreateAccount",
    SetLogo = "SetLogo",
    PayProformaInvoice = "PayProformaInvoice"
}
