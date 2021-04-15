import { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function checkBoxGroup({setVal, numOfBoxes}) {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
  
    const radios = [];
    
    
    for (let index = 0; index < numOfBoxes; index++) {
        radios.push({name: 'G' + (index+1), value : index});
        
    }
    
    return (
      <div>
        <ButtonGroup toggle>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant="secondary"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setVal(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
    );
  }