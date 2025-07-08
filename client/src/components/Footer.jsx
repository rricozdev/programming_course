import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaCode,
  FaRocket,
  FaGraduationCap,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      {/* Contenido principal del footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna 1: Marca y misión */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FaCode className="text-yellow-400 text-2xl" />
              <h3 className="text-xl font-bold text-white">Software Labs</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Formamos la próxima generación de desarrolladores en Colombia.
              Aprende programación con proyectos reales y tecnologías modernas.
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <FaGraduationCap className="text-yellow-400" />
                <span>Formando estudiantes</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaRocket className="text-yellow-400" />
                <span>100% online</span>
              </div>
            </div>
          </div>

          {/* Columna 2: Enlaces útiles */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Enlaces útiles</h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm"
              >
                Cursos disponibles
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm"
              >
                Metodología
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm"
              >
                Proyectos de estudiantes
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm"
              >
                Recursos gratuitos
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm"
              >
                Comunidad
              </a>
            </div>
          </div>

          {/* Columna 3: Redes sociales y contacto */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Conéctate con nosotros
            </h4>
            <p className="text-gray-400 text-sm">
              Síguenos en nuestras redes sociales y mantente actualizado con las
              últimas novedades.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 hover:text-yellow-400 transition-all duration-200 group"
              >
                <FaGithub className="text-lg group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 hover:text-yellow-400 transition-all duration-200 group"
              >
                <FaLinkedin className="text-lg group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 hover:text-yellow-400 transition-all duration-200 group"
              >
                <FaWhatsapp className="text-lg group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <div className="pt-2">
              <p className="text-sm text-gray-400">¿Tienes preguntas?</p>
              <a
                href="#"
                className="text-yellow-400 hover:text-yellow-300 text-sm font-medium"
              >
                Contáctanos aquí
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Línea divisoria y copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 Software Labs. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
              >
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
