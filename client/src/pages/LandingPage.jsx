import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Cast,
  BookOpen,
  Menu,
  X,
  ArrowRight,
  CircleDollarSign,
  UserCheck,
  Zap,
  Star,
  Trophy,
  Target,
  Code,
  Rocket,
  Clock,
  Users,
  CheckCircle,
  Play,
  MessageCircle,
} from "lucide-react";
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
import imageBg from "../assets/img_5.jpg";
import logo from "../assets/labs.png";
import Footer from "../components/Footer";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const contactsManager = {
    contacts: [
      {
        id: 1,
        name: "Arch",
        role: "Instructor Senior",
        phone: "573135344581",
        platform: "whatsapp",
        specialty: "Full Stack Developer",
      },
      {
        id: 2,
        name: "Tiago",
        role: "Instructor Senior",
        phone: "573205510452",
        platform: "whatsapp",
        specialty: "Backend Specialist",
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
    setLoading(true);
    setTimeout(() => {
      navigate("/cronograma");
    }, 1000);
  };

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/payment");
    }, 1000);
  };

  const handleSignatures = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/consultas");
    }, 1000);
  };

  const techIcons = [
    {
      icon: FaReact,
      name: "React",
      color: "text-blue-400",
      glowColor: "rgba(59,130,246,0.8)",
    },
    {
      icon: FaNodeJs,
      name: "Node.js",
      color: "text-green-500",
      glowColor: "rgba(22,163,74,0.8)",
    },
    {
      icon: SiExpress,
      name: "Express",
      color: "text-green-400",
      glowColor: "rgba(74,222,128,0.8)",
    },
    {
      icon: SiSequelize,
      name: "Sequelize",
      color: "text-blue-500",
      glowColor: "rgba(37,99,235,0.8)",
    },
    {
      icon: SiMongodb,
      name: "MongoDB",
      color: "text-green-600",
      glowColor: "rgba(21,128,61,0.8)",
    },
    {
      icon: SiJavascript,
      name: "JavaScript",
      color: "text-yellow-400",
      glowColor: "rgba(250,204,21,0.8)",
    },
    {
      icon: FaGitAlt,
      name: "Git",
      color: "text-orange-500",
      glowColor: "rgba(249,115,22,0.8)",
    },
    {
      icon: CiDatabase,
      name: "Database",
      color: "text-blue-400",
      glowColor: "rgba(59,130,246,0.8)",
    },
    {
      icon: FaCss3Alt,
      name: "CSS3",
      color: "text-blue-300",
      glowColor: "rgba(147,197,253,0.8)",
    },
  ];

  const benefits = [
    {
      icon: Cast,
      title: "Clases en Vivo",
      description: "Online y en tiempo real",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: BookOpen,
      title: "Proyectos Reales",
      description: "Basado en casos de la industria",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: UserCheck,
      title: "Mentoría 1:1",
      description: "Acompañamiento personalizado",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: CircleDollarSign,
      title: "Inversión Accesible",
      description: "Precio competitivo y flexible",
      color: "from-yellow-400 to-orange-500",
    },
  ];

  const stats = [
    { icon: Users, value: "+ Estudiantes", label: "Formando talento" },
    { icon: Trophy, value: "95%", label: "Satisfacción" },
    { icon: Code, value: "15", label: "Semanas" },
    { icon: Rocket, value: "10+", label: "Proyectos" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:20px_20px] opacity-50"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-36 h-36 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-yellow-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="flex-grow relative z-10">
        {loading && <LoadingOverlay />}

        {/* Navbar Mejorado */}
        <nav className="fixed w-full bg-gray-900/95 backdrop-blur-md border-b border-gray-800 z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0 ml-2">
                <img src={logo} alt="Logo" className="h-8 w-auto" />
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-4">
                <button
                  onClick={handleClickCronograma}
                  disabled={loading}
                  className="group relative px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Cronograma
                  </div>
                </button>
                <button
                  onClick={scrollToContact}
                  className="group relative px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 font-medium transform hover:scale-105"
                >
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Contáctanos
                  </div>
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
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
            <div className="md:hidden bg-gray-800/95 backdrop-blur-md border-t border-gray-700">
              <div className="px-4 pt-2 pb-3 space-y-3">
                <button
                  onClick={handleClickCronograma}
                  disabled={loading}
                  className="block w-full text-center bg-gray-700 text-white px-4 py-3 rounded-lg hover:bg-gray-600 transition-all disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4" />
                    Cronograma
                  </div>
                </button>
                <button
                  onClick={scrollToContact}
                  className="block w-full text-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-3 rounded-lg hover:from-yellow-300 hover:to-orange-400 transition-all font-medium"
                >
                  <div className="flex items-center justify-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Contáctanos
                  </div>
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section Mejorado */}
        <section className="pt-16 relative">
          <div className="relative bg-gradient-to-b from-gray-900 to-black text-white min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 py-12 h-full flex flex-col lg:flex-row items-center lg:justify-between gap-12">
              {/* Contenido Principal */}
              <div className="text-center lg:text-left lg:w-1/2 space-y-8">
                {/* Badge superior */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-4 py-2 text-sm">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-yellow-400 font-medium">
                    Curso Intensivo 2025
                  </span>
                </div>

                {/* Título principal */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Impulsa tu carrera
                  </span>
                  <br />
                  <span className="text-white">en Ingeniería de Software</span>
                </h1>

                {/* Descripción */}
                <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
                  Aprende Desarrollo Web con un enfoque práctico: Lógica de
                  Programación, Frontend, Backend y Estructuras de Datos.
                </p>

                {/* Beneficios Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div
                        key={index}
                        className="group flex items-center gap-3 p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg hover:border-yellow-400/50 transition-all duration-300"
                      >
                        <div
                          className={`w-10 h-10 bg-gradient-to-r ${benefit.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg rounded-lg shadow-2xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 overflow-hidden"
                    onClick={handleClick}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center gap-2">
                      <Rocket className="w-5 h-5" />
                      Adquirir ahora
                    </div>
                  </button>

                  <button
                    onClick={handleClickCronograma}
                    className="group px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold text-lg rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Play className="w-5 h-5" />
                      Ver Cronograma
                    </div>
                  </button>
                </div>
              </div>

              {/* Imagen mejorada */}
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <img
                    src={imageBg}
                    alt="Curso de Programación"
                    className="relative rounded-2xl shadow-2xl w-full max-w-[600px] h-auto transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Estadísticas */}
        <section className="py-20 bg-gray-800/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Program Section */}
        <Program />

        {/* Contact Section Mejorado */}
        <section
          id="contact"
          className="py-20 bg-gradient-to-b from-gray-900 to-black"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-4 py-2 text-sm mb-6">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 font-medium">
                  ¡Últimas plazas disponibles!
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Regístrate ahora y empieza tu{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  camino en la programación
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Únete a cientos de estudiantes que ya están transformando su
                futuro profesional
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Contactos */}
              <div className="space-y-8">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
                    <FaWhatsapp className="w-6 h-6" />
                    Contacta por WhatsApp
                  </h3>
                  <div className="space-y-4">
                    {contactsManager.contacts.map((contact) => (
                      <div
                        key={contact.id}
                        className="group flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all cursor-pointer border border-gray-600 hover:border-yellow-400/50"
                        onClick={() => contactsManager.openChat(contact)}
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <FaWhatsapp className="text-white w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-semibold">
                            {contact.name}
                          </p>
                          <p className="text-yellow-400 text-sm">
                            {contact.role}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {contact.specialty}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tech Stack mejorado */}
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Tecnologías que dominarás
                  </h3>
                  <p className="text-gray-400">
                    Stack completo de desarrollo web moderno
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-8">
                  {techIcons.map((tech, index) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={index}
                        className="group relative flex flex-col items-center"
                      >
                        <div className="relative">
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${tech.color.replace("text-", "from-")} ${tech.color.replace("text-", "to-")}/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                          ></div>
                          <Icon
                            className={`relative text-5xl ${tech.color} cursor-pointer transition-all duration-300 group-hover:scale-125`}
                            style={{
                              filter: "drop-shadow(0 0 12px rgba(0,0,0,0.5))",
                            }}
                          />
                        </div>
                        <span className="text-sm text-gray-400 mt-2 group-hover:text-white transition-colors">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* About section */}
          <div className="mt-20">
            <About />
          </div>

          {/* CTA Final */}
          <div className="flex justify-center items-center mt-16">
            <button
              onClick={handleSignatures}
              disabled={loading}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-lg font-semibold hover:from-purple-400 hover:to-pink-400 transform hover:scale-105 transition-all disabled:opacity-75 disabled:cursor-not-allowed shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-2">
                <Target className="w-5 h-5" />
                Consultas de Asignaturas
              </div>
            </button>
          </div>
        </section>
      </div>

      <Footer className="mb-0" />
    </div>
  );
};

export default LandingPage;
