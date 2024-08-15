import './globals.css'
import { Raleway } from 'next/font/google'

const inter = Raleway ({ subsets: ['latin'], weight: [ '100', '300', '400', '500', '700', '900']})

export const metadata = {
  title: 'Ikigai Visual Studio - Branding & Design Services',
  description: 'Where technology becomes art',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='overflow-x-hidden bg-light'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
