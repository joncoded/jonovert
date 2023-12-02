'use client'

import Link from "next/link"

export default function Tail() {

  return (
    <footer className="tail-wrap w-full bg-black text-white p-5 sticky top-[100vh]">
      <div className="tail-prop max-w-screen-md mx-auto flex justify-between items-start">
        <div>a <Link href="https://github.com/joncoded/jonovert">joncoded</Link> production</div>        
        <div className="flex flex-col gap-2">
          <div className="flex flex-col sm:flex-row gap-5">
            <Link href="/about">about</Link>
            / <Link href="https://github.com/joncoded/jonovert" target="_blank">github</Link>
            / <Link href="https://en.wikipedia.org/wiki/Dimensional_analysis" target="_blank">dimensional analysis</Link>
          </div>          
        </div>          
      </div>
    </footer>  
  )

}