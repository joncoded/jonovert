import Link from "next/link"
import { MainDiv } from "../../components/main"

export default function About() {
  return ( 
    <MainDiv>
      <h2 className="text-5xl font-light">About</h2>
      <p>I built this simple app to help my write about Next.js + JSON + various units of measurements!</p>
      <p><span aria-hidden="true">&larr;</span> <Link href="/">Go back to main page</Link></p>
    </MainDiv>  
  )

}