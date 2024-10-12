export const metadata = {
  title: 'Tanisha Jain',
  description: 'My Personal Website!',
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
