import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingOverlay from "../components/LoadingOverlay";
import {
  Home,
  Library,
  MessageCircle,
  BookOpen,
  ArrowUp,
  Zap,
  Users,
  Clock,
  CheckCircle,
  Star,
} from "lucide-react";

import image_1 from "../assets/image_cal_dif.jpg";
import image_2 from "../assets/image_cal_int.jpg";
import image_3 from "../assets/image_alg_lineal.jpeg";
import image_4 from "../assets/image_fund_prog.png";
import image_5 from "../assets/image_fund_ing_soft.jpg";
import image_6 from "../assets/image_tgs.jpg";
import image_7 from "../assets/image_poo.jpg";
import image_8 from "../assets/image_ing_req.jpg";
import image_9 from "../assets/image_est_datos.jpg";
import image_10 from "../assets/image_calc_vect.png";
import image_11 from "../assets/image_db.jpg";
import image_12 from "../assets/image_prog_dist.jpeg";
import image_13 from "../assets/image_arq_soft.png";
import image_14 from "../assets/image_cloud_compt.jpg";
import image_15 from "../assets/image_sqa.jpg";
import Footer from "../components/Footer";

const asignaturas = [
  {
    nombre: "Cálculo Diferencial",
    imagen: image_1,
    descripcion:
      "Permite modelar cambios en sistemas y analizar tasas de variación, fundamentales en simulaciones y optimización de algoritmos.",
    whatsapp: "573205510452",
    categoria: "Matemáticas",
    dificultad: "Intermedio",
  },
  {
    nombre: "Cálculo Integral",
    imagen: image_2,
    descripcion:
      "Se usa en análisis de áreas, volúmenes y acumulación de datos, útil en gráficos computacionales y procesamiento de señales.",
    whatsapp: "573205510452",
    categoria: "Matemáticas",
    dificultad: "Intermedio",
  },
  {
    nombre: "Álgebra Lineal",
    imagen: image_3,
    descripcion:
      "Base para gráficos por computadora, inteligencia artificial y manipulación de datos en grandes volúmenes.",
    whatsapp: "573205510452",
    categoria: "Matemáticas",
    dificultad: "Básico",
  },
  {
    nombre: "Algoritmos y Principios de Programación",
    imagen: image_4,
    descripcion:
      "Fundamenta la lógica de la programación y el diseño eficiente de soluciones computacionales.",
    whatsapp: "573135344581",
    categoria: "Programación",
    dificultad: "Básico",
  },
  {
    nombre: "Introducción a la Ingeniería de Software",
    imagen: image_5,
    descripcion:
      "Proporciona los fundamentos del desarrollo de software, metodologías y ciclo de vida de los sistemas.",
    whatsapp: "573135344581",
    categoria: "Ingeniería",
    dificultad: "Básico",
  },
  {
    nombre: "TGS",
    imagen: image_6,
    descripcion:
      "La Teoría General de Sistemas ayuda a comprender la interconexión entre componentes en el desarrollo de software.",
    whatsapp: "573205510452",
    categoria: "Teoría",
    dificultad: "Intermedio",
  },
  {
    nombre: "POO",
    imagen: image_7,
    descripcion:
      "La Programación Orientada a Objetos permite modelar sistemas complejos con reutilización y encapsulamiento de código.",
    whatsapp: "573205510452",
    categoria: "Programación",
    dificultad: "Intermedio",
  },
  {
    nombre: "Ingeniería de Requerimientos",
    imagen: image_8,
    descripcion:
      "Se enfoca en la recopilación y análisis de necesidades para el desarrollo de software de calidad.",
    whatsapp: "573135344581",
    categoria: "Ingeniería",
    dificultad: "Intermedio",
  },
  {
    nombre: "Estructuras de Datos",
    imagen: image_9,
    descripcion:
      "Optimiza la gestión y manipulación de datos en aplicaciones, mejorando eficiencia y rendimiento.",
    whatsapp: "573135344581",
    categoria: "Programación",
    dificultad: "Avanzado",
  },
  {
    nombre: "Cálculo Vectorial",
    imagen: image_10,
    descripcion:
      "Esencial en gráficos 3D, simulaciones físicas y cálculos en procesamiento de imágenes.",
    whatsapp: "573205510452",
    categoria: "Matemáticas",
    dificultad: "Avanzado",
  },
  {
    nombre: "Bases de Datos",
    imagen: image_11,
    descripcion:
      "Permite almacenar, gestionar y recuperar información estructurada en sistemas informáticos.",
    whatsapp: "573135344581",
    categoria: "Datos",
    dificultad: "Intermedio",
  },
  {
    nombre: "Programación Distribuida",
    imagen: image_12,
    descripcion:
      "Facilita el desarrollo de sistemas escalables y concurrentes mediante múltiples nodos interconectados.",
    whatsapp: "573135344581",
    categoria: "Programación",
    dificultad: "Avanzado",
  },
  {
    nombre: "Arquitectura de Software",
    imagen: image_13,
    descripcion:
      "Define la estructura y organización de sistemas, garantizando mantenibilidad y escalabilidad.",
    whatsapp: "573135344581",
    categoria: "Ingeniería",
    dificultad: "Avanzado",
  },
  {
    nombre: "Fundamentos de Computación en la Nube",
    imagen: image_14,
    descripcion:
      "Comprende los modelos y servicios en la nube para desarrollo y despliegue de aplicaciones escalables.",
    whatsapp: "573205510452",
    categoria: "Cloud",
    dificultad: "Intermedio",
  },
  {
    nombre: "SQA - Software Quality Assurance",
    imagen: image_15,
    descripcion:
      "Garantiza la calidad del software mediante pruebas y metodologías de aseguramiento.",
    whatsapp: "573135344581",
    categoria: "Testing",
    dificultad: "Avanzado",
  },
];

const ConsultasAsignaturas = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const navigate = useNavigate();

  // Obtener categorías únicas
  const categories = [
    "Todas",
    ...new Set(asignaturas.map((asignatura) => asignatura.categoria)),
  ];

  // Filtrar asignaturas por categoría
  const filteredAsignaturas =
    selectedCategory === "Todas"
      ? asignaturas
      : asignaturas.filter(
          (asignatura) => asignatura.categoria === selectedCategory
        );

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScrollTop]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const getDifficultyColor = (dificultad) => {
    switch (dificultad) {
      case "Básico":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Intermedio":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Avanzado":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getCategoryColor = (categoria) => {
    const colors = {
      Matemáticas: "bg-blue-500/20 text-blue-400",
      Programación: "bg-purple-500/20 text-purple-400",
      Ingeniería: "bg-green-500/20 text-green-400",
      Datos: "bg-cyan-500/20 text-cyan-400",
      Cloud: "bg-indigo-500/20 text-indigo-400",
      Testing: "bg-pink-500/20 text-pink-400",
      Teoría: "bg-orange-500/20 text-orange-400",
    };
    return colors[categoria] || "bg-gray-500/20 text-gray-400";
  };

  return (
    <div
      className="bg-gray-900 text-white min-h-screen flex flex-col"
      id="inicio"
    >
      {loading && <LoadingOverlay />}

      {/* Header mejorado */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 rounded-full mb-4">
                <BookOpen className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="text-yellow-400 text-sm font-medium">
                  Apoyo académico
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-2">
                Consultas de{" "}
                <span className="text-yellow-400 relative inline-block">
                  Ingeniería de Software
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400 rounded-full"></span>
                </span>
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl">
                Resuelve tus dudas académicas con expertos en cada materia
              </p>
            </div>

            <button
              onClick={handleClick}
              className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <Home className="w-5 h-5" />
              Volver a inicio
            </button>
          </div>
        </div>
      </div>

      {/* Estadísticas y beneficios */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
            <div className="bg-yellow-400/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Respuesta rápida
            </h3>
            <p className="text-gray-300 text-sm">
              Atención inmediata vía WhatsApp
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
            <div className="bg-yellow-400/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Expertos certificados
            </h3>
            <p className="text-gray-300 text-sm">
              Profesores con experiencia real
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
            <div className="bg-yellow-400/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Solución garantizada
            </h3>
            <p className="text-gray-300 text-sm">
              Te ayudamos hasta resolver tu duda
            </p>
          </div>
        </div>

        {/* Descripción principal mejorada */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-500/5 rounded-2xl p-8 border border-yellow-400/20">
            <div className="flex items-start">
              <div className="bg-yellow-400/20 rounded-xl p-3 mr-6">
                <Library className="w-8 h-8 text-yellow-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  ¿Atascado con tus tareas?{" "}
                  <span className="text-yellow-400">
                    ¡Estamos aquí para ayudarte!
                  </span>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  No pierdas más tiempo buscando respuestas en internet.
                  Nuestros expertos te guían paso a paso para que no solo
                  resuelvas tus tareas, sino que aprendas de verdad. Desde
                  cálculo hasta arquitectura de software, tenemos la solución
                  que necesitas.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 mr-2" />
                    <span className="text-sm">Explicación paso a paso</span>
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <Zap className="w-4 h-4 mr-2" />
                    <span className="text-sm">Resolución al instante</span>
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">
                      Contacto directo por WhatsApp
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filtros por categoría */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">
            Filtrar por categoría:
          </h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-yellow-400 text-gray-900"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de asignaturas mejorado */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredAsignaturas.map((asignatura, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={asignatura.imagen}
                  alt={asignatura.nombre}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>

                {/* Etiquetas de categoría y dificultad */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(asignatura.categoria)}`}
                  >
                    {asignatura.categoria}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(asignatura.dificultad)}`}
                  >
                    {asignatura.dificultad}
                  </span>
                </div>

                <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white">
                  {asignatura.nombre}
                </h3>
              </div>

              <div className="p-6">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {asignatura.descripcion}
                </p>

                <a
                  href={`https://wa.me/${asignatura.whatsapp}?text=Hola,%20quiero%20hacer%20una%20consulta%20sobre%20${encodeURIComponent(asignatura.nombre)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Consultar ahora
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer con separador visual */}
      <div className="mt-20">
        <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        <Footer />
      </div>

      {/* Botón flotante mejorado */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-yellow-500 hover:bg-yellow-400 text-gray-900 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 z-50 group"
          aria-label="Volver a Inicio"
        >
          <ArrowUp className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
        </button>
      )}
    </div>
  );
};

export default ConsultasAsignaturas;
