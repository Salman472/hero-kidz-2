import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import localFont from 'next/font/local'
export const banglaFont = localFont({
  src: '../fonts/mayaboti-normal.ttf',
})
const poppines=Poppins({
  weight:['100','200','400','500','600','800']
})
export const metadata = {
  metadataBase: new URL("https://hero-kidz-ochre.vercel.app"),

  title: {
    default: "Hero Kidz",
    template: "%s | Hero Kidz",
  },

  description:
    "Discover quality products at Hero Kidz. Fast delivery, best prices, and trusted shopping experience.",

  keywords: [
    "online shop",
    "ecommerce",
    "buy products online",
    "Hero Kidz",
  ],

  authors: [{ name: "Hero Kidz" }],
  creator: "Hero Kidz",
  publisher: "Hero Kidz",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://hero-kidz-ochre.vercel.app",
    siteName: "Hero Kidz",
    title: "Hero Kidz",
    description:
      "Discover quality products at Hero Kidz. Fast delivery and best prices.",
    images: [
      {
        url: "https://i.ibb.co.com/d42jY0FZ/home-page-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Your Store Home Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hero Kidz",
    description:
      "Discover quality products at Hero Kidz. Fast delivery and best prices.",
    images: ["https://i.ibb.co.com/d42jY0FZ/home-page-preview.jpg"],
  },

  icons: {
    icon: "https://i.ibb.co.com/TMdYqJ7j/logo.png",
    shortcut: "https://i.ibb.co.com/TMdYqJ7j/logo.png",
    apple: "https://i.ibb.co.com/TMdYqJ7j/logo.png",
  },

  category: "ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppines.className} antialiased`}
      >
        <header className="py-2 mx-auto md:w-11/12">
  <Navbar/>
</header>

<main className="py-2 mx-auto min-h-[calc(100vh-318px)] md:w-11/12">
  {children}
</main>

<footer className="">
  <Footer/>
</footer>

      </body>
    </html>
  );
}
