import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="grid md:grid-cols-3 gap-8 px-4 lg:px-16">
      {/* Left side (Image + text) */}
      <div className="md:col-span-2">
        <AspectRatio ratio={16 / 9}>
          <Image
            src="/assets/image-web-3-desktop.jpg"
            alt="Web 3.0"
            fill
            className="rounded-lg object-cover"
          />
        </AspectRatio>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            The Bright Future of Web 3.0?
          </h2>
          <div>
            <p className="text-darkGrayishBlue mb-4">
              We dive into the next evolution of the web that claims to put the power
              of the platforms back into the hands of the people. But is it really
              fulfilling its promise?
            </p>
            <Button className="bg-accent text-white uppercase tracking-widest px-8">
              Read More
            </Button>
          </div>
        </div>
      </div>

      {/* Right side (New Section) */}
      <div className="bg-primary text-white p-6 rounded-lg">
        <h3 className="text-accent text-2xl font-bold mb-4">New</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold hover:text-accent cursor-pointer">Hydrogen VS Electric Cars</h4>
            <p className="text-grayishBlue text-sm">Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <hr className="border-darkGrayishBlue" />
          <div>
            <h4 className="font-bold hover:text-accent cursor-pointer">The Downsides of AI Artistry</h4>
            <p className="text-grayishBlue text-sm">Adverse effects of on-demand AI image generation?</p>
          </div>
          <hr className="border-darkGrayishBlue" />
          <div>
            <h4 className="font-bold hover:text-accent cursor-pointer">Is VC Funding Drying Up?</h4>
            <p className="text-grayishBlue text-sm">Private funding by VC firms is down 50% YOY.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
