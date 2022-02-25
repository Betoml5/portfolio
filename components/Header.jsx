import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className=" bg-primary p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <picture>
            <Image
              src="/me.jpeg"
              width={50}
              height={50}
              alt="me"
              className="rounded-full"
            />
          </picture>
          <p className="text-white ml-4">Beto Martinez</p>
        </div>
        <div className="flex text-white">
          <p className="mr-2">Proyectos</p>
          <a href="#about">Sobre mi</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
