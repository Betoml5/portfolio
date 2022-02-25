import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="p-4" id="projects">
        <h2 className="text-2xl text-white">Proyectos</h2>
        <div className="grid grid-cols-1 gap-2 mt-6">
          {[1, 2, 3, 4, 5].map((item) => (
            // eslint-disable-next-line react/jsx-key
            <div className="flex flex-col  bg-primary text-white p-4 rounded-md">
              <p className=" mb-4">Project name</p>
              <Image
                src="/me.jpeg"
                width={500}
                height={500}
                alt="web"
                className="h-full w-full"
              />
              <p className=" mt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                aliquam ipsam nostrum quia? Nisi voluptate labore nam cum
                suscipit blanditiis fugit, doloremque aliquid a ea reiciendis
                quidem repudiandae sequi. Voluptate.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-white p-4" id="about">
        <h2 className="text-2xl mb-2">Acerca de mi</h2>
        <p className="tracking-widest">
          Hola, soy Beto Martinez, Frontend developer. Tengo 19 años y vivo en
          México. Actualmente estoy cursando la carrera de Ingerieria en
          Sistemas Computaciones en el TECNM Campus Region carbonifera
        </p>
      </section>
    </main>
  );
}
