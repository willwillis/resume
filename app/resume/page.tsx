import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
    <h1>This can&apos;t be how to introduce new colors, right? 3 files?</h1>
    <Badge variant={"default"}>default badge</Badge>
    <Badge variant={"secondary"}>secondary badge</Badge>
    <Badge variant={"destructive"}>destructive badge</Badge>
    <p>my custom badges</p>
    <Badge variant="skill10">skill10</Badge>
    <Badge variant="skill09">skill09</Badge>
      </div> 
      <p>something else to look at: https://daisyui.com/</p>
    </section>
  )
}
