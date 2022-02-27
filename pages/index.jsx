import Image from "next/image";
import { projects } from "../projects.json";

export default function Home() {
  return (
    <main>
      <section className="w-3/4 mx-auto">
        <section className="text-white p-4 mt-14 md:mt-0 ">
          <h2 className="text-3xl font-semibold">
            Beto Martinez, Frontend Developer
          </h2>
        </section>

        <section className="text-white p-4 " id="about">
          <h2 className="text-2xl mb-2">Acerca de mi</h2>
          <p className="tracking-widest">
            Hola, soy Beto Martinez, Frontend developer. Tengo 19 años y vivo en
            México. Actualmente estoy cursando la carrera de Ingerieria en
            Sistemas Computaciones en el TECNM Campus Region carbonifera
          </p>
        </section>
        <section className="p-4" id="projects">
          <h2 className="text-2xl text-white ">Proyectos</h2>
          <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 grid-flow-row-dense">
            {projects.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <div
                className="flex flex-col  bg-primary text-white p-4 rounded-md cursor-pointer"
                key={item.id}
              >
                <p className=" text-2xl mb-4">{item.name}</p>
                <Image
                  src={item.image}
                  width={400}
                  height={400}
                  alt={item.name}
                  className="h-full w-full object-contain rounded-lg"
                />
                <p className="mt-4">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
