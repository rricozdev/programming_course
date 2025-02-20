import React from 'react';


// Componente Card del Programa
const ProgramCard = ({ module, onSelect }) => {
    return (
      <div 
        onClick={() => onSelect(module)}
        className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer transform transition-all hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-start">
            {module.icon}
            <span className="text-yellow-400 text-sm font-medium px-2 py-1 bg-yellow-400/10 rounded">
              {module.duration}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-white">{module.title}</h3>
          <p className="text-gray-400 text-sm">{module.description}</p>
        </div>
      </div>
    );
  };

  export default ProgramCard;