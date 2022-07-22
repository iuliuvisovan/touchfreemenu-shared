"use strict";
var _a, _b, _c;
exports.__esModule = true;
exports.ALLERGENS = exports.LanguageFlag = exports.LocalLanguageName = exports.RomanianLanguageName = exports.LanguageCode = void 0;
var LanguageCode;
(function (LanguageCode) {
    LanguageCode["Romanian"] = "ro";
    LanguageCode["English"] = "en";
    LanguageCode["German"] = "de";
    // Hungarian is bugged
    // Hungarian = 'hu',
    LanguageCode["Spanish"] = "es";
    LanguageCode["Italian"] = "it";
    // French = 'fr',
    // // This is how Google Translate wants it
    // Ukrainian = 'uk',
    // Russian = 'ru',
})(LanguageCode = exports.LanguageCode || (exports.LanguageCode = {}));
exports.RomanianLanguageName = (_a = {},
    _a[LanguageCode.Romanian] = 'română',
    _a[LanguageCode.English] = 'engleză',
    _a[LanguageCode.German] = 'germană',
    // [LanguageCode.Hungarian]: 'maghiară',
    _a[LanguageCode.Spanish] = 'spaniolă',
    _a[LanguageCode.Italian] = 'italiană',
    _a);
exports.LocalLanguageName = (_b = {},
    _b[LanguageCode.Romanian] = 'română',
    _b[LanguageCode.English] = 'english',
    _b[LanguageCode.German] = 'deutsch',
    // [LanguageCode.Hungarian]: 'magyar',
    _b[LanguageCode.Spanish] = 'español',
    _b[LanguageCode.Italian] = 'italiano',
    _b);
exports.LanguageFlag = (_c = {},
    _c[LanguageCode.Romanian] = {
        title: 'Română',
        src: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/48/flag-for-romania_1f1f7-1f1f4.png',
        alt: 'Flag of Romania'
    },
    _c[LanguageCode.English] = {
        title: 'Engleză',
        src: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/237/flag-for-united-kingdom_1f1ec-1f1e7.png',
        alt: 'Flag of the United Kingdom'
    },
    _c[LanguageCode.German] = {
        title: 'Germană',
        src: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/flag-germany_1f1e9-1f1ea.png',
        alt: 'Flag of Germany'
    },
    // [LanguageCode.Hungarian]: {
    //   title: 'Maghiară',
    //   src: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/flag-hungary_1f1ed-1f1fa.png',
    //   alt: 'Flag of Hungary',
    // },
    _c[LanguageCode.Spanish] = {
        title: 'Spaniolă',
        src: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/flag-spain_1f1ea-1f1f8.png',
        alt: 'Flag of Spain'
    },
    _c[LanguageCode.Italian] = {
        title: 'Italiană',
        src: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/flag-italy_1f1ee-1f1f9.png',
        alt: 'Flag of Italy'
    },
    _c);
exports.ALLERGENS = [
    {
        id: 'cereals',
        letter: 'A',
        shortNames: {
            ro: 'Gluten',
            en: 'Cereals with Gluten',
            de: 'Gluten',
            es: 'Gluten',
            it: 'Glutine',
            fr: 'Gluten',
            hu: 'Glutén',
            nl: 'Gluten',
            uk: 'Глютен',
            ru: 'Глютен'
        },
        longNames: {
            ro: 'Cereale care conțin gluten obținute din grâu, secară, orz, grâu spelt, grâu dur sau hibrizi ai acestora și produse derivate',
            en: 'Cereals containing gluten: namely wheat (including specific varieties like spelt and Khorasan), rye, barley, oats and their hybridised strains) and products thereof',
            de: 'Glutenhaltiges Getreide (d. h. Weizen, Roggen, Gerste, Hafer, Dinkel u. a.) sowie daraus hergestellte Erzeugnisse',
            es: 'Cereales con gluten: Trigo, espelta, kamut, centeno, cebada y avena.',
            it: 'Cereali contenenti glutine (grano, farro, grano khorasan, segale, orzo, avena)',
            fr: 'Céréales contenant du gluten (blé, seigle, orge, avoine, épeautre, kamut ou leurs souches hybridées) et produits à base de ces céréales',
            hu: 'Glutént tartalmazó gabona és azokból készült termékek (búza, rozs, árpa, zab, tönköly, kamutbúza vagy ezek hibrid változatai) ',
            nl: 'Glutenbevattende granen (tarwe, rogge, gerst, haver, spelt, khorasantarwe/ kamut)',
            uk: 'Зернові, що містять глютен',
            ru: 'Зерновые, содержащие глютен'
        }
    },
    {
        id: 'crustaceans',
        letter: 'B',
        shortNames: {
            ro: 'Crustacee',
            en: 'Crustaceans',
            de: 'Krebstiere',
            es: 'Crustáceos',
            it: 'Crostacei',
            fr: 'Crustacés',
            hu: 'Rákfélék',
            nl: 'Schaaldieren',
            uk: 'Ракоподібні',
            ru: 'Ракообразные'
        },
        longNames: {
            ro: 'Crustacee și produse derivate',
            en: 'Crustaceans and products thereof (for example prawns, lobster, crabs and crayfish)',
            de: 'Krebstiere und Krebstiererzeugnisse',
            es: 'Crustáceos:Cangrejos, langosta, gambas, langostinos, carabineros, cigalas etc. y también salsas, cremas, platos preparados...',
            it: 'Crostacei',
            fr: 'Crustacés et produits à base de crustacés',
            hu: 'Rákfélék és azokból készült termékek (kagylót is kérem feltüntetni) ',
            nl: 'Schaaldieren',
            uk: 'Ракоподібні та продукти з них',
            ru: 'Ракообразные и продукты из них'
        }
    },
    {
        id: 'eggs',
        letter: 'C',
        shortNames: {
            ro: 'Ouă',
            en: 'Egg',
            de: 'Eier',
            es: 'Huevos',
            it: 'Uova',
            fr: 'Oeufs',
            hu: 'Tojás',
            nl: 'Eieren',
            uk: 'Яйця',
            ru: 'Яйця'
        },
        longNames: {
            ro: 'Ouă și produse derivate',
            en: 'Egg and products thereof',
            de: 'Eier und Eierzeugnisse',
            es: 'Huevos: Tartas, productos cárnicos, mayonesa, mousses, pastas, quiches, salsas.',
            it: 'Uova',
            fr: "Oeufs et produits à base d'oeufs",
            hu: 'Tojás és abból készült termékek ',
            nl: 'Eieren',
            uk: 'Яйця та яєчні продукти',
            ru: 'Яйца и яичные продукты'
        }
    },
    {
        id: 'fish',
        letter: 'D',
        shortNames: {
            ro: 'Pește',
            en: 'Fish',
            de: 'Pescado',
            it: 'Pesce',
            fr: 'Poissons',
            hu: 'Halak',
            nl: 'Vis',
            uk: 'Риба',
            ru: 'Рыба'
        },
        longNames: {
            ro: 'Pește și produse derivate',
            en: 'Fish and products thereof',
            de: 'Fisch und Fischerzeugnisse',
            es: 'Pescado: Pizzas, cubos de sopa, aliños para ensaladas.',
            it: 'Pesce',
            fr: 'Poissons et produits à base de poissons',
            hu: 'Halak és azokból készült termékek ',
            nl: 'Vis',
            uk: 'Риба та рибні продукти',
            ru: 'Рыба и рыбные продукты'
        }
    },
    {
        id: 'peanuts',
        letter: 'E',
        shortNames: {
            ro: 'Arahide',
            en: 'Peanuts',
            de: 'Erdnüsse',
            es: 'Cacahuetes',
            it: 'Arachidi',
            fr: 'Arachides',
            hu: 'Földimogyoró',
            nl: 'Pinda',
            uk: 'Арахіс',
            ru: 'Арахис'
        },
        longNames: {
            ro: 'Arahide și produse derivate',
            en: 'Peanut and products thereof',
            de: 'Erdnüsse und Erdnusserzeugnisse',
            es: 'Cacahuetes: Mantecas, aceite, harina, galletas, chocolate, currys, postres, salsas...',
            it: 'Arachidi',
            fr: "Arachides et produits à base d'arachides",
            hu: 'Földimogyoró és abból készült termékek',
            nl: 'Pinda',
            uk: 'Арахіс та продукти з арахісу',
            ru: 'Арахис и продукты из арахиса'
        }
    },
    {
        id: 'soy',
        letter: 'F',
        shortNames: {
            ro: 'Soia',
            en: 'Soybeans',
            de: 'Soja',
            es: 'Soja',
            it: 'Soia',
            fr: 'Soja',
            hu: 'Szója',
            nl: 'Soja',
            uk: 'Соя',
            ru: 'Соя'
        },
        longNames: {
            ro: 'Soia (pd) și produse derivate',
            en: 'Soybeans and products thereof',
            de: 'Soja und Sojaerzeugnisse',
            es: 'Soja: Salsas, pastas, aceites, tofu, postres, pasta de miso, productos cárnicos y productos para vegetarianos.',
            it: 'Soia',
            fr: 'Soja et produits à base de soja',
            hu: 'Szójabab és abból készült termékek ',
            nl: 'Soja',
            uk: 'Соя та соєві продукти',
            ru: 'Соя и соевые продукты'
        }
    },
    {
        id: 'milk',
        letter: 'G',
        shortNames: {
            ro: 'Lapte',
            en: 'Milk',
            de: 'Milch',
            es: 'Leche',
            it: 'Latte',
            fr: 'Lait et produits à base de lait (y compris de lactose)',
            hu: 'Tej',
            nl: 'Melk',
            uk: 'Молоко',
            ru: 'Молоко'
        },
        longNames: {
            ro: 'Lapte și produse derivate (incl. lactoză)',
            en: 'Milk and products thereof (including lactose)',
            de: 'Milch und Milcherzeugnisse (einschließlich Laktose)',
            es: 'Leche: Mantequilla, queso, nata, yogures... sopas, salsas.',
            it: 'Latte e prodotti a base di latte (incluso lattosio)',
            fr: 'Lait et produits à base de lait (y compris de lactose)',
            hu: 'Tej és abból készült termékek (beleértve a laktózt is)',
            nl: 'Melk (inclusief lactose)',
            uk: 'Молоко та молочні продукти',
            ru: 'Молоко и молочные продукты'
        }
    },
    {
        id: 'nuts',
        letter: 'H',
        shortNames: {
            ro: 'Fructe cu coajă lemnoasă',
            en: 'Nuts',
            de: 'Schalenfrüchte',
            es: 'Frutos de cáscara',
            it: 'Frutta a guscio',
            fr: 'Fruits à coques',
            hu: 'Diófélék',
            nl: 'Noten',
            uk: 'Горіхи',
            ru: 'Орехи'
        },
        longNames: {
            ro: 'Fructe cu coajă lemnoasă, adică: migdale, alune de pădure, nuci de Brazilia, fistic, nuci de macadamia și nuci de Queensland, precum și produse derivate',
            en: 'Nuts: namely almond, hazelnut, walnut, cashew, pecan nut, Brazil nut, pistachio nut and Macadamia nut (Queensland nut) and products thereof',
            de: 'Schalenfrüchte, d. h. Mandel, Haselnuss, Walnuss, Kaschunuss, Pecannuss, Paranuss, Pistazie, Macadamianuss und Queenslandnuss sowie daraus hergestellte Erzeugnisse',
            es: 'Frutos de cáscara: Almendras, avellanas, nueces, anacardos, pacanas, panes, postres, helados, galletas, mazapán, salsas, aceites.',
            it: 'Frutta a guscio (mandorle, nocciole, noci, noci di acagiù, noci pecan, noci del Brasile, pistacchi, noci macadamia o noci del Queensland)',
            fr: 'Fruits à coques (amandes, noisettes, noix, noix de: cajou, pécan, macadamia, du Brésil, du Queensland, pistaches) et produits à base de ces fruits)',
            hu: 'Diófélék (mandula, mogyoró, dió, kesudió, pekándió, brazil dió, pisztácia, makadámia és queenslandi dió',
            nl: 'Noten (amandelen, hazelnoten, walnoten, cashewnoten, pecannoten, paranoten, pistachenoten en macadamianoten)',
            uk: 'Горіхи, включаючи мигдаль, фундук, волоські горіхи, кеш’ю, горіхи пекан, бразильські горіхи, горіхи макадамії та фісташки',
            ru: 'Орехи, включая миндаль, фундук, грецкие орехи, кешью, орехи пекан, бразильские орехи, макадамии и фисташки'
        }
    },
    {
        id: 'celery',
        letter: 'I',
        shortNames: {
            ro: 'Țelină',
            en: 'Celery',
            de: 'Sellerie',
            es: 'Apio',
            it: 'Sedano',
            fr: 'Céleri',
            hu: 'Zeller',
            nl: 'Selderij',
            uk: 'Селера',
            ru: 'Сельдерей'
        },
        longNames: {
            ro: 'Țelină și produse derivate',
            en: 'Celery and products thereof',
            de: 'Sellerie und Sellerieerzeugnisse',
            es: 'Apio: Sal, ensaladas, productos cárnicos, sopas, salsas...',
            it: 'Sedano',
            fr: 'Céleri et produits à base de céleri',
            hu: 'Zeller és abból készült termékek ',
            nl: 'Selderij',
            uk: 'Селера та продукти із селери',
            ru: 'Сельдерей и продукты из сельдерея'
        }
    },
    {
        id: 'mustard',
        letter: 'J',
        shortNames: {
            ro: 'Muștar',
            en: 'Mustard',
            de: 'Senf',
            es: 'Mostaza',
            it: 'Senape',
            fr: 'Moutarde',
            hu: 'Mustár',
            nl: 'Mosterd',
            uk: 'Гірчиці',
            ru: 'Горчицы'
        },
        longNames: {
            ro: 'Muștar și produse derivate',
            en: 'Mustard and products thereof',
            de: 'Senf und Senferzeugnisse',
            es: 'Mostaza: Panes, currys, marinados, productos cárnicos, aliños, salsas y sopas.',
            it: 'Senape',
            fr: 'Moutarde et produits à base de moutarde',
            hu: 'Mustár és abból készült termékek',
            nl: 'Mosterd',
            uk: 'Насіння гірчиці та гірчичні продукти',
            ru: 'Семена горчицы и горчичные продукты'
        }
    },
    {
        id: 'sesame',
        letter: 'K',
        shortNames: {
            ro: 'Susan',
            en: 'Sesame',
            de: 'Sesamsamen',
            es: 'Sésamo',
            it: 'Sesamo',
            fr: 'Sésame',
            hu: 'Szezámmag',
            nl: 'Sesamzaad',
            uk: 'Кунжуту',
            ru: 'Кунжуту'
        },
        longNames: {
            ro: 'Semințe de susan și produse derivate',
            en: 'Sesame seeds and products thereof',
            de: 'Sesamsamen und Sesamsamenerzeugnisse',
            es: 'Granos de sésamo: Pastas, aceites, harinas, panes.',
            it: 'Semi di sesamo',
            fr: 'Graines de sésame et  produits à base de graines de sésame',
            hu: 'Szezámmag és abból készült termékek',
            nl: 'Sesamzaad',
            uk: 'Насіння кунжуту та продукти з кунжуту',
            ru: 'Семена кунжута и продукты из кунжута'
        }
    },
    {
        id: 'sulphur_dioxide',
        letter: 'L',
        shortNames: {
            ro: 'Dioxid de sulf',
            en: 'Sulphur dioxide',
            de: 'Schwefeldioxid',
            es: 'Sulfitos',
            it: 'Solfiti',
            fr: 'Sulfites',
            hu: 'Szulfitok',
            nl: 'Sulfiet',
            uk: 'Сульфіти',
            ru: 'Сульфиты'
        },
        longNames: {
            ro: 'Dioxidul de sulf și sulfiți în concentrații mai mari de 10mg/kg sau 10mg/litru în SO2 total.',
            en: 'Sulphur dioxide and sulphites (at concentrations of more than 10mg/kg or 10mg/L in terms of the total SO2)',
            de: 'Schwefeldioxid und Sulfite in einer Konzentration von mehr als 10 mg/kg oder 10 mg/l als SO2 angegeben',
            es: 'Sulfitos / Dióxido de azufre: Conservantes en crustáceos, frutas desecadas, productos cárnicos, vegetales, vino y cervezas.',
            it: 'Anidride solforosa e solfiti (se in concentrazioni superiori a 10 mg/kg o 10 mg/litro)',
            fr: 'Anhydride sulfureux et sulfites en concentration de plus de 10mg/kg ou 10 mg/l (exprimés en SO2)',
            hu: 'Kén-dioxid és SO2 -ben kifejezett szulfitok 10mg/kg, illetve 10mg/liter koncentrációt meghaladó mennyiségben',
            nl: 'Zwaveldioxide en sulfiet bij concentraties van meer dan 10 mg SO2 per kilo of liter.',
            uk: 'Двоокис сірки та сульфіти в концентрації понад 10 мг/кг або 10 мг/л',
            ru: 'Двуокись серы и сульфиты в концентрации более 10 мг/кг или 10 мг/л'
        }
    },
    {
        id: 'lupin',
        letter: 'M',
        shortNames: {
            ro: 'Lupin',
            en: 'Lupin',
            de: 'Lupine',
            es: 'Altramuces',
            it: 'Lupini',
            fr: 'Lupin',
            hu: 'Csillagfürt',
            nl: 'Lupine',
            uk: 'Люпин',
            ru: 'Люпин'
        },
        longNames: {
            ro: 'Lupin și produse derivate',
            en: 'Lupin and products thereof',
            de: 'Lupine sowie Erzeugnisse daraus',
            es: 'Altramuces: Pan, pasteles y pastas.',
            it: 'Lupini',
            fr: 'Lupin et produits à base de lupin',
            hu: 'Csillagfürt és abból készült termékek (farkasbabliszt/Lupinliszt)',
            nl: 'Lupine',
            uk: 'Люпин та продукти з люпину',
            ru: 'Люпин и продукты из люпина'
        }
    },
    {
        id: 'moluscs',
        letter: 'N',
        shortNames: {
            ro: 'Moluște',
            en: 'Molluscs',
            de: 'Mollusken',
            es: 'Moluscos',
            it: 'Molluschi',
            fr: 'Mollusques',
            hu: 'Puhatestűek',
            nl: 'Weekdieren',
            uk: 'Молюски',
            ru: 'Моллюски'
        },
        longNames: {
            ro: 'Moluște și produse derivate',
            en: 'Molluscs and products thereof (for example clams, oysters, scallops, snails and squid)',
            de: 'Weichtiere (Mollusken) sowie Erzeugnisse daraus',
            es: 'Moluscos: Mejillones, almejas, caracoles, ostras, bígaros, chirlas, berberechos, cremas, salsas, platos preparados.',
            it: 'Molluschi',
            fr: 'Mollusques et produits à base de mollusques',
            hu: 'Puhatestűek és abból készült',
            nl: 'Weekdieren',
            uk: 'Молюски та вироби з молюсків',
            ru: 'Моллюски и изделия из моллюсков'
        }
    },
];
