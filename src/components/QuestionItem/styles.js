import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  margin: 10px 0px;
  -webkit-box-shadow: -4px 10px 15px 4px rgba(0, 0, 0, 0.6);
  box-shadow: -4px 10px 15px 4px rgba(0, 0, 0, 0.6);
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Label = styled.div`
  width: 100%;
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const Value = styled.div`
  width: 100%;
  font-size: 1rem;
  font-weight: 300;
  margin-top: 0.2rem;
`;

export const ProfileLink = styled.a`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  color: black;
  margin-top: 1rem;
`;

export const ProfileImg = styled.img`
  width: 50px;
  border-radius: 50%;
  margin-right: 16px;
`;

export const Username = styled.div`
  width: fit-content;
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 0.2rem;
`;
