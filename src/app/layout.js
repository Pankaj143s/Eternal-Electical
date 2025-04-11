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
  title: "Eternal Electrical | Powering Innovation, Efficiency & Sustainability",
  description: "Eternal Electrical provides expert electrical consultancy, solar energy solutions, control panels, wiring, and smart automation for industries, homes, and businesses across India.",
  keywords: [
    "Eternal Electrical",
    "Electrical Consultancy",
    "Solar Energy Solutions",
    "Control Panels",
    "Industrial Wiring",
    "Energy Efficiency",
    "Automation",
    "Electrical Maintenance",
    "Maharashtra",
    "Jaysingpur",
    "Electrical Contractor",
    "Smart Home Solutions",
    "Electrical Design"
  ],
  metadataBase: new URL("https://www.eternalelectrical.com"),

  openGraph: {
    title: "Eternal Electrical | Powering Innovation, Efficiency & Sustainability",
    description: "Expert electrical services including consultancy, solar installations, control panel design, smart automation, and maintenance. Trusted by industries, businesses, and homes across India.",
    url: "https://www.eternalelectrical.com",
    siteName: "Eternal Electrical",
    images: [
      {
        url: "/share-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Eternal Electrical Control Panel and Solar Services"
      },
    ],
    type: "website"
  },



  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png"
  }
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
