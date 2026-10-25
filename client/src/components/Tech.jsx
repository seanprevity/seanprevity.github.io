import { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const ExperiencePopover = ({ id, name, experience }) => (
  <motion.div
    id={id}
    role="tooltip"
    initial={{ opacity: 0, y: 8, x: "-50%" }}
    animate={{ opacity: 1, y: 0, x: "-50%" }}
    exit={{ opacity: 0, y: 8, x: "-50%" }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    className="absolute bottom-full left-1/2 mb-4 w-64 z-20 pointer-events-none
               rounded-xl bg-eerieBlack border-2 border-french shadow-xl p-4 text-left"
  >
    <p className="text-white text-[14px] font-semibold mb-3">
      Where I've used {name}
    </p>
    <ul className="space-y-3">
      {experience.map(({ context, detail }) => (
        <li key={context}>
          <p className="text-timberWolf text-[13px] font-medium">{context}</p>
          <p className="text-taupe text-[12px] leading-[18px] mt-0.5">
            {detail}
          </p>
        </li>
      ))}
    </ul>

    {/* Arrow pointing down at the card */}
    <span
      className="absolute left-1/2 -bottom-[9px] -translate-x-1/2 w-4 h-4 rotate-45
                 bg-eerieBlack border-r-2 border-b-2 border-french"
    />
  </motion.div>
);

// Technology card. The card markup and classes are unchanged; it is wrapped
// in a relative container that opens the popover on hover (mouse),
// focus (keyboard Tab), or tap (touch devices focus the tabIndex element).
const TechCard = ({ name, icon, experience = [] }) => {
  const [open, setOpen] = useState(false);
  const popoverId = useId();
  const hasExperience = experience.length > 0;

  return (
    <div
      className="relative outline-none"
      tabIndex={hasExperience ? 0 : -1}
      aria-describedby={open && hasExperience ? popoverId : undefined}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
    >
      <div
        className="w-40 h-32 flex flex-col items-center justify-center rounded-xl 
                      bg-eerieBlack shadow-md hover:shadow-xl transition-all duration-300 
                      hover:scale-105 cursor-pointer border-2 border-french p-4"
      >
        {/* Image with error handling and fallback */}
        <div className="w-14 h-14 flex items-center justify-center mb-3">
          {icon ? (
            <img
              src={icon || "/placeholder.svg"}
              alt={name}
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/placeholder.svg";
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

      <AnimatePresence>
        {open && hasExperience && (
          <ExperiencePopover
            id={popoverId}
            name={name}
            experience={experience}
          />
        )}
      </AnimatePresence>
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

      <motion.p className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        Hover over a technology to see where I've used it. For a comprehensive
        list of technical skills, refer to my CV.
      </motion.p>

      {/* mt-10 leaves room for popovers on the first row */}
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {technologies.map((technology) => (
          <TechCard
            key={technology.name}
            name={technology.name}
            icon={technology.icon}
            experience={technology.experience}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
