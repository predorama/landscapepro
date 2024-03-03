// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   RiCloseLine,
//   RiArrowLeftSLine,
//   RiArrowRightSLine,
// } from 'react-icons/ri';
// import one from '../assets/one.jpg';
// import second from '../assets/second.jpg';
// import third from '../assets/third.jpg';
// import fourth from '../assets/fourth.jpg';

// const Gallery = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [photoIndex, setPhotoIndex] = useState(0);

//   const openModal = (index) => {
//     setIsOpen(true);
//     setPhotoIndex(index);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 w-full h-screen overflow-hidden">
//       <motion.img
//         src={one}
//         alt="Gallery Image 1"
//         className="object-cover cursor-pointer"
//         initial={{ opacity: 0, scale: 0.5, x: -50 }}
//         animate={{ opacity: 1, scale: 1, x: 0 }}
//         whileHover={{ scale: 1.01, boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)' }}
//         onClick={() => openModal(0)}
//       />
//       <motion.img
//         src={second}
//         alt="Gallery Image 2"
//         className="object-cover cursor-pointer"
//         initial={{ opacity: 0, scale: 0.5, x: -50 }}
//         animate={{ opacity: 1, scale: 1, x: 0 }}
//         whileHover={{ scale: 1.01, boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)' }}
//         onClick={() => openModal(1)}
//       />
//       <motion.img
//         src={third}
//         alt="Gallery Image 3"
//         className="object-cover cursor-pointer"
//         initial={{ opacity: 0, scale: 0.5, x: -50 }}
//         animate={{ opacity: 1, scale: 1, x: 0 }}
//         whileHover={{ scale: 1.01, boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)' }}
//         onClick={() => openModal(2)}
//       />
//       <motion.img
//         src={fourth}
//         alt="Gallery Image 4"
//         className="object-cover cursor-pointer"
//         initial={{ opacity: 0, scale: 0.5, x: -50 }}
//         animate={{ opacity: 1, scale: 1, x: 0 }}
//         whileHover={{ scale: 1.01, boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)' }}
//         onClick={() => openModal(3)}
//       />
//       {isOpen && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
//           <div
//             className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
//             onClick={closeModal}
//           ></div>
//           <div className="relative">
//             <button
//               className="absolute top-1/2 left-0 m-4 text-white"
//               onClick={() => setPhotoIndex((photoIndex + 3) % 4)}
//             >
//               <RiArrowLeftSLine size={50} />
//             </button>
//             <button
//               className="absolute top-1/2 right-0 m-4 text-white"
//               onClick={() => setPhotoIndex((photoIndex + 1) % 4)}
//             >
//               <RiArrowRightSLine size={50} />
//             </button>
//             <button
//               className="absolute top-0 right-0 m-4 text-white"
//               onClick={closeModal}
//             >
//               <RiCloseLine size={30} />
//             </button>
//             <motion.img
//               src={[one, second, third, fourth][photoIndex]}
//               alt={`Gallery Image ${photoIndex + 1}`}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  RiCloseLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from 'react-icons/ri';
import one from '../assets/one.jpg';
import second from '../assets/second.jpg';
import third from '../assets/third.jpg';
import fourth from '../assets/fourth.jpg';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openModal = (index) => {
    setIsOpen(true);
    setPhotoIndex(index);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section id="gallery" className="grid grid-cols-1 md:grid-cols-2 w-full ">
      <motion.img
        src={one}
        alt="Gallery Image 1"
        className="object-cover cursor-pointer "
        initial={{ opacity: 0, scale: 0.5, x: -50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        whileHover={{ scale: 1.01, boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)' }}
        onClick={() => openModal(0)}
      />
      <motion.img
        src={second}
        alt="Gallery Image 2"
        className="object-cover cursor-pointer "
        initial={{ opacity: 0, scale: 0.5, x: -50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        whileHover={{ scale: 1.01, boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)' }}
        onClick={() => openModal(1)}
      />
      <motion.img
        src={third}
        alt="Gallery Image 3"
        className="object-cover cursor-pointer "
        initial={{ opacity: 0, scale: 0.5, x: -50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        whileHover={{ scale: 1.01, boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)' }}
        onClick={() => openModal(2)}
      />
      <motion.img
        src={fourth}
        alt="Gallery Image 4"
        className="object-cover cursor-pointer "
        initial={{ opacity: 0, scale: 0.5, x: -50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        whileHover={{ scale: 1.01, boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)' }}
        onClick={() => openModal(3)}
      />
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div
            className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
            onClick={closeModal}
          ></div>
          <div className="relative">
            <button
              className="absolute top-1/2 left-0 m-4 text-white"
              onClick={() => setPhotoIndex((photoIndex + 3) % 4)}
            >
              <RiArrowLeftSLine size={50} />
            </button>
            <button
              className="absolute top-1/2 right-0 m-4 text-white"
              onClick={() => setPhotoIndex((photoIndex + 1) % 4)}
            >
              <RiArrowRightSLine size={50} />
            </button>
            <button
              className="absolute top-0 right-0 m-4 text-white"
              onClick={closeModal}
            >
              <RiCloseLine size={30} />
            </button>
            <motion.img
              src={[one, second, third, fourth][photoIndex]}
              alt={`Gallery Image ${photoIndex + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
