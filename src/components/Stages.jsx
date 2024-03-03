import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import guide from '../assets/Guide.svg';
import flower from '../assets/flower.png';
import flowers from '../assets/flowers.png';

const Stages = () => {
  // Define animation variants for the stages
  const stageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Define animation variants for the images
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  // Use the useInView hook to detect when the element is in view
  const [ref, inView] = useInView({
    triggerOnce: true, // Change to false if you want the animation to trigger again whenever it comes into view
  });

  // Use the useAnimation hook to control the animation
  const controls = useAnimation();

  // Start the animation when the element comes into view
  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section id="stages" ref={ref}>
      <h2 className="text-center montserrat text-dark-green text-2xl text-semibold mt-20 mb-10 ">
        Как это работает
      </h2>
      <div className="w-[300px] md:w-[700px] mx-auto flex flex-col relative gap-11">
        {/* Stage 1 */}
        <motion.div
          className="w-[300px] md:text-end mt-1"
          variants={stageVariants}
          initial="hidden"
          animate={controls}
        >
          <h3 className="montserrat text-dark-green text-xl mb-3">
            Консультация и Планирование
          </h3>
          <p className="popins text-dark-green">
            Встреча с командой дизайнеров позволяет клиенту обсудить идеи,
            предпочтения и бюджет, чтобы создать идеальный ландшафт.
          </p>
        </motion.div>
        {/* Stage 2 */}
        <motion.div
          className="w-[300px] md:ml-[400px] mt-2"
          variants={stageVariants}
          initial="hidden"
          animate={controls}
        >
          <h3 className="montserrat text-dark-green text-xl mb-3">
            Разработка Дизайна
          </h3>
          <p>
            Создание дизайн-плана включает детальные чертежи и макеты,
            отражающие желания клиента и принципы дизайна для создания
            гармоничного пространства.
          </p>
        </motion.div>
        {/* Stage 3 */}
        <motion.div
          className="w-[300px] mt-[-18px] md:text-end"
          variants={stageVariants}
          initial="hidden"
          animate={controls}
        >
          <h3 className="montserrat text-dark-green text-xl mb-3">
            Презентация и Уточнение
          </h3>
          <p>
            Представление клиенту начального дизайна с рисунками и
            визуализациями позволяет уточнить детали и достичь одобренного
            дизайна.
          </p>
        </motion.div>
        {/* Stage 4 */}
        <motion.div
          className="w-[300px] mt-2 md:ml-[400px]"
          variants={stageVariants}
          initial="hidden"
          animate={controls}
        >
          <h3 className="montserrat text-dark-green text-xl mb-3">
            Реализация и Строительство
          </h3>
          <p>
            Реализация дизайна включает строительство, посадку растений и
            установку элементов, обеспечивая захватывающее пространство с учетом
            пожеланий клиента.
          </p>
        </motion.div>
        {/* Images */}
        <div>
          <motion.img
            src={guide}
            alt="Guide"
            className="absolute top-2 left-[-40px] md:left-[49%]"
            variants={imageVariants}
            initial="hidden"
            animate={controls}
          />
          <motion.img
            src={flower}
            alt="Flower"
            className="absolute top-[45px] md:top-[15%]"
            variants={imageVariants}
            initial="hidden"
            animate={controls}
          />
          <motion.img
            src={flowers}
            alt="Flower"
            className="absolute top-[350px] md:top-[35%] md:left-[45%]"
            variants={imageVariants}
            initial="hidden"
            animate={controls}
          />
        </div>
      </div>
    </section>
  );
};
export default Stages;
