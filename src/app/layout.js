// app/layout.js
import { Inria_Sans, Poppins } from 'next/font/google';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";
import Navbar from "./components/sections/Navbar";
import Footer from "./components/sections/Footer";

// Load fonts
const inria = Inria_Sans({
  subsets: ['latin'],
  variable: '--font-inria',
  weight: ['300', '400', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: "Eternal Electrical",
  description: "Official Website of Eternal Electrical",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inria.variable} ${poppins.variable} bg-[#131417] antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
