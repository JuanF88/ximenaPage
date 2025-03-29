"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Dolor() {
  const router = useRouter();
  const [hoveredZone, setHoveredZone] = useState(null);
  const [selectedZone, setSelectedZone] = useState(null);

  // Función para manejar el clic en una zona
  const handleZoneClick = (zona) => {
    setSelectedZone(zona); // Activar el zoom en la zona seleccionada

    setTimeout(() => {
      if (zona === "lumbalgia") {
        router.push("/dolor/lumbalgia");
      } else if (zona === "cervicalgia") {
        router.push("/dolor/cervicalgia");
      }
    }, 1000); // Redirigir después de la animación de zoom
  };

  return (
    <section className="flex flex-col items-center text-center py-20 px-6 bg-white relative">
      <h1 className="text-5xl font-extrabold text-pink-600 mb-6">
        Selecciona una zona del cuerpo
      </h1>
      <motion.div

      >
        {/* Imagen del cuerpo humano */}
        <Image
          src="/imagenes/Dolor.png"
          alt="Cuerpo humano con zonas interactivas"
          width={600}
          height={800}
          className="w-full h-auto"
        />

        {/* Área de Lumbalgia */}
        <div
          className="absolute left-[41%] top-[40%] w-[15%] h-[10%] cursor-pointer"
          onClick={() => handleZoneClick("lumbalgia")}
          onMouseEnter={() => setHoveredZone("lumbalgia")}
          onMouseLeave={() => setHoveredZone(null)}
        >
          {/* Indicador Radar */}
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-pink-700 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.9, 0.3, 0.9] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          ></motion.div>

          {/* Tooltip */}
          {hoveredZone === "lumbalgia" && (
            <div className="absolute left-1/2 left-[2%] bottom-[20%] transform -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded-md">
              Lumbalgia
            </div>
          )}
        </div>

        {/* Área de Cervicalgia */}
        <div
          className="absolute left-[44%] top-[22%] w-[10%] h-[10%] cursor-pointer"
          onClick={() => handleZoneClick("cervicalgia")}
          onMouseEnter={() => setHoveredZone("cervicalgia")}
          onMouseLeave={() => setHoveredZone(null)}
        >
          {/* Indicador Radar */}
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-pink-700 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.9, 0.3, 0.9] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          ></motion.div>

          {/* Tooltip */}
          {hoveredZone === "cervicalgia" && (
            <div className="absolute left-1/2 left-[-30%] bottom-[20%] transform -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded-md">
              Cervicalgia
            </div>
          )}
        </div>
      </motion.div>

      <p className="text-gray-700 mt-4">Haz clic en la zona afectada para más información.</p>
    </section>
  );
}
