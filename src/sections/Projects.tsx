import { useEffect, useState } from "react";

/* Component imports */
import ProjectCard from "@/components/ProjectCard";

/* Motion import */
import { motion } from "framer-motion";

/* Translations */
import { useTranslation } from "next-i18next";

/* Type imports */
import { ProjectType } from "types";

const projectsEn = [
  {
    image: "/images/project_two.PNG",
    title: "The Cinephile House",
    tags: ["Next.js", "Firebase", "Tailwind", "tRPC", "Zod", "TMDB API"],
    description:
      "Here you can search and discover movies and shows. Also rate and add them to lists. Content fetched from the TMDB API.",
    link: "https://thecinephilehouse.vercel.app/",
    repository: "https://github.com/CoGuisMod/the-cinephile-house",
  },
  {
    image: "/images/project_six.PNG",
    title: "Rick and Morty Wiki",
    tags: ["Next.js", "Tailwind", "tRPC", "Zod"],
    description:
      "Look for characters, locations and episodes from the Rick and Morty series. Content from the Rick and Morty API.",
    link: "https://rick-and-morty-wiki-camilomillan.vercel.app/",
    repository: "https://github.com/CoGuisMod/rick-and-morty-wiki",
  },
];

const projectsEs = [
  {
    image: "/images/project_two.PNG",
    title: "The Cinephile House",
    tags: ["Next.js", "Firebase", "Tailwind", "tRPC", "Zod", "TMDB API"],
    description:
      "Aqui puedes buscar y descubrir peliculas y series. Asi como darles calificaciones y añadirlos a listas. Contenido obtenido de TMDB API.",
    link: "https://thecinephilehouse.vercel.app/",
    repository: "https://github.com/CoGuisMod/the-cinephile-house",
  },
  {
    image: "/images/project_six.PNG",
    title: "Rick and Morty Wiki",
    tags: ["Next.js", "Tailwind", "tRPC", "Zod"],
    description:
      "Encuentra personajes, localizaciones y episodios de la serie animada Rick y Morty. Contenido obtenido de Rick and Morty API.",
    link: "https://rick-and-morty-wiki-camilomillan.vercel.app/",
    repository: "https://github.com/CoGuisMod/rick-and-morty-wiki",
  },
];

/* Framer motion variants */
const variantGridContanier = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.05,
      duration: 0.5,
    },
  },
};
const variantGridItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

const Projects = () => {
  const { t, i18n } = useTranslation();

  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    if (i18n.language == "en") {
      setProjects(projectsEn);
    }
    if (i18n.language == "es") {
      setProjects(projectsEs);
    }
  }, [i18n]);

  return (
    <section id="projects" className="bg-clr-five px-8 py-20 dark:bg-clr-two">
      <motion.div
        variants={variantGridContanier}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto max-w-7xl"
      >
        <motion.h3
          initial={{ opacity: 0, x: 64 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: 0 },
          }}
          viewport={{ once: true }}
          className="text-end font-playfair_display text-5xl text-clr-one dark:text-clr-five"
        >
          {t("projects.title")}
        </motion.h3>

        <div className="h-12" />

        {/* Projects grid */}
        <motion.div
          variants={variantGridItem}
          viewport={{ once: true }}
          className="grid gap-4 xs:grid-cols-2 lg:grid-cols-3"
        >
          {projects?.map((project, index) => (
            <ProjectCard key={index} data={project} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
