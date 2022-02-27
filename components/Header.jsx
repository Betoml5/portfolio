import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative bg-primary p-4">
      <div className="flex items-center justify-between ">
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

        <div className="hidden text-white md:flex">
          <a href="#projects" className="mr-2">
            Proyectos
          </a>
          <a href="#about">Sobre mi</a>
        </div>

        <div className="text-white md:hidden">
          <div onClick={() => setOpen(!open)} className="md:hidden">
            <Image
              src="/hamburger.png"
              width={25}
              height={25}
              alt="hamburger"
            />
          </div>
          <div
            className={`absolute left-0  bg-primary p-4 w-full border-t border-secondary transition-all duration-300 ease-linear md:flex md:fixed ${
              open
                ? "-bottom-14 opacity-100"
                : "bottom-[420px] md:opacity-100 opacity-0 "
            }`}
          >
            <a href="#projects" className="mr-2">
              Proyectos
            </a>
            <a href="#about">Sobre mi</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
