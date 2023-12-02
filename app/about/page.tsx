import Link from "next/link"
import { MainDiv } from "../../components/main"

export default function About() {
  return ( 
    <MainDiv>
      
      <h2 className="text-5xl font-light">About</h2>
      
      <p>I built this simple web app to help me review and learn about:</p> 
      
      <ul>
        <li><Link href="https://nextjs.org" target="_blank">Next.js</Link> (a way to build websites)</li>
        <li><Link href="https://www.tailwindcss.com" target="_blank">Tailwind</Link> (a way to style / design websites)</li>
        <li><Link href="https://www.json.org/json-en.html" target="_blank">JSON</Link> (a way to store conversion data)</li>
        
        <li><Link href="https://en.wikipedia.org/wiki/Unit_of_measurement" target="_blank">various units of measurements</Link></li>
      </ul>
      
      <p>As a <strong>Canadian</strong>, I also often need to convert <strong>American</strong> units of measure into metric, and vice versa!</p> 
      
      <p>So, I have created this website to work more for me, rather than the other way around!</p>

      <hr className="my-5" />
      
      <p>
        <span aria-hidden="true" className="mr-2">&larr;</span> 
        <Link href="/">Let's get back to converting!</Link>
      </p>
    </MainDiv>  
  )

}