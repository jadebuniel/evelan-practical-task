import { UserContextProvider } from '@/context/userContext'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PageContextProvider } from '@/context/pageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Evelan Practical Task',
  description: 'This is a practical task from Evelan GmbH'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-teal-300`}>
        <UserContextProvider>
          <PageContextProvider>
            {children}
          </PageContextProvider>
        </UserContextProvider>
      </body>
    </html>
  )
}
