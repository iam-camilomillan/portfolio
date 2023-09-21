import { useState } from "react";
import Link from "next/link";

/* Translations */
import { useTranslation } from "next-i18next";

/* Motion import */
import { motion } from "framer-motion";

/* Motion variants */
const variantMenuContainer = {
  open: {
    transition: { delayChildren: 0.25, staggerChildren: 0.05 },
  },
};
const variantMenuItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 48,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

/* Icons imports */
import {
  FaBars,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -64 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.35 } }}
      className="fixed z-20 w-full bg-clr-two px-8 dark:bg-clr-five"
    >
      {/* Mobile navbar */}
      <div className="mx-auto flex items-center justify-end border-b border-clr-five/25 py-4 dark:border-clr-one/25 xs:hidden">
        {/* Toogle navbar button */}
        <div className="z-30 flex items-center justify-center">
          {isOpen ? (
            <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
              <FaTimes />
            </button>
          ) : (
            <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
              <FaBars />
            </button>
          )}
        </div>

        <motion.div
          variants={variantMenuContainer}
          animate={isOpen ? "open" : "closed"}
          className={`absolute -right-2/3 top-0 flex h-screen w-2/3 flex-col items-center justify-around bg-clr-three py-16 transition-transform duration-200 ease-in-out ${
            isOpen ? "-translate-x-full" : ""
          }`}
        >
          <motion.nav className="flex h-full flex-col items-center justify-around text-2xl font-medium">
            {/* About */}
            <motion.a
              variants={variantMenuItem}
              href="#about"
              onClick={() => setIsOpen(false)}
            >
              {t("navbar.about")}
            </motion.a>

            {/* Projects */}
            <motion.a
              variants={variantMenuItem}
              href="#projects"
              onClick={() => setIsOpen(false)}
            >
              {t("navbar.projects")}
            </motion.a>

            {/* Contact */}
            <motion.a
              variants={variantMenuItem}
              href="#contact"
              onClick={() => setIsOpen(false)}
            >
              {t("navbar.contact")}
            </motion.a>
          </motion.nav>

          {/* Résumé button */}
          <motion.a
            variants={variantMenuItem}
            href={t("navbar.resume_link")}
            download={true}
            onClick={() => {
              setIsOpen(false);
            }}
            className="bg-clr-one px-2 py-1 text-2xl font-medium text-clr-five dark:bg-clr-five dark:text-clr-one"
          >
            {t("navbar.resume")}
          </motion.a>

          <div className="h-16" />

          {/* Socials */}
          <motion.div
            variants={variantMenuItem}
            className="flex items-center gap-x-4 text-4xl"
          >
            {/* Instagram */}
            <a
              href="https://www.instagram.com/just.camilomillan/"
              target="_blank"
            >
              <FaInstagram />
            </a>

            {/* Linkedin */}
            <a
              href="https://www.linkedin.com/in/iam-camilomillan/"
              target="_blank"
            >
              <FaLinkedin />
            </a>

            {/* Github */}
            <a href="https://github.com/iam-camilomillan" target="_blank">
              <FaGithub />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Desktop navbar */}
      <div className="mx-auto hidden max-w-7xl items-center justify-between border-b border-clr-five/25 py-4 dark:border-clr-one/25 xs:flex">
        {/* Navigation links */}
        <nav className="flex gap-x-4">
          {/* About */}
          <Link href="#about" className="custom-underline">
            {t("navbar.about")}
          </Link>

          {/* Projects */}
          <Link href="#projects" className="custom-underline">
            {t("navbar.projects")}
          </Link>

          {/* Contact */}
          <Link href="#contact" className="custom-underline">
            {t("navbar.contact")}
          </Link>
        </nav>

        {/* Social and resume */}
        <div className="flex items-center gap-x-4">
          {/* Socials */}
          <div className="flex gap-x-2">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/just.camilomillan/"
              target="_blank"
              className="text-2xl transition-transform duration-200 ease-in-out hover:scale-110 active:scale-100 active:duration-0"
            >
              <FaInstagram />
            </a>

            {/* Linkedin */}
            <a
              href="https://www.linkedin.com/in/iam-camilomillan/"
              target="_blank"
              className="text-2xl transition-transform duration-200 ease-in-out hover:scale-110 active:scale-100 active:duration-0"
            >
              <FaLinkedin />
            </a>

            {/* Github */}
            <a
              href="https://github.com/iam-camilomillan"
              target="_blank"
              className="text-2xl transition-transform duration-200 ease-in-out hover:scale-110 active:scale-100 active:duration-0"
            >
              <FaGithub />
            </a>
          </div>

          {/* Résumé */}
          <a
            href={t("navbar.resume_link")}
            download={true}
            className="bg-clr-five px-2 py-1 font-medium text-clr-one transition-transform duration-200 ease-in-out hover:scale-110 active:scale-100 active:duration-0 dark:bg-clr-one dark:text-clr-five"
          >
            {t("navbar.resume")}
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
