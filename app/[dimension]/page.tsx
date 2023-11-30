import { MainDiv } from "../../components/main"

export default function Main({ params }: {
  params: { dimension : string }
}) {

  // get units data

  return ( 
    <MainDiv>
      <h2 className="text-3xl text-capitalize">{params.dimension}</h2>
    </MainDiv>                  
  )
}