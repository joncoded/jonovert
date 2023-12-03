'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Head() {

  const router = useRouter()

  const handleMenuChange = (e: any) => {
    e.preventDefault()
    if (e.target.value)
      router.push(e.target.value)
  }

  return (
    <header className="head-wrap bg-sky-700 text-white w-full sticky top-0 z-40 p-5">
      <div className="head-prop max-w-screen-md mx-auto flex justify-between items-center">
        <div className="head-title">
          <h1 className="head-ding text-4xl">
            <Link href="/">JONOVERT</Link>          
          </h1>
          <div className="head-line text-md block">converting various units of measurement</div>
        </div>
        <select className="head-menu bg-black text-white py-2 px-5" onChange={handleMenuChange}>
          <option value="">M E N U</option>
          <option value="/">home</option>
          <option value="/about">about</option>
          <option value="/length">length</option>
          <option value="/mass">mass</option>
          <option value="/time">time</option>          
        </select>
      </div>
    </header>
  )
}