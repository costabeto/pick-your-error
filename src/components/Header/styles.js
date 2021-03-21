import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 1rem;
`;

export const ProfileSection = styled.button`
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background-color: black;
  color: white;
  border: none;
  padding: 0px 1rem;
  &:hover,
  &:active {
    background-color: rgba(54, 54, 54);
  }
  &:focus {
    outline: none;
  }
  @media screen and (min-width: 768px) {
    width: 250px;
  }
`;

export const Menu = styled.div`
  width: 100px;
  right: 0px;
  height: fit-content;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transform: translateY(4rem);
  background-color: black;
  color: white;
  z-index: 10;
  @media screen and (min-width: 768px) {
    width: 250px;
  }
`;

export const MenuItem = styled.button`
  width: 100px;
  height: 4rem;
  color: white;
  background-color: black;
  border: none;
  padding: 1rem;
  &:hover,
  &:active {
    background-color: rgba(54, 54, 54);
  }
  &:focus {
    outline: none;
  }
  @media screen and (min-width: 768px) {
    width: 250px;
  }
`;

export const Logo = styled.img`
  height: 60%;
`;

export const Title = styled.div`
  font-size: 1rem;
  margin: 0px 1rem;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const ProfileImg = styled.img`
  height: 80%;
`;
