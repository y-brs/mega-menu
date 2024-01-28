import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

import logo from '../assets/logoipsum.svg';
import UserProfile from './UserProfile';
import { AlignJustify } from 'lucide-react';

import MegaMenu from './MegaMenu';
import MobileNavigationDrawer from './MobileNavigationDrawer';

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header className="nav__header">
      <Container>
        <div className="toolbar">
          <button
            className="menu_icon md:hidden"
            aria-haspopup="true"
            onClick={() => setIsDrawerOpen(true)}
          >
            {/* Mobile Hamburger menu */}
            <AlignJustify />
          </button>
          <Link className="logo__link" to={'/'}>
            <img src={logo} />
          </Link>

          <div className="hidden md:block">
            <MegaMenu />
          </div>

          <UserProfile />

          <div className="md:hidden absolute">
            <MobileNavigationDrawer
              {...{ isDrawerOpen, setIsDrawerOpen }}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navigation;
