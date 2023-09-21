/* Motion import */
import { motion } from "framer-motion";

/* Icon imports */
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFileLines } from "react-icons/fa6";

/* Translations */
import { useTranslation } from "next-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="px-8 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-12 justify-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, x: -64 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: 0 },
          }}
          viewport={{ once: true }}
          className="col-span-12 font-playfair_display text-5xl"
        >
          {t("contact.title")}
        </motion.h2>

        <div className="col-span-12 h-12" />

        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, y: -64 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.05 },
          }}
          viewport={{ once: true }}
          className="col-span-12 flex items-center justify-center sm:col-span-4"
        >
          <motion.a
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            whileTap={{ scale: 1, transition: { duration: 0 } }}
            href="mailto:iam.camilomillan.com"
            className="flex h-32 w-32 items-center rounded-full bg-clr-three text-center text-xl font-medium uppercase"
          >
            {t("contact.git_button")}
          </motion.a>
        </motion.div>

        <div className="col-span-12 h-12 sm:col-span-1" />

        {/* Center side */}
        <div className="col-span-12 flex flex-col items-start sm:col-span-3">
          <motion.h3
            initial={{ opacity: 0, y: -64 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.1 },
            }}
            viewport={{ once: true }}
            className="font-playfair_display text-2xl font-medium"
          >
            {t("contact.socials_title")}
          </motion.h3>

          <div className="h-4" />

          <motion.p
            initial={{ opacity: 0, y: -64 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.15 },
            }}
            viewport={{ once: true }}
          >
            {t("contact.socials_text")}
          </motion.p>

          <div className="h-8" />

          <div className="flex items-center gap-x-4 px-2 py-1">
            {/* Instagram */}
            <motion.a
              initial={{ opacity: 0, y: 16 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.2 },
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 1, transition: { duration: 0 } }}
              viewport={{ once: true }}
              href="https://www.instagram.com/just.camilomillan/"
              target="_blank"
              className="text-2xl"
            >
              <FaInstagram />
            </motion.a>

            {/* Twitter */}
            <motion.a
              initial={{ opacity: 0, y: 16 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.25 },
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 1, transition: { duration: 0 } }}
              viewport={{ once: true }}
              href="#"
              target="_blank"
              className="text-2xl"
            >
              <FaTwitter />
            </motion.a>

            {/* Linkedin */}
            <motion.a
              initial={{ opacity: 0, y: 16 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.3 },
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 1, transition: { duration: 0 } }}
              viewport={{ once: true }}
              href="https://www.linkedin.com/in/iam-camilomillan/"
              target="_blank"
              className="text-2xl"
            >
              <FaLinkedin />
            </motion.a>

            {/* Github */}
            <motion.a
              initial={{ opacity: 0, y: 16 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.35 },
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 1, transition: { duration: 0 } }}
              viewport={{ once: true }}
              href="https://github.com/CoGuisMod"
              target="_blank"
              className="text-2xl"
            >
              <FaGithub />
            </motion.a>
          </div>
        </div>

        <div className="col-span-12 h-12 sm:col-span-1" />

        {/* Right side */}
        <div className="col-span-12 flex flex-col items-start sm:col-span-3">
          <motion.h3
            initial={{ opacity: 0, y: -64 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.4 },
            }}
            viewport={{ once: true }}
            className="font-playfair_display text-2xl font-medium"
          >
            {t("contact.resume_title")}
          </motion.h3>

          <div className="h-4" />

          <motion.p
            initial={{ opacity: 0, y: -64 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.45 },
            }}
            viewport={{ once: true }}
          >
            {t("contact.resume_text")}
          </motion.p>

          <div className="h-8" />

          <motion.a
            initial={{ opacity: 0, y: 16 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.5 },
            }}
            viewport={{ once: true }}
            href={t("navbar.resume_link")}
            download={true}
            className="custom-underline flex items-center gap-x-2 px-2 py-1 text-lg font-medium"
          >
            <FaFileLines className="text-xl" />
            {t("contact.resume_btn_text")}
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
