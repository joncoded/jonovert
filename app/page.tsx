import Link from "next/link"
import { MainDiv } from "../components/main"

export default function Home() {
  return (
    <MainDiv>
      
      <h2 className="text-3xl">Home</h2>

      <ul>
        <li><Link href="/about">About</Link></li>
      </ul>
      
    </MainDiv>
  )
}