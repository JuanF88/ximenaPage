"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fases = [
  "Examinación",
  "Evaluación",
  "Diagnóstico Fisioterapéutico",
  "Plan de Intervención",
  "Resultados",
  "Reevaluación"
];

// Ángulos personalizados de las flechas por fase (en grados)
const customArrowAngles = [1, 0, 70, 120, 190, 250];

export default function ModeloAtencion() {
  const ordenPosiciones = [4, 5, 0, 1, 2, 3];

  return (
    <section className="relative flex flex-col items-center justify-center py-32  overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-bold text-pink-600 z-10 mb-10 text-center">
        Modelo de Atención en Fisioterapia
      </h2>

      <div className="relative w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] ">
        {ordenPosiciones.map((faseIndex, index) => {
          const fase = fases[index];

          const angleDeg = (faseIndex / fases.length) * 360;
          const rad = (angleDeg * Math.PI) / 180;
          const radius = 200;
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);

          const nextIndex = (index + 1) % fases.length;
          const nextFaseIndex = ordenPosiciones[nextIndex];
          const nextAngleDeg = (nextFaseIndex / fases.length) * 360;
          const nextRad = (nextAngleDeg * Math.PI) / 180;
          const nextX = radius * Math.cos(nextRad);
          const nextY = radius * Math.sin(nextRad);

          // Si hay un ángulo personalizado para esta flecha, úsalo
          const arrowAngle = customArrowAngles[index] ?? Math.atan2(nextY - y, nextX - x) * (180 / Math.PI);

          return (
            <React.Fragment key={`fase-${index}`}>
              <div
                className="absolute w-32 h-32 flex flex-col items-center justify-center text-center p-4 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition"
                style={{
                  left: `calc(50% + ${x}px - 64px)`,
                  top: `calc(50% + ${y}px - 64px)`
                }}
              >
                <span className="text-pink-500 text-lg font-bold mb-1">
                  {index + 1}
                </span>
                <span className="text-sm font-semibold text-pink-600">
                  {fase}
                </span>
              </div>
            </React.Fragment>
          );
        })}

        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-pink-100 text-pink-700 font-bold px-6 py-4 rounded-full shadow-md">
          Modelo de Atención
        </div>
      </div>
    </section>
  );
}