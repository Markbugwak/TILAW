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
    image: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SM42utaBXH4gZu3TL5V-WzfA1TQVgq_Sx43Rc--I40CtIuaFYAauKKwatyC4ADpc4chTG1QYQoLWqqCL5yOVwTS4cd5PKDMaC7uH6asHnYmZcSK8fPlCKNiVY_2Rd7vdBRIQvQ0jOCtvkv=w1333-h1000-k-no",
    restaurants: [
      { name: "House of Lechon", rating: "4.5", price: "₱500–₱1,000", type: "Lechon restaurant", address: "Acacia St, Cebu City", hours: "Reported opening: 10:00 AM", description: "Upscale but comfortable dining, known for rich, mildly spicy lechon drippings.", image: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SM42utaBXH4gZu3TL5V-WzfA1TQVgq_Sx43Rc--I40CtIuaFYAauKKwatyC4ADpc4chTG1QYQoLWqqCL5yOVwTS4cd5PKDMaC7uH6asHnYmZcSK8fPlCKNiVY_2Rd7vdBRIQvQ0jOCtvkv=w1333-h1000-k-no", mapSearch: "House of Lechon Acacia Street Cebu City" },
      { name: "House of Lechon — J Centre", rating: "4.2", price: "₱1–₱500", type: "Restaurant / food court", address: "J Centre Building Food Court, A. S. Fortuna St, Mandaue", hours: "Reported opening: 10:00 AM", description: "A convenient casual option for the brand's signature seasoned lechon.", image: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QG9wIJ25fOF0pJ7b2wQLvx3CVf4sXtgazsRrgiaBlxl_6mipEO4vH0Fd4kEnlXFGBl46KXI_uh9ThRyqfSUiaEZd3bE7-rpP46l7iDwZfW_-pYZryBTlxuEkcmvcE8iXRCQrcm5JN1Mcro=w1000-h1333-k-no", mapSearch: "House of Lechon J Centre Mandaue" },
      { name: "House of Lechon — Banilad", rating: "3.9", price: "₱1–₱1,500", type: "Filipino restaurant", address: "Gov. M. Cuenco Ave, Cebu City", hours: "Reported opening: 10:00 AM", description: "Another option for sharing a Cebuano lechon meal with friends.", image: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RZuA9Wz1luNwREQ2V_dr75bf61p0CVkcQomU4E-19CsJASER8AjmL9TSMc1HZixW4GThGzIjJqcoqh8CNyzG4xBmRowQP1Ms_Q0a56eOnnQPkmoAANcNEWAtrvXdQQUHDdJQSm=w1000-h1333-k-no", mapSearch: "House of Lechon Gov M Cuenco Avenue Cebu" },
      { name: "Rico's Lechon", rating: "3.7", price: "₱500–₱1,000", type: "Lechon restaurant", address: "N. Escario St, Cebu City", hours: "Reported opening: 10:00 AM", description: "Popular for its spicy lechon with bold garlic and chili flavors.", image: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S1W48jxCexZnYwb0wafEzYF6lRoxzG01OiUFxZiyrsI5pOlsexwUM-GUKSgYd5vPlJoxrTASMW7EeMGqMcEJGQkQE6o1i1c9mPjxXOBP5wlCe-xatV_SpMqFSqUOV7hhZg280kQ=w1000-h1333-k-no", mapSearch: "Rico's Lechon N Escario Cebu City" },
      { name: "New Carcar City Public Market", rating: "4.1", type: "Public market", address: "Carcar City, Cebu", hours: "Reported opening: 5:00 AM", description: "A lively local market where vendors sell lechon by the kilo; a great south Cebu food stop.", image: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RnDqz3ccv31JB82q6w9r4qXA2XHvkTsMW38L_qJXsEEG5ao4gz-17MKVm32YpsRvoe0tEnBz1mj1EyMMJigAMhZ3CBQOJ6pWQRXRiZ4s7pgJpnOjcbDDfmSppfFD_Z0ljOtzs=w1333-h1000-k-no", mapSearch: "New Carcar City Public Market Cebu lechon" }
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
    image: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q6IgYrF0nkAnubETUD0Tcw19lsUsr8AFW8lxKHtSmO9lraAYPw1Smq6-qNKfRx-j61cDW7xFrhvm58oHU7flsdTDs6ihUoYe3T52iUqZ_KI2z7ut7u6HFCi9BbLR1AmUCXztI2Wzib4HO7=w1333-h1000-k-no",
    restaurants: [
      { name: "Carbon Market", rating: "4.2", type: "Public market", address: "M. C. Briones St, Cebu City", hours: "Reported closing: 3:30 PM", description: "Historic market with local produce, seafood, dried fish, and inexpensive street snacks.", image: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q6IgYrF0nkAnubETUD0Tcw19lsUsr8AFW8lxKHtSmO9lraAYPw1Smq6-qNKfRx-j61cDW7xFrhvm58oHU7flsdTDs6ihUoYe3T52iUqZ_KI2z7ut7u6HFCi9BbLR1AmUCXztI2Wzib4HO7=w1333-h1000-k-no", mapSearch: "Carbon Market Cebu City" }
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
    image: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SYVU6JrA_auQOWdtN6C2tL6av4qc5SrT72FuRES2tote0h3SfUUPT4FzRlIyf1M_Lf7i8faUnyJlvMrTarTDkth4FhEGcmBSU7h31RKOYaSj5hJSUarjfdBAgLTuu6jlv5oWqe=w1000-h1333-k-no",
    restaurants: [
      { name: "Ann's Ngohiong by Doming's", rating: "4.1", price: "₱1–₱500", type: "Chinese restaurant", address: "Fairlane Village, Guadalupe, Cebu City", description: "Known locally for its crisp ngohiong and thick sweet-spicy dipping sauce.", image: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SYVU6JrA_auQOWdtN6C2tL6av4qc5SrT72FuRES2tote0h3SfUUPT4FzRlIyf1M_Lf7i8faUnyJlvMrTarTDkth4FhEGcmBSU7h31RKOYaSj5hJSUarjfdBAgLTuu6jlv5oWqe=w1000-h1333-k-no", mapSearch: "Ann's Ngohiong by Doming's Fairlane Village Guadalupe Cebu" },
      { name: "Doming's Ngohiong", rating: "3.9", type: "Chinese restaurant", address: "V. Gullas St, Cebu City", description: "A central Cebu stop for the classic five-spice snack.", image: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SYVU6JrA_auQOWdtN6C2tL6av4qc5SrT72FuRES2tote0h3SfUUPT4FzRlIyf1M_Lf7i8faUnyJlvMrTarTDkth4FhEGcmBSU7h31RKOYaSj5hJSUarjfdBAgLTuu6jlv5oWqe=w1000-h1333-k-no", mapSearch: "Doming's Ngohiong V Gullas Street Cebu" }
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
    image: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q4pJjCu3rAy2_hqha2R3UivCJAauDXfnZlpK5GGOpYGgAqYcJWCfYHcjX4GvcbmDhlPpwXdQz3KH22FgxqqtTJlxz0r3Z_lP9nV6orQdDNlVX5TX6T8dyzXMK1oB9q1t2_yIZU_wZsfJM=w1000-h1000-k-no",
    restaurants: [
      { name: "STK ta Bay!", rating: "4.2", price: "₱500–₱1,000", type: "Seafood restaurant", address: "6 A. Climaco St, Cebu City", hours: "Reported hours: 11:00 AM–3:00 PM and 5:00–10:00 PM", description: "A heritage-style house restaurant with antiques; known for tuna panga and kinilaw.", image: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q4pJjCu3rAy2_hqha2R3UivCJAauDXfnZlpK5GGOpYGgAqYcJWCfYHcjX4GvcbmDhlPpwXdQz3KH22FgxqqtTJlxz0r3Z_lP9nV6orQdDNlVX5TX6T8dyzXMK1oB9q1t2_yIZU_wZsfJM=w1000-h1000-k-no", mapSearch: "STK ta Bay A Climaco Street Cebu" },
      { name: "STK ta Bay! — SM City Cebu", rating: "4.0", type: "Filipino restaurant", address: "SM City Cebu, Juan Luna Ave Ext, Cebu City", description: "A mall-based option for a convenient sit-down seafood meal.", image: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Se-__pTzH1ht9yJ6EeiHgIEwN2UGTZU4E62N-JrXBhgWlIqievuW-ZyOa2UCecwiH9ikSzTrmGPLhm1fQO86PQstAzU19NfonaCpC5Txs7VmM_gKgi9Se60R888ElnidgDfDL3=w1333-h1000-k-no", mapSearch: "STK ta Bay SM City Cebu" }
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
    image: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SDoY5bowcYItlHlUlGtyO69vauVYBAAlvgyqc5fpyvcXML_dVm-L13ag6leF7KS6TNO4C6R2R7wGxWyAwe6YL2aVTRnu8Bzb2BSMKmHFEbe8Xc7ZWFgrhFb6JlxRMeMTmHIsr-q1eMIU9h=w1000-h1333-k-no",
    restaurants: [
      { name: "Azul", rating: "3.3", price: "₱1–₱500", type: "Filipino restaurant", address: "Taft Business Center, Gorordo Ave, Cebu City", hours: "Reported as open 24 hours", description: "A sit-down option for trying tuslob buwa with friends; check current hours before visiting.", image: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SDoY5bowcYItlHlUlGtyO69vauVYBAAlvgyqc5fpyvcXML_dVm-L13ag6leF7KS6TNO4C6R2R7wGxWyAwe6YL2aVTRnu8Bzb2BSMKmHFEbe8Xc7ZWFgrhFb6JlxRMeMTmHIsr-q1eMIU9h=w1000-h1333-k-no", mapSearch: "Azul Taft Business Center Gorordo Cebu" }
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
    image: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QX6rQ6YMO4pcEfr3Mtiayxk8PPZSaxGxam2vKf7EdSUDb9cfUBHdZNw62nTR9xF1lG9UzKytooblxpHgSGh_gE9KMHynYNBRND1nCngt9an_jdVT5n3OH8TXLT5VT6liuMn5Oc=w1333-h1000-k-no",
    restaurants: [
      { name: "Kusina Clasica", rating: "4.2", price: "₱1–₱500", type: "Filipino restaurant", address: "F. Cabahug St, Cebu City", hours: "Reported as open until midnight", description: "Known for hearty pochero, tender beef shank, and rich broth.", image: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QX6rQ6YMO4pcEfr3Mtiayxk8PPZSaxGxam2vKf7EdSUDb9cfUBHdZNw62nTR9xF1lG9UzKytooblxpHgSGh_gE9KMHynYNBRND1nCngt9an_jdVT5n3OH8TXLT5VT6liuMn5Oc=w1333-h1000-k-no", mapSearch: "Kusina Clasica F Cabahug Street Cebu City" },
      { name: "Pochero Kinaraan", rating: "3.8", type: "Filipino restaurant", address: "1453 F. Gochan St, Cebu City", description: "Another local option for a traditional Cebu-style pochero meal.", mapSearch: "Pochero Kinaraan F Gochan Street Cebu" }
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
