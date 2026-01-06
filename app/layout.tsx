import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import PageBackground from '@/components/PageBackground'
import EnquiryPopup from '@/components/EnquiryPopup'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'COCO AGROTECH',
  description: 'Premium Coco Peat Products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ background: 'transparent' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Lobster&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Cal+Sans&family=Hubot+Sans:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet" />
      </head>
      <body className="transparent-body" style={{ background: 'transparent', margin: 0, padding: 0 }}>
        <Header />
        <EnquiryPopup />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <PageBackground>
            {children}
          </PageBackground>
          <Footer />
        </div>
      </body>
    </html>
  )
}

