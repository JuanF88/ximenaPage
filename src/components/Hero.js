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
  dots: true, // Muestra los puntos de navegación
  infinite: true, // Permite el desplazamiento infinito
  speed: 500, // Velocidad de transición
  slidesToShow: 1, // Muestra 1 imagen a la vez
  slidesToScroll: 1, // Desplaza 1 imagen a la vez
};


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

      
      {/* 🎓 Subtítulo */}
      <motion.h2
        className="text-2xl sm:text-4xl font-semibold text-gray-700 mt-4 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Centro Universitario en Salud “Alfonso López”
      </motion.h2>

      <motion.div
  className="mt-12 flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto text-left px-4"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.3, duration: 0.8 }}
>
  {/* Carrusel solo en móviles */}
  <div className="w-full md:hidden">
    <Slider {...sliderSettings}>
      <div>
        <Image
          src="/imagenes/Portada1.jpg"
          alt="Ilustración de la práctica"
          width={800}
          height={800}
          className="rounded-3xl shadow-xl w-full"
        />
      </div>
      <div>
        <Image
          src="/imagenes/Portada2.jpg"
          alt="Segunda imagen interactiva"
          width={400}
          height={300}
          className="rounded-2xl shadow-lg w-full"
        />
      </div>
    </Slider>
  </div>

  {/* Imágenes fijas solo en pantallas medianas y grandes */}
  <div className="relative w-full md:w-1/2 md:block hidden">
    <Image
      src="/imagenes/Portada1.jpg"
      alt="Ilustración de la práctica"
      width={800}
      height={800}
      className="rounded-3xl shadow-xl w-full md:ml-[-180px] mx-auto"
    />
    <Image
      src="/imagenes/Portada2.jpg"
      alt="Segunda imagen interactiva"
      width={400}
      height={300}
      className="absolute bottom-0 right-6 rounded-2xl shadow-lg transform translate-x-14 translate-y-20 scale-95"
    />
  </div>

  {/* Texto */}
  <div className="w-full md:w-1/2 space-y-4">
    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-justify max-w-2xl mx-auto">
      Una experiencia práctica que va desde la examinación hasta la
      obtención de los resultados para emitir un diagnóstico fisioterapéutico, con el fin de establecer el plan de tratamiento de manera individualizada,
      con un enfoque integral, dinámico y participativo, donde el paciente es el eje principal.
    </p>
  </div>
</motion.div>




      {/* 📘 Modelo de Atención */}
      <motion.div
        className="mt-16 w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ModeloAtencion />
      </motion.div>

      {/* 💡 Beneficios académicos */}
      <motion.div
        className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto px-4"
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
