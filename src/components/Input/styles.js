import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border: none;
  padding: 1rem;
  height: 64px;
  background-color: #262626;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Label = styled.label`
  color: #f4f4f4;
  position: absolute;
  font-size: 1rem;
  letter-spacing: 0.32px;
  font-weight: 400;
  transition: transform 0.2s, font-size 0.2s;

  ${(props) =>
    props.isFocused && 'transform: translateY(-15px);font-size: 0.75rem;'}
`;

export const InputComponent = styled.input`
  width: 100%;
  height: 100%;
  flex: 1;
  color: #f4f4f4;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.29;
  letter-spacing: 0.16px;
  background-color: transparent;
  border: none;
  transform: translateY(5px);
  &:focus {
    outline: none;
  }
`;
