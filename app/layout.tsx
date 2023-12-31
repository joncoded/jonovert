import "./global.css"
import Head from "../components/head"
import Tail from "../components/tail"

export const metadata = {
  title: 'jonovert',
  description: 'converting units of measurements',
  keywords: 'metric, measurements',
  author: 'joncoded'  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen">
        <Head />
        {children}
        <Tail />
      </body>
    </html>
  )
}
