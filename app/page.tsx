import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        👋 Hi I'm Will. <br className="hidden sm:inline" />
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
        {/* I'm a results-oriented application Software Architect and Developer with a passion for metrics, automation, and learning and
implementing new technologies. I’m a flexible team-player with experience across software lifecycles, platforms, and
technologies. I’m looking to join an organization where I can demonstrate my abilities to troubleshoot, solve complex problems,
and deliver/maintain world-class applications */}
        </p>
      </div>

    </section>
  )
}
