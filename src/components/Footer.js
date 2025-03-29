import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-8">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Nuestra Compañía</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:underline">Sobre Nosotros</Link></li>
            <li><Link href="/careers" className="hover:underline">Carreras</Link></li>
            <li><Link href="/press" className="hover:underline">Prensa</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Soporte</h3>
          <ul className="space-y-2">
            <li><Link href="/faq" className="hover:underline">Preguntas Frecuentes</Link></li>
            <li><Link href="/contact" className="hover:underline">Contáctanos</Link></li>
            <li><Link href="/claims" className="hover:underline">Reclamos</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Síguenos</h3>
          <div className="flex justify-center space-x-4">
            <Link href="#" className="hover:text-pink-400">Facebook</Link>
            <Link href="#" className="hover:text-pink-400">Twitter</Link>
            <Link href="#" className="hover:text-pink-400">Instagram</Link>
          </div>
        </div>
      </div>
      <p className="text-gray-400 text-sm mt-6">© 2025 Mi Empresa. Todos los derechos reservados.</p>
    </div>
  </footer>
  );
}
