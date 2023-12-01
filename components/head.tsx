import Link from "next/link"

export default function Head() {
  return (
    <div className="bg-sky-700 text-white w-full sticky top-0 z-40 p-5">
      <div className="max-w-screen-md mx-auto">
        <h1 className="text-4xl"><Link href="/">JONOVERT</Link></h1>
      </div>
    </div>
  )
}