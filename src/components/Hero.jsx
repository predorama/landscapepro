import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import img from '../assets/Hero.png';
import flower from '../assets/flower.png';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Change this to false if you want the animation to trigger again whenever it comes into view
  });

  // Define the animation states for the text and button
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

  // Define the animation states for the image
  const imageAnimationStates = {
    hidden: { opacity: 0, x: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20,
      },
    },
  };

  return (
    <section
      id="home"
      className="grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:justify-items-end gap-10 relative max-w-[1440px] mx-auto p-2 md:p-10"
    >
      <div
        className="flex flex-col justify-center align-middle gap-7"
        ref={ref}
      >
        <motion.h1
          className="montserrat text-green text-[48px] font-light relative"
          variants={animationStates}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          ОТКРОЙТЕ МИР КРАСОТЫ С НАШИМ
          <br />
          <span className="text-dark-green">ЛАНДШАФТНЫМ ДИЗАЙНОМ</span>
          <div className="absolute top-0 right-0">
            <img src={flower} alt="Flower" />
          </div>
        </motion.h1>
        <motion.p
          className="popins text-dark-green text-lg"
          variants={animationStates}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          Раскройте потенциал вашего пространства на открытом воздухе вместе с
          Landscape Pro. Ощутите красоту природы, сочетающуюся с инновационным
          дизайном – ваше преображение ландшафта начинается здесь.
        </motion.p>
        <motion.button
          type="button"
          className="bg-dark-green shadow-gray-500 text-white p-3 rounded-md capitalize md:w-1/2"
          variants={animationStates}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <a href="#contact">получить консультацию</a>
        </motion.button>
      </div>
      <div>
        <motion.img
          className="styles.img"
          src={img}
          alt="Green Pine bonsai"
          width={480}
          height={480}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={imageAnimationStates}
        />
      </div>
    </section>
  );
};

export default Hero;
