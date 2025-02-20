import React from "react";
import { 
  X  
} from 'lucide-react';

// Componente Modal del Programa
const ProgramModal = ({ module, onClose }) => {
    if (!module) return null;
  
    return (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
        <div className="bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-white">{module.title}</h2>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-yellow-400">
                {module.icon}
                <span className="font-medium">{module.duration}</span>
              </div>
              <p className="text-gray-300">{module.description}</p>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-white">Contenido:</h3>
                <ul className="space-y-2">
                  {module.content.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-yellow-400 mt-1">•</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

  export default ProgramModal;