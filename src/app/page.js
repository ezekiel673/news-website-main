import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import ArticleCards from "@/components/ArticleCards"

import "./globals.css"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ArticleCards />
    </main>
  )
}
