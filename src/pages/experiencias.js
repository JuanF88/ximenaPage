import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Experiencias() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      {/* 🎨 Fondo */}
      <div className="absolute inset-0 -z-30 w-full h-full bg-pink-100 sm:bg-gradient-to-br sm:from-pink-100 sm:via-white sm:to-purple-300 sm:animate-gradient opacity-80" />

      {/* 🫧 Blobs decorativos - SOLO escritorio */}
      <div className="hidden sm:block absolute top-20 left-10 w-80 h-80 bg-pink-300 rounded-full opacity-30 blur-3xl -z-20" />
      <div className="hidden sm:block absolute bottom-30 right-10 w-96 h-96 bg-purple-300 rounded-full opacity-30 blur-3xl -z-20" />
      <div className="hidden sm:block absolute bottom-10 left-10 w-80 h-80 bg-pink-300 rounded-full opacity-30 blur-3xl -z-20" />
      <div className="hidden sm:block absolute bottom-10 right-10 w-96 h-96 bg-purple-200 rounded-full opacity-30 blur-3xl -z-20" />

      {/* 📌 Contenido principal */}
      <Header />
      <Analytics />

      <main className="flex-grow pt-40 px-4 sm:px-8 max-w-4xl mx-auto">
        {/* Experiencia 1 */}
        <section
          className="bg-white rounded-3xl shadow-xl p-6 mb-12 hover:shadow-2xl transition duration-300"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-semibold text-pink-700 mb-4">
            Participación en la cuarta feria de la salud del CUS Alfonso López - Programa de Fisioterapia Unicauca
          </h2>

          <div className="aspect-video w-full mb-4 overflow-hidden rounded-xl shadow-md" data-aos="zoom-in">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/eazQnx4o4BQ"
              title="Video de la experiencia"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed" data-aos="fade-in">
            En esta feria, estudiantes y docentes del programa participaron activamente promoviendo hábitos saludables, realizando valoraciones básicas, y compartiendo el rol de la fisioterapia en la comunidad. Fue una experiencia enriquecedora para todos los asistentes.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
