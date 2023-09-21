import Image from "next/image";

/* Icons imports */
import { FaGithub, FaGlobe } from "react-icons/fa";

/* Types imports */
import type { ProjectType } from "types";

const ProjectCard = ({ data }: { data: ProjectType }) => {
  return (
    <div className="relative h-64 w-full overflow-hidden">
      <Image
        src={data.image}
        alt={`${data.title} image.`}
        fill
        objectFit="cover"
      />

      <div className="group absolute left-0 top-0 flex h-full w-full flex-col transition-colors duration-200 ease-in-out hover:bg-clr-one/75 dark:hover:bg-clr-five/75">
        <div className="h-full p-2">
          <div className="-translate-y-24 space-x-2 space-y-2 whitespace-break-spaces text-center transition-transform duration-200 ease-in-out group-hover:translate-y-0">
            {data.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-clr-one px-2 py-1 text-sm dark:bg-clr-five"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="h-2" />

          <p className="text-sm font-medium opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100">
            {data.description}
          </p>
        </div>

        <div className="flex w-full translate-y-full justify-between bg-clr-two px-2 py-1 transition-transform duration-200 ease-in-out group-hover:translate-y-0 dark:bg-clr-five">
          <h3 className="text-start text-lg font-medium">{data.title}</h3>

          <div className="flex items-center gap-2">
            <a
              href={data.link}
              target="_blank"
              title="Website"
              className="text-lg opacity-80 transition-opacity duration-200 ease-in-out hover:opacity-100"
            >
              <FaGlobe />
            </a>
            <a
              href={data.repository}
              target="_blank"
              title="Repository"
              className="text-lg opacity-80 transition-opacity duration-200 ease-in-out hover:opacity-100"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
