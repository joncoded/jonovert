import { MainDiv } from "../../components/main"
import { dimensions } from "../../data/dimensions"
import FormLogic from "./form-logic"

export default async function Main({ params }: {
  params: { dimension : string }
}) {

  const { dimension } = params
  
  return ( 
    <MainDiv>

      <h2 className="page-heading text-5xl font-light">
        <span className="capitalize">{dimension}</span>
        <span className="ml-2 text-lg">conversions</span>
      </h2>
      
      <FormLogic data={dimensions[dimension]} />
    
    </MainDiv>                  
  )
}