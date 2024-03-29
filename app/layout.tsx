import "./globals.css";
import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import Footer from "./components/footer/Footer";
import theme from "./theme";
import CartProvider from "@/providers/cartProvider";
import { Toaster } from "react-hot-toast";

import { FavoriteBeauticiansProvider } from "@/hooks/useFavoriteBeauticians";

import { getServerSession } from "next-auth/next";
import SessionProvider from "./components/provider/SessionProvider";
import NavBar from "./components/nav/NavBar";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={merriweather.className}>
        <SessionProvider session={session}>
          <Toaster
            toastOptions={{
              style: {
                background: "rgb(51 65 85)",
                color: "#fff",
              },
            }}
          />
          <CartProvider>
            <FavoriteBeauticiansProvider>
              <NavBar />
              <div className="flex flex-col min-h-screen bg-offWhite">
                <main className="flex-grow">{children}</main>
              </div>
              <Footer />
            </FavoriteBeauticiansProvider>
          </CartProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
