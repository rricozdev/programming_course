import React from "react";
import { Card, CardContent } from "../components/ui/card";
import Footer from "../components/Footer";
import { format, addWeeks } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar, Clock, Users, ArrowLeft, Check, Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";
import image_0 from "../assets/modulo_0.jpg";
import image_1 from "../assets/modulo_1.jpg";
import image_2 from "../assets/modulo_3.jpg";
import image_3 from "../assets/modulo_2.jpg";

const CourseSchedule = () => {
  const navigate = useNavigate();
  const module0Start = new Date(2025, 2, 17);
  const module0Weeks = 3;
  const module0End = addWeeks(module0Start, module0Weeks);
  const module0Checkpoint = new Date(module0End);
  module0Checkpoint.setDate(module0Checkpoint.getDate() - 2);

  const module1Start = module0End;
  const module1Weeks = 4;
  const module1End = addWeeks(module1Start, module1Weeks);
  const module1Checkpoint = new Date(module1End);
  module1Checkpoint.setDate(module1Checkpoint.getDate() - 2);

  const module2Start = module1End;
  const module2Weeks = 5;
  const module2End = addWeeks(module2Start, module2Weeks);
  const module2Checkpoint = new Date(module2End);
  module2Checkpoint.setDate(module2Checkpoint.getDate() - 2);

  const projectStart = module2End;
  const projectWeeks = 3;
  const projectEnd = addWeeks(projectStart, projectWeeks);

  const modules = [
    {
      title: "Módulo 0: Fundamentos de Programación",
      duration: "3 semanas",
      start: module0Start,
      end: module0Checkpoint,
      classes: "Lunes, Miércoles, Viernes",
      color: "bg-blue-500",
      image: image_0,
      content: [
        "Introducción a la lógica de programación y pensamiento computacional",
        "Variables y tipos de datos: numéricos, cadenas, booleanos",
        "Operadores aritméticos, relacionales y lógicos",
        "Estructuras de control: condicionales (if, switch) y bucles (for, while, do-while)",
        "Funciones y módulos: reutilización de código y modularización",
        "Algoritmos básicos: búsqueda, ordenamiento y recursión",
        "Ejercicios prácticos con pseudocódigo y lenguajes de programación",
      ],
    },
    {
      title: "Módulo 1: Desarrollo Frontend con React",
      duration: "4 semanas",
      start: module1Start,
      end: module1Checkpoint,
      classes: "Lunes, Miércoles, Viernes",
      color: "bg-green-500",
      image: image_1,
      content: [
        "Componentes y JSX",
        "Estados y props",
        "Hooks fundamentales",
        "Gestión de estado con Redux",
        "Routing y navegación",
      ],
    },
    {
      title: "Módulo 2: Backend y Bases de Datos",
      duration: "5 semanas",
      start: module2Start,
      end: module2Checkpoint,
      classes: "Lunes, Miércoles, Viernes",
      color: "bg-yellow-400",
      image: image_2,
      content: [
        "Node.js y Express",
        "REST APIs",
        "PostgreSQL y Sequelize",
        "MongoDB y Mongoose",
        "Autenticación y autorización",
      ],
    },
    {
      title: "Proyecto Final",
      duration: "3 semanas",
      start: projectStart,
      end: projectEnd,
      classes: "Soporte y consultas",
      color: "bg-purple-500",
      image: image_3,
      content: [
        "Realización de una API RESTFull utilizando todo lo aprendido en el curso",
        "Sustentación en vivo del proyecto",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Cronograma del <span className="text-yellow-400">Curso</span>
            </h1>
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver al inicio
            </button>
          </div>

          <div className="grid gap-8">
            {modules.map((module, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-none overflow-hidden group hover:shadow-2xl transition-all duration-300 shadow-lg relative"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/2">
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={module.image}
                          alt={module.title}
                          className="w-full h-72 object-cover transition-all duration-300 group-hover:brightness-90"
                        />
                      </div>
                      <div
                        className={`${module.color} w-2 h-full absolute left-0 top-0`}
                      />
                      <h2 className="text-2xl font-bold text-gray-600 mt-2 mb-4 group-hover:text-yellow-400 transition-colors">
                        {module.title}
                      </h2>

                      <div className="space-y-3">
                        <div className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
                          <Clock className="w-5 h-5 mr-2 text-yellow-400" />
                          <span>{module.duration}</span>
                        </div>

                        <div className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
                          <Calendar className="w-5 h-5 mr-2 text-yellow-400" />
                          <div>
                            <div>
                              {format(module.start, "dd 'de' MMMM", {
                                locale: es,
                              })}
                            </div>
                            <div>
                              {format(module.end, "dd 'de' MMMM", {
                                locale: es,
                              })}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
                          <Users className="w-5 h-5 mr-2 text-yellow-400" />
                          <span>{module.classes}</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-2/3">
                      <h3 className="text-lg font-semibold text-yellow-400 mb-4">
                        Contenido:
                      </h3>
                      <ul className="space-y-3 list-none mb-6">
                        {module.content.map((item, i) => (
                          <li
                            key={i}
                            className="text-gray-400 flex items-start gap-3 group/item"
                          >
                            <div className="mt-1">
                              <Check className="w-4 h-4 text-green-500 group-hover/item:text-green-400 transition-colors" />
                            </div>
                            <span className="group-hover/item:text-gray-800 transition-colors cursor-pointer">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={() => navigate("/")}
                        className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors cursor-pointer"
                      >
                        <Pencil className="w-5 h-5" />
                        Registrarse
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="py-4">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver al inicio
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default CourseSchedule;