import Image from "next/image";
import { projects } from "../projects.json";
// import reactIcon from "/react.png";

export default function Home() {
  return (
    <main>
      <section className=" mx-auto max-w-5xl h-screen">
        <section className="text-white p-4 mt-14 md:mt-0 ">
          <h2 className="text-3xl font-semibold">
            Beto Martinez, Frontend Developer
          </h2>
        </section>

        <section className="text-white p-4 " id="about">
          <h2 className="text-2xl mb-2">Acerca de mi</h2>
          <p className="tracking-widest">
            Hola, soy Beto Martinez, Frontend developer. Tengo 20 años y vivo en
            México. Actualmente estoy cursando la carrera de Ingerieria en
            Sistemas Computaciones en el TECNM Campus Region carbonifera.
          </p>
        </section>
        <section className="p-4" id="projects">
          <h2 className="text-2xl text-white ">Proyectos</h2>
          <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 grid-flow-row-dense">
            {projects.map((item) => (
              <div
                className="flex justify-between items-center   bg-primary text-white p-4 rounded-md cursor-pointer"
                key={item.id}
              >
                <p className=" text-2xl ">{item.name}</p>
                {console.log(item.stack)}
                <div>
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
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
