import "./global.css"

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
      <body>{children}</body>
    </html>
  )
}
