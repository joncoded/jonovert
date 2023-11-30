import Link from "next/link"
import { MainDiv } from "../../components/main"

export default function About() {
  return ( 
    <MainDiv>
      <h2 className="text-3xl">About</h2>
      <p>This is my about page!</p>
      <p><Link href="/">Go back to main page</Link></p>
    </MainDiv>  
  )

}