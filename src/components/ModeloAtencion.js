"use client";
import React, { useRef, useEffect, useState } from "react";

const fases = [
  "Examinación",
  "Evaluación",
  "Diagnóstico Fisioterapéutico",
  "Plan de Intervención",
  "Resultados",
  "Reevaluación",
];

const descripciones = [
  "Obtener la historia clínica realizando una revisión de cada uno de los sistemas, seleccionando y administrando test y medidas para recoger datos sobre el paciente.",
  "Juicio clínico basado en los datos recogidos durante la examinación.",
  "Integrar y evaluar datos de la examinación para describir la condición del paciente.",
  "Propósito e interacción del fisioterapeuta con la paciente y la apropiación con otros individuos involucrados con el cuidado del paciente.",
  "Valoración del progreso del paciente.",
  "Nueva evaluación para ajustar el tratamiento.",
];

const CARD_SIZE = 160; // 40 * 4 (w-40 h-40 ≈ 160px)

export default function ModeloAtencion() {
  const ordenPosiciones = [4, 5, 0, 1, 2, 3];
  const containerRef = useRef(null);
  const [radius, setRadius] = useState(140);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const isSm = width < 640;
      setIsMobile(isSm);

      if (isSm) {
        setRadius(0);
      } else {
        const containerWidth = containerRef.current?.offsetWidth ?? 400;
        // radio = mitad del ancho - la mitad de la tarjeta - un margen
        const newRadius = containerWidth / 2 - CARD_SIZE / 2 - 8;
        setRadius(newRadius > 0 ? newRadius : 0);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="
        relative flex flex-col items-center 
        gap-20 px-4 py-16 sm:py-24
      "
    >
      {/* Título bien separado del modelo */}
      <h2 className="text-2xl sm:text-2xl font-bold text-pink-600 text-center">
        Modelo de Atención en Fisioterapia
      </h2>

      <div
        ref={containerRef}
        className={`relative w-full max-w-[650px] mx-auto ${
          isMobile ? "" : "aspect-square"
        }`}
      >
        {ordenPosiciones.map((faseIndex, index) => {
          const fase = fases[index];
          const descripcion = descripciones[index];

          // Versión móvil: tarjetas en columna, sin posiciones circulares
          if (isMobile) {
            return (
              <div
                key={`fase-mobile-${index}`}
                className="mb-6 p-4 bg-white rounded-xl shadow border border-gray-200"
              >
                <div className="text-pink-500 font-bold text-lg">
                  {index + 1}. {fase}
                </div>
                <div className="text-sm text-gray-600 mt-1">{descripcion}</div>
              </div>
            );
          }

          // Versión escritorio: distribución en círculo
          const angleDeg = (faseIndex / fases.length) * 360;
          const rad = (angleDeg * Math.PI) / 180;
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);

          return (
            <div
              key={`fase-${index}`}
              className="absolute w-40 h-40 flex flex-col items-center justify-center text-center p-3 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-xl transition"
              style={{
                left: `calc(50% + ${x}px - ${CARD_SIZE / 2}px)`,
                top: `calc(50% + ${y}px - ${CARD_SIZE / 2}px)`,
              }}
            >
              <span className="text-pink-500 text-lg font-bold mb-1">
                {index + 1}
              </span>
              <span className="text-xs font-semibold text-pink-600 leading-snug">
                {fase}
              </span>
              <span className="text-[10px] text-gray-600 mt-1">
                {descripcion}
              </span>
            </div>
          );
        })}

        {/* Botón central solo en escritorio */}
        {!isMobile && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group text-center">
            <a
              href="https://www.apta.org/apta-resources-in-spanish/recursos-para-fisioterapeutas-de-apta-en-espanol"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold px-6 py-4 rounded-full shadow-md text-sm sm:text-base transition duration-300"
            >
              Modelo de Atención
            </a>
            <div className="absolute left-1/2 -translate-x-1/2 mt-6 w-64 bg-white border border-gray-300 text-gray-700 text-xs sm:text-sm px-6 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
              Este es el paso a paso que se realiza con el paciente cuando
              solicita el servicio de Fisioterapia.
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
