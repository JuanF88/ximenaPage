"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    tipo: "Comentario",
    mensaje: "",
  });

  const [status, setStatus] = useState({ success: null, message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.email || !formData.mensaje) {
      setStatus({ success: false, message: "Por favor, completa todos los campos." });
      return;
    }

    const templateParams = {
      from_name: formData.nombre,
      from_email: formData.email,
      tipo_mensaje: formData.tipo,
      message: formData.mensaje,
      to_email: "juanfhurtado@unicauca.edu.co",
    };

    emailjs
      .send(
        "service_er4sl5c",
        "template_01p7low",
        templateParams,
        "u1ljnvlXqpqBdJRNW"
      )
      .then(
        (response) => {
          console.log("Correo enviado con éxito:", response);
          setStatus({ success: true, message: "✅ ¡Mensaje enviado con éxito!" });
          setTimeout(() => setStatus({ success: null, message: "" }), 3000);
        },
        (error) => {
          console.error("Error al enviar el correo:", error);
          setStatus({ success: false, message: "❌ Error al enviar el mensaje. Inténtalo de nuevo." });
        }
      );

    setFormData({ nombre: "", email: "", tipo: "Comentario", mensaje: "" });
  };

  return (
    <section className="w-full overflow-hidden px-4 py-8 flex justify-center">
      <form
        className="w-full max-w-screen-md bg-pink-100 p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg"
        data-aos="fade-up"
        data-aos-duration="2000"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-left text-gray-800 text-sm font-semibold">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 focus:border-pink-500 focus:outline-none"
            placeholder="Tu nombre"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-left text-gray-800 text-sm font-semibold">Correo Electrónico</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 focus:border-pink-500 focus:outline-none"
            placeholder="tucorreo@example.com"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-left text-gray-800 text-sm font-semibold">Tipo de Mensaje</label>
          <select
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 focus:border-pink-500 focus:outline-none"
            required
          >
            <option value="Comentario">Comentario</option>
            <option value="Reclamo">Reclamo</option>
            <option value="Sugerencia">Sugerencia</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-left text-gray-800 text-sm font-semibold">Mensaje</label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 focus:border-pink-500 focus:outline-none"
            rows="4"
            placeholder="Escribe tu mensaje aquí..."
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-pink-600 hover:bg-pink-500 text-white font-bold py-3 text-lg rounded-md shadow-md transition-transform transform hover:scale-105"
        >
          Enviar Mensaje
        </button>

        {status.message && (
          <div className={`mt-4 text-center font-semibold ${status.success ? "text-green-500" : "text-red-500"}`}>
            {status.message}
          </div>
        )}
      </form>
    </section>
  );
}
