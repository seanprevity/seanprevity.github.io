import { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { download, downloadHover, resume } from "../assets";
import { textVariant } from "../utils/motion";

const CARD_BG = "#eaeaec";

const cardStyle = {
  background: CARD_BG,
  color: "#292929",
  padding: "1.5rem 1.75rem",
};

const arrowStyle = { borderRight: "7px solid  #232631" };
const iconRing = {};

const ExperienceCard = ({ experience, index }) => (
  <VerticalTimelineElement
    className="experience-card"
    contentStyle={cardStyle}
    contentArrowStyle={arrowStyle}
    date={
      <div>
        <h3 className="text-dim text-[18px] font-bold font-beckman">
          {experience.date}
        </h3>
      </div>
    }
    iconStyle={{ background: experience.iconBg, ...iconRing }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.05, ease: "easeOut" }}
    >
      <h3 className="text-jetLight text-[24px] font-bold font-beckman tracking-[2px]">
        {experience.title}
      </h3>

      <p
        className="text-taupe text-[22px] font-semibold font-overcameBold tracking-[1px]"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>

      {experience.points?.length > 0 && (
        <ul className="mt-4 ml-5 list-disc space-y-2">
          {experience.points.map((point, i) => (
            <li
              key={i}
              className="text-[#4a4a4a] text-[15px] tracking-[0.3px] leading-relaxed"
            >
              {point}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  </VerticalTimelineElement>
);

const ResumeButton = () => {
  const [hovered, setHovered] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "SeanPrevity_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="live-demo flex justify-between
      sm:text-[18px] text-[14px] text-timberWolf
      font-bold font-beckman items-center py-5 pl-3 pr-3
      whitespace-nowrap gap-1 sm:w-[148px] sm:h-[58px]
      w-[125px] h-[46px] rounded-[10px] bg-jetLight
      sm:mt-[22px] mt-[16px] hover:bg-battleGray
      hover:text-eerieBlack transition-colors duration-[0.2s]
      ease-in-out"
      onClick={handleDownload}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      MY RESUME
      <motion.img
        src={hovered ? downloadHover : download}
        alt="download"
        animate={hovered ? { y: [0, 3, 0] } : { y: 0 }}
        transition={{ duration: 0.6, repeat: hovered ? Infinity : 0 }}
        className="sm:w-[26px] sm:h-[26px] w-[23px] h-[23px] object-contain"
      />
    </motion.button>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
          What I've done so far
        </p>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} index={index} experience={experience} />
          ))}

          <VerticalTimelineElement
            className="experience-card"
            contentStyle={{
              ...cardStyle,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            contentArrowStyle={arrowStyle}
            iconStyle={{ background: "#333333", ...iconRing }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={resume}
                  alt="resume"
                  className="w-[45%] h-[45%] object-contain"
                />
              </div>
            }
          >
            <ResumeButton />
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
