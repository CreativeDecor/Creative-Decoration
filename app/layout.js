import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata = {
  title: 'Creative Decor | Interior & Home Furnishing Solutions in Goa',
  description: 'Creative Decor provides complete interior, home furnishing, flooring, curtains, wall paneling, electrical and painting solutions in Panaji, Goa.',
  keywords: 'Creative Decor Goa, Interior solutions in Goa, Home furnishing in Goa, Interior services in Panaji, Home improvement services Goa, Sofa, Wallpaper, Wooden Flooring, Curtains, Wall Paneling, Mattresses, Electrical, Painting, Goa, Panaji',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  authors: [{ name: 'Creative Decor' }],
  creator: 'Creative Decor',
  publisher: 'Creative Decor',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Creative Decor | Interior & Home Furnishing Solutions in Goa',
    description: 'Creative Decor provides complete interior, home furnishing, flooring, curtains, wall paneling, electrical and painting solutions in Panaji, Goa.',
    url: 'https://creativedecorgoa.com',
    siteName: 'Creative Decor',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Creative Decor",
    "image": "https://creativedecorgoa.com/logo.png",
    "url": "https://creativedecorgoa.com",
    "telephone": "+918867719927",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. S 1, Ground Floor, Sai Smarth Appts, Near Army Camp, Merces",
      "addressLocality": "Panaji",
      "addressRegion": "Goa",
      "postalCode": "403005",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "15.497555",
      "longitude": "73.823902"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth overflow-x-hidden`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-luxury-charcoal bg-luxury-beige min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        {/* We place min-h-screen and flex-grow here to push the footer down */}
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  )
}
