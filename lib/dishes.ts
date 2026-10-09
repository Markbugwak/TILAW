export type Dish = {
  id: string;
  number: string;
  name: string;
  category: string;
  place: string;
  description: string;
  note: string;
  image: string;
  imageCredit?: string;
  imageSource?: string;
};

export const categories = ["Tanang putahe", "Pangunang putahe", "Street food", "Panghimagas"];

export const dishes: Dish[] = [
  {
    id: "lechon",
    number: "01",
    name: "Lechon Cebu",
    category: "Pangunang putahe",
    place: "Tibuok Sugbo",
    description: "Hinay-hinay nga sinugba nga baboy nga nailhan sa nipis ug malutong nga panit ug humot nga panimpla.",
    note: "ANG GARBO SA SUGBO",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lechon_sa_Cebu.jpg?width=900",
    imageCredit: "Bim24 · CC BY 4.0",
    imageSource: "https://commons.wikimedia.org/wiki/File:Lechon_sa_Cebu.jpg"
  },
  {
    id: "puso",
    number: "02",
    name: "Puso",
    category: "Street food",
    place: "Mga karsada sa Cebu",
    description: "Bugas nga giluto sulod sa hinabol nga dahon sa lubi—kanunayng kauban sa inihaw ug pagkaon sa kadalanan.",
    note: "KAUBAN SA INIHAW",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/HANGING_RICE.jpg?width=900",
    imageCredit: "whologwhy · CC BY 2.0",
    imageSource: "https://commons.wikimedia.org/wiki/File:HANGING_RICE.jpg"
  },
  {
    id: "ngohiong",
    number: "03",
    name: "Ngohiong",
    category: "Street food",
    place: "Cebu City",
    description: "Crispy nga lumpia-style nga meryenda nga adunay sagol nga utanon ug panimpla nga lima ka panakot.",
    note: "PABORITO SA MERYENDA",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ngohiong.jpg?width=900",
    imageCredit: "Herbertkikoy · CC BY-SA 4.0",
    imageSource: "https://commons.wikimedia.org/wiki/File:Ngohiong.jpg"
  },
  {
    id: "sutukil",
    number: "04",
    name: "Sutukil",
    category: "Pangunang putahe",
    place: "Mga baybayon sa Sugbo",
    description: "Usa ka paagi sa pag-andam sa seafood: sugba, tuwa, ug kilaw. Labing angay sa preskong kuha sa dagat.",
    note: "LAMI SA BAYBAYON",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Smiley_Larsian_By_The_Sea_Sutukil_at_the_IL_Corso_Food_Yard_%282025-10-05%29.jpg?width=900",
    imageCredit: "Wide Awake! · CC BY 4.0",
    imageSource: "https://commons.wikimedia.org/wiki/File:Smiley_Larsian_By_The_Sea_Sutukil_at_the_IL_Corso_Food_Yard_(2025-10-05).jpg"
  },
  {
    id: "torta",
    number: "05",
    name: "Torta sa Argao",
    category: "Panghimagas",
    place: "Argao, Cebu",
    description: "Humok ug tam-is nga tradisyonal nga torta nga kasagarang gihimo alang sa panagtigom ug espesyal nga okasyon.",
    note: "TAM-IS NGA TRADISYON",
    image: ""
  },
  {
    id: "otap",
    number: "06",
    name: "Otap",
    category: "Panghimagas",
    place: "Cebu City",
    description: "Nipis, flaky, ug tam-is nga pastry nga nahimong usa sa mga iladong pasalubong sa Cebu.",
    note: "PASALUBONG SA SUGBO",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Otap_%28Utap%29_puff_pastry.jpg?width=900",
    imageCredit: "Obsidian Soul · CC0",
    imageSource: "https://commons.wikimedia.org/wiki/File:Otap_(Utap)_puff_pastry.jpg"
  }
];
