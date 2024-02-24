import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to="/" className="font-bold-xl">
            <div className="text-white">Home</div>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium' style={{ zIndex: '999' }}>
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
    </header>
  );
};

export default Navbar;
