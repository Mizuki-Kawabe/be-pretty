import './globals.css'
import type { Metadata } from 'next'
import { Merriweather } from 'next/font/google'
import NavBar from './components/nav/NavBar'
import Footer from './components/footer/Footer'

const merriweather = Merriweather({ subsets: ['latin'], weight:['300','400','700','900'] })



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
        <body className={merriweather.className}>
          <NavBar/>
          <div className='flex flex-col min-h-screen bg-mw'>
              <main className='flex-grow'>{children}</main>
          </div>
          <Footer/>
        </body>
    </html>
  )
}
