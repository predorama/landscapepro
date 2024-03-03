import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { NAV_LINKS } from '../constants/constants';
import { FaTelegram, FaWhatsapp, FaVk } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 3) {
        setIsVisible(true);
        controls.start('visible');
      } else {
        setIsVisible(false);
        controls.start('hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <motion.footer
      id="footer"
      className="bg-light-green p-8"
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Row with logo and copywriting */}
        <motion.div
          className="md:col-span-2 flex flex-col items-center md:items-start"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logo} alt="Logo" className="w-48 mb-4" />
          <p className="text-dark-green text-lg">
            © 2024 Все права защищены. LandscapePro.
          </p>
        </motion.div>

        {/* Row with menu links */}
        <motion.div
          className="md:col-span-1 flex flex-row gap-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Menu heading */}
          <div className="mb-4">
            <h2 className="text-dark-green font-bold text-lg mb-2">MENU</h2>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-dark-green hover:text-green-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social media icons */}
          <div className="flex flex-col items-start mt-2">
            <div className="mb-2">
              <a href="#" className="text-dark-green hover:text-green-300">
                <FaTelegram size={24} />
              </a>
            </div>
            <div className="mb-2">
              <a href="#" className="text-dark-green hover:text-green-300">
                <FaWhatsapp size={24} />
              </a>
            </div>
            <div>
              <a href="#" className="text-dark-green hover:text-green-300">
                <FaVk size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
