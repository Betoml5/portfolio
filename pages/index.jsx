import Image from "next/image";
import Link from "next/link";

import Head from "next/head";
import { useContext } from "react";
import { Context } from "../context/Context";
import { projects } from "../projects.json";

export default function Home() {
  const { lang } = useContext(Context);

  return (
    <main>
      <Head>
        <title>Alberto Martinez - Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/me.ico" />
      </Head>
      <section className=" mx-auto max-w-5xl">
        <section className="text-white p-4 mt-14 md:mt-0 ">
          <h2 className="text-3xl font-semibold mt-8 ">
            Alberto Martinez, Frontend Developer
          </h2>
        </section>

        <section className="text-white p-4 " id="about">
          <h2 className="text-2xl mb-2">
            {lang === "es" ? "Sobre mi" : "About me"}
          </h2>
          {lang === "es" ? (
            <p className="tracking-widest">
              Hola, soy Alberto Martínez, Frontend developer. Tengo 22 años y
              vivo en México. Actualmente estoy cursando el 9no semestre de la
              carrera de Ingeniería en Sistemas Computaciones en el TECNM Campus
              Región carbonífera. Con lo que trabajo actualmente es con HTML,
              CSS, JavaScript, React, NextJS, NodeJS, Mongoose, Express y
              TailwindCSS para desarrollo móvil suelo utilizar React Native ya
              que me permite optimizar mi tiempo de desarrollo y por la
              versatilidad que te otorga. También he trabajado con proyectos en
              .NET usando ASP.NET Web Api, como también ASP.NET MVC y para
              desarrollo móvil .NET MAUI.
            </p>
          ) : (
            <p className="tracking-widest">
              Hi,{" I'm "}Alberto Martínez, Frontend developer. I am 22 years
              old and currently living at Mexico. I am currently studying the
              9th semester of the Computer Systems Engineering career at the
              TECNM Campus Region carbonifera. {" I'm "} now working with HTML,
              CSS, JavaScript, React, NextJS, NodeJS, Mongoose, Express and
              TailwindCSS for mobile development, I use React Native because it
              gives me the flexibility to optimize my development time and the
              versatility that gives me. . {"I've"} have also worked with
              projects in .NET using ASP.NET Web Api, ASP.NET MVC and for mobile
              development .NET MAUI.
            </p>
          )}
        </section>
        <section className="p-4" id="projects">
          {lang === "es" ? (
            <h2 className="text-2xl text-white ">Proyectos</h2>
          ) : (
            <h2 className="text-2xl text-white ">Projects</h2>
          )}
          <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 grid-flow-row-dense">
            {projects.map((item) => (
              <div
                className="flex justify-between items-center bg-primary text-white p-4 rounded-md cursor-pointer hover:opacity-90"
                key={item.id}
              >
                <Link
                  key={item}
                  href={`/project/${item.name.replace(" ", "-")}`}
                  passHref
                >
                  {item.name}
                </Link>
                <div className="flex gap-x-2">
                  {item.stack?.map((item) => {
                    return (
                      <Image
                        key={item}
                        src={`/${item.toLowerCase()}.png`}
                        width={35}
                        height={35}
                        alt={item}
                        title={item}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="flex flex-col items-center justify-center  p-4">
          <div className="flex gap-x-2">
            <a
              href="https://github.com/Betoml5"
              className="cursor-pointer "
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/github.png"
                width={35}
                height={35}
                alt="GithubIcon"
                className="cursor-pointer "
              />
            </a>
          </div>
          <a
            href="/assets/CV-ALBERTO-MARTINEZ-LUNA.pdf"
            className="text-white underline my-4"
          >
            Descargar CV
          </a>
        </section>
      </section>
    </main>
  );
}
