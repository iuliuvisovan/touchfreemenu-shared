export declare type MenuCategory = {
    names: Record<string, string>;
    descriptions: Record<string, string>;
    id: string;
    userId: string;
    username?: string;
    index: number;
    isHidden?: boolean;
    type?: CategoryType;
};
export declare enum CategoryType {
    Restaurant = "restaurant",
    Bar = "bar"
}
export declare type ProcessedMenuCategory = {
    _id: string;
    name: string;
    index: number;
    description: string;
    type: CategoryType;
    isOdd?: boolean;
};
