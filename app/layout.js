
import Header from '@/components/header';
import '../styles/globals.css'
import { sen } from './font';
import Footer from '@/components/footer';




export default function RootLayout({ children }) {
  return (
    <html lang="fr">
        <body className={sen.variable}>
            <Header />
              
            {children}
            
          <Footer />
        </body>

    </html>
  )
}
