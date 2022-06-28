export type MenuProduct = {
  id: string
  userId: string
  username?: string
  categoryId: string
  categoryName?: string
  name: string
  nameEn?: string
  description?: string
  descriptionEn?: string
  imageKey?: string
  imageUrl?: string
  price?: number
  isDiscounted?: Boolean
  isAvailable?: Boolean
  priceDuringEvent?: number
  discountedPrice?: number
  quantities?: string
  allergens?: string[]
  index: number
}

export const AVAILABLE_ALLERGENS = [
  {
    id: 'cereals',
    letter: 'A',
    shortName: 'Gluten',
    longName:
      'Cereale care conțin gluten obținute din grâu, secară, orz, grâu spelt, grâu dur sau hibrizi ai acestora și produse derivate',
    shortNameEn: 'Cereals with Gluten',
    longNameEn:
      'Cereals containing gluten: namely wheat (including specific varieties like spelt and Khorasan), rye, barley, oats and their hybridised strains) and products thereof',
  },
  {
    id: 'crustaceans',
    letter: 'B',
    shortName: 'Crustacee',
    longName: 'Crustacee și produse derivate',
    shortNameEn: 'Crustaceans',
    longNameEn: 'Crustaceans and products thereof (for example prawns, lobster, crabs and crayfish)',
  },
  {
    id: 'eggs',
    letter: 'C',
    shortName: 'Ouă',
    longName: 'Ouă și produse derivate',
    shortNameEn: 'Egg',
    longNameEn: 'Egg and products thereof',
  },
  {
    id: 'fish',
    letter: 'D',
    shortName: 'Pește',
    longName: 'Pește și produse derivate',
    shortNameEn: 'Fish',
    longNameEn: 'Fish and products thereof',
  },
  {
    id: 'peanuts',
    letter: 'E',
    shortName: 'Arahide',
    longName: 'Arahide și produse derivate',
    shortNameEn: 'Peanuts',
    longNameEn: 'Peanut and products thereof',
  },
  {
    id: 'soy',
    letter: 'F',
    shortName: 'Soia',
    longName: 'Soia (pd) și produse derivate',
    shortNameEn: 'Soybeans',
    longNameEn: 'Soybeans and products thereof',
  },
  {
    id: 'milk',
    letter: 'G',
    shortName: 'Lapte',
    longName: 'Lapte și produse derivate',
    shortNameEn: 'Milk',
    longNameEn: 'Milk and products thereof (including lactose)',
  },
  {
    id: 'nuts',
    letter: 'H',
    shortName: 'Fructe cu coajă lemnoasă',
    longName:
      'Fructe cu coajă lemnoasă, adică: migdale, alune de pădure, nuci de Brazilia, fistic, nuci de macadamia și nuci de Queensland, precum și produse derivate',
    shortNameEn: 'Nuts',
    longNameEn:
      'Nuts: namely almond, hazelnut, walnut, cashew, pecan nut, Brazil nut, pistachio nut and Macadamia nut (Queensland nut) and products thereof',
  },
  {
    id: 'celery',
    letter: 'I',
    shortName: 'Țelină',
    longName: 'Țelină și produse derivate',
    shortNameEn: 'Celery',
    longNameEn: 'Celery and products thereof',
  },
  {
    id: 'mustard',
    letter: 'J',
    shortName: 'Muștar',
    longName: 'Muștar și produse derivate',
    shortNameEn: 'Mustard',
    longNameEn: 'Mustard and products thereof',
  },
  {
    id: 'sesame',
    letter: 'K',
    shortName: 'Susan',
    longName: 'Semințe de susan și produse derivate',
    shortNameEn: 'Sesame',
    longNameEn: 'Sesame seeds and products thereof',
  },
  {
    id: 'sulphur_dioxide',
    letter: 'L',
    shortName: 'Dioxid de sulf',
    longName: 'Dioxidul de sulf și sulfiți în concentrații mai mari de 10mg/kg sau 10mg/litru în SO2 total.',
    shortNameEn: 'Sulphur dioxide',
    longNameEn:
      'Sulphur dioxide and sulphites (at concentrations of more than 10mg/kg or 10mg/L in terms of the total SO2 which are to be calculated for products as proposed ready for consumption or as reconstituted according to the instructions of the manufacturers)',
  },
  {
    id: 'lupin',
    letter: 'M',
    shortName: 'Lupin',
    longName: 'Lupin și produse derivate',
    shortNameEn: 'Lupin',
    longNameEn: 'Lupin and products thereof',
  },
  {
    id: 'moluscs',
    letter: 'N',
    shortName: 'Moluște',
    longName: 'Moluște și produse derivate',
    shortNameEn: 'Molluscs',
    longNameEn: 'Molluscs and products thereof (for example clams, oysters, scallops, snails and squid)',
  },
]
