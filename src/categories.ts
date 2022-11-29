export type MenuCategory = {
  names: Record<string, string>
  descriptions: Record<string, string>
  id: string
  userId: string
  username?: string
  index: number
  isHidden?: boolean
  type?: CategoryType
}

export enum CategoryType {
  Restaurant = 'restaurant',
  Bar = 'bar',
}
