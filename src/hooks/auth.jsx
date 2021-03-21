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

  const signIn = useCallback(async ({ accessToken, profileObj }) => {
    const token = accessToken;

    const user = profileObj;

    sessionStorage.setItem('@pye:token', token);
    sessionStorage.setItem('@pye:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const updateUser = useCallback(
    (user) => {
      sessionStorage.setItem('@pye:user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token]
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
