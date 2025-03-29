"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className="bg-black text-white text-center py-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sección Nosotros */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nosotros</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Sobre Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Sección Soporte */}
          <div>
            <h3 className="text-xl font-bold mb-4">Soporte</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:underline">
                  Contáctanos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:underline">
                  Reclamos
                </Link>
              </li>
            </ul>
          </div>

          {/* Sección Redes Sociales */}
          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <div className="flex justify-center space-x-6">
              <Link href="#" className="hover:text-pink-400">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-pink-400">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-pink-400">
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        <p className="text-gray-400 text-sm mt-8">
          © 2025 Mi Empresa. Todos los derechos reservados.
        </p>
      </div>
    </motion.footer>
  );
}
