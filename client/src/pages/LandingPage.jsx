import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FaReact, FaNodeJs, FaGitAlt, FaCss3Alt } from "react-icons/fa";
import { CiDatabase } from "react-icons/ci";
import {
  SiExpress,
  SiSequelize,
  SiJavascript,
  SiMongodb,
} from "react-icons/si";

import Program from "../components/Program";
import LoadingOverlay from "../components/LoadingOverlay";
import About from "../components/About";
import nequiQrCode from "../assets/QR.png";
import imageBg from "../assets/bgcurso2.jpg";
import logo from "../assets/labs.png";
import Footer from "../components/Footer";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false); // Mantenemos el estado de carga
  const navigate = useNavigate();

  const contactsManager = {
    contacts: [
      {
        id: 1,
        name: "Arch",
        role: "Instructor",
        phone: "573135344581",
        platform: "whatsapp",
      },
      {
        id: 2,
        name: "Tiago",
        role: "Instructor",
        phone: "573205510452",
        platform: "whatsapp",
      },
    ],

    messages: {
      whatsapp:
        "¡Hola! Estoy interesado en el curso de programación. ¿Podrías darme más información?",
    },

    openChat(contact) {
      const message = encodeURIComponent(this.messages[contact.platform]);

      if (contact.platform === "whatsapp") {
        const whatsappUrl = `whatsapp://send?phone=${contact.phone}&text=${message}`;
        try {
          window.location.href = whatsappUrl;
        } catch (error) {
          window.location.href = `https://wa.me/${contact.phone}?text=${message}`;
        }
      }
    },
  };

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  const handleClickCronograma = () => {
    setLoading(true); // Mostrar el spinner
    setTimeout(() => {
      navigate("/cronograma"); // Navegar después de un tiempo
    }, 1000); // Ajusta el tiempo según sea necesario
  };

  const handleClick = () => {
    setLoading(true); // Mostrar el spinner
    setTimeout(() => {
      navigate("/registro"); // Navegar después de un tiempo
    }, 1000); // Ajusta el tiempo según sea necesario
  };

  const handleSignatures = () => {
    setLoading(true); // Mostrar el spinner
    setTimeout(() => {
      navigate("/consultas"); // Navegar después de un tiempo
    }, 1000); // Ajusta el tiempo según sea necesario
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <div className="flex-grow">
        {/* Mostrar el spinner si loading es true */}
        {loading && <LoadingOverlay />} {/* Navbar */}
        <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-40">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <img src={logo} alt="Logo" className="h-16 w-2xs" />
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-4">
                <button
                  onClick={handleClickCronograma}
                  disabled={loading}
                  className="bg-slate-900 p-4 text-white px-4 py-2 rounded-lg hover:bg-slate-600 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  Cronograma
                </button>
                <button
                  onClick={scrollToContact}
                  className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300 cursor-pointer"
                >
                  Contáctanos
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
                  onClick={handleClickCronograma}
                  disabled={loading}
                  className="block w-full text-center bg-slate-900 p-4 text-white px-4 py-2 rounded-lg hover:bg-slate-600 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed mb-4"
                >
                  Cronograma
                </button>
                <button
                  onClick={scrollToContact}
                  className="block w-full text-center bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300 cursor-pointer"
                >
                  Contáctanos
                </button>
              </div>
            </div>
          )}
        </nav>
        {/* Hero Section with responsive adjustments */}
        <section className="pt-16 relative">
          {/* <div className="relative min-h-screen md:min-h-screen"> */}
          <div className="relative min-h-[130vh] md:min-h-screen">
            <img
              src={imageBg}
              alt="Curso de Programación"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90">
              {/* <div className="max-w-7xl mx-auto px-4 py-12 h-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6"> */}
              <div className="max-w-7xl mx-auto px-4 py-12 h-full flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between gap-6">
                {/* Content remains the same */}
                <div className="space-y-4 max-w-md w-full md:w-1/2 z-10">
                  <h1 className="text-4xl md:text-5xl font-bold">
                    <span className="text-white">CURSO</span>
                    <br />
                    <span className="text-yellow-400">PROGRAMACIÓN</span>
                  </h1>
                  <p className="text-xl text-white">100% ONLINE</p>
                  <p className="text-xl md:text-2xl text-yellow-400 font-semibold relative group">
                    ¿Eres estudiante de Ingeniería de Software y aún no dominas
                    la programación?
                  </p>
                  <p className="text-xl text-white font-semibold">
                    ¡Regístrate ya!
                  </p>
                  <button
                    onClick={handleClick}
                    disabled={loading}
                    className="bg-yellow-400 text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-300 transform hover:scale-105 transition-all disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer md:hidden"
                  >
                    Regístrate
                  </button>
                </div>

                {/* Promotional component */}
                <div className="w-full md:w-2/5 max-w-sm z-10">
                  <div className="bg-gradient-to-r from-black to-gray-900 rounded-xl overflow-hidden shadow-2xl border border-yellow-500">
                    <div className="p-6">
                      <div className="text-center mb-3">
                        <p className="text-yellow-400 text-xl uppercase font-semibold">
                          Oferta por tiempo limitado
                        </p>
                      </div>

                      <div className="text-center mb-4">
                        <p className="text-yellow-400 text-lg mb-1">Desde</p>
                        <div className="flex items-baseline justify-center">
                          <span className="text-gray-400 text-xl mr-1">
                            COP
                          </span>
                          <span className="text-white text-4xl font-bold">
                            29.999
                          </span>
                          <span className="text-yellow-400 text-xl ml-1">
                            /MES
                          </span>
                        </div>
                        <p className="text-yellow-400 text-base mt-1">
                          por 6 meses
                        </p>
                      </div>

                      <div className="mb-4">
                        <p className="text-gray-400 text-sm mb-2 text-center">
                          Paga fácilmente con Nequi:
                        </p>

                        <div className="bg-white p-3 rounded-lg flex flex-col justify-center items-center">
                          {nequiQrCode ? (
                            <img
                              src={nequiQrCode}
                              alt="Código QR para pago con Nequi"
                              className="w-full max-w-[150px] h-auto mb-1"
                            />
                          ) : (
                            <div className="text-center p-3 mb-1">
                              <QrCode className="w-12 h-12 text-gray-800 mx-auto mb-1" />
                            </div>
                          )}
                          <p className="text-black text-center text-xs">
                            Escanea este código con la app de Nequi
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={handleClick}
                        disabled={loading}
                        className="w-full bg-yellow-400 text-black px-4 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-300 transform hover:scale-105 transition-all disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer flex justify-center items-center"
                      >
                        APROVECHA AHORA
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>

                      <p className="text-gray-500 text-xs mt-4 text-center">
                        *Después del periodo promocional (fecha límite marzo 15 del 2025), se aplicará el precio
                        regular de COP 59.999/mes.
                      </p>

                      <div className="mt-4 text-sm">
                        <div className="flex items-center">
                          <span className="text-gray-400 mr-2">Nivel:</span>
                          <span className="text-white">Principiante</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-400 mr-2">Idioma:</span>
                          <span className="text-white">Español</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile padding to prevent overlap */}
          <div className="block md:hidden pb-8"></div>
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
                  {contactsManager.contacts.map((contact) => (
                    <div
                      key={contact.id}
                      className="flex items-center space-x-4 mb-4 cursor-pointer hover:bg-gray-700 p-2 rounded-lg"
                      onClick={() => contactsManager.openChat(contact)}
                    >
                      <FaWhatsapp className="text-yellow-400 h-5 w-5" />
                      <div>
                        <p className="text-gray-300 capitalize">
                          {contact.name}
                        </p>
                        <p className="text-gray-400 text-sm">{contact.role}</p>
                        <p className="text-gray-400">{contact.phone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Icons Section */}
              <div className="flex flex-col items-center space-y-8">
                {/* Primera fila: 3 íconos */}
                <div className="flex justify-center space-x-12">
                  <div className="group relative">
                    <FaReact
                      className="text-6xl text-blue-400 cursor-pointer transition-all duration-300 ease-in-out
                    group-hover:text-blue-300 group-hover:scale-110
                    group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                      title="React"
                    />
                    <div className="absolute -inset-2 bg-blue-400/20 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                  </div>

                  <div className="group relative">
                    <FaNodeJs
                      className="text-6xl text-green-600 cursor-pointer transition-all duration-300 ease-in-out
                    group-hover:text-green-500 group-hover:scale-110
                    group-hover:drop-shadow-[0_0_12px_rgba(22,163,74,0.8)]"
                      title="Node.js"
                    />
                    <div className="absolute -inset-2 bg-green-500/20 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                  </div>

                  <div className="group relative">
                    <SiExpress
                      className="text-6xl text-green-400 cursor-pointer transition-all duration-300 ease-in-out
                    group-hover:text-green-300 group-hover:scale-110
                    group-hover:drop-shadow-[0_0_12px_rgba(74,222,128,0.8)]"
                      title="Express"
                    />
                    <div className="absolute -inset-2 bg-green-300/20 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                  </div>
                </div>

                {/* Segunda fila: 3 íconos */}
                <div className="flex justify-center space-x-12">
                  <div className="group relative">
                    <SiSequelize
                      className="text-6xl text-blue-600 cursor-pointer transition-all duration-300 ease-in-out
                    group-hover:text-blue-500 group-hover:scale-110
                    group-hover:drop-shadow-[0_0_12px_rgba(37,99,235,0.8)]"
                      title="Sequelize"
                    />
                    <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                  </div>

                  <div className="group relative">
                    <SiMongodb
                      className="text-6xl text-green-700 cursor-pointer transition-all duration-300 ease-in-out
                    group-hover:text-green-600 group-hover:scale-110
                    group-hover:drop-shadow-[0_0_12px_rgba(21,128,61,0.8)]"
                      title="MongoDB"
                    />
                    <div className="absolute -inset-2 bg-green-600/20 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                  </div>

                  <div className="group relative">
                    <SiJavascript
                      className="text-6xl text-yellow-400 cursor-pointer transition-all duration-300 ease-in-out
                    group-hover:text-yellow-300 group-hover:scale-110
                    group-hover:drop-shadow-[0_0_12px_rgba(250,204,21,0.8)]"
                      title="JavaScript"
                    />
                    <div className="absolute -inset-2 bg-yellow-300/20 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                  </div>
                </div>

                {/* Tercera fila: 3 íconos */}
                <div className="flex justify-center space-x-12">
                  <div className="group relative">
                    <FaGitAlt
                      className="text-6xl text-orange-500 cursor-pointer transition-all duration-300 ease-in-out
                    group-hover:text-orange-400 group-hover:scale-110
                    group-hover:drop-shadow-[0_0_12px_rgba(249,115,22,0.8)]"
                      title="Git"
                    />
                    <div className="absolute -inset-2 bg-orange-400/20 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                  </div>

                  <div className="group relative">
                    <CiDatabase
                      className="text-6xl text-blue-500 cursor-pointer transition-all duration-300 ease-in-out
                    group-hover:text-blue-400 group-hover:scale-110
                    group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                      title="Database"
                    />
                    <div className="absolute -inset-2 bg-blue-400/20 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                  </div>

                  <div className="group relative">
                    <FaCss3Alt
                      className="text-6xl text-blue-300 cursor-pointer transition-all duration-300 ease-in-out
                    group-hover:text-blue-200 group-hover:scale-110
                    group-hover:drop-shadow-[0_0_12px_rgba(147,197,253,0.8)]"
                      title="CSS3"
                    />
                    <div className="absolute -inset-2 bg-blue-200/20 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* About section */}
          <About />
          <div className="flex justify-center items-center">
            <button
              onClick={handleSignatures}
              disabled={loading}
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transform hover:scale-105 transition-all disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
            >
              Consultas de Asignaturas
            </button>
          </div>
        </section>
        {/* Footer Section */}
      </div>
      <Footer className="mb-0" />
    </div>
  );
};

export default LandingPage;
