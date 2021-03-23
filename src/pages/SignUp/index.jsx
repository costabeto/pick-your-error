import React, { useState } from 'react';
import {
  Container,
  Overlay,
  FormComponent,
  Logo,
  Title,
  LoginLink,
  LoginText,
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
  const [passwordConfirm, setPaswordConfirm] = useState('');
  const [name, setName] = useState('');

  const { signUp } = useAuth();

  const responseGoogle = (response) => {
    if (!!response && !response.error) {
      console.log(response);
      const { profileObj } = response;
      signUp({
        email: profileObj.email,
        password: profileObj.googleId,
        name: profileObj.name,
      });
    }
  };

  function handleSignUp() {
    if (password !== passwordConfirm) {
      alert(`Passwords must match, try again.`);
    }

    if (!email || !password || !name) {
      alert('Please, fill in all fields to continue');
    }

    if (email && password && name && password === passwordConfirm) {
      signUp({ email, password, name });
    }
  }
  return (
    <Container
      about='Designed by pch.vector : http://www.freepik.com'
      alt='Designed by pch.vector : http://www.freepik.com'
    >
      <Overlay>
        <FormComponent>
          <Logo src={logo} />
          <Title>Sign up to Pick Your Error</Title>
          <LoginText>
            Already have an account?{'  '}
            <LoginLink to='/login'>Try to login</LoginLink>
          </LoginText>
          <Input
            type='text'
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
          />
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
          <Input
            type='password'
            placeholder='Password confirmation'
            onChange={(e) => setPaswordConfirm(e.target.value)}
          />
          <Button
            style={{ marginBottom: '10px' }}
            onClick={() => handleSignUp()}
          >
            Sign up
          </Button>
          <TryGoogle>Or just use your Google Account!</TryGoogle>
          <GoogleLogin
            clientId={process.env.REACT_APP_CLIENT_ID}
            buttonText='Sign up with Google'
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
