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
    image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Lechon_sa_Cebu.jpg",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Puso_or_Hanging_Rice.jpg",
    imageCredit: "LadyPinayForever · CC BY 4.0",
    imageSource: "https://commons.wikimedia.org/wiki/File:Puso_or_Hanging_Rice.jpg"
  },
  {
    id: "ngohiong",
    number: "03",
    name: "Ngohiong",
    category: "Street food",
    place: "Cebu City",
    description: "Crispy nga lumpia-style nga meryenda nga adunay sagol nga utanon ug panimpla nga lima ka panakot.",
    note: "PABORITO SA MERYENDA",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Ngohiong.jpg",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/KINILAW_%28Carcar%2C_Cebu%29.jpg",
    imageCredit: "whologwhy · CC BY 2.0",
    imageSource: "https://commons.wikimedia.org/wiki/File:KINILAW_(Carcar,_Cebu).jpg"
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
    image: "https://upload.wikimedia.org/wikipedia/commons/7/78/Otap.jpg",
    imageCredit: "Obsidian Soul · CC BY-SA 3.0",
    imageSource: "https://commons.wikimedia.org/wiki/File:Otap.jpg"
  }
];
