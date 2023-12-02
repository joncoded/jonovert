export interface FormUIProps {
  type: string;
  onValueChange: ChangeEventHandler<HTMLInputElement>;
  onUnitChange: ChangeEventHandler<HTMLSelectElement>;
  typeValue: number;
  typeUnit: string;
  typeUnits: string[];
  valueLabel: string;
  unitLabel: string;
}

export const FormUI = ({type, onValueChange, onUnitChange, typeValue, typeUnit, typeUnits, valueLabel, unitLabel}: FormUIProps) => {
  return (
    <div className={`page-panel-${type}-control-wrapper flex flex-col justify-start gap-5 w-full mt-5`}>

      <div className={`page-panel-${type}-value-wrapper flex flex-col grow`}>

        <div className={`page-panel-${type}-value-label mt-2 mb-1 text-xl`}>
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

        <div className={`mb-1 text-xl`}>
          <label htmlFor={`${type}Unit`}>{unitLabel}</label>
        </div>

        <div className={`page-panel-${type}-unit-field-wrapper`}>
          <select            
            name={`${type}Unit`}
            className={`page-panel-${type}-unit-field border-2 border-gray-200 bg-gray-200 p-2 text-xl font-light w-full`}
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