import React from 'react';
import { Container } from './styles';

const Button = ({ children, onClick = () => {}, style }) => {
  return (
    <Container onClick={onClick} style={style}>
      {children}
    </Container>
  );
};

export default Button;
