export declare type MenuProduct = {
    names: Record<string, string>;
    descriptions: Record<string, string>;
    id: string;
    userId: string;
    username?: string;
    categoryId: string;
    imageKey?: string;
    imageInfo?: {
        width?: number;
        height?: number;
        sizeInKb?: number;
        uncompressedSizeInKb?: number;
        isGeneric?: boolean;
        genericImageKey?: string;
        hasWhiteBackground?: boolean;
    };
    imageUrl?: string;
    thumbnailUrl?: string;
    price?: number;
    isDiscounted?: boolean;
    isAvailable?: boolean;
    priceDuringEvent?: number;
    discountedPrice?: number;
    quantities?: string;
    kcalories?: string;
    nutritionalDeclaration?: string;
    allergens?: string[];
    properties?: string[];
    index: number;
    parentProductId?: string;
    childProducts?: MenuProduct[];
};
export declare type ParentProductViewModel = {
    id: string;
    name: string;
    description: string;
    oldPrice?: number;
    effectivePrice?: number;
    categoryId: string;
    safeName: string;
    isWhiteSquare: boolean;
    isPortrait: boolean;
    isGeneric: boolean;
    imageUrl: string;
    thumbnailUrl: string;
    isCompact: boolean;
    quantities?: string;
    kcalories?: string;
    index: number;
    nutritionalDeclaration?: string;
    isAvailable?: boolean;
    childProducts?: ChildProductViewModel[];
};
export declare type ChildProductViewModel = {
    index: number;
    name: string;
    quantities?: string;
    kcalories?: string;
    oldPrice?: number;
    effectivePrice: number;
    parentProduct?: ParentProductViewModel;
};
export declare enum ProductProperty {
    Spicy = "spicy",
    Hot = "hot",
    New = "new",
    Defrosted = "defrosted",
    Vegan = "vegan",
    Vegetarian = "vegetarian"
}
export declare type ProductPropertyDisplay = {
    type: ProductProperty;
    name: string;
    color: string;
    iconName: string;
};
export declare const ALL_PRODUCT_PROPERTIES: ProductPropertyDisplay[];
export declare enum LanguageCode {
    Romanian = "ro",
    English = "en",
    German = "de",
    Spanish = "es",
    Italian = "it",
    French = "fr",
    Dutch = "nl",
    Hungarian = "hu",
    Ukrainian = "uk",
    Russian = "ru"
}
export declare const RomanianLanguageName: {
    [key in LanguageCode]: string;
};
export declare const LocalLanguageName: {
    [key in LanguageCode]: string;
};
export declare const ALLERGENS: ({
    id: string;
    letter: string;
    shortNames: {
        ro: string;
        en: string;
        de: string;
        es: string;
        it: string;
        fr: string;
        hu: string;
        nl: string;
        uk: string;
        ru: string;
    };
    longNames: {
        ro: string;
        en: string;
        de: string;
        es: string;
        it: string;
        fr: string;
        hu: string;
        nl: string;
        uk: string;
        ru: string;
    };
} | {
    id: string;
    letter: string;
    shortNames: {
        ro: string;
        en: string;
        de: string;
        it: string;
        fr: string;
        hu: string;
        nl: string;
        uk: string;
        ru: string;
        es?: undefined;
    };
    longNames: {
        ro: string;
        en: string;
        de: string;
        es: string;
        it: string;
        fr: string;
        hu: string;
        nl: string;
        uk: string;
        ru: string;
    };
})[];
export declare type TranslatedAllergen = {
    id: string;
    letter: string;
    longName: string;
    shortName: string;
};
