import { motion } from "framer-motion";
import { styles } from "../styles";
import { bwmap, worldmap, ucf } from "../assets";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const links = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sean-previty-64439b2b9",
    external: true,
  },
  { label: "GitHub", href: "https://github.com/seanprevity", external: true },
  {
    label: "Resume",
    href: "/Resume.pdf",
    download: "SeanPrevity_Resume.pdf",
  },
];

const education = [
  {
    degree: "M.S. Computer Science",
    date: "2026 - Present",
    note: "Focus in cybersecurity",
  },
  {
    degree: "B.S. Computer Science",
    date: "2021 - 2025",
  },
];

const currentProjectUrl = "https://eu-soccer-delta.vercel.app/";

const linkBtn =
  "inline-block px-4 py-2 text-lg font-bold text-battleGray border-2 border-battleGray rounded-md " +
  "hover:bg-battleGray hover:text-white transition-all duration-300 ease-in-out cursor-pointer";

const cardShadow =
  "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px";

const extraLabel =
  "text-dim text-[13px] font-bold font-beckman uppercase tracking-[2px]";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={bwmap}
          alt=""
          aria-hidden="true"
          className="w-full h-full sm:block hidden object-cover opacity-70"
        />
        <img
          src={worldmap}
          alt=""
          aria-hidden="true"
          className="w-full h-full sm:hidden block object-cover"
        />
        <div className="absolute inset-0 sm:bg-hero bg-hero-mobile" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className={`relative z-10 w-full max-w-7xl mx-auto ${styles.paddingX}
        pt-32 pb-20 grid lg:grid-cols-[1.4fr_1fr] gap-14 items-center`}
      >
        <div>
          <motion.h1
            variants={item}
            className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}
          >
            Hi, I'm{" "}
            <span className="text-battleGray sm:text-[90px] text-[50px] font-mova font-extrabold uppercase">
              Sean
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-eerieBlack text-[18px] font-medium max-w-2xl leading-[30px]"
          >
            I specialize in software engineering, with experience developing
            backend systems and data-driven applications. I am currently
            pursuing an M.S. in Computer Science at the University of Central
            Florida, focusing on cybersecurity. I'm passionate about building
            reliable, scalable software and expanding my knowledge of
            cybersecurity, particularly malware analysis and software security.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-4 mt-12"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={linkBtn}
                {...(link.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                {...(link.download && { download: link.download })}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="w-full max-w-md lg:justify-self-end bg-[#eaeaec] text-[#292929] rounded-[4px] p-7"
          style={{ boxShadow: cardShadow }}
        >
          <div className="flex items-center gap-4">
            <img src={ucf} alt="UCF" className="w-14 h-14 object-contain" />
            <p className="text-taupe text-[20px] font-semibold font-overcameBold tracking-[1px] leading-tight">
              University of Central Florida
            </p>
          </div>

          <div className="mt-6 space-y-5">
            {education.map((entry) => (
              <div
                key={entry.degree}
                className="border-l-2 border-battleGray pl-4"
              >
                <h3 className="text-jetLight text-[20px] font-bold font-beckman tracking-[1px]">
                  {entry.degree}
                </h3>
                <p className="text-dim text-[15px] font-bold font-beckman mt-1">
                  {entry.date}
                </p>
                {entry.note && (
                  <p className="text-[#4a4a4a] text-[15px] mt-1">
                    {entry.note}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Currently building */}
          <div className="mt-6 pt-5 border-t border-battleGray/30">
            <p className={extraLabel}>Currently building</p>
            <a
              href={currentProjectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-jetLight text-[17px] font-bold font-beckman hover:text-battleGray transition-colors"
            >
              European Football Stats
            </a>
            <p className="text-[#4a4a4a] text-[15px] mt-1">
              Premier League match and player stats, built with TypeScript,
              Express, and PostgreSQL.
            </p>
          </div>

          {/* Location + jump to the Contact section */}
          <div className="mt-6 pt-5 border-t border-battleGray/30 flex items-center justify-between">
            <div>
              <p className={extraLabel}>Based in</p>
              <p className="text-jetLight text-[15px] font-semibold mt-1">
                Orlando, FL
              </p>
            </div>
            <a
              href="#contact"
              className="text-[15px] font-bold text-battleGray border-b-2 border-battleGray hover:text-jetLight hover:border-jetLight transition-colors"
            >
              Email me
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator → About section */}
      <div className="absolute bottom-8 left-0 w-full z-10 flex justify-center">
        <a href="#about" aria-label="Scroll to about section">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-dim flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-taupe mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
