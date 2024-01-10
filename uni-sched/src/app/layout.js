import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/features/footer/footer'
import Navbar from '@/features/navbar/navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'UniScheduler.io',
  description: 'A simple, modern, and open source course scheduler for university students.',
}

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      
      <body className={inter.className}>
        <div className='flex flex-col min-h-screen'>
          <header>
            <Navbar />
          </header>
          {children}
          <Footer />
        </div>
      </body>
      
    </html>
  )
}
