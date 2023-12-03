import "./globals.css";
import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";
import theme from "./theme";
import CartProvider from "@/providers/cartProvider";

if (process.env.NODE_ENV === "development") {
  require("../mocks");
}

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Be Pretty",
  description: "E-commerce website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={merriweather.className}>
        <CartProvider>
          <NavBar />
          <div className="flex flex-col min-h-screen bg-offWhite">
            <main className="flex-grow">{children}</main>
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
