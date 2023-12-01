'use client'
import { ChangeEventHandler, useState } from "react"

interface FormProps {
  data: object;
}

export default function Form({data}: FormProps) {  

  const [inputValue, setInputValue] = useState(1)
  const [inputUnit, setInputUnit] = useState(data["siunit"])
  const [inputUnits, setInputUnits] = useState(Object.keys(data["units"]))

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
    setOutputValue(inputValue / data["units"][e.target.value]["conversions"][outputUnit])
  }

  const handleOutputValueChange = (e: any) => {
    e.preventDefault()
    if (e.target.value.match(/^\d+\.?\d*$/) || e.target.value === 0 || e.target.value === '') {          
      setOutputValue(e.target.value)
      setInputValue(e.target.value / data["units"][inputUnit]["conversions"][outputUnit])
    } else {
      e.target.value = outputValue
    }
  }

  const handleOutputUnitChange = (e: any) => {
    e.preventDefault()
    setOutputUnit(e.target.value)    
    setOutputValue(inputValue * data["units"][inputUnit]["conversions"][e.target.value])
  }

  interface AbstractFormProps {
    type: string;
    onValueChange: ChangeEventHandler<HTMLInputElement>;
    onUnitChange: ChangeEventHandler<HTMLSelectElement>;
    typeValue: number;
    typeUnit: string;
    typeUnits: string[];
    valueLabel: string;
    unitLabel: string;
  }

  const AbstractForm = ({type, onValueChange, onUnitChange, typeValue, typeUnit, typeUnits, valueLabel, unitLabel}: AbstractFormProps) => {
    return (
      <div className={`page-panel-${type}-control-wrapper flex flex-col sm:flex-row justify-start gap-2 w-full`}>

        <div className={`page-panel-${type}-value-wrapper flex flex-col grow`}>

          <div className={`page-panel-${type}-value-label mt-5 mb-1 text-xl`}>
            <label htmlFor={`${type}Value`}>{valueLabel}</label>
          </div>
          
          <div className={`page-panel-${type}-value-field-wrapper`}>
            <input             
              name={`${type}Value`} 
              type={`text`}
              pattern={`\d+\.?\d*`}
              placeholder={`0`}
              className={`page-panel-${type}-value-field border-2 border-gray-200 p-2 text-xl sm:text-2xl lg:text-4xl  font-mono font-semibold text-gray-600 w-full`} 
              onChange={onValueChange}
              value={typeValue}                
            />
          </div>

        </div>

        <div className={`page-panel-${type}-unit-wrapper flex flex-col`}>

          <div className={`mt-5 mb-1 text-xl`}>
            <label htmlFor={`${type}Unit`}>{unitLabel}</label>
          </div>

          <div className={`page-panel-${type}-unit-field-wrapper`}>
            <select            
              name={`${type}Unit`}
              className={`page-panel-${type}-unit-field border-2 border-gray-200 p-2 text-xl font-light`}
              onChange={onUnitChange}
              value={typeUnit}
            >
              { typeUnits.map(unit => <option key={`input-${unit}`} value={unit}>{unit}</option>) }
            </select>
          </div>

        </div>
        
      </div> 
    )
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
        
        <AbstractForm 
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
        
        <AbstractForm 
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