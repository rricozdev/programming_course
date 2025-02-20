import React, { useState } from 'react';
import {  
  Code,
  Database,
  Terminal,
} from 'lucide-react';
import ProgramCard from "./ProgramCard";
import ProgramModal from "./ProgramModal";

// Componente Program
const Program = () => {
    const [selectedModule, setSelectedModule] = useState(null);
  
    const modules = [
      {
        title: "Fundamentos de Programación",
        icon: <Terminal className="h-8 w-8 text-yellow-400" />,
        duration: "3 semanas",
        description: "Aprende los conceptos básicos de la programación y la lógica computacional.",
        content: [
          "Introducción a la lógica de programación",
          "Variables y tipos de datos",
          "Estructuras de control",
          "Funciones y módulos",
          "Algoritmos básicos"
        ]
      },
      {
        title: "Desarrollo Frontend con React",
        icon: <Code className="h-8 w-8 text-yellow-400" />,
        duration: "4 semanas",
        description: "Domina React y construye interfaces modernas y reactivas.",
        content: [
          "Componentes y JSX",
          "Estados y props",
          "Hooks fundamentales",
          "Gestión de estado con Redux",
          "Routing y navegación"
        ]
      },
      {
        title: "Backend y Bases de Datos",
        icon: <Database className="h-8 w-8 text-yellow-400" />,
        duration: "5 semanas",
        description: "Construye APIs robustas y gestiona datos de manera eficiente.",
        content: [
          "Node.js y Express",
          "REST APIs",
          "PostgreSQL y Sequelize",
          "MongoDB y Mongoose",
          "Autenticación y autorización"
        ]
      }
    ];
  
    return (
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Estructura del Programa
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <ProgramCard
                key={index}
                module={module}
                onSelect={setSelectedModule}
              />
            ))}
          </div>
        </div>
        {selectedModule && (
          <ProgramModal
            module={selectedModule}
            onClose={() => setSelectedModule(null)}
          />
        )}
      </div>
    );
  };


  export default Program;