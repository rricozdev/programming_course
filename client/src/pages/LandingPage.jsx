import React, { useState } from "react";
import { Menu, X } from "lucide-react";
// import { BsWhatsapp } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaReact, FaNodeJs, FaBrain, FaGitAlt, FaPython, FaCss3Alt } from "react-icons/fa"; // Íconos de React, Node.js, cerebro (IA), Git, Python, CSS3
import { SiExpress, SiSequelize, SiJavascript, SiMongodb } from "react-icons/si"; // Íconos de Express, Sequelize, JavaScript, MongoDB

import Program from "../components/Program";
import imageBg from "../assets/bgcurso2.jpg";
import logo from "../assets/labs.png";

// Componente Landing Page
const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  const contacts = {
    WhatsApp: {
      arch: "3135344581",
      tiago: "3205510452",
    },
  };

  const openWhatsApp = (number) => {
    window.open(`https://wa.me/${number}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navbar */}
      <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <img src={logo} alt="Logo" className="h-12 w-42" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={scrollToContact}
                className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300"
              >
                Regístrate
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-yellow-400"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={scrollToContact}
                className="block w-full text-center bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300"
              >
                Regístrate
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-16">
        <div className="relative h-screen">
          <img
            src={imageBg}
            alt="Curso de Programación"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90">
            <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
              <div className="space-y-6 max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-bold">
                  <span className="text-white">CURSO</span>
                  <br />
                  <span className="text-yellow-400">PROGRAMACIÓN</span>
                </h1>
                <p className="text-2xl text-white">100% ONLINE</p>
                <p className="text-3xl md:text-4xl text-yellow-400 font-semibold relative group">
                  <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-yellow-500">{">"}</span>
                  ¿Eres estudiante de Ingeniería de Software y aún no dominas la
                  programación?
                  <span className="absolute -right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-yellow-500">{"<"}</span>
                </p>
                <div className="space-y-2">
                  <p className="text-2xl text-white font-semibold">
                    ¡Regístrate ya!
                  </p>
                </div>
                <button
                  onClick={scrollToContact}
                  className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transform hover:scale-105 transition-all"
                >
                  Regístrate
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <Program />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Regístrate ahora y empieza tu camino en la programación
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                  Contacta por WhatsApp
                </h3>
                {Object.entries(contacts.WhatsApp).map(([name, number]) => (
                  <div
                    key={name}
                    className="flex items-center space-x-4 mb-4 cursor-pointer hover:bg-gray-700 p-2 rounded-lg"
                    onClick={() => openWhatsApp(number)}
                  >
                    {/* <BsWhatsapp className="text-yellow-400 h-5 w-5" /> */}
                    <FaWhatsapp className="text-yellow-400 h-5 w-5" />
                    <div>
                      <p className="text-gray-300 capitalize">{name}</p>
                      <p className="text-gray-400">{number}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sección de íconos de tecnologías */}
            <div className="flex flex-col items-center space-y-8">
              {/* Primera fila: 3 íconos */}
              <div className="flex justify-center space-x-8">
                <FaReact
                  className="text-6xl text-blue-400 hover:text-blue-300 cursor-pointer transform hover:scale-110 hover:shadow-lg transition-all"
                  title="React"
                />
                <FaNodeJs
                  className="text-6xl text-green-600 hover:text-green-500 cursor-pointer transform hover:scale-110 hover:shadow-lg transition-all"
                  title="Node.js"
                />
                <SiExpress
                  className="text-6xl text-green-400 hover:text-green-300 cursor-pointer transform hover:scale-110 hover:shadow-lg transition-all"
                  title="Express"
                />
              </div>

              {/* Segunda fila: 3 íconos */}
              <div className="flex justify-center space-x-8">
                <SiSequelize
                  className="text-6xl text-blue-600 hover:text-blue-500 cursor-pointer transform hover:scale-110 hover:shadow-lg transition-all"
                  title="Sequelize"
                />
                <SiMongodb
                  className="text-6xl text-green-700 hover:text-green-600 cursor-pointer transform hover:scale-110 hover:shadow-lg transition-all"
                  title="MongoDB"
                />
                <SiJavascript
                  className="text-6xl text-yellow-400 hover:text-yellow-300 cursor-pointer transform hover:scale-110 hover:shadow-lg transition-all"
                  title="JavaScript"
                />
              </div>

              {/* Tercera fila: 3 íconos */}
              <div className="flex justify-center space-x-8">
                <FaGitAlt
                  className="text-6xl text-orange-500 hover:text-orange-400 cursor-pointer transform hover:scale-110 hover:shadow-lg transition-all"
                  title="Git"
                />
                <FaPython
                  className="text-6xl text-blue-500 hover:text-blue-400 cursor-pointer transform hover:scale-110 hover:shadow-lg transition-all"
                  title="Python"
                />
                <FaCss3Alt
                  className="text-6xl text-blue-300 hover:text-blue-200 cursor-pointer transform hover:scale-110 hover:shadow-lg transition-all"
                  title="CSS3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-lg font-semibold">Curso de Programación</p>
              <p className="text-gray-400">
                © 2023 Todos los derechos reservados
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;