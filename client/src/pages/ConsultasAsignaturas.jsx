import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingOverlay from "../components/LoadingOverlay";
import { Home } from "lucide-react";

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

// const asignaturas = [
//   {
//     nombre: "Cálculo Diferencial",
//     imagen: image_1,
//     descripcion:
//       "Permite modelar cambios en sistemas y analizar tasas de variación, fundamentales en simulaciones y optimización de algoritmos.",
//   },
//   {
//     nombre: "Cálculo Integral",
//     imagen: image_2,
//     descripcion:
//       "Se usa en análisis de áreas, volúmenes y acumulación de datos, útil en gráficos computacionales y procesamiento de señales.",
//   },
//   {
//     nombre: "Álgebra Lineal",
//     imagen: image_3,
//     descripcion:
//       "Base para gráficos por computadora, inteligencia artificial y manipulación de datos en grandes volúmenes.",
//   },
//   {
//     nombre: "Algoritmos y Principios de Programación",
//     imagen: image_4,
//     descripcion:
//       "Fundamenta la lógica de la programación y el diseño eficiente de soluciones computacionales.",
//   },
//   {
//     nombre: "Introducción a la Ingeniería de Software",
//     imagen: image_5,
//     descripcion:
//       "Proporciona los fundamentos del desarrollo de software, metodologías y ciclo de vida de los sistemas.",
//   },
//   {
//     nombre: "TGS",
//     imagen: image_6,
//     descripcion:
//       "La Teoría General de Sistemas ayuda a comprender la interconexión entre componentes en el desarrollo de software.",
//   },
//   {
//     nombre: "POO",
//     imagen: image_7,
//     descripcion:
//       "La Programación Orientada a Objetos permite modelar sistemas complejos con reutilización y encapsulamiento de código.",
//   },
//   {
//     nombre: "Ingeniería de Requerimientos",
//     imagen: image_8,
//     descripcion:
//       "Se enfoca en la recopilación y análisis de necesidades para el desarrollo de software de calidad.",
//   },
//   {
//     nombre: "Estructuras de Datos",
//     imagen: image_9,
//     descripcion:
//       "Optimiza la gestión y manipulación de datos en aplicaciones, mejorando eficiencia y rendimiento.",
//   },
//   {
//     nombre: "Cálculo Vectorial",
//     imagen: image_10,
//     descripcion:
//       "Esencial en gráficos 3D, simulaciones físicas y cálculos en procesamiento de imágenes.",
//   },
//   {
//     nombre: "Bases de Datos",
//     imagen: image_11,
//     descripcion:
//       "Permite almacenar, gestionar y recuperar información estructurada en sistemas informáticos.",
//   },
//   {
//     nombre: "Programación Distribuida",
//     imagen: image_12,
//     descripcion:
//       "Facilita el desarrollo de sistemas escalables y concurrentes mediante múltiples nodos interconectados.",
//   },
//   {
//     nombre: "Arquitectura de Software",
//     imagen: image_13,
//     descripcion:
//       "Define la estructura y organización de sistemas, garantizando mantenibilidad y escalabilidad.",
//   },
//   {
//     nombre: "Fundamentos de Computación en la Nube",
//     imagen: image_14,
//     descripcion:
//       "Comprende los modelos y servicios en la nube para desarrollo y despliegue de aplicaciones escalables.",
//   },
//   {
//     nombre: "SQA - Software Quality Assurance",
//     imagen: image_15,
//     descripcion:
//       "Garantiza la calidad del software mediante pruebas y metodologías de aseguramiento.",
//   },
// ];

const asignaturas = [
  {
    nombre: "Cálculo Diferencial",
    imagen: image_1,
    descripcion:
      "Permite modelar cambios en sistemas y analizar tasas de variación, fundamentales en simulaciones y optimización de algoritmos.",
    whatsapp: "573205510452",
  },
  {
    nombre: "Cálculo Integral",
    imagen: image_2,
    descripcion:
      "Se usa en análisis de áreas, volúmenes y acumulación de datos, útil en gráficos computacionales y procesamiento de señales.",
    whatsapp: "573205510452",
  },
  {
    nombre: "Álgebra Lineal",
    imagen: image_3,
    descripcion:
      "Base para gráficos por computadora, inteligencia artificial y manipulación de datos en grandes volúmenes.",
    whatsapp: "573205510452",
  },
  {
    nombre: "Algoritmos y Principios de Programación",
    imagen: image_4,
    descripcion:
      "Fundamenta la lógica de la programación y el diseño eficiente de soluciones computacionales.",
    whatsapp: "573135344581",
  },
  {
    nombre: "Introducción a la Ingeniería de Software",
    imagen: image_5,
    descripcion:
      "Proporciona los fundamentos del desarrollo de software, metodologías y ciclo de vida de los sistemas.",
    whatsapp: "573135344581",
  },
  {
    nombre: "TGS",
    imagen: image_6,
    descripcion:
      "La Teoría General de Sistemas ayuda a comprender la interconexión entre componentes en el desarrollo de software.",
    whatsapp: "573205510452",
  },
  {
    nombre: "POO",
    imagen: image_7,
    descripcion:
      "La Programación Orientada a Objetos permite modelar sistemas complejos con reutilización y encapsulamiento de código.",
    whatsapp: "573205510452",
  },
  {
    nombre: "Ingeniería de Requerimientos",
    imagen: image_8,
    descripcion:
      "Se enfoca en la recopilación y análisis de necesidades para el desarrollo de software de calidad.",
    whatsapp: "573135344581",
  },
  {
    nombre: "Estructuras de Datos",
    imagen: image_9,
    descripcion:
      "Optimiza la gestión y manipulación de datos en aplicaciones, mejorando eficiencia y rendimiento.",
    whatsapp: "573135344581",
  },
  {
    nombre: "Cálculo Vectorial",
    imagen: image_10,
    descripcion:
      "Esencial en gráficos 3D, simulaciones físicas y cálculos en procesamiento de imágenes.",
    whatsapp: "573205510452",
  },
  {
    nombre: "Bases de Datos",
    imagen: image_11,
    descripcion:
      "Permite almacenar, gestionar y recuperar información estructurada en sistemas informáticos.",
    whatsapp: "573135344581",
  },
  {
    nombre: "Programación Distribuida",
    imagen: image_12,
    descripcion:
      "Facilita el desarrollo de sistemas escalables y concurrentes mediante múltiples nodos interconectados.",
    whatsapp: "573135344581",
  },
  {
    nombre: "Arquitectura de Software",
    imagen: image_13,
    descripcion:
      "Define la estructura y organización de sistemas, garantizando mantenibilidad y escalabilidad.",
    whatsapp: "573135344581",
  },
  {
    nombre: "Fundamentos de Computación en la Nube",
    imagen: image_14,
    descripcion:
      "Comprende los modelos y servicios en la nube para desarrollo y despliegue de aplicaciones escalables.",
    whatsapp: "573205510452",
  },
  {
    nombre: "SQA - Software Quality Assurance",
    imagen: image_15,
    descripcion:
      "Garantiza la calidad del software mediante pruebas y metodologías de aseguramiento.",
    whatsapp: "573135344581",
  },
];

// const whatsappNumber = "573135344581";

const ConsultasAsignaturas = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [loading, setLoading] = useState(false); // Mantenemos el estado de carga
  const navigate = useNavigate();

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
    setLoading(true); // Mostrar el spinner
    setTimeout(() => {
      navigate("/"); // Navegar después de un tiempo
    }, 1000); // Ajusta el tiempo según sea necesario
  };

  return (
    <div
      className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen flex flex-col"
      id="inicio"
    >
      {loading && <LoadingOverlay />}{" "}
      <div className="container mx-auto px-4 py-10 flex-grow">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-center relative flex-grow">
            Consultas de{" "}
            <span className="text-yellow-400 relative inline-block">
              Ingeniería de Software
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400 rounded-full"></span>
            </span>
          </h2>
          <button
            onClick={handleClick}
            className="mt-6 px-4 py-2 flex items-center gap-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 cursor-pointer"
          >
            <Home className="w-5 h-5" />
            Volver a inicio
          </button>
        </div>
        {/* Improved main paragraph with better styling and layout */}
        <div className="max-w-3xl mx-auto mb-12 bg-gray-800 bg-opacity-50 p-6 rounded-xl border-l-4 border-yellow-400 shadow-lg">
          <div className="flex items-start">
            <div className="text-3xl text-yellow-400 mr-4">📚</div>
            <p className="text-lg leading-relaxed">
              ¿Tienes tareas que hacer y no entiendes el tema? 🤯 No te
              preocupes, estamos aquí para ayudarte. Si estás atascado con
              ejercicios de cálculo, estructuras de datos o cualquier otra
              asignatura, podemos guiarte paso a paso. No pierdas más tiempo
              buscando respuestas en internet, consulta con nosotros y resuelve
              tus dudas al instante. ¡Haz que tus tareas sean más fáciles y
              aprende de verdad! 🚀✨
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {asignaturas.map((asignatura, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-700 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={asignatura.imagen}
                  alt={asignatura.nombre}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                <h3 className="absolute bottom-3 left-4 text-xl font-bold text-white">
                  <span className="bg-yellow-500 text-gray-900 px-2 py-1 rounded">
                    {asignatura.nombre}
                  </span>
                </h3>
              </div>
              <div className="p-5 flex-grow">
                <p className="text-gray-300">{asignatura.descripcion}</p>
              </div>
              <a
                href={`https://wa.me/${
                  asignatura.whatsapp
                }?text=Hola,%20quiero%20hacer%20una%20consulta%20sobre%20${encodeURIComponent(
                  asignatura.nombre
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="m-4 block text-center bg-yellow-500 text-gray-900 py-3 px-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300 transform hover:translate-y-1 shadow-md"
              >
                <span className="flex items-center justify-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Consultar
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* Improved footer integration */}
      <div className="mt-16">
        <div className="w-full h-10 bg-gradient-to-r from-gray-900 via-yellow-500 to-gray-900"></div>
        <Footer className="bg-gray-950 py-8" />
      </div>
      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 bg-yellow-500 hover:bg-yellow-400 text-gray-900 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 focus:outline-none cursor-pointer"
          aria-label="Volver a Inicio"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            ></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default ConsultasAsignaturas;
