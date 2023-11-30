import Link from "next/link"
import { MainDiv } from "../components/main"

export default function Home() {
  return (
    <MainDiv>
      
      <h2 className="text-5xl font-light">Hello!</h2>

      <p>What would you like to convert now?</p>

      <ul>
        <li><Link href="/length">Length</Link></li>
      </ul>

      <p>Read more?</p>

      <ul>
        <li><Link href="/about">About</Link></li>
      </ul>
      
    </MainDiv>
  )
}