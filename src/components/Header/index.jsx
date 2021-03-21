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

const Header = () => {
  const { user, signOut } = useAuth();
  const [menu, setMenu] = useState(false);

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
          <Title>{user.givenName}</Title>
          <ProfileImg src={user.imageUrl} alt={user.givenName} />
          {menu && (
            <Menu>
              <MenuItem onClick={() => signOut()}>Logout</MenuItem>
            </Menu>
          )}
        </ProfileSection>
      </Container>
    )
  );
};

export default Header;
