import Image from "next/image";
import React, { useContext, useState } from "react";
import { Context } from "../context/Context";

const Header = () => {
  const [open, setOpen] = useState(false);

  const { lang, setLang } = useContext(Context);

  const handleClick = () => {
    if (lang === "es") {
      setLang("en");
    } else {
      setLang("es");
    }
  };

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
          <div>
            {lang === "es" ? (
              <>
                <a href="#projects" className="mr-2">
                  Proyectos
                </a>
                <a href="#about" className="mr-4">
                  Sobre mi
                </a>
              </>
            ) : (
              <>
                <a href="#projects" className="mr-2">
                  Projects
                </a>
                <a href="#about" className="mr-4">
                  About me
                </a>
              </>
            )}
          </div>
          {lang === "en" ? (
            <Image
              src="/mexicoflag.png"
              width={35}
              height={15}
              alt="english"
              onClick={handleClick}
              className="cursor-pointer"
            />
          ) : (
            <Image
              src="/usaflag.png"
              width={35}
              height={15}
              alt="english"
              onClick={handleClick}
              className="cursor-pointer"
            />
          )}
        </div>

        <div className=" text-white md:hidden">
          <div
            onClick={() => setOpen(!open)}
            className="cursor-pointer md:hidden "
          >
            <Image
              src="/hamburger.png"
              width={25}
              height={25}
              alt="hamburger"
            />
          </div>
          <div
            className={`flex items-center justify-between absolute left-0  bg-primary p-4 w-full border-t border-secondary transition-all duration-300 ease-linear md:flex md:fixed ${
              open
                ? "-bottom-14 opacity-100"
                : "bottom-[420px] md:opacity-100 opacity-0 "
            }`}
          >
            {lang === "es" ? (
              <div>
                <a href="#projects" className="mr-2">
                  Proyectos
                </a>
                <a href="#about" className="mr-2">
                  Sobre mi
                </a>
              </div>
            ) : (
              <div>
                <a href="#projects" className="mr-2">
                  Projects
                </a>
                <a href="#about" className="mr-2">
                  About me
                </a>
              </div>
            )}
            {lang === "en" ? (
              <Image
                src="/mexicoflag.png"
                width={25}
                height={15}
                alt="english"
                onClick={handleClick}
                className="cursor-pointer"
              />
            ) : (
              <Image
                src="/usaflag.png"
                width={25}
                height={15}
                alt="english"
                onClick={handleClick}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
