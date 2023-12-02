'use client'

import { MainDiv } from "../components/main"
import { useRouter } from "next/navigation"

export default function Home() {

  const router = useRouter()

  const handleMainMenuChange = (e: any) => {
    e.preventDefault()
    router.push(e.target.value)
  }
  
  return (
    <MainDiv>
      
      <h2 className="text-5xl font-light">Hello!</h2>

      <p>Welcome to my measurement converter!</p> 

      <select 
        className="head-menu bg-black text-white my-5 py-2 px-5 text-xl w-full" 
        onChange={handleMainMenuChange}        
      >
        <option>What would you like to convert today?</option>        
        <option value="/length">length</option>
        <option value="/mass">mass</option>
        <option value="/time">time</option>          
      </select>
          
    </MainDiv>
  )
}