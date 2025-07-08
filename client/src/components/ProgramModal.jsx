import React from "react";
import { X, Clock, BookOpen, ChevronRight } from "lucide-react";

const ProgramModal = ({ module, onClose }) => {
  if (!module) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl transform animate-slideUp">
        {/* Header con gradiente */}
        <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-500/5 border-b border-gray-700 p-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-yellow-400/20 rounded-lg">
                {module.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white leading-tight">
                  {module.title}
                </h2>
                <div className="flex items-center space-x-2 text-yellow-400 mt-1">
                  <Clock className="h-4 w-4" />
                  <span className="font-medium text-sm">{module.duration}</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg"
              aria-label="Cerrar modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Contenido principal con scroll suave */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)] custom-scrollbar">
          <div className="space-y-6">
            {/* Descripción */}
            <div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {module.description}
              </p>
            </div>

            {/* Separador visual */}
            <div className="flex items-center space-x-4">
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent flex-1"></div>
              <div className="flex items-center space-x-2 text-yellow-400">
                <BookOpen className="h-4 w-4" />
                <span className="text-sm font-medium">
                  CONTENIDO DEL MÓDULO
                </span>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent flex-1"></div>
            </div>

            {/* Lista de contenido mejorada */}
            <div className="space-y-3">
              {module.content.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:bg-gray-800/70 transition-colors duration-200 group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-200" />
                  </div>
                  <span className="text-gray-300 group-hover:text-gray-100 transition-colors duration-200 leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer con acción */}
            <div className="pt-4 border-t border-gray-700/50">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">
                  {module.content.length} temas incluidos
                </div>
                <div className="flex items-center space-x-2 text-yellow-400">
                  <span className="text-sm">Listo para comenzar</span>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos personalizados para el scrollbar */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(55, 65, 81, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(251, 191, 36, 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(251, 191, 36, 0.7);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ProgramModal;
