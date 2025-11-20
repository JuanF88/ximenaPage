"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Dolor() {
  const router = useRouter();
  const [hoveredZone, setHoveredZone] = useState(null);
  const [selectedZone, setSelectedZone] = useState(null);

  const handleZoneClick = (zona) => {
    setSelectedZone(zona);
    setTimeout(() => {
      if (zona === "lumbalgia") {
        router.push("/lumbalgia");
      } else if (zona === "cervicalgia") {
        router.push("/cervicalgia");
      }
    }, 1000);
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  return (
    <section className="flex flex-col items-center text-center py-20 px-4 relative w-full">
      <h1 className="text-3xl sm:text-5xl font-extrabold text-pink-600 mb-6">
        Selecciona una zona del cuerpo
      </h1>

      <div className="relative w-full max-w-[600px]">
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
          className="absolute cursor-pointer 
                     left-[36%] top-[38%] sm:left-[41%] sm:top-[40%] 
                     w-[20%] sm:w-[14%] h-[2%]"
          onClick={() => handleZoneClick("lumbalgia")}
          onMouseEnter={() => setHoveredZone("lumbalgia")}
          onMouseLeave={() => setHoveredZone(null)}
        >
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-pink-700 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.9, 0.3, 0.9] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />

          {/* Texto explicativo */}
          {(hoveredZone === "lumbalgia" || isMobile) && (
            <div className="absolute left-1/2 bottom-[-30%] transform -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded-md">
              Lumbalgia
            </div>
          )}
        </div>

        {/* Área de Cervicalgia */}
        <div
          className="absolute cursor-pointer 
             left-[36%] top-[13%] sm:left-[44%] sm:top-[15%] 
             w-[20%] sm:w-[8%] h-[0%]"
          onClick={() => handleZoneClick("cervicalgia")}
          onMouseEnter={() => setHoveredZone("cervicalgia")}
          onMouseLeave={() => setHoveredZone(null)}
        >

          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-pink-700 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.9, 0.3, 0.9] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />

          {(hoveredZone === "cervicalgia" || isMobile) && (
            <div className="absolute left-1/2 bottom-[-30%] transform -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded-md">
              Cervicalgia
            </div>
          )}
        </div>
      </div>

      <p className="text-gray-700 mt-6 text-sm sm:text-base max-w-sm">
        Haz clic en la zona afectada para más información.
      </p>
    </section>
  );
}
