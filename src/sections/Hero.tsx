import Image from "next/image";

/* Motion import */
import { motion } from "framer-motion";

/* Translations */
import { useTranslation } from "next-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="h-screen px-8 pt-16">
      <div className="relative mx-auto flex h-full w-full max-w-6xl items-center justify-start sm:justify-center">
        <div className="pl-2">
          {/* First name */}
          <motion.h1
            initial={{ opacity: 0, x: -128 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.25 },
            }}
            className="font-playfair_display text-6xl font-medium text-clr-one xxs:text-clr-five dark:xxs:text-clr-one xs:text-7xl md:text-8xl lg:text-9xl"
          >
            CAMILO
          </motion.h1>

          {/* Last name */}
          <motion.h1
            initial={{ opacity: 0, x: -128 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.3 },
            }}
            className="ml-16 font-playfair_display text-6xl font-medium text-clr-one xxs:ml-24 xxs:text-clr-five dark:xxs:text-clr-one xs:text-7xl md:text-8xl lg:text-9xl"
          >
            MILLAN
          </motion.h1>

          {/* Role */}
          <div className="flex items-center gap-x-2">
            <motion.span
              initial={{ opacity: 0, x: -128 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 0.25 },
              }}
              className="custom-bounce text-clr-three"
            >
              &#10230;
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -128 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 0.3 },
              }}
              className="text-clr-one xxs:text-clr-five dark:xxs:text-clr-one"
            >
              {t("hero.position")}
            </motion.h2>
          </div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 128 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: 0.3 },
          }}
          className="absolute right-0 -z-10 -ml-20 h-[525px] w-full shrink-0 bg-clr-three xxs:w-[300px] sm:relative"
        >
          <Image
            src="/images/hero_image.png"
            alt="Hero image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
