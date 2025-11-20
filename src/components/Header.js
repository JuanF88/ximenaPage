"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled
        ? "py-2 bg-[rgba(255,255,255,0.62)] shadow-md backdrop-blur-md"
        : "py-4 bg-[rgba(255,255,255,0.18)] backdrop-blur-sm"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between relative px-4">

        {/* Logo */}
        <div className="flex items-center">
          <Link href="https://www.unicauca.edu.co/" target="_blank" passHref>
            <Image
              src="/imagenes/logo.png"
              alt="Logo"
              width={isScrolled ? 60 : 80}
              height={isScrolled ? 60 : 80}
              className="object-contain transition-all duration-300 ease-in-out hover:scale-110"
            />
          </Link>
        </div>

        {/* Brand name y subtítulo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <Link href="/" passHref>
            <span
              className={`text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-pink-600 to-purple-500 text-transparent bg-clip-text max-w-4xl mx-auto leading-tight 
                hover:text-purple-500 transition-colors duration-300 block`}
            >
              FisioTips
            </span>
          </Link>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5 tracking-wide">
            Conócete, autoevalúate y muévete
          </p>
        </div>

        {/* Botón Hamburguesa (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
            {menuOpen ? <X className="w-6 h-6 text-pink-500" /> : <Menu className="w-6 h-6 text-pink-500" />}
          </button>
        </div>

        {/* Menú de navegación */}
        <nav
          className={`${menuOpen ? "flex" : "hidden"
            } flex-col absolute top-full right-4 bg-white shadow-lg rounded-md mt-2 py-2 px-4 space-y-3 md:space-y-0 md:flex md:flex-row md:static md:shadow-none md:bg-transparent md:space-x-6 md:items-center text-gray-700 font-medium transition-all duration-300`}
        >

          {/* Ítem con submenú */}
          <div className="relative group">
            <div className="flex flex-col">
              {/* ✅ Ahora es un Link clicable */}
              <Link
                href="/dolor"
                className="hover:text-pink-500 transition"
              >
                ¿Qué es el dolor?
              </Link>

              <div
                className="absolute left-0 top-full mt-0 w-48 rounded-md bg-white shadow-md py-2 px-4 space-y-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200"
              >
                 <Link
                  href="/cervicalgia"
                  className="block text-gray-700 hover:text-pink-500 transition"
                >
                  Cervicalgia
                </Link>

                <Link
                  href="/dolor/lumbalgia"
                  className="block text-gray-700 hover:text-pink-500 transition"
                >
                  Lumbalgia
                </Link>

              </div>
            </div>
          </div>



          <Link href="/prevencion" className="hover:text-pink-500 transition">Prevención</Link>
          <Link href="/experiencias" className="hover:text-pink-500 transition">Blog de experiencias</Link>
          {/* <Link href="/sobre-nosotros" className="hover:text-pink-500 transition">Nosotros</Link> */}
          <Link href="/contacto" className="hover:text-pink-500 transition">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}
