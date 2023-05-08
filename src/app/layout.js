import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700', '800', '900']})

export const metadata = {
  title: 'OpenTechne',
  description: 'Where technology becomes art',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
