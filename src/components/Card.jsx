import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Card = ({ title, description, image }) => {
  // Define the animation variants for the hover effect
  const cardVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
  };

  return (
    <motion.div
      className="w-[320px] bg-white shadow-lg rounded-lg p-6 transition-transform duration-200 ease-in-out"
      whileHover="hover"
      variants={cardVariants}
    >
      <img
        className=" w-full h-[300px]  object-cover mb-4"
        src={image}
        alt={title}
      />
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
};

// Define propTypes for the Card component
Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
