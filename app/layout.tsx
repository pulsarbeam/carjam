import { Footer, NavBar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Car Hub',
  description:
    'Car Hub is a car rental service that allows you to rent a car for a day or a week.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
