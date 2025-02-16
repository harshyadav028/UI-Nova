import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'UI Nova',
  description: 'just prompt properly and get ui of your website.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <div className="background"></div> {/* Background layer */}
        <div>{children}</div>
        </body>
    </html>
  )
}