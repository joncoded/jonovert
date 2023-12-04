import { MainDiv } from "../../components/main"
import { promises as fs } from 'fs'
import FormLogic from "./form-logic"

export default async function Main({ params }: {
  params: { dimension : string }
}) {

  const { dimension } = params

  // get units data
  const file = await fs.readFile(process.cwd() + '/data/dimensions.json', 'utf8')
  const data = JSON.parse(file)  
  
  return ( 
    <MainDiv>

      <h2 className="page-heading text-5xl font-light">
        <span className="capitalize">{dimension}</span>
        <span className="ml-2 text-lg">conversions</span>
      </h2>
      
      <FormLogic data={data[dimension]} />
    
    </MainDiv>                  
  )
}