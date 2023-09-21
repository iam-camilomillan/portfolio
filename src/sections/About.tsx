/* Component imports */
import SkillCard from "@/components/SkillCard";

/* Motion import */
import { motion } from "framer-motion";

/* Icon imports */
import {
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiDjango,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiSpringboot,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

/* Translations */
import { useTranslation } from "next-i18next";

const skills: any = [
  { icon: <FaSass className="text-xl text-pink-300" />, name: "SASS" },
  {
    icon: <SiTailwindcss className="text-xl text-cyan-300" />,
    name: "Tailwind",
  },
  { icon: <FaJs className="text-xl text-yellow-300" />, name: "JS" },
  { icon: <SiTypescript className="text-xl text-blue-300" />, name: "TS" },
  { icon: <FaReact className="text-xl text-cyan-300" />, name: "React" },
  { icon: <SiNextdotjs className="text-xl text-gray-300" />, name: "Next" },
  { icon: <FaNodeJs className="text-xl text-green-300" />, name: "Node" },
  {
    icon: <SiExpress className="text-xl text-neutral-900" />,
    name: "Express",
  },
  { icon: <FaJava className="text-xl text-neutral-300" />, name: "Java" },
  {
    icon: <SiSpringboot className="text-xl text-green-300" />,
    name: "SpringBoot",
  },
  { icon: <FaPython className="text-xl text-blue-300" />, name: "Python" },
  { icon: <SiDjango className="text-xl text-emerald-300" />, name: "Django" },
  { icon: <SiMysql className="text-xl text-blue-300" />, name: "MySQL" },
  {
    icon: <SiPostgresql className="text-xl text-blue-300" />,
    name: "PostgreSQL",
  },
  { icon: <SiMongodb className="text-xl text-emerald-300" />, name: "MongoDB" },
  {
    icon: <SiSupabase className="text-xl text-purple-300" />,
    name: "Supabase",
  },
];

/* Framer motion variants */
const variantGridContanier = {
  hidden: { opacity: 0, x: 64 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.05,
      duration: 0.5,
      delay: 0.2,
    },
  },
};
const variantGridItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="px-8 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-12">
        {/* Left side */}
        <div className="col-span-12 flex flex-col justify-center sm:col-span-5">
          {/* About title */}
          <motion.h2
            initial={{ opacity: 0, x: -64 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0 },
            }}
            viewport={{ once: true }}
            className="text-center font-playfair_display text-5xl"
          >
            {t("about.title")}
          </motion.h2>

          <div className="h-16" />

          {/* About image */}
          <motion.div
            initial={{ opacity: 0, x: -64 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.05 },
            }}
            viewport={{ once: true }}
            className="h-64 w-full bg-clr-three"
          ></motion.div>
        </div>

        <div className="col-span-1 h-12" />

        {/* Right side */}
        <div className="col-span-12 sm:col-span-6">
          {/* About first paragraph */}
          <motion.p
            initial={{ opacity: 0, x: 64 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.1 },
            }}
            viewport={{ once: true }}
          >
            {t("about.paragraph_one")}
          </motion.p>

          <div className="h-4" />

          {/* About second paragraph */}
          <motion.p
            initial={{ opacity: 0, x: 64 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.15 },
            }}
            viewport={{ once: true }}
          >
            {t("about.paragraph_two")}
          </motion.p>

          <div className="h-12" />

          {/* Skills grid */}
          <motion.div
            id="skills"
            variants={variantGridContanier}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-x-4 gap-y-2 bg-clr-three p-4 xs:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {skills?.map((skill: any, index: number) => (
              <SkillCard variant={variantGridItem} key={index} skill={skill} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
