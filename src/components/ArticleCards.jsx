import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import retroPc from "@/../public/assets/image-retro-pcs.jpg"
import topLaptops from "@/../public/assets/image-top-laptops.jpg"
import gamingGrowth from "@/../public/assets/image-gaming-growth.jpg"

const articles = [
  { id: "01", img: retroPc, title: "Reviving Retro PCs", desc: "What happens when old PCs are given modern upgrades?" },
  { id: "02", img: topLaptops, title: "Top 10 Laptops of 2022", desc: "Our best picks for various needs and budgets." },
  { id: "03", img: gamingGrowth, title: "The Growth of Gaming", desc: "How the pandemic has sparked fresh opportunities." },
]


export default function ArticleCards() {
  return (
    <section className="grid md:grid-cols-3 gap-8 px-4 lg:px-16 py-12">
      {articles.map(article => (
        <Card key={article.id} className="flex items-center gap-4 p-4">
          <div className="w-24 h-24 relative">
            <Image src={article.img} alt={article.title} fill className="rounded-md object-cover" />
          </div>
          <CardContent className="p-0">
            <h3 className="text-accent font-bold text-xl">{article.id}</h3>
            <h4 className="font-bold hover:text-accent cursor-pointer">{article.title}</h4>
            <p className="text-darkGrayishBlue text-sm">{article.desc}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  )
}
