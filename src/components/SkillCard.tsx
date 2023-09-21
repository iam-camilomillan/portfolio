/* Framer motion import */
import { motion } from "framer-motion";

const SkillCard = ({ variant, skill }: any) => {
  return (
    <motion.div
      variants={variant}
      className="flex items-center gap-x-1 border-b-2 border-clr-five dark:border-clr-one"
    >
      {skill.icon}
      <h3 className="text-lg font-medium">{skill.name}</h3>
    </motion.div>
  );
};

export default SkillCard;
