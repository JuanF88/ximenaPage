"use client";
import React, { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";

// Lista de síntomas
const sintomas = [
  {
    nombre: "Dolor localizado o generalizado",
    imagen: "/imagenes/sintomas/dolor.png",
  },
  {
    nombre: "Rigidez matutina o tras inactividad",
    imagen: "/imagenes/sintomas/rigidez.png",
  },
  {
    nombre: "Inflamación articular o muscular",
    imagen: "/imagenes/sintomas/inflamacion.png",
  },
  {
    nombre: "Espasmos musculares",
    imagen: "/imagenes/sintomas/espasmos.png",
  },
  {
    nombre: "Pérdida de movilidad o debilidad",
    imagen: "/imagenes/sintomas/debilidad.png",
  },
  {
    nombre: "Alteraciones del sueño",
    imagen: "/imagenes/sintomas/sueno.png",
  },
  {
    nombre: "Fatiga generalizada",
    imagen: "/imagenes/sintomas/fatiga.png",
  },
  {
    nombre: "Dolor con cambios de postura",
    imagen: "/imagenes/sintomas/postura.png",
  },
];

export default function SintomasCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    const interval = setInterval(scrollNext, 3000); // Avanza cada 3 segundos
    return () => clearInterval(interval);
  }, [scrollNext]);

  return (
    <motion.section
      className="w-full max-w-5xl mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">
        Síntomas principales
      </h2>

      <div className="overflow-hidden px-" ref={emblaRef}>
  <div className="flex gap-x-3">

          {sintomas.map((sintoma, index) => (
            <div
              key={index}
              className="min-w-[250px] bg-pink-50 border border-pink-200 rounded-xl shadow-md p-4 flex flex-col items-center text-center"
            >
              <Image
                src={sintoma.imagen}
                alt={sintoma.nombre}
                width={100}
                height={100}
                className="mb-4"
              />
              <p className="text-gray-700 text-sm">{sintoma.nombre}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
