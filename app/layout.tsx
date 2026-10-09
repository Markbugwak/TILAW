import type { Metadata } from "next";
import "leaflet/dist/leaflet.css";
import "./globals.css";
import "./map-overrides.css";

export const metadata: Metadata = {
  title: "TILAW — Ang lami sa Sugbo",
  description: "Discover the dishes, stories, and places that make Cebu taste like home.",
  applicationName: "TILAW",
  openGraph: {
    title: "TILAW — Ang lami sa Sugbo",
    description: "A guide to Cebuano dishes, local food spots, and culinary stories.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}