import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Dolor from "../components/Dolor";
import { motion } from "framer-motion";
import SintomasCarousel from "../components/SintomasCarousel";

export default function DolorPage() {
  return (
    <div className="flex flex-col min-h-screen text-gray-900 overflow-hidden">
      <Header />
      <main className="flex-grow flex flex-col items-center px-4 min-h-screen space-y-15">

        {/* 1️⃣ Sección: Definición del Dolor */}
        <motion.section
          className="text-center max-w-3xl pt-32 px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl sm:text-5xl font-extrabold text-pink-600 mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Dolor Musculoesquelético
          </motion.h1>
          <motion.blockquote
            className="relative bg-pink-50 border-l-4 border-pink-400 text-base sm:text-lg text-gray-700 px-6 py-4 rounded-md text-justify shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="mb-2">
              “El dolor es una experiencia sensorial y emocional desagradable
              asociada a una lesión tisular real o potencial o que parece estar
              asociada con esta.”
            </p>
            <cite className="block text-sm text-gray-500 text-right">
              — Organización Mundial de la Salud (OMS)
            </cite>
          </motion.blockquote>

        </motion.section>

        {/* 1.1️⃣ Recuadros de información */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 w-full max-w-5xl px-4">
          {/* Factores de riesgo */}
          <motion.div
            className="bg-pink-50 border border-pink-200 rounded-2xl shadow-md p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-pink-600 mb-4">
              Factores de riesgo
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm sm:text-base">
              <li><strong>Emocionales:</strong> Ansiedad, depresión, vergüenza, culpa, miedo, exposición alta al estrés.</li>
              <li><strong>Hábitos:</strong> Consumo excesivo de alcohol.</li>
              <li><strong>Trastornos del sueño:</strong> Insomnio o somnolencia constante.</li>
              <li><strong>Posturas incorrectas:</strong> Sentado, parado, en dispositivos móviles o computador.</li>
              <li><strong>Falta de ejercicio.</strong></li>
              <li><strong>Tareas repetitivas.</strong></li>
            </ul>
          </motion.div>

          {/* Causas */}
          <motion.div
            className="bg-pink-50 border border-pink-200 rounded-2xl shadow-md p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-pink-600 mb-4">
              ¿Cuáles son sus causas?
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm sm:text-base">
              <li>Sobrecarga o uso excesivo.</li>
              <li>Lesiones traumáticas.</li>
              <li>Posturas inadecuadas.</li>
              <li>Estrés y tensión emocional.</li>
              <li>Enfermedades musculoesqueléticas.</li>
              <li>Efecto secundario de ciertos medicamentos.</li>
            </ul>
          </motion.div>
        </section>

        {/* 1.2️⃣ Carrusel de síntomas */}
        <div className="w-full max-w-6xl px-4 mt-16">
          <SintomasCarousel />
        </div>

        {/* 2️⃣ Sección: Video */}
        <motion.section
          className="w-full max-w-4xl text-center py-20 px-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            Diagnóstico y Prevención del Dolor
          </h2>
          <motion.div
            className="relative w-full h-64 md:h-96 rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/TU_VIDEO"
              title="Diagnóstico y Prevención del Dolor"
              allowFullScreen
            ></iframe>
          </motion.div>
        </motion.section>

        {/* 3️⃣ Sección Interactiva */}
        <motion.section
          className="w-full flex flex-col items-center px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Dolor />
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
