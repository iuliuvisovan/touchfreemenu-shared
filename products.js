"use strict";
exports.__esModule = true;
exports.ALLERGENS = exports.AVAILABLE_ALLERGENS = exports.LanguageCode = void 0;
var LanguageCode;
(function (LanguageCode) {
    LanguageCode["Romanian"] = "ro";
    LanguageCode["English"] = "ro";
    LanguageCode["German"] = "de";
    LanguageCode["Spanish"] = "es";
    LanguageCode["Italian"] = "it";
    LanguageCode["French"] = "fr";
    LanguageCode["Hungarian"] = "hu";
    LanguageCode["Dutch"] = "nl";
})(LanguageCode = exports.LanguageCode || (exports.LanguageCode = {}));
exports.AVAILABLE_ALLERGENS = [
    {
        id: 'cereals',
        letter: 'A',
        shortName: 'Gluten',
        longName: 'Cereale care conțin gluten obținute din grâu, secară, orz, grâu spelt, grâu dur sau hibrizi ai acestora și produse derivate',
        shortNameEn: 'Cereals with Gluten',
        longNameEn: 'Cereals containing gluten: namely wheat (including specific varieties like spelt and Khorasan), rye, barley, oats and their hybridised strains) and products thereof'
    },
    {
        id: 'crustaceans',
        letter: 'B',
        shortName: 'Crustacee',
        longName: 'Crustacee și produse derivate',
        shortNameEn: 'Crustaceans',
        longNameEn: 'Crustaceans and products thereof (for example prawns, lobster, crabs and crayfish)'
    },
    {
        id: 'eggs',
        letter: 'C',
        shortName: 'Ouă',
        longName: 'Ouă și produse derivate',
        shortNameEn: 'Egg',
        longNameEn: 'Egg and products thereof'
    },
    {
        id: 'fish',
        letter: 'D',
        shortName: 'Pește',
        longName: 'Pește și produse derivate',
        shortNameEn: 'Fish',
        longNameEn: 'Fish and products thereof'
    },
    {
        id: 'peanuts',
        letter: 'E',
        shortName: 'Arahide',
        longName: 'Arahide și produse derivate',
        shortNameEn: 'Peanuts',
        longNameEn: 'Peanut and products thereof'
    },
    {
        id: 'soy',
        letter: 'F',
        shortName: 'Soia',
        longName: 'Soia (pd) și produse derivate',
        shortNameEn: 'Soybeans',
        longNameEn: 'Soybeans and products thereof'
    },
    {
        id: 'milk',
        letter: 'G',
        shortName: 'Lapte',
        longName: 'Lapte și produse derivate',
        shortNameEn: 'Milk',
        longNameEn: 'Milk and products thereof (including lactose)'
    },
    {
        id: 'nuts',
        letter: 'H',
        shortName: 'Fructe cu coajă lemnoasă',
        longName: 'Fructe cu coajă lemnoasă, adică: migdale, alune de pădure, nuci de Brazilia, fistic, nuci de macadamia și nuci de Queensland, precum și produse derivate',
        shortNameEn: 'Nuts',
        longNameEn: 'Nuts: namely almond, hazelnut, walnut, cashew, pecan nut, Brazil nut, pistachio nut and Macadamia nut (Queensland nut) and products thereof'
    },
    {
        id: 'celery',
        letter: 'I',
        shortName: 'Țelină',
        longName: 'Țelină și produse derivate',
        shortNameEn: 'Celery',
        longNameEn: 'Celery and products thereof'
    },
    {
        id: 'mustard',
        letter: 'J',
        shortName: 'Muștar',
        longName: 'Muștar și produse derivate',
        shortNameEn: 'Mustard',
        longNameEn: 'Mustard and products thereof'
    },
    {
        id: 'sesame',
        letter: 'K',
        shortName: 'Susan',
        longName: 'Semințe de susan și produse derivate',
        shortNameEn: 'Sesame',
        longNameEn: 'Sesame seeds and products thereof'
    },
    {
        id: 'sulphur_dioxide',
        letter: 'L',
        shortName: 'Dioxid de sulf',
        longName: 'Dioxidul de sulf și sulfiți în concentrații mai mari de 10mg/kg sau 10mg/litru în SO2 total.',
        shortNameEn: 'Sulphur dioxide',
        longNameEn: 'Sulphur dioxide and sulphites (at concentrations of more than 10mg/kg or 10mg/L in terms of the total SO2 which are to be calculated for products as proposed ready for consumption or as reconstituted according to the instructions of the manufacturers)'
    },
    {
        id: 'lupin',
        letter: 'M',
        shortName: 'Lupin',
        longName: 'Lupin și produse derivate',
        shortNameEn: 'Lupin',
        longNameEn: 'Lupin and products thereof'
    },
    {
        id: 'moluscs',
        letter: 'N',
        shortName: 'Moluște',
        longName: 'Moluște și produse derivate',
        shortNameEn: 'Molluscs',
        longNameEn: 'Molluscs and products thereof (for example clams, oysters, scallops, snails and squid)'
    },
];
exports.ALLERGENS = [
    {
        id: 'cereals',
        letter: 'A',
        shortNames: {
            ro: 'Gluten',
            en: 'Cereals with Gluten'
        },
        longNames: {
            ro: 'Cereale care conțin gluten obținute din grâu, secară, orz, grâu spelt, grâu dur sau hibrizi ai acestora și produse derivate',
            en: 'Cereals containing gluten: namely wheat (including specific varieties like spelt and Khorasan), rye, barley, oats and their hybridised strains) and products thereof'
        }
    },
    {
        id: 'crustaceans',
        letter: 'B',
        shortNames: {
            ro: 'Crustacee',
            en: 'Crustaceans'
        },
        longNames: {
            ro: 'Crustacee și produse derivate',
            en: 'Crustaceans and products thereof (for example prawns, lobster, crabs and crayfish)'
        }
    },
    {
        id: 'eggs',
        letter: 'C',
        shortNames: {
            ro: 'Ouă',
            en: 'Egg'
        },
        longNames: {
            ro: 'Ouă și produse derivate',
            en: 'Egg and products thereof'
        }
    },
    {
        id: 'fish',
        letter: 'D',
        shortNames: {
            ro: 'Pește',
            en: 'Fish'
        },
        longNames: {
            ro: 'Pește și produse derivate',
            en: 'Fish and products thereof'
        }
    },
    {
        id: 'peanuts',
        letter: 'E',
        shortNames: {
            ro: 'Arahide',
            en: 'Peanuts'
        },
        longNames: {
            ro: 'Arahide și produse derivate',
            en: 'Peanut and products thereof'
        }
    },
    {
        id: 'soy',
        letter: 'F',
        shortNames: {
            ro: 'Soia',
            en: 'Soybeans'
        },
        longNames: {
            ro: 'Soia (pd) și produse derivate',
            en: 'Soybeans and products thereof'
        }
    },
    {
        id: 'milk',
        letter: 'G',
        shortNames: {
            ro: 'Lapte',
            en: 'Milk'
        },
        longNames: {
            ro: 'Lapte și produse derivate (incl. lactoză)',
            en: 'Milk and products thereof (including lactose)'
        }
    },
    {
        id: 'nuts',
        letter: 'H',
        shortNames: {
            ro: 'Fructe cu coajă lemnoasă',
            en: 'Nuts'
        },
        longNames: {
            ro: 'Fructe cu coajă lemnoasă, adică: migdale, alune de pădure, nuci de Brazilia, fistic, nuci de macadamia și nuci de Queensland, precum și produse derivate',
            en: 'Nuts: namely almond, hazelnut, walnut, cashew, pecan nut, Brazil nut, pistachio nut and Macadamia nut (Queensland nut) and products thereof'
        }
    },
    {
        id: 'celery',
        letter: 'I',
        shortNames: {
            ro: 'Țelină',
            en: 'Celery'
        },
        longNames: {
            ro: 'Țelină și produse derivate',
            en: 'Celery and products thereof'
        }
    },
    {
        id: 'mustard',
        letter: 'J',
        shortNames: {
            ro: 'Muștar',
            en: 'Mustard'
        },
        longNames: {
            ro: 'Muștar și produse derivate',
            en: 'Mustard and products thereof'
        }
    },
    {
        id: 'sesame',
        letter: 'K',
        shortNames: {
            ro: 'Susan',
            en: 'Sesame'
        },
        longNames: {
            ro: 'Semințe de susan și produse derivate',
            en: 'Sesame seeds and products thereof'
        }
    },
    {
        id: 'sulphur_dioxide',
        letter: 'L',
        shortNames: {
            ro: 'Dioxid de sulf',
            en: 'Sulphur dioxide'
        },
        longNames: {
            ro: 'Dioxidul de sulf și sulfiți în concentrații mai mari de 10mg/kg sau 10mg/litru în SO2 total.',
            en: 'Sulphur dioxide and sulphites (at concentrations of more than 10mg/kg or 10mg/L in terms of the total SO2 which are to be calculated for products as proposed ready for consumption or as reconstituted according to the instructions of the manufacturers)'
        }
    },
    {
        id: 'lupin',
        letter: 'M',
        shortNames: {
            ro: 'Lupin',
            en: 'Lupin'
        },
        longNames: {
            ro: 'Lupin și produse derivate',
            en: 'Lupin and products thereof'
        }
    },
    {
        id: 'moluscs',
        letter: 'N',
        shortNames: {
            ro: 'Moluște',
            en: 'Molluscs'
        },
        longNames: {
            ro: 'Moluște și produse derivate',
            en: 'Molluscs and products thereof (for example clams, oysters, scallops, snails and squid)'
        }
    },
];
