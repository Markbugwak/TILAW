export type RestaurantSpot = {
  name: string;
  rating?: string;
  price?: string;
  type: string;
  address: string;
  hours?: string;
  description: string;
  image?: string;
  /** Explain when a venue photo is representative or not branch-verified. */
  imageNote?: string;
  mapSearch: string;
  /** Google Maps place ID opens the matched listing; it does not prove entrance coordinates. */
  mapPlaceId?: string;
  sourceUrl?: string;
  sourceLabel?: string;
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
      { name: "House of Lechon", sourceUrl: "https://guide.michelin.com/ph/en/central-visayas/cebu-city_2340421/restaurant/house-of-lechon", sourceLabel: "Michelin Guide", type: "Lechon restaurant", address: "Acacia and Tojong Streets, Cebu City", hours: "10:00 AM–9:00 PM (Michelin listing; recheck before visiting)", description: "Upscale but comfortable dining, known for rich, mildly spicy lechon drippings.", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/03/bc/10/caption.jpg?h=-1&s=1&w=1400", mapSearch: "House of Lechon Acacia Street Cebu City" },
      { name: "Rico's Lechon", sourceUrl: "https://ricoslechon.com/", sourceLabel: "Official website", type: "Lechon restaurant", address: "Unit 15 & 16, Axis Entertainment Avenue, N. Escario St, Kamputhaw, Cebu City", hours: "10:00 AM–9:00 PM Mon–Thu; 10:00 AM–10:00 PM Fri–Sun (official site)", description: "Popular for its spicy lechon with bold garlic and chili flavors.", image: "https://islifearecipe.net/wp-content/uploads/2025/03/ricos-lechon-review-best-in-cebu-city-exterior-1200x736.webp", mapSearch: "Rico's Lechon N Escario Cebu City" },
      { name: "New Carcar City Public Market", imageNote: "Venue photo not independently confirmed", sourceUrl: "https://tourism.cebu.gov.ph/explore/carcar-city/", sourceLabel: "Cebu Province Tourism", type: "Public market", address: "Carcar City, Cebu", description: "A lively local market where vendors sell lechon by the kilo; a great south Cebu food stop.", image: "https://img5.boatcdn.com/review_img/e714e2caa80bae82dd59b2e28c7311dc", mapSearch: "New Carcar City Public Market Cebu lechon", mapPlaceId: "ChIJ4ZgiZWd9qTMRgLQKC79nGxQ" }
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
      { name: "Carbon Market", sourceUrl: "https://commons.wikimedia.org/wiki/File:Street_food_vendors_in_Carbon_Market.jpg", sourceLabel: "Photo/location reference", type: "Public market", address: "M. C. Briones St, Cebu City", description: "Historic market with local produce, seafood, dried fish, and inexpensive street snacks.", image: "https://lp-cms-production.imgix.net/2019-06/148505585_high.jpg?auto=format%2Ccompress&crop=faces%2Cedges&fit=crop&q=72&w=1920", mapSearch: "Carbon Market Cebu City" }
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
      { name: "Ann's Ngohiong by Doming's", imageNote: "Venue photo not independently confirmed", sourceUrl: "https://restaurantguru.com/Domings-Ngohiong-Cebu-City", sourceLabel: "Third-party listing", type: "Chinese restaurant", address: "25 Fairlane Village Rd, Guadalupe, Cebu City", hours: "Listed hours: 8:30 AM–5:00 PM Mon–Sat; 8:30 AM–12:00 PM Sun (third-party listing)", description: "Known locally for its crisp ngohiong and thick sweet-spicy dipping sauce.", image: "https://images.deliveryhero.io/image/fd-ph/LH/utn2-hero.jpg", mapSearch: "Ann's Ngohiong by Doming's Fairlane Village Guadalupe Cebu", mapPlaceId: "ChIJi0FrnsueqTMR9lU96iG9y0s" },
      { name: "Doming's Ngohiong", imageNote: "Venue photo not independently confirmed; shared image with Ann's Ngohiong", sourceUrl: "https://restaurantguru.com/Domings-Ngohiong-Cebu-City-2", sourceLabel: "Third-party listing", type: "Chinese restaurant", address: "Door 1, G/F Pacific Tourist Inn, M. Gotianuy Building, V. Gullas St, Cebu City", hours: "Listed hours: 8:00 AM–7:00 PM (third-party listing)", description: "A central Cebu stop for the classic five-spice snack.", image: "https://images.deliveryhero.io/image/fd-ph/LH/utn2-hero.jpg", mapSearch: "Doming's Ngohiong V Gullas Street Cebu", mapPlaceId: "ChIJAy1l--KbqTMRObzPCL6hOKY" }
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
      { name: "STK ta Bay!", imageNote: "Representative kinilaw photo; not a verified branch photo", sourceUrl: "https://www.google.com/maps/search/STK%2Bta%2BBay%21%2BCebu%2BCity%2BPhilippines", sourceLabel: "Google Maps listing", type: "Seafood restaurant", address: "6 A. Climaco St, Cebu City", hours: "Listed hours: 11:00 AM–3:00 PM and 5:00–10:00 PM daily; confirm before visiting", description: "A heritage-style house restaurant with antiques; known for tuna panga and kinilaw.", image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/KINILAW_%28Carcar%2C_Cebu%29.jpg", mapSearch: "STK ta Bay A Climaco Street Cebu" },
      { name: "STK ta Bay! — SM City Cebu", imageNote: "Representative kinilaw photo; not a verified branch photo", sourceUrl: "https://www.waze.com/live-map/directions/ph/central-visayas/cebu-city/stk-ta-bay?to=place.ChIJT1BzO3GZqTMROkmciJqudQA", sourceLabel: "Waze listing", type: "Filipino restaurant", address: "SM Branch, Juan Luna Ave Ext, Cebu City", hours: "Listed hours: 10:00 AM–10:00 PM daily; confirm before visiting", description: "A mall-based option for a convenient sit-down seafood meal.", image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/KINILAW_%28Carcar%2C_Cebu%29.jpg", mapSearch: "STK ta Bay SM City Cebu", mapPlaceId: "ChIJT1BzO3GZqTMROkmciJqudQA" }
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
      { name: "Azul", imageNote: "Venue photo not independently confirmed", sourceUrl: "https://www.waze.com/live-map/directions/ph/central-visayas/cebu-city/azul?to=place.ChIJ3-LqHV-ZqTMRD3SneQStIUk", sourceLabel: "Waze listing", type: "Filipino restaurant", address: "Taft Business Center, Asilo St, Gorordo Ave, Cebu City", hours: "Advertised as open 24 hours; verify with the restaurant before visiting", description: "A sit-down option for trying tuslob buwa with friends; check current hours before visiting.", image: "https://assets.st-note.com/img/1782735146-OpGkUztH349rSyaweW5sRIiP.jpg?width=1200", mapSearch: "Azul Taft Business Center Gorordo Cebu", mapPlaceId: "ChIJGS5nLkeZqTMRY3lqjHP8cLo" }
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
      { name: "Kusina Clasica", imageNote: "Venue photo not independently confirmed", sourceUrl: "https://kusina-clasica.locallya.com/", sourceLabel: "Restaurant listing", type: "Filipino restaurant", address: "GND Building, F. Cabahug St, Kasambagan, Cebu City", hours: "Listed hours: 7:00 AM–11:00 PM Sun–Thu; 24 hours Fri–Sat (check current listing)", description: "Known for hearty pochero, tender beef shank, and rich broth.", image: "https://images.hive.blog/0x0/https%3A/api.liketu.com/media/jongcl/405opfhl2jwhbfq_IMG_20220429_093458.jpg", mapSearch: "Kusina Clasica F Cabahug Street Cebu City", mapPlaceId: "ChIJV-RT1gSZqTMRkItToE4YuPM" },
      { name: "Pochero Kinaraan", imageNote: "Representative chicken pochero photo; not a verified restaurant photo", sourceUrl: "https://www.waze.com/live-map/directions/pochero-kinaraan-f.-gochan-cebu-city?to=place.w.81199207.812057608.14510015", sourceLabel: "Waze listing", type: "Filipino restaurant", address: "1453 F. Gochan St, Cebu City", description: "Another local option for a traditional Cebu-style pochero meal.", image: "https://upload.wikimedia.org/wikipedia/commons/6/63/Chicken_pochero1.jpg", mapSearch: "Pochero Kinaraan F Gochan Street Cebu", mapPlaceId: "ChIJw544SBGZqTMRbHz7s62EqSw" }
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
    image: "https://cebudailynews.inquirer.net/files/2025/01/DSC00614-1024x576.jpg",
    imageCredit: "Cebu Daily News · Argao torta feature",
    imageSource: "https://cebudailynews.inquirer.net/617400/cebu-beach-club-your-gateway-to-argaos-finest"
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
