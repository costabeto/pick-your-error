import React from 'react';
import { Container } from './styles';
import logo from '../../assets/img/logoWhiteTransparent.png';
import { GoogleLogin } from 'react-google-login';
import googleConfig from '../../config/google.json';

import { useAuth } from '../../hooks/auth';

const Login = () => {
  const { signIn } = useAuth();

  const responseGoogle = (response) => {
    signIn(response);
  };
  return (
    <Container>
      <img src={logo} alt='' />
      <GoogleLogin
        clientId={googleConfig.clientId}
        buttonText='Login'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </Container>
  );
};

export default Login;
