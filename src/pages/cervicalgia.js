import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";
import AOS from "aos";
import "aos/dist/aos.css";

// 🔹 Acordeón con animación suave
function AccordionItem({ title, color = "pink", children, aos = "fade-up" }) {
  const [open, setOpen] = useState(false);

  const colorMap = {
    pink: {
      border: "border-pink-100 hover:border-pink-300",
      bg: "bg-pink-50/70",
      badge: "bg-pink-100 text-pink-700",
      title: "text-pink-700",
    },
    purple: {
      border: "border-purple-100 hover:border-purple-300",
      bg: "bg-purple-50/70",
      badge: "bg-purple-100 text-purple-700",
      title: "text-purple-700",
    },
    indigo: {
      border: "border-indigo-100 hover:border-indigo-300",
      bg: "bg-indigo-50/70",
      badge: "bg-indigo-100 text-indigo-700",
      title: "text-indigo-700",
    },
  };

  const c = colorMap[color] ?? colorMap.pink;

  return (
    <div
      className={`group rounded-2xl p-4 transition-all duration-300 ${c.border} ${c.bg} hover:shadow-md`}
      data-aos={aos}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between cursor-pointer select-none"
      >
        <h3 className={`text-base sm:text-lg font-semibold ${c.title}`}>
          {title}
        </h3>
        <span
          className={`ml-4 inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-transform duration-300 ${c.badge} ${
            open ? "rotate-90" : ""
          }`}
        >
          &gt;
        </span>
      </button>

      {/* Contenido colapsable animado */}
      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr] mt-0"
        }`}
      >
        <div className="min-h-0">{children}</div>
      </div>
    </div>
  );
}

// 🎥 Lista de videos (pon aquí tus IDs de Youtube)
const videos = [
  {
    id: "TeT_6xi39os",
    title: "Página Principal",
  },
  {
    id: "nJKEY-tbb6Q",
    title: "Generalidades Cervicalgia",
  },
  {
    id: "71u6PwAs5dQ",
    title: "Factor de riesgo: Ergonomía",
  },
  {
    id: "_03VtXaj0Lw",
    title: "Factor de riesgo: Estrés",
  },
  {
    id: "sGk-PkPLoA8",
    title: "Prevención: Estiramientos",
  },
  {
    id: "YZpwPLrxAFE",
    title: "TPrevención: Respiración",
  },
];

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


        {/* 📘 Sección CERVICALGIA */}
        <section
          className="bg-white/90 rounded-3xl shadow-xl p-6 mb-16 border border-pink-100 backdrop-blur-sm hover:shadow-2xl transition duration-300"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-2 mb-4">
            <span className="inline-block text-xs font-semibold tracking-wide text-pink-600 uppercase">
              Revista Cubana de Medicina Física y Rehabilitación
            </span>
            <h2 className="text-2xl font-bold text-pink-700">
              CERVICALGIA
            </h2>
          </div>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
            La cervicalgia se define como un síndrome caracterizado por la presencia de
            dolor en la región cervical, que es la parte más alta de la columna, justo
            debajo de la cabeza. Los problemas de la columna cervical pueden expresarse
            como síntomas y no necesariamente como enfermedades estructurales.
          </p>

          <div className="space-y-4">
            {/* Factores de riesgo */}
            <AccordionItem title="Factores de riesgo" color="pink">
              <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-1">
                <li>Edad, profesión y actividades físicas habituales.</li>
                <li>
                  Artritis y antecedentes personales o familiares de patología cervical y general.
                </li>
                <li>
                  Circunstancias asociadas al evento, forma de aparición del dolor,
                  antecedentes de trauma o esfuerzo.
                </li>
                <li>Posturas mantenidas de la cabeza y el cuello.</li>
              </ul>
            </AccordionItem>

            {/* Causas */}
            <AccordionItem title="Causas" color="purple">
              <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-1">
                <li>Contractura muscular en casos de cervicalgia mecánica.</li>
                <li>Traumatismo previo, como un latigazo cervical.</li>
                <li>Desgaste del disco intervertebral por la edad.</li>
                <li>Sobrecarga física y movimientos repetitivos.</li>
                <li>Infecciones, como la meningitis.</li>
              </ul>
            </AccordionItem>

            {/* Síntomas */}
            <AccordionItem title="Síntomas" color="indigo">
              <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-1">
                <li>
                  <strong>Dolor:</strong> habitualmente en la nuca, occipucio o parte superior
                  de los hombros. Puede irradiarse a la región dorsal alta, interescapular o
                  al tórax anterior; cuando hay compromiso radicular, puede irradiar al
                  miembro superior.
                </li>
                <li>Rigidez y dificultad para realizar los movimientos del cuello.</li>
                <li>
                  <strong>Mareos:</strong> frecuentes en el síndrome de insuficiencia
                  vertebrobasilar.
                </li>
                <li>
                  <strong>Parestesias de miembros superiores:</strong> por lesiones de C5–T1.
                  Las lesiones de C1–C3 pueden producir parestesias en la cara y la lengua; las de C4, en la parte alta del hombro.
                </li>
                <li>Debilidad muscular de las manos.</li>
                <li>Visión borrosa y disfagia como síntomas asociados en algunos casos.</li>
              </ul>
            </AccordionItem>
          </div>
        </section>

                {/* 🎥 Galería de videos */}
        <section
          className="mb-16"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-2 mb-6 text-center">
            <span className="inline-block text-xs font-semibold tracking-wide text-pink-600 uppercase">
              Experiencias en práctica
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-pink-700">
              Galería de videos
            </h2>

          </div>

          <div className="grid gap-6 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, index) => (
              <article
                key={video.id}
                className="bg-white/90 rounded-2xl shadow-lg overflow-hidden border border-pink-50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                data-aos="zoom-in-up"
                data-aos-delay={index * 80}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base font-semibold text-pink-700">
                    {video.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
