import "./global.css"
import Head from "../components/head"
import Tail from "../components/tail"

export const metadata = {
  title: 'jonovert',
  description: 'converting units of measurements',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Head />
        {children}
        <Tail />
      </body>
    </html>
  )
}
