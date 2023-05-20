import '@styles/globals.css'

import Nav from '@components/Nav';
import Footer from '@components/Footer';

export const metadata = {
  title: 'HyperStellar IO',
  description: 'Techonology Site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
          {children}
        <Footer />
      </body>
    </html>
  )
}
