import './globals.css';
import localFont from 'next/font/local';
import Header from '../components/Header';
import Footer from '../components/Footer';

const displayFont = localFont({
  src: '../public/fonts/cormorant-garamond-latin.woff2',
  variable: '--font-display',
  weight: '500 600',
  display: 'swap',
});

const sansFont = localFont({
  src: '../public/fonts/jost-latin.woff2',
  variable: '--font-sans',
  weight: '300 500',
  display: 'swap',
});

export const metadata = {
  title: 'Simple Pure — O seu ritual SPA',
  description: 'Spa e cosmética natural em Castelo Branco',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt" className={`${displayFont.variable} ${sansFont.variable}`}>
      <body className="flex min-h-screen flex-col bg-cream text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
