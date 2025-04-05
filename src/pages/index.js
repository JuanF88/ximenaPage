import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "@/components/Hero";
import ModeloAtencion from "../components/ModeloAtencion";
import { Analytics } from "@vercel/analytics/react"

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    AOS.init({
      disable: window.innerWidth < 640, // ❌ Desactiva AOS en móviles
    });
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">

      {/* 🎨 Fondo estático para móvil */}
      <div className="block sm:hidden absolute inset-0 -z-30 w-full h-full bg-pink-100" />

      {/* 🎨 Fondo animado degradado para escritorio */}
      <div className="hidden sm:block absolute inset-0 -z-30 w-full h-full animate-gradient bg-gradient-to-br from-pink-100 via-white to-purple-300 opacity-80" />

      {/* 🫧 Blobs decorativos - SOLO escritorio */}
      <div className="hidden sm:block absolute top-20 left-10 w-80 h-80 bg-pink-300 rounded-full opacity-30 blur-3xl -z-20" />
      <div className="hidden sm:block absolute bottom-30 right-10 w-96 h-96 bg-purple-300 rounded-full opacity-30 blur-3xl -z-20" />
      <div className="hidden sm:block absolute bottom-10 left-10 w-80 h-80 bg-pink-300 rounded-full opacity-30 blur-3xl -z-20" />
      <div className="hidden sm:block absolute bottom-10 right-10 w-96 h-96 bg-purple-200 rounded-full opacity-30 blur-3xl -z-20" />

      {/* 📌 Contenido principal */}
      <Header />
      <Analytics/>
      <Hero />
      <Footer />
    </div>
  );
}
