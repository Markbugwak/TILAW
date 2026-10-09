export type Dish = {
  id: string; number: string; name: string; category: string;
  place: string; description: string; note: string; image: string;
};

export const categories = ["Tanang putahe", "Pangunang putahe", "Street food", "Panghimagas"];

export const dishes: Dish[] = [
  { id: "lechon", number: "01", name: "Lechon Cebu", category: "Pangunang putahe", place: "Tibuok Sugbo", description: "Hinay-hinay nga sinugba nga baboy nga nailhan sa nipis ug malutong nga panit ug humot nga panimpla.", note: "ANG GARBO SA SUGBO", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=85" },
  { id: "puso", number: "02", name: "Puso", category: "Street food", place: "Mga karsada sa Cebu", description: "Bugas nga giluto sulod sa hinabol nga dahon sa lubi—kanunayng kauban sa inihaw ug pagkaon sa kadalanan.", note: "KAUBAN SA INIHAW", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85" },
  { id: "ngohiong", number: "03", name: "Ngohiong", category: "Street food", place: "Cebu City", description: "Crispy nga lumpia-style nga meryenda nga adunay sagol nga utanon ug panimpla nga lima ka panakot.", note: "PABORITO SA MERYENDA", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85" },
  { id: "sutukil", number: "04", name: "Sutukil", category: "Pangunang putahe", place: "Mga baybayon sa Sugbo", description: "Usa ka paagi sa pag-andam sa seafood: sugba, tuwa, ug kilaw. Labing angay sa preskong kuha sa dagat.", note: "LAMI SA BAYBAYON", image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=900&q=85" },
  { id: "torta", number: "05", name: "Torta sa Argao", category: "Panghimagas", place: "Argao, Cebu", description: "Humok ug tam-is nga tradisyonal nga torta nga kasagarang gihimo alang sa panagtigom ug espesyal nga okasyon.", note: "TAM-IS NGA TRADISYON", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85" },
  { id: "otap", number: "06", name: "Otap", category: "Panghimagas", place: "Cebu City", description: "Nipis, flaky, ug tam-is nga pastry nga nahimong usa sa mga iladong pasalubong sa Cebu.", note: "PASALUBONG SA SUGBO", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=85" }
];