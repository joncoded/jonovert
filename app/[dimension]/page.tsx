export default function Main({ params }: {
  params: { dimension : string }
}) {
  return ( 
    <div className="p-5">
      <div className="w-screen-lg max-w-screen-lg mx-auto">
        <h2 className="text-2xl">{params.dimension}</h2>
      </div>
    </div>
    
  )
}