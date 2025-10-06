import "./globals.css"

export const metadata = {
  title: "W. News",
  description: "Modern News Homepage built with Next.js, TailwindCSS & shadcn/ui",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-primary font-inter">{children}</body>
    </html>
  )
}


