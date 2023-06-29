

import Header from "@/components/header";
import "../styles/globals.css";
import { sen } from "./font";
import Footer from "@/components/footer";

export const metadata = {
  title: 'Brushed - modern metal poster | Discover Modern Masterpieces',
  description: 'Explore the Brushed contemporary art marketplace and discover a curated collection of modern metals posters. Immerse yourself in the vibrant world of contemporary art. Visit us today!',
  openGraph: {
    title: 'Brushed - modern metal poster | Discover Modern Masterpieces',
    description: 'Explore the Brushed contemporary art marketplace and discover a curated collection of modern metals posters. Immerse yourself in the vibrant world of contemporary art. Visit us today!',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brushed - modern metal poster | Discover Modern Masterpieces',
    description: 'Explore the Brushed contemporary art marketplace and discover a curated collection of modern metals posters. Immerse yourself in the vibrant world of contemporary art. Visit us today!',
    
  }
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={sen.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
