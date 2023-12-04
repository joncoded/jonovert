'use client'
import { useState } from "react"
import { FormUI } from "./form-ui";

interface DataProps {
  data: object;
}

export default function FormLogic({data}: DataProps) {  

  const [precision, setPrecision] = useState(8)  

  const [inputValue, setInputValue] = useState(1)
  const [inputUnit, setInputUnit] = useState(data["siunit"])
  const [inputUnits] = useState(Object.keys(data["units"]))

  const [outputValue, setOutputValue] = useState(data["units"][data["siunit"]]["conversions"][data["defaultOutputUnit"]])
  const [outputUnit, setOutputUnit] = useState(data["defaultOutputUnit"])
  const [outputUnits, setOutputUnits] = useState(Object.keys(data["units"][data["siunit"]]["conversions"]))
  
  const handlePrecisionChange = (e: any) => {

    e.preventDefault()

    // acknowledge precision input
    const newPrecision = e.target.value
    setPrecision(newPrecision)

    // use precision value for input and output
    const truncatedInputValue = Number(Number(inputValue).toFixed(newPrecision))
    const truncatedOutputValue = Number(Number(outputValue).toFixed(newPrecision))    
    setInputValue(truncatedInputValue)
    setOutputValue(truncatedOutputValue)

  }

  const handleInputValueChange = (e: any) => {

    e.preventDefault()    
    
    if (e.target.value.match(/^\d+\.?\d*$/) || e.target.value === 0 || e.target.value === '') {      
      
      setInputValue(e.target.value)
      setOutputUnit(prev => prev)
      const newOutputFormula = e.target.value * data["units"][inputUnit]["conversions"][outputUnit]      
      const newOutputValue = Number(Number(newOutputFormula).toFixed(precision))
      setOutputValue(newOutputValue)
    
    } else {      
    
      e.target.value = inputValue
    
    }
    
  }

  const handleInputUnitChange = (e: any) => {

    e.preventDefault()        
    
    setInputUnit(e.target.value)        
    
    setOutputUnits(Object.keys(data["units"][e.target.value]["conversions"]))
    setOutputUnit(prev => prev)
    
    const newOutputFormula = inputValue * data["units"][e.target.value]["conversions"][outputUnit]
    setOutputValue(newOutputFormula.toFixed(precision))

  }

  const handleOutputValueChange = (e: any) => {
    
    e.preventDefault()    
    
    if (e.target.value.match(/^\d+\.?\d*$/) || e.target.value === 0 || e.target.value === '') {      
    
      setOutputValue(e.target.value)      
    
    } else {
    
      e.target.value = outputValue
    
    }

  }

  const handleOutputUnitChange = (e: any) => {

    e.preventDefault()      

    setOutputUnit(e.target.value)

    const newOutputFormula = inputValue * data["units"][inputUnit]["conversions"][e.target.value]
    setOutputValue(newOutputFormula)

  }

  const SectionHeading = ({children}: any) => {

    return (
      <h3 className="page-panel-input-heading text-3xl font-bold">{children}</h3>
    )

  }

  return (
    <>

      <section className="page-panel-input-section">
      
        <SectionHeading>Input</SectionHeading>
        
        <FormUI 
          type="input"
          onValueChange={handleInputValueChange}
          onUnitChange={handleInputUnitChange}
          typeValue={inputValue}
          typeUnit={inputUnit}
          typeUnits={inputUnits}
          disabled={false}
          valueLabel=""
          unitLabel=""          
        />

      </section>

      <section className="page-panel-output-section">
      
        <SectionHeading>Output</SectionHeading>
        
        <FormUI 
          type="output"
          onValueChange={handleOutputValueChange}
          onUnitChange={handleOutputUnitChange}
          typeValue={outputValue}
          typeUnit={outputUnit}
          typeUnits={outputUnits}
          disabled={true}
          valueLabel=""
          unitLabel=""
        />
    
      </section>

      <section className="page-panel-precision-section flex flex-col gap-5">  

        <label htmlFor="precision">Maximum number of decimal places: </label>        
      
        <select 
          name={`precision`}
          className={`page-panel-precision-select block border border-gray-200 text-xl p-2 w-full`}
          onChange={handlePrecisionChange}
          value={precision}
        >          
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>          
          <option value="100">no maximum</option>          
        </select>
      
      </section>      

    </>
  )

}
