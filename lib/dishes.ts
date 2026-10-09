export type RestaurantSpot = {
  name: string;
  rating?: string;
  price?: string;
  type: string;
  address: string;
  hours?: string;
  description: string;
  image?: string;
  mapSearch: string;
};

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
  restaurants?: RestaurantSpot[];
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
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Lechon_Cebu_2.jpg",
    imageCredit: "Bim24 · CC BY-SA 4.0",
    imageSource: "https://commons.wikimedia.org/wiki/File:Lechon_Cebu_2.jpg",
    restaurants: [
      { name: "House of Lechon", type: "Lechon restaurant", address: "Acacia and Tojong Streets, Cebu City", hours: "10:00 AM–9:00 PM (Michelin listing; recheck before visiting)", description: "Upscale but comfortable dining, known for rich, mildly spicy lechon drippings.", image: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Lechon_Cebu_2.jpg", mapSearch: "House of Lechon Acacia Street Cebu City" },
      { name: "Rico's Lechon", type: "Lechon restaurant", address: "Unit 15 & 16, Axis Entertainment Avenue, N. Escario St, Kamputhaw, Cebu City", hours: "10:00 AM–9:00 PM Mon–Thu; 10:00 AM–10:00 PM Fri–Sun (official site)", description: "Popular for its spicy lechon with bold garlic and chili flavors.", image: "", mapSearch: "Rico's Lechon N Escario Cebu City" },
      { name: "New Carcar City Public Market", type: "Public market", address: "Carcar City, Cebu", description: "A lively local market where vendors sell lechon by the kilo; a great south Cebu food stop.", image: "", mapSearch: "New Carcar City Public Market Cebu lechon" }
    ]
  },
  {
    id: "puso",
    number: "02",
    name: "Puso ug Street Food",
    category: "Street food",
    place: "Mga karsada sa Cebu",
    description: "Bugas nga giluto sulod sa hinabol nga dahon sa lubi—kanunayng kauban sa inihaw ug pagkaon sa kadalanan.",
    note: "KAUBAN SA INIHAW",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Puso_or_Hanging_Rice.jpg",
    imageCredit: "LadyPinayForever · CC BY 4.0",
    imageSource: "https://commons.wikimedia.org/wiki/File:Puso_or_Hanging_Rice.jpg",
    restaurants: [
      { name: "Carbon Market", type: "Public market", address: "M. C. Briones St, Cebu City", description: "Historic market with local produce, seafood, dried fish, and inexpensive street snacks.", image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Puso_or_Hanging_Rice.jpg", mapSearch: "Carbon Market Cebu City" }
    ]
  },
  {
    id: "ngohiong",
    number: "03",
    name: "Ngohiong",
    category: "Street food",
    place: "Cebu City",
    description: "Crispy nga lumpia-style nga meryenda nga adunay ubod, giniling nga baboy, ug panimpla nga lima ka panakot.",
    note: "PABORITO SA MERYENDA",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Ngohiong.jpg",
    imageCredit: "Herbertkikoy · CC BY-SA 4.0",
    imageSource: "https://commons.wikimedia.org/wiki/File:Ngohiong.jpg",
    restaurants: [
      { name: "Ann's Ngohiong by Doming's", type: "Chinese restaurant", address: "25 Fairlane Village Rd, Guadalupe, Cebu City", hours: "Listed hours: 8:30 AM–5:00 PM Mon–Sat; 8:30 AM–12:00 PM Sun (third-party listing)", description: "Known locally for its crisp ngohiong and thick sweet-spicy dipping sauce.", image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Ngohiong.jpg", mapSearch: "Ann's Ngohiong by Doming's Fairlane Village Guadalupe Cebu" },
      { name: "Doming's Ngohiong", type: "Chinese restaurant", address: "Door 1, G/F Pacific Tourist Inn, M. Gotianuy Building, V. Gullas St, Cebu City", hours: "Listed hours: 8:00 AM–7:00 PM (third-party listing)", description: "A central Cebu stop for the classic five-spice snack.", image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Ngohiong.jpg", mapSearch: "Doming's Ngohiong V Gullas Street Cebu" }
    ]
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
    imageCredit: "whologwhy · CC BY 2.0 (representative kinilaw photo)",
    imageSource: "https://commons.wikimedia.org/wiki/File:KINILAW_(Carcar,_Cebu).jpg",
    restaurants: [
      { name: "STK ta Bay!", type: "Seafood restaurant", address: "6 A. Climaco St, Cebu City", hours: "Listed hours: 11:00 AM–3:00 PM and 5:00–10:00 PM daily; confirm before visiting", description: "A heritage-style house restaurant with antiques; known for tuna panga and kinilaw.", image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/KINILAW_%28Carcar%2C_Cebu%29.jpg", mapSearch: "STK ta Bay A Climaco Street Cebu" },
      { name: "STK ta Bay! — SM City Cebu", type: "Filipino restaurant", address: "SM Branch, Juan Luna Ave Ext, Cebu City", hours: "Listed hours: 10:00 AM–10:00 PM daily; confirm before visiting", description: "A mall-based option for a convenient sit-down seafood meal.", image: "", mapSearch: "STK ta Bay SM City Cebu" }
    ]
  },
  {
    id: "tuslob-buwa",
    number: "05",
    name: "Tuslob Buwa",
    category: "Street food",
    place: "Cebu City",
    description: "Usa ka communal nga pagkaon diin ituslob ang puso sa nagbukal nga sagol sa atay, utok sa baboy, ug mga panakot.",
    note: "TILAW SA LOKAL NGA TRADISYON",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Loy%27s_Tuslob_Buwa_at_the_Carbon_Market_The_Barracks_%282024-04-10%29.jpg",
    imageCredit: "Wide Awake! · CC BY 4.0 (Loy’s Tuslob Buwa stall)",
    imageSource: "https://commons.wikimedia.org/wiki/File:Loy%27s_Tuslob_Buwa_at_the_Carbon_Market_The_Barracks_(2024-04-10).jpg",
    restaurants: [
      { name: "Azul", type: "Filipino restaurant", address: "Taft Business Center, Asilo St, Gorordo Ave, Cebu City", hours: "Advertised as open 24 hours; verify with the restaurant before visiting", description: "A sit-down option for trying tuslob buwa with friends; check current hours before visiting.", image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Loy%27s_Tuslob_Buwa_at_the_Carbon_Market_The_Barracks_%282024-04-10%29.jpg", mapSearch: "Azul Taft Business Center Gorordo Cebu" }
    ]
  },
  {
    id: "pochero",
    number: "06",
    name: "Pochero",
    category: "Pangunang putahe",
    place: "Cebu City",
    description: "Tinola-like nga tin-aw apan dato nga sabaw sa baka ug bukog, giluto hangtod mohumok ang karne ug mogawas ang lami sa sabaw.",
    note: "INIT UG MAKABUSOG",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/63/Chicken_pochero1.jpg",
    imageCredit: "Valenzuela400 · CC BY-SA 4.0 (representative chicken pochero photo)",
    imageSource: "https://commons.wikimedia.org/wiki/File:Chicken_pochero1.jpg",
    restaurants: [
      { name: "Kusina Clasica", type: "Filipino restaurant", address: "GND Building, F. Cabahug St, Kasambagan, Cebu City", hours: "Listed hours: 7:00 AM–11:00 PM Sun–Thu; 24 hours Fri–Sat (check current listing)", description: "Known for hearty pochero, tender beef shank, and rich broth.", image: "https://upload.wikimedia.org/wikipedia/commons/6/63/Chicken_pochero1.jpg", mapSearch: "Kusina Clasica F Cabahug Street Cebu City" },
      { name: "Pochero Kinaraan", type: "Filipino restaurant", address: "1453 F. Gochan St, Cebu City", description: "Another local option for a traditional Cebu-style pochero meal.", mapSearch: "Pochero Kinaraan F Gochan Street Cebu" }
    ]
  },
  {
    id: "torta",
    number: "07",
    name: "Torta sa Argao",
    category: "Panghimagas",
    place: "Argao, Cebu",
    description: "Humok ug tam-is nga tradisyonal nga torta nga kasagarang gihimo alang sa panagtigom ug espesyal nga okasyon.",
    note: "TAM-IS NGA TRADISYON",
    image: ""
  },
  {
    id: "otap",
    number: "08",
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
