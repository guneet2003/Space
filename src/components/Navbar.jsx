import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Center } from '@react-three/drei';

const Navbar = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 468);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 468);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className='header'>
      {isLargeScreen ? (
        <LargeScreenNavbar />
      ) : (
        <SmallScreenNavbar />
      )}
    </header>
  );
};

const LargeScreenNavbar = () => {
  return (
    <>
      <NavLink to="/" className="text-lg font-medium">
        <div className="text-white">Home</div>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'bg-[#e46259] bg-clip-text text-transparent' : 'text-white'}>
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'bg-[#71f487] bg-clip-text text-transparent' : 'text-white'}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'bg-[#4e9dd2] bg-clip-text text-transparent' : 'text-white'}>
          Contact
        </NavLink>
      </nav>
    </>
  );
};

const SmallScreenNavbar = () => {
  return (
    <nav className='flex  text-lg justify-center gap-7 font-medium' style={{ flexDirection: 'row', alignItems: 'center' }}>
      <NavLink to="/" className="text-lg font-medium text-white">
        Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? 'bg-[#e46259] bg-clip-text text-transparent' : 'text-white'}>
        About
      </NavLink>
      <NavLink to="/projects" className={({ isActive }) => isActive ? 'bg-[#71f487] bg-clip-text text-transparent' : 'text-white'}>
        Projects
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? 'bg-[#4e9dd2] bg-clip-text text-transparent' : 'text-white'}>
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
