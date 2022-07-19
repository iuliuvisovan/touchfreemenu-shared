export declare enum LanguageCode {
    Romanian = "ro",
    English = "en",
    German = "de",
    Hungarian = "hu",
    Spanish = "es",
    Italian = "it",
    French = "fr",
    Ukrainian = "ua",
    Russian = "ru"
}
export declare const RomanianLanguageName: {
    [key in LanguageCode]: string;
};
export declare const LocalLanguageName: {
    [key in LanguageCode]: string;
};
export declare const LanguageFlag: {
    [key in LanguageCode]: {
        title: string;
        src: string;
        alt: string;
    };
};
export declare type MenuProduct = {
    names: Record<string, string>;
    descriptions: Record<string, string>;
    id: string;
    userId: string;
    username?: string;
    categoryId: string;
    categoryName?: string;
    imageKey?: string;
    imageUrl?: string;
    price?: number;
    isDiscounted?: Boolean;
    isAvailable?: Boolean;
    priceDuringEvent?: number;
    discountedPrice?: number;
    quantities?: string;
    allergens?: string[];
    index: number;
};
export declare const AVAILABLE_ALLERGENS: {
    id: string;
    letter: string;
    shortName: string;
    longName: string;
    shortNameEn: string;
    longNameEn: string;
}[];
export declare const ALLERGENS: {
    id: string;
    letter: string;
    shortNames: {
        ro: string;
        en: string;
    };
    longNames: {
        ro: string;
        en: string;
    };
}[];
