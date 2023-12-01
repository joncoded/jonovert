'use client'
import { useState } from "react"
import { FormUI } from "./form-ui";

interface FormProps {
  data: object;
}

export default function FormLogic({data}: FormProps) {  

  const [inputValue, setInputValue] = useState(1)
  const [inputUnit, setInputUnit] = useState(data["siunit"])
  const [inputUnits] = useState(Object.keys(data["units"]))

  const [outputValue, setOutputValue] = useState(data["units"][data["siunit"]]["conversions"][data["defaultOutputUnit"]])
  const [outputUnit, setOutputUnit] = useState(data["defaultOutputUnit"])
  const [outputUnits, setOutputUnits] = useState(Object.keys(data["units"][data["siunit"]]["conversions"]))
  
  const handleInputValueChange = (e: any) => {
    e.preventDefault()
    if (e.target.value.match(/^\d+\.?\d*$/) || e.target.value === 0 || e.target.value === '') {      
      setInputValue(e.target.value)
      setOutputValue(e.target.value * data["units"][inputUnit]["conversions"][outputUnit])
    } else {      
      e.target.value = inputValue
    }
  }

  const handleInputUnitChange = (e: any) => {
    e.preventDefault()    
    setInputUnit(e.target.value)            
    setOutputUnits(Object.keys(data["units"][e.target.value]["conversions"]))
    setOutputUnit(data["units"][e.target.value][data["defaultOutputUnit"]])
    setTimeout(() => setOutputValue(inputValue * data["units"][e.target.value]["conversions"][outputUnit]), 500)
  }

  const handleOutputValueChange = (e: any) => {
    e.preventDefault()
    if (e.target.value.match(/^\d+\.?\d*$/) || e.target.value === 0 || e.target.value === '') {          
      setInputValue(e.target.value / data["units"][inputUnit]["conversions"][outputUnit])
      setOutputValue(e.target.value)      
    } else {
      e.target.value = outputValue
    }
  }

  const handleOutputUnitChange = (e: any) => {
    e.preventDefault()    
    setOutputUnit(e.target.value)        
    setTimeout(() => setOutputValue(inputValue * data["units"][inputUnit]["conversions"][e.target.value]), 500)
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
          valueLabel="Convert"
          unitLabel="from unit"          
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
          valueLabel="Conversion"
          unitLabel="to unit"
        />
    
      </section>

    </>
  )
}