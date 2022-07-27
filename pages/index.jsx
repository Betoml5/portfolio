import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "../context/Context";
import { projects } from "../projects.json";

export default function Home() {
  const { lang, setLang } = useContext(Context);

  return (
    <main className="   ">
      <section className=" mx-auto max-w-5xl">
        <section className="text-white p-4 mt-14 md:mt-0 ">
          <h2 className="text-3xl font-semibold mt-8 ">
            Beto Martinez, Frontend Developer
          </h2>
        </section>

        <section className="text-white p-4 " id="about">
          <h2 className="text-2xl mb-2">Acerca de mi</h2>
          {lang === "es" ? (
            <p className="tracking-widest">
              Hola, soy Beto Martinez, Frontend developer. Tengo 20 años y vivo
              en México. Actualmente estoy cursando el 5to semestre de la
              carrera de Ingenieria en Sistemas Computaciones en el TECNM Campus
              Región carbonifera.
            </p>
          ) : (
            <p className="tracking-widest">
              Hi,{" I'm "}Beto Martinez, Frontend developer. I am 20 years old
              and currently living at Mexico. I am currently studying the 5th
              semester of the Computer Systems Engineering career at the TECNM
              Campus Region carbonifera.
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
                <a
                  href={item.url}
                  target="_blank"
                  className=" text-2xl "
                  rel="noreferrer"
                >
                  {item.name}
                </a>
                <div className="flex gap-x-2">
                  {item.stack?.map((item) => {
                    if (item === "React") {
                      return (
                        <Image
                          src="/react.png"
                          height={35}
                          width={35}
                          alt="React"
                        />
                      );
                    }
                    if (item === "NodeJS") {
                      return (
                        <Image
                          src="/node.png"
                          height={35}
                          width={35}
                          alt="React"
                        />
                      );
                    }
                    if (item === "Tailwind") {
                      return (
                        <Image
                          src="/tailwind.png"
                          height={35}
                          width={35}
                          alt="React"
                        />
                      );
                    }
                    if (item === "MongoDB") {
                      return (
                        <Image
                          src="/mongodb.png"
                          height={35}
                          width={35}
                          alt="React"
                        />
                      );
                    }
                    if (item === "Express") {
                      return (
                        <Image
                          src="/express.png"
                          height={35}
                          width={35}
                          alt="React"
                        />
                      );
                    }

                    if (item === "HTML") {
                      return (
                        <Image
                          src="/html.png"
                          height={35}
                          width={35}
                          alt="React"
                        />
                      );
                    }
                    if (item === "CSS") {
                      return (
                        <Image
                          src="/css.png"
                          height={35}
                          width={35}
                          alt="React"
                        />
                      );
                    }
                    if (item === "JS") {
                      return (
                        <Image
                          src="/js.png"
                          height={35}
                          width={35}
                          alt="React"
                        />
                      );
                    }
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="flex justify-center gap-x-2 p-4">
          <Link
            href="https://github.com/Betoml5"
            className="cursor-pointer "
            target="_blank"
            passHref
          >
            <Image
              src="/github.png"
              width={35}
              height={35}
              alt="GithubIcon"
              className="cursor-pointer "
            />
          </Link>
          <Link
            href="https://twitter.com/betoml2"
            className="cursor-pointer"
            target="_blank"
            passHref
          >
            <Image
              src="/twitter.png"
              width={35}
              height={35}
              alt="TwitterIcon"
              className="cursor-pointer "
            />
          </Link>
        </section>
      </section>
    </main>
  );
}
