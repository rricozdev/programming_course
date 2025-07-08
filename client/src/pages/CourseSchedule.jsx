import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import LoadingOverlay from "../components/LoadingOverlay";
import Footer from "../components/Footer";
import FloatButton from "../components/FloatButton";

import { format, addWeeks } from "date-fns";
import { es } from "date-fns/locale";
import {
  Calendar,
  Clock,
  Home,
  Users,
  ArrowLeft,
  Check,
  Pencil,
  Code,
  Database,
  Layout,
  Rocket,
  Zap,
  Terminal,
  Cpu,
  Globe,
  Server,
  Smartphone,
  Code2,
} from "lucide-react";
import image_0 from "../assets/modulo_0.jpg";
import image_1 from "../assets/modulo_1.jpg";
import image_2 from "../assets/modulo_3.jpg";
import image_3 from "../assets/modulo_2.jpg";

const CourseSchedule = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // 🗓 Nuevo inicio: Primer lunes de agosto 2025 (4 de agosto)
  const module0Start = new Date(2025, 7, 4); // Mes 7 = Agosto
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
      subtitle: "Fundamentos",
      duration: "3 semanas",
      start: module0Start,
      end: module0Checkpoint,
      classes: "Lunes, Miércoles, Viernes",
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500",
      textColor: "text-blue-400",
      image: image_0,
      icon: Terminal,
      difficulty: "Principiante",
      topics: 7,
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
      subtitle: "Frontend",
      duration: "4 semanas",
      start: module1Start,
      end: module1Checkpoint,
      classes: "Lunes, Miércoles, Viernes",
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-500",
      textColor: "text-green-400",
      image: image_1,
      icon: Layout,
      difficulty: "Intermedio",
      topics: 5,
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
      subtitle: "Backend",
      duration: "5 semanas",
      start: module2Start,
      end: module2Checkpoint,
      classes: "Lunes, Miércoles, Viernes",
      color: "from-yellow-400 to-orange-500",
      borderColor: "border-yellow-400",
      textColor: "text-yellow-400",
      image: image_2,
      icon: Database,
      difficulty: "Avanzado",
      topics: 5,
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
      subtitle: "Proyecto",
      duration: "3 semanas",
      start: projectStart,
      end: projectEnd,
      classes: "Soporte y consultas",
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500",
      textColor: "text-purple-400",
      image: image_3,
      icon: Rocket,
      difficulty: "Experto",
      topics: 2,
      content: [
        "Realización de una API RESTFull utilizando todo lo aprendido en el curso",
        "Sustentación en vivo del proyecto",
      ],
    },
  ];

  const handleGoHome = (e) => {
    setLoading(true);
    setTimeout(() => {
      navigate("/");
    }, 1000);
    console.log("🏠 Navegando a home..."); // Para debug
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:20px_20px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-green-500/10 rounded-full blur-xl pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-28 h-28 bg-yellow-500/10 rounded-full blur-xl pointer-events-none" />

      {/* Loading overlay condicional */}
      {loading && <LoadingOverlay />}

      <div className="flex-1 relative z-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-gray-300">Programa Intensivo</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Cronograma
              </span>{" "}
              del Curso
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Domina las tecnologías más demandadas en la industria tech. Desde
              los fundamentos hasta proyectos reales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Botón principal */}
              <button
                onClick={handleGoHome}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-3 rounded-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 relative z-30 cursor-pointer"
                style={{ pointerEvents: "auto" }} // Forzar interacción
              >
                <Home className="w-5 h-5" />
                Volver a inicio
              </button>
            </div>
          </div>

          {/* Grid de módulos 2x2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <Card
                  key={index}
                  className={`bg-gray-800/50 backdrop-blur-sm border-2 ${module.borderColor} border-opacity-20 overflow-hidden group hover:border-opacity-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-[1.02] relative`}
                >
                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${module.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                  ></div>

                  <CardContent className="p-0 relative z-10">
                    {/* Header con imagen y overlay */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={module.image}
                        alt={module.title}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>

                      {/* Badges en la imagen */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        <div
                          className={`inline-flex items-center gap-1 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium ${module.textColor}`}
                        >
                          <Icon className="w-3 h-3" />
                          {module.subtitle}
                        </div>
                        <div className="inline-flex items-center gap-1 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-white">
                          <Code className="w-3 h-3" />
                          {module.difficulty}
                        </div>
                      </div>

                      {/* Título en la imagen */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-1 leading-tight">
                          {module.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-300">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {module.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Code2 className="w-4 h-4" />
                            {module.topics} temas
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="p-6">
                      {/* Fechas */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm">
                            {format(module.start, "dd MMM", { locale: es })} -{" "}
                            {format(module.end, "dd MMM", { locale: es })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Users className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm">{module.classes}</span>
                        </div>
                      </div>

                      {/* Lista de contenido */}
                      <div className="space-y-2 mb-6">
                        {module.content.slice(0, 3).map((item, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 text-sm text-gray-300 group/item"
                          >
                            <div className="mt-1 flex-shrink-0">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                            </div>
                            <span className="group-hover/item:text-white transition-colors">
                              {item}
                            </span>
                          </div>
                        ))}
                        {module.content.length > 3 && (
                          <div className="text-sm text-gray-400 ml-5">
                            +{module.content.length - 3} temas más
                          </div>
                        )}
                      </div>

                      {/* Botón de acción */}
                      <button
                        onClick={() => navigate("/registro")}
                        className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r ${module.color} text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium transform hover:scale-105 relative z-10`}
                      >
                        <Pencil className="w-4 h-4" />
                        Registrarse al Módulo
                      </button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Estadísticas del curso */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Programa Completo
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">15</div>
                <div className="text-sm text-gray-400">Semanas</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">19</div>
                <div className="text-sm text-gray-400">Temas</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">3</div>
                <div className="text-sm text-gray-400">Clases/semana</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">1</div>
                <div className="text-sm text-gray-400">Proyecto final</div>
              </div>
            </div>
          </div>
          <div className="py-4">
            <FloatButton
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseSchedule;
