import { useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

export default function CheckBoxGroup({setVal, numOfBoxes}) {
    const [radioValue, setRadioValue] = useState(0);

    const radios = [];
    for (let index = 0; index < numOfBoxes; index++) {
        radios.push({name: 'G' + (index+1), value : index});
    }

    return (
      <div>
        <ToggleButtonGroup
          type="radio"
          name="radio"
          value={radioValue}
          onChange={(val) => { setRadioValue(val); setVal(val); }}
        >
          {radios.map((radio) => (
            <ToggleButton
              key={radio.value}
              id={`group-radio-${radio.value}`}
              variant="secondary"
              value={radio.value}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
    );
  }
