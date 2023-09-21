/* Motion import */
import { motion } from "framer-motion";

/* Translations */
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="px-8">
      <motion.p
        initial={{ opacity: 0, y: 32 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.55 },
        }}
        viewport={{ once: true }}
        className="border-clr-five dark:border-clr-one mx-auto max-w-7xl border-t border-opacity-50 py-8 text-center"
      >
        <span className="opacity-80">{t("footer.text_one")} </span>
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="custom-underline"
        >
          Next.js
        </a>{" "}
        <span className="opacity-80">{t("footer.text_two")} </span>
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          className="custom-underline"
        >
          Tailwind
        </a>{" "}
        <span className="opacity-80">&#8226; </span>
        <a
          href="https://github.com/CoGuisMod/my-portfolio"
          target="_blank"
          className="custom-underline"
        >
          {t("footer.repository_text")}
        </a>
      </motion.p>
    </footer>
  );
};

export default Footer;
