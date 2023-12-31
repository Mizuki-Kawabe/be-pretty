import "./globals.css";
import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import Footer from "./components/footer/Footer";
import theme from "./theme";
import CartProvider from "@/providers/cartProvider";
import { Toaster } from "react-hot-toast";
import NavBar from "./components/nav/NavBar";
import getCurrentUser from "@/actions/getCurrentUser";

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

const currentUser = getCurrentUser();
console.log("user", currentUser);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={merriweather.className}>
        <Toaster
          toastOptions={{
            style: {
              background: "rgb(51 65 85)",
              color: "#fff",
            },
          }}
        />
        <CartProvider>
          {/* FIXME: asyncを使っているNavbarの部分でエラーが出る。 */}
          {/* @ts-expect-error Server Component */}
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
