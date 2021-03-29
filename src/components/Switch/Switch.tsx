import React, { useState } from 'react';
import { SwitchWpapper, SwitchText, SwitchComponent } from './Switch.styled';
import { ISwitch } from './ISwitch';

const Switch: (props: ISwitch) => JSX.Element = (props: ISwitch) => {
  // eslint-disable-next-line react/destructuring-assignment
  const [checked, setChecked] = useState(props.checked);

  return (
    <SwitchWpapper>
      <SwitchText>{checked ? 'Да' : 'Нет'}</SwitchText>
      <SwitchComponent
        checked={checked}
        onClick={() => {
          setChecked(!checked);
        }}
      />
    </SwitchWpapper>
  );
};

export default Switch;
