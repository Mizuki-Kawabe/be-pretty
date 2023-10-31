import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import NavBar from './components/nav/NavBar'
import Footer from './components/footer/Footer'

const outfit = Outfit({ subsets: ['latin'],weight:['200','300','400','500','700'] })

export const metadata: Metadata = {
  title: 'Be Pretty',
  description: 'E-commerce website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <NavBar/>
        <div className='flex flex-col min-h-screen bg-mw'>
            <main className='flex-grow'>{children}</main>
        </div>
        <Footer/>
      </body>
    </html>
  )
}
