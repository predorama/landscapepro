import { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Logo from '../assets/logo.png'; // Adjust the path as necessary
import { NAV_LINKS } from '../constants/constants'; // Adjust the path as necessary
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import { PropTypes } from 'prop-types';

// Navigation menu component
const Menu = () => (
  <ul className="flex flex-col gap-8 md:flex-row">
    {NAV_LINKS.map((link, index) => (
      <motion.li
        key={link.key}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }} // Adjust delay for stagger effect
        className="montserrat text-green-800 hover:font-semibold text-base"
      >
        <a href={link.href}>{link.label}</a>
      </motion.li>
    ))}
  </ul>
);

Menu.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
};

// Navigation bar component
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // Example breakpoint for desktop
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Animation variants for the desktop menu
  const menuAnimation = {
    hidden: { opacity: 0, y: -10 }, // Start off-screen
    visible: { opacity: 1, y: 0 }, // Move to final position
  };

  return (
    <nav className="max-w-[1440px] mx-auto flex justify-between items-center p-8">
      <motion.div
        initial={{ x: '-100%', opacity: 0 }} // Start off-screen to the left
        animate={{ x: 0, opacity: 1 }} // Move to the final position with opacity
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
          duration: 1,
        }} // Spring animation with adjusted parameters
      >
        <a href="#home">
          <img src={Logo} alt="Logo" className="" />
        </a>
      </motion.div>
      <div className="hidden md:flex">
        <Menu isDesktop={isDesktop} />
      </div>
      <div className="md:hidden cursor-pointer ">
        {toggleMenu ? (
          <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line size={27} onClick={() => setToggleMenu(true)} />
        )}
        <motion.div
          className={`absolute top-20 right-20 w-[210px] p-10 bg-lime-300 z-50 flex items-center justify-center rounded-xl ${
            toggleMenu ? 'block' : 'hidden'
          }`}
          initial="hidden"
          animate={toggleMenu ? 'visible' : 'hidden'}
          variants={menuAnimation}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-5">
            <Menu isDesktop={false} />
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
