export enum LanguageCode {
  Romanian = 'ro',
  English = 'en',
  German = 'de',
  Hungarian = 'hu',
  Spanish = 'es',
  Italian = 'it',
  French = 'fr',
  Ukrainian = 'ua',
  Russian = 'ru',
}

export const RomanianLanguageName: { [key in LanguageCode]: string } = {
  [LanguageCode.Romanian]: 'română',
  [LanguageCode.English]: 'engleză',
  [LanguageCode.German]: 'germană',
  [LanguageCode.Hungarian]: 'maghiară',
  [LanguageCode.Spanish]: 'spaniolă',
  [LanguageCode.Italian]: 'italiană',
  [LanguageCode.French]: 'franceză',
  [LanguageCode.Ukrainian]: 'ucraineană',
  [LanguageCode.Russian]: 'rusă',
}

export const LocalLanguageName: { [key in LanguageCode]: string } = {
  [LanguageCode.Romanian]: 'română',
  [LanguageCode.English]: 'english',
  [LanguageCode.German]: 'deutsch',
  [LanguageCode.Hungarian]: 'magyar',
  [LanguageCode.Spanish]: 'español',
  [LanguageCode.Italian]: 'italiano',
  [LanguageCode.French]: 'français',
  [LanguageCode.Ukrainian]: 'українська',
  [LanguageCode.Russian]: 'русский',
}

export const LanguageFlag: { [key in LanguageCode]: { title: string; src: string; alt: string } } = {
  [LanguageCode.Romanian]: {
    title: 'Română',
    src: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/48/flag-for-romania_1f1f7-1f1f4.png',
    alt: 'Flag of Romania',
  },
  [LanguageCode.English]: {
    title: 'Engleză',
    src: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/237/flag-for-united-kingdom_1f1ec-1f1e7.png',
    alt: 'Flag of the United Kingdom',
  },
  [LanguageCode.German]: {
    title: 'Germană',
    src: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/flag-germany_1f1e9-1f1ea.png',
    alt: 'Flag of Germany',
  },
  [LanguageCode.Hungarian]: {
    title: 'Maghiară',
    src: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/flag-hungary_1f1ed-1f1fa.png',
    alt: 'Flag of Hungary',
  },
  [LanguageCode.Spanish]: {
    title: 'Spaniolă',
    src: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/flag-spain_1f1ea-1f1f8.png',
    alt: 'Flag of Spain',
  },
  [LanguageCode.Italian]: {
    title: 'Italiană',
    src: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/flag-italy_1f1ee-1f1f9.png',
    alt: 'Flag of Italy',
  },
  [LanguageCode.French]: {
    title: 'Franceză',
    src: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/flag-france_1f1eb-1f1f7.png',
    alt: 'Flag of France',
  },
  [LanguageCode.Ukrainian]: {
    title: 'Ucraineană',
    src: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/flag-ukraine_1f1fa-1f1e6.png',
    alt: 'Flag of Ukraine',
  },
  [LanguageCode.Russian]: {
    title: 'Rusă',
    src: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/flag-russia_1f1f7-1f1fa.png',
    alt: 'Flag of Russia',
  },
}

export type MenuProduct = {
  names: Record<string, string>
  descriptions: Record<string, string>
  id: string
  userId: string
  username?: string
  categoryId: string
  categoryName?: string
  imageKey?: string
  imageUrl?: string
  price?: number
  isDiscounted?: boolean
  isAvailable?: boolean
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

export const ALLERGENS = [
  {
    id: 'cereals',
    letter: 'A',
    shortNames: {
      ro: 'Gluten',
      en: 'Cereals with Gluten',
    },
    longNames: {
      ro: 'Cereale care conțin gluten obținute din grâu, secară, orz, grâu spelt, grâu dur sau hibrizi ai acestora și produse derivate',
      en: 'Cereals containing gluten: namely wheat (including specific varieties like spelt and Khorasan), rye, barley, oats and their hybridised strains) and products thereof',
    },
  },
  {
    id: 'crustaceans',
    letter: 'B',
    shortNames: {
      ro: 'Crustacee',
      en: 'Crustaceans',
    },
    longNames: {
      ro: 'Crustacee și produse derivate',
      en: 'Crustaceans and products thereof (for example prawns, lobster, crabs and crayfish)',
    },
  },
  {
    id: 'eggs',
    letter: 'C',
    shortNames: {
      ro: 'Ouă',
      en: 'Egg',
    },
    longNames: {
      ro: 'Ouă și produse derivate',
      en: 'Egg and products thereof',
    },
  },
  {
    id: 'fish',
    letter: 'D',
    shortNames: {
      ro: 'Pește',
      en: 'Fish',
    },
    longNames: {
      ro: 'Pește și produse derivate',
      en: 'Fish and products thereof',
    },
  },
  {
    id: 'peanuts',
    letter: 'E',
    shortNames: {
      ro: 'Arahide',
      en: 'Peanuts',
    },
    longNames: {
      ro: 'Arahide și produse derivate',
      en: 'Peanut and products thereof',
    },
  },
  {
    id: 'soy',
    letter: 'F',
    shortNames: {
      ro: 'Soia',
      en: 'Soybeans',
    },
    longNames: {
      ro: 'Soia (pd) și produse derivate',
      en: 'Soybeans and products thereof',
    },
  },
  {
    id: 'milk',
    letter: 'G',
    shortNames: {
      ro: 'Lapte',
      en: 'Milk',
    },
    longNames: {
      ro: 'Lapte și produse derivate (incl. lactoză)',
      en: 'Milk and products thereof (including lactose)',
    },
  },
  {
    id: 'nuts',
    letter: 'H',
    shortNames: {
      ro: 'Fructe cu coajă lemnoasă',
      en: 'Nuts',
    },
    longNames: {
      ro: 'Fructe cu coajă lemnoasă, adică: migdale, alune de pădure, nuci de Brazilia, fistic, nuci de macadamia și nuci de Queensland, precum și produse derivate',
      en: 'Nuts: namely almond, hazelnut, walnut, cashew, pecan nut, Brazil nut, pistachio nut and Macadamia nut (Queensland nut) and products thereof',
    },
  },
  {
    id: 'celery',
    letter: 'I',
    shortNames: {
      ro: 'Țelină',
      en: 'Celery',
    },
    longNames: {
      ro: 'Țelină și produse derivate',
      en: 'Celery and products thereof',
    },
  },
  {
    id: 'mustard',
    letter: 'J',
    shortNames: {
      ro: 'Muștar',
      en: 'Mustard',
    },
    longNames: {
      ro: 'Muștar și produse derivate',
      en: 'Mustard and products thereof',
    },
  },
  {
    id: 'sesame',
    letter: 'K',
    shortNames: {
      ro: 'Susan',
      en: 'Sesame',
    },
    longNames: {
      ro: 'Semințe de susan și produse derivate',
      en: 'Sesame seeds and products thereof',
    },
  },
  {
    id: 'sulphur_dioxide',
    letter: 'L',
    shortNames: {
      ro: 'Dioxid de sulf',
      en: 'Sulphur dioxide',
    },
    longNames: {
      ro: 'Dioxidul de sulf și sulfiți în concentrații mai mari de 10mg/kg sau 10mg/litru în SO2 total.',
      en: 'Sulphur dioxide and sulphites (at concentrations of more than 10mg/kg or 10mg/L in terms of the total SO2 which are to be calculated for products as proposed ready for consumption or as reconstituted according to the instructions of the manufacturers)',
    },
  },
  {
    id: 'lupin',
    letter: 'M',
    shortNames: {
      ro: 'Lupin',
      en: 'Lupin',
    },
    longNames: {
      ro: 'Lupin și produse derivate',
      en: 'Lupin and products thereof',
    },
  },
  {
    id: 'moluscs',
    letter: 'N',
    shortNames: {
      ro: 'Moluște',
      en: 'Molluscs',
    },
    longNames: {
      ro: 'Moluște și produse derivate',
      en: 'Molluscs and products thereof (for example clams, oysters, scallops, snails and squid)',
    },
  },
]
