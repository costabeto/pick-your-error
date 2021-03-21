import React, { useState } from 'react';
import { Container, InputComponent, Label } from './styles';

const Input = ({
  placeholder = 'Type here...',
  type = 'text',
  onChange = () => {},
  style,
}) => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  function handleOnChange(e) {
    setValue(e.target.value);
    onChange(e);
  }

  return (
    <Container style={style}>
      <Label className='label' isFocused={!!value || isFocused}>
        {placeholder}
      </Label>
      <InputComponent
        type={type}
        onChange={(e) => handleOnChange(e)}
        onFocus={(e) => setIsFocused(e)}
        onBlur={() => setIsFocused(false)}
        value={value}
      />
    </Container>
  );
};

export default Input;
