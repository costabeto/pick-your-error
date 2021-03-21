import styled from 'styled-components';
import bg from '../../assets/img/oops/3804949.jpg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  opacity: 0.8;
  background-image: url(${bg});
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: 15vw;
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const FormComponent = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
`;

export const Logo = styled.img`
  width: 100px;
  margin: 1rem 0px;
`;

export const Title = styled.div`
  color: white;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 2rem;
  margin: 1rem 0px;
`;
