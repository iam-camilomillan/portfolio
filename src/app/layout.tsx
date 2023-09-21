import "./globals.css";
import type { Metadata } from "next";

/* Providers import */
import Providers from "./providers";

/* Font imports */
import { Playfair_Display, Source_Code_Pro } from "next/font/google";

/* Font declarations */
const playfair_display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair_display",
});
const source_sans_pro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source_sans_pro",
});

/* Metadata */
export const metadata: Metadata = {
  title: "Camilo Millan",
  description: "",
};

/* Root layout */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair_display.variable} ${source_sans_pro.variable} overflow-hidden font-source_sans_pro`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
