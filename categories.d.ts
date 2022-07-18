export declare type MenuCategory = {
    id: string;
    userId: string;
    username?: string;
    name: string;
    nameEn: string;
    description?: string;
    descriptionEn: string;
    names: Record<string, string>;
    descriptions: Record<string, string>;
    index: number;
    isHidden: boolean;
};
