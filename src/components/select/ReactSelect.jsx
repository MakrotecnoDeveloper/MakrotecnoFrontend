import React from "react";
import Select from "react-select";

import { useState } from 'react';
//const [value, setValue] = useState("");

{/*const paises = [  
  { id: '1', label: 'colombia'},
  { id: '2', label: 'canada'},
  { id: '3', label: 'Venuezuela'}, 
  { id: '4', label: 'peru'}
];*/}


const RSelect = ({value,onChange,className,name,options,placeholder, required,ref}) => {
  
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (value) => {
        setSelectedOption(value);
        console.log("dentro del componente",value);
        //setSeletec(value);
  }   

  {/*console.log(options);
  console.log(selectedOption);*/}
  return (
    <div className="form-control-select">    
      {/*{console.log("lo que me llega props",props)}
      {console.log("lo que me llega props2",props2)}
      <h1>Select:{selected}</h1>
      {console.log(JSON.stringify(props[0]))}*/}
      <Select 
        className={`react-select-container ${className}`}
        classNamePrefix="react-select"        
        defaultValue={name}
        isDisabled={false}
        isLoading={false}
        isClearable={true}
        isRtl={false}
        isSearchable={true}
        options={options}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={true}
        ref={ref}


        
      />
      {/*<select value={ props.pais }>
            <option value="liimon">Lime</option>
            <option value="coco">Coconut</option>
            <option value="mango">Mango</option>
            ref={ref} 
          </select>*/}
    </div>
  );
};

export default RSelect;
