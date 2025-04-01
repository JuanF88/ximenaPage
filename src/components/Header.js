"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Pacifico } from "next/font/google";
import { Menu, X } from "lucide-react";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<header
  className={`fixed w-full top-0 z-50 transition-all duration-300 ${
    isScrolled
      ? "py-2 bg-[rgba(255, 255, 255, 0.62)] shadow-md backdrop-blur-md"
      : "py-4 bg-[rgba(255, 255, 255, 0.18)] backdrop-blur-sm"
  }`}
>
      <div className="container mx-auto flex items-center justify-between relative px-4">
        
        {/* Logo */}
        <div className="flex items-center">
        <Link href="https://www.unicauca.edu.co/" target="_blank" passHref>

          <Image
            src="/imagenes/logo.png"
            alt="Logo"
            width={isScrolled ? 40 : 50}
            height={isScrolled ? 40 : 50}
            className="object-contain transition-all duration-300"
          />
                    </Link>

        </div>

        {/* Brand name */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" passHref>
            <span
              className={`text-pink-500 cursor-pointer transition-all duration-300 ${
                isScrolled ? "text-2xl" : "text-3xl"
              } ${pacifico.className} hover:scale-90`}
            >
              Fisiotips 
            </span>
          </Link>
        </div>

        {/* Botón Hamburguesa (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
            {menuOpen ? <X className="w-6 h-6 text-pink-500" /> : <Menu className="w-6 h-6 text-pink-500" />}
          </button>
        </div>

        {/* Menú de navegación */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col absolute top-full right-4 bg-white shadow-lg rounded-md mt-2 py-2 px-4 space-y-3 md:space-y-0 md:flex md:flex-row md:static md:shadow-none md:bg-transparent md:space-x-6 md:items-center text-gray-700 font-medium transition-all duration-300`}
        >
          <Link href="/dolor" className="hover:text-pink-500 transition">¿Qué es el dolor?</Link>
          {/* <Link href="/" className="hover:text-pink-500 transition">Blog de experiencias</Link>
          <Link href="/sobre-nosotros" className="hover:text-pink-500 transition">Nosotros</Link> */}
          <Link href="/contacto" className="hover:text-pink-500 transition">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}
