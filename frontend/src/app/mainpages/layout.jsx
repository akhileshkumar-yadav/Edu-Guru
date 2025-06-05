"use client";
// import "./globals.css";
import Footer from "../footer";
import { Toaster } from "react-hot-toast";
import Navbar from "../navbar";
import { AppProvider } from "../../context/appcontext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body>
        <AppProvider>
          <Navbar />
          <Toaster position="top-right " />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
