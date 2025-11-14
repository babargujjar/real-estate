import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Metro Haven - Real Estate",
  description:
    "A modern, futuristic real estate web application showcasing luxury properties for sale and rent, featuring an AI-powered dream home description generator.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-brand-dark min-h-screen text-gray-200 font-sans`}
      >
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
