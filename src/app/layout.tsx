import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Convertisseur de Prix Immobilier Dubai',
  description: 'Convertissez facilement les prix immobiliers de Dubai en différentes devises',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
