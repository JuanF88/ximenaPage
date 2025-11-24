"use client";
import React from "react";
import { BookOpenCheck, Activity, Users, Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import ModeloAtencion from "../components/ModeloAtencion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

// 👇 Aquí defines tus imágenes + etiquetas
const heroSlides = [
  {
    src: "/imagenes/Portada0.jpeg",
    alt: "Ilustración de la práctica osteomuscular 0",
    label: "Programa de Fisioterapia - II Periodo - 2025",
    className: "object-cover object-[80%_20%]",
  },
  {
    src: "/imagenes/Portada1.jpg",
    alt: "Ilustración de la práctica osteomuscular 1",
    label: "Programa de Fisioterapia - I Periodo - 2025",
    className: "object-cover",
  },
  {
    src: "/imagenes/Portada2.jpg",
    alt: "Ilustración de la práctica osteomuscular 2",
    label: "Programa de Fisioterapia - I Periodo - 2025",
    className: "object-cover",
  },
  {
    src: "/imagenes/Portada3.jpg",
    alt: "Ilustración de la práctica osteomuscular 3",
    label: "Programa de Fisioterapia - I Periodo - 2025",
    className: "object-cover",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-center py-40 px-4">
      {/* 🏷️ Título principal */}
      <motion.h1
        className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-pink-600 to-purple-500 text-transparent bg-clip-text max-w-4xl mx-auto leading-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Práctica Osteomuscular
      </motion.h1>

      {/* 🎓 Subtítulo */}
      <motion.h2
        className="text-2xl sm:text-4xl font-semibold text-gray-700 mt-4 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Séptimo semestre - Unicauca
      </motion.h2>

      {/* 🎓 Subtítulo más pequeño */}
      <motion.h3
        className="text-lg sm:text-2xl font-medium text-gray-600 mt-2 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Centro Universitario en Salud “Alfonso López”
      </motion.h3>

      {/* 🎬 Video principal */}
      <motion.div
        className="mt-12 w-full max-w-5xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/AhUw33WfvUk?autoplay=1&mute=1&controls=1"
            title="Video de Presentación"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>

      {/* 🖼️ Carrusel de imágenes con etiqueta */}
      <motion.div
        className="mt-8 w-full max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <Slider {...sliderSettings}>
          {heroSlides.map((slide, index) => (
            <div key={index} className="px-1">
              <div className="flex flex-col items-center">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={800}
                  height={600}
                  className={`rounded-2xl shadow-md w-full max-h-[420px] ${slide.className}`}
                />
                {/* Etiqueta debajo de la imagen */}
                <p className="mt-3 text-xs sm:text-sm text-gray-800 bg-white/90 px-4 py-2 rounded-full shadow-sm inline-block">
                  {slide.label}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>

      {/* Texto descriptivo */}
      <motion.div
        className="mt-12 max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-justify">
          Una experiencia práctica que va desde la examinación hasta la obtención de los
          resultados para emitir un diagnóstico fisioterapéutico, con el fin de establecer
          el plan de tratamiento de manera individualizada, con un enfoque integral,
          dinámico y participativo, donde el paciente es el eje principal.
        </p>
      </motion.div>

      {/* 📘 Modelo de Atención */}
      <motion.div
        className="mt-32 w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ModeloAtencion />
      </motion.div>

      {/* 💡 Beneficios académicos */}
      <motion.div
        className="mt-60 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
      >
        {[
          {
            icon: BookOpenCheck,
            title: "Aprendizaje Activo",
            desc: "Espacio para aprender y entender el funcionamiento de nuestro cuerpo",
          },
          {
            icon: Activity,
            title: "Evaluación Funcional",
            desc: "Técnicas prácticas de diagnóstico y manejo.",
          },
          {
            icon: Users,
            title: "Trabajo Colaborativo",
            desc: "Dinámicas grupales e interacción con casos reales.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2"
            whileHover={{ scale: 1.05 }}
          >
            <item.icon className="w-12 h-12 text-pink-600" />
            <h3 className="text-lg font-bold mt-4">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* 🌟 Testimonios */}
      <motion.div
        className="mt-24 w-full py-16 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12">
          Lo que dicen nuestros usuarios
        </h2>
        <div className="flex gap-6 overflow-x-auto max-w-6xl mx-auto pb-4 transform-gpu will-change-transform px-4">
          {[
            {
              text: "La práctica me permitió entender de forma real lo que aprendo en clase.",
              name: "María G.",
            },
            {
              text: "Ahora me siento más preparado para evaluar y tratar pacientes.",
              name: "Carlos P.",
            },
            {
              text: "Una experiencia clave para nuestra formación profesional.",
              name: "Andrea R.",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center min-w-[280px] overflow-hidden transition-transform transform-gpu"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-8 h-8 text-yellow-500 mx-auto" />
              <p className="text-gray-700 mt-4 italic">"{testimonial.text}"</p>
              <p className="text-gray-900 font-bold mt-2">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
