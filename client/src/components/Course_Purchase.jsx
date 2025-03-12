import React, { useState } from 'react';
import { ArrowRight, Check, QrCode } from 'lucide-react';

const CoursePurchase = ({ handlePurchase, nequiQrCode }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    // Simulación de proceso de registro
    setTimeout(() => {
      handlePurchase && handlePurchase();
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
      {/* Sección de la izquierda con imagen y contenido principal */}
      <div className="relative w-full md:w-2/3 bg-gradient-to-br from-gray-800 to-black p-8">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute inset-0 bg-yellow-400/10"></div>
          {/* Patrón geométrico de fondo */}
          <svg className="absolute h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(245, 245, 245, 0.1)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">CURSO</span>
            <br />
            <span className="text-yellow-400">PROGRAMACIÓN</span>
          </h1>
          
          <p className="text-xl text-white mb-6">DESARROLLO WEB FULL STACK</p>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700 mb-8">
            <h3 className="text-lg font-medium text-yellow-400 mb-2">¿Qué incluye?</h3>
            <ul className="space-y-2">
              {[
                "Acceso a todas las clases en vivo",
                "Material didáctico y recursos",
                "Proyectos prácticos del mundo real",
                "Soporte técnico durante el curso",
                "Proyecto Individual",
                "Proyecto Final"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="bg-gray-800/40 p-4 rounded-lg flex-1 min-w-[140px]">
              <p className="text-gray-400 text-sm">Duración</p>
              <p className="text-white font-medium">24 Semanas</p>
            </div>
            <div className="bg-gray-800/40 p-4 rounded-lg flex-1 min-w-[140px]">
              <p className="text-gray-400 text-sm">Modalidad</p>
              <p className="text-white font-medium">100% Online</p>
            </div>
            <div className="bg-gray-800/40 p-4 rounded-lg flex-1 min-w-[140px]">
              <p className="text-gray-400 text-sm">Nivel</p>
              <p className="text-white font-medium">Principiante</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de la derecha para el registro y pago */}
      <div className="w-full md:w-1/3 bg-black p-8 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white mb-1">Curso Programación</h2>
          <div className="flex items-baseline mb-6">
            <span className="text-gray-400 mr-2">COP</span>
            <span className="text-4xl font-bold text-yellow-400">30.000</span>
          </div>

          <div className="mb-6">
            <p className="text-gray-400 mb-3">Paga fácilmente con Nequi:</p>
            
            {/* QR de Nequi */}
            <div className="bg-white p-4 rounded-lg flex flex-col justify-center items-center">
              {nequiQrCode ? (
                <img 
                  src={nequiQrCode} 
                  alt="Código QR para pago con Nequi" 
                  className="w-full max-w-[200px] h-auto mb-2"
                />
              ) : (
                <div className="text-center p-4 mb-2">
                  <QrCode className="w-16 h-16 text-gray-800 mx-auto mb-2" />
                </div>
              )}
              <p className="text-black text-center text-sm">Escanea este código con la app de Nequi</p>
            </div>
          </div>
        </div>

        <div>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transform hover:scale-105 transition-all disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer flex justify-center items-center"
          >
            QUIERO COMENZAR
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          
          <div className="mt-6 space-y-4">
            <div className="flex items-center">
              <span className="text-gray-400 mr-2">Idioma:</span>
              <span className="text-white">Español</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-400 mr-2">Nivel:</span>
              <span className="text-white">Principiante</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-400 mr-2">Para:</span>
              <span className="text-white">Estudiantes universitarios</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePurchase;