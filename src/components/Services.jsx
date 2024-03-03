import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import img from '../assets/flowers.png';
import design from '../assets/design.png';
import planting from '../assets/planting.png';
import maitenence from '../assets/maitenence.png';
import Card from './Card'; // Ensure this path is correct

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes into view
  });

  // Define the animation states
  const animationStates = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20,
        staggerChildren: 0.2, // Stagger effect for children
        staggerDirection: 1, // Stagger from the first element
      },
    },
  };

  return (
    <section
      id="services"
      className="bg-light-green min-h-screen flex flex-col items-center justify-center pt-20 pb-40"
    >
      <div className="max-w-[1440px] mx-auto relative">
        <div className="absolute top-0 left-0">
          <img src={img} alt="Background Image" />
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={animationStates}
          className="text-center"
        >
          {/* Services H3 */}
          <motion.h3
            className="text-3xl font-semibold text-dark-green mb-4"
            variants={animationStates}
          >
            Услугы
          </motion.h3>

          {/* Heading H2 */}
          <motion.h2
            className="text-4xl font-semibold text-dark-green mb-8"
            variants={animationStates}
          >
            Мы предлагаем вдохновляющие идеи
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-lg text-dark-green mb-12 max-w-[500px] mx-auto"
            variants={animationStates}
          >
            Мы предлагаем широкий спектр услуг в творческой сфере. Обратите
            внимание, что мы можем предложить вашей компании.
          </motion.p>
        </motion.div>
      </div>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-20 mt-20">
          {/* Online Design Service Card */}
          <Card
            title="Онлайн - дизайн"
            description="Очувствуйте свободу и удобство онлайн-дизайна ландшафта, и начните создавать свой сладкий сад прямо сегодня!"
            image={design} // Adjust the path as necessary
          />

          {/* Planting and Realization Service Card */}
          <Card
            title="Услуги ландшафтных работ"
            description="Услуги по уходу за садом обеспечивают его здоровье и красоту, поддерживая растения в идеальном состоянии."
            image={planting} // Adjust the path as necessary
          />

          {/* Maintenance Service Card */}
          <Card
            title="Услуги по уходу"
            description="Мы предлагаем профессиональные услуги по уходу за вашим садом, обеспечивая его здоровье и красоту."
            image={maitenence} // Adjust the path as necessary
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
