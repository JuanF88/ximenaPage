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
  "Obtener la historia realizando una revisión de sistemas y seleccionando y administrando test y medidas para recoger datos sobre el paciente.",
  "Juicio clínico basado en los datos recogidos durante la examinación.",
  "Integrar y evaluar datos de la examinación para describir la condición del paciente.",
  "Propósito e interacción del fisioterapeuta con la paciente y la apropiación con otros individuos involucrados con el cuidado del paciente.",
  "Valoración del progreso del paciente.",
  "Nueva evaluación para ajustar el tratamiento.",
];

const customArrowAngles = [1, 0, 70, 120, 190, 250];

export default function ModeloAtencion() {
  const ordenPosiciones = [4, 5, 0, 1, 2, 3];
  const containerRef = useRef(null);
  const [radius, setRadius] = useState(160);

  useEffect(() => {
    const handleResize = () => {
      const width = containerRef.current?.offsetWidth ?? 400;
      setRadius(width * 0.4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center py-32 px-4 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-bold text-pink-600 z-10 mb-10 text-center">
        Modelo de Atención en Fisioterapia
      </h2>

      <div
        ref={containerRef}
        className="relative w-full max-w-[500px] aspect-square"
      >
        {ordenPosiciones.map((faseIndex, index) => {
          const fase = fases[index];
          const descripcion = descripciones[index];

          const angleDeg = (faseIndex / fases.length) * 360;
          const rad = (angleDeg * Math.PI) / 180;
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);

          return (
            <React.Fragment key={`fase-${index}`}>
              <div
                className="absolute w-40 h-40 flex flex-col items-center justify-center text-center p-3 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-xl transition"
                style={{
                  left: `calc(45% + ${x}px - 56px)`,
                  top: `calc(45% + ${y}px - 56px)`,
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
            </React.Fragment>
          );
        })}

        {/* Centro del modelo como botón/enlace */}
        <a
          href="https://www.apta.org/apta-resources-in-spanish/recursos-para-fisioterapeutas-de-apta-en-espanol" // ← Cambia esto por tu URL deseada
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-pink-600 hover:bg-pink-700 text-white font-bold px-6 py-4 rounded-full shadow-md text-sm sm:text-base transition duration-300"
        >
          Modelo de Atención
        </a>
      </div>
    </section>
  );
}
