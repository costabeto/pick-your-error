import React, { useState } from 'react';
import {
  Container,
  Overlay,
  FormComponent,
  Logo,
  Title,
  SignupLink,
  SignupText,
  TryGoogle,
} from './styles';
import logo from '../../assets/img/logoWhiteTransparent.png';
import { GoogleLogin } from 'react-google-login';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { useAuth } from '../../hooks/auth';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');

  const { signIn } = useAuth();

  const responseGoogle = (response) => {
    if (!!response && !response.error) {
      const { profileObj } = response;
      signIn({ email: profileObj.email, password: profileObj.googleId });
    }
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
          <SignupText>
            Don't have an account yet?{'  '}
            <SignupLink to='/signup'>Sign up</SignupLink>
          </SignupText>
          <Input
            type='email'
            placeholder='E-mail'
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type='password'
            placeholder='Password'
            onChange={(e) => setPasword(e.target.value)}
          />
          <Button
            style={{ marginBottom: '10px' }}
            onClick={() => signIn({ email, password })}
          >
            Login
          </Button>
          <TryGoogle>Or just use your Google Account!</TryGoogle>
          <GoogleLogin
            clientId={process.env.REACT_APP_CLIENT_ID}
            buttonText='Login with Google'
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
