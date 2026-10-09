import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

// Simple technology card component with improved styling and image handling
const TechCard = ({ name, icon }) => {
  return (
    <div className="w-40 h-32 flex flex-col items-center justify-center rounded-xl 
                    bg-eerieBlack shadow-md hover:shadow-xl transition-all duration-300 
                    hover:scale-105 cursor-pointer border-2 border-french p-4">
      {/* Image with error handling and fallback */}
      <div className="w-14 h-14 flex items-center justify-center mb-3">
        {icon ? (
          <img 
            src={icon || "/placeholder.svg"} 
            alt={name}
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/placeholder.svg';
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-battleGray rounded-full text-white text-xl font-bold">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <p className="text-timberWolf text-[16px] font-medium text-center">
        {name}
      </p>
    </div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <motion.p
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        For a comprehensive list of technical skills, refer to my CV.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {technologies.map((technology) => (
          <TechCard 
            key={technology.name}
            name={technology.name}
            icon={technology.icon}
          />
        ))}
      </div>
    </>
  );
};

// Make sure to completely remove any Three.js related imports or components
export default SectionWrapper(Tech, '');