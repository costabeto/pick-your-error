import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const user = sessionStorage.getItem('@pye:user');
    const token = sessionStorage.getItem('@pye:token');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const signOut = useCallback(() => {
    sessionStorage.removeItem('@pye:token');
    sessionStorage.removeItem('@pye:user');

    setData({});
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    api
      .post('/auth/authenticate', { email, password })
      .then((response) => {
        if (response.status === 200) {
          const { token, user } = response.data;

          sessionStorage.setItem('@pye:token', token);
          sessionStorage.setItem('@pye:user', JSON.stringify(user));
          setData({ token, user });
        } else {
          throw new Error('Login failed, try again.');
        }
      })
      .catch((err) => {
        if (err.message.includes('400')) {
          alert('Login failed, please try again with valid credentials');
        }
      });
  }, []);

  const signUp = useCallback(async ({ email, password, name }) => {
    api
      .post('/auth/register', { email, password, name })
      .then((response) => {
        if (response.status === 200) {
          const { token, user } = response.data;

          sessionStorage.setItem('@pye:token', token);
          sessionStorage.setItem('@pye:user', JSON.stringify(user));
          setData({ token, user });
        } else {
          throw new Error('Error during registration, please try again');
        }
      })
      .catch((err) => {
        alert('Error during registration, please try again');
        console.log(err);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
