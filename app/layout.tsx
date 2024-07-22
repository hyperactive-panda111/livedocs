import './globals.css'
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import { Metadata } from 'next'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const metadata: Metadata = {
  title: 'LiveDocs',
  description: 'Realtime Collaborative Editor ',
}

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen  font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
