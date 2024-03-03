import React from 'react';
import { motion } from 'framer-motion';
import flower from '../assets/flower.png';
import img from '../assets/about.jpeg';

const About = () => {
  return (
    <section id="about" className="max-w-[1440px] mx-auto p-8">
      <motion.h2
        className="text-light-green font-bold text-[60px] md:text-[80px] lg:text-[100px] xl:text-[125px] 2xl:text-[150px] 3xl:text-[200px] text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        LandscapePro
      </motion.h2>

      <motion.h3
        className="text-light-gray text-[100px] font-bold"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        обо мне
      </motion.h3>

      <div className="w-full mx-auto grid grid-cols-1 xl:grid-cols-2 justify-items-center items-center gap-10">
        <motion.div
          className="styles.imgContainer"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <img className="w-full h-auto" src={img} alt="Svetlana Vila" />
        </motion.div>
        <motion.div
          className="styles.textContainer"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <h3 className="montserrat text-green text-[42px] relative ">
            Ландшафтный Дизайнер
            <img className="absolute top-0 right-0" src={flower} alt="Flower" />
          </h3>

          <h3 className="montserrat text-dark-green text-[42px] relative mb-8">
            Светлана Вила
          </h3>
          <p className="popins text-dark-green font-normal text-lg xl:w-[580px] mb-4 p-3 shadow-md">
            Баланс между природой и стилем Светлана Вила – известный ландшафтный
            дизайнер, чья страсть заключается в преобразовании открытых
            пространств в удивительные уголки, гармонично сочетающиеся с
            природой.
          </p>
          <p className="popins text-dark-green font-normal text-lg xl:w-[580px] bg-light-green p-3 shadow-md">
            С разнообразными клиентами от частных домовладельцев до коммерческих
            предприятий, Светлана адаптирует свои дизайны под уникальные
            предпочтения и образ жизни каждого клиента. Ее вдохновение черпается
            из внутренней красоты природы, вплетая элементы органической
            элегантности и устойчивых практик в каждый проект.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
