import React, { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import {
  Container,
  Logo,
  ProfileImg,
  Title,
  Section,
  ProfileSection,
  Menu,
  MenuItem,
} from './styles';
import logo from '../../assets/img/logoWhiteTransparent.png';
import { useHistory } from 'react-router';

import userImg from '../../assets/img/default-user-image.png';

const Header = () => {
  const { user, signOut } = useAuth();
  const [menu, setMenu] = useState(false);

  const history = useHistory();

  return (
    !!user && (
      <Container>
        <Section>
          <Logo src={logo} />
          <Title>Pick Your Error</Title>
        </Section>

        <ProfileSection
          onMouseOver={() => setMenu(true)}
          onMouseLeave={() => setMenu(false)}
          onFocus={() => setMenu(true)}
          onClick={() => setMenu(true)}
          onBlur={() => setMenu(false)}
        >
          <Title>{user.name}</Title>
          <ProfileImg src={user.imageUrl || userImg} alt={user.name} />
          {menu && (
            <Menu>
              <MenuItem onClick={() => history.push('/')}>Home</MenuItem>
              <MenuItem onClick={() => history.push('/favorites')}>
                Favorites
              </MenuItem>
              <MenuItem onClick={() => signOut()}>Logout</MenuItem>
            </Menu>
          )}
        </ProfileSection>
      </Container>
    )
  );
};

export default Header;
