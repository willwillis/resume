import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
    <h1>Quotes</h1>
      </div> 
      <p>Average Sucks</p>
    </section>
  )
}

