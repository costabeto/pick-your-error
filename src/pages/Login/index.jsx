import React from 'react';
import { Container, Overlay, FormComponent, Logo, Title } from './styles';
import logo from '../../assets/img/logoWhiteTransparent.png';
import { GoogleLogin } from 'react-google-login';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { useAuth } from '../../hooks/auth';
const Login = () => {
  const { signIn } = useAuth();

  const responseGoogle = (response) => {
    signIn(response);
  };
  return (
    <Container
      about='Designed by pch.vector : http://www.freepik.com'
      alt='Designed by pch.vector : http://www.freepik.com'
    >
      <Overlay>
        <FormComponent>
          <Logo src={logo} />
          <Title>Log in to Pick Your Error</Title>
          <Input type='email' placeholder='E-mail' />
          <Input type='password' placeholder='Password' />
          <Button style={{ marginBottom: '10px' }}>Continuar</Button>
          <GoogleLogin
            clientId={process.env.REACT_APP_CLIENT_ID}
            buttonText='Login'
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </FormComponent>
      </Overlay>
    </Container>
  );
};

export default Login;
