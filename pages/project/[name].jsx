import React, { useContext } from "react";
import { projects } from "../../projects.json";
import Image from "next/image";
import { Context } from "../../context/Context";
import { useRouter } from "next/router";

const ProjectDetails = () => {
  const { query } = useRouter();
  const { lang } = useContext(Context);

  const project = projects.find(
    (p) => p.name === query?.name?.replace("-", " ")
  );

  console.log(query);

  return (
    <div className="max-w-3xl mx-auto  m-4">
      <div className="bg-gray-500/50 p-4">
        <h1 className="text-xl text-white">{project.name}</h1>
        <p className="text-white">{project.description[lang]}</p>
        <div className="mt-4">
          <p className="text-white mb-2">
            {lang === "es" ? "Tecnologías" : "Stack"}:
          </p>
          <div className="flex gap-x-4 mt-4 ">
            {project.stack?.map((item) => {
              return (
                <Image
                  key={item}
                  src={`/${item.toLowerCase()}.png`}
                  width={65}
                  height={65}
                  alt={item}
                  title={item}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
