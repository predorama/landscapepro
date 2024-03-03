import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import flower from '../assets/flower.png';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [message, setMessage] = useState('');
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const contactSection = document.getElementById('contact');

      if (
        contactSection &&
        scrollPosition > contactSection.offsetTop - windowHeight / 3
      ) {
        setTriggerAnimation(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Form submitted successfully');
      } else {
        setMessage('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('An error occurred');
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center h-screen relative mb-20"
    >
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={triggerAnimation ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
        className="montserrat text-3xl font-semibold mb-4 text-dark-green text-center md:text-left relative"
      >
        Воспользуйтесь опытом нашей квалифицированной команды
      </motion.h1>
      <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={triggerAnimation ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: 0.4 }}
        className="popins mb-6 text-dark-green text-lg text-center md:text-left"
      >
        обеспечивающей точность в дизайне и выполнении проекта
      </motion.p>
      <motion.form
        initial={{ x: -100, opacity: 0 }}
        animate={triggerAnimation ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-dark-green focus:bg-lime-50"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-dark-green focus:bg-lime-50"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-semibold mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-dark-green focus:bg-lime-50"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-dark-green text-white py-2 rounded-md hover:bg-green-700 transition duration-300"
        >
          Submit
        </button>
      </motion.form>
      {message && (
        <p className="mt-4 text-center text-sm text-red-600">{message}</p>
      )}
      <p className="mt-10 text-dark-green text-center md:text-left">
        Отправляя данную форму вы соглашаетесь с политикой конфиденциальности
      </p>
      <div className="absolute top-0 right-40">
        <img src={flower} alt="Flower" />
      </div>
    </section>
  );
};

export default Contact;
