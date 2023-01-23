import { ProductViewModel } from './products';
export type MenuCategory = {
    names: Record<string, string>;
    descriptions: Record<string, string>;
    id: string;
    userId: string;
    username?: string;
    index: number;
    isHidden?: boolean;
    type?: CategoryType;
};
export type CategoryViewModel = {
    id: string;
    name: string;
    description: string;
    index: number;
    type?: CategoryType;
    products?: ProductViewModel[];
    imageUrl?: string;
};
export declare enum CategoryType {
    Restaurant = "restaurant",
    Bar = "bar"
}
