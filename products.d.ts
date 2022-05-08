export declare type MenuProduct = {
    id: string;
    userId: string;
    username?: string;
    categoryId: string;
    categoryName?: string;
    name: string;
    nameEn?: string;
    description?: string;
    descriptionEn?: string;
    imageKey?: string;
    imageUrl?: string;
    price?: number;
    isDiscounted?: Boolean;
    isAvailable?: Boolean;
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
