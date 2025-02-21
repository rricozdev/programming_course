import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeIcon, ArrowLeft } from 'lucide-react';

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Animated Error Number */}
        <div className="relative">
          <h1 className="text-[12rem] md:text-[16rem] font-bold text-yellow-400/20 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl md:text-6xl font-bold text-yellow-400 bg-clip-text">
              ¡Página no encontrada!
            </h2>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <p className="text-xl md:text-2xl text-gray-300">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>
          <p className="text-gray-400">
            Por favor, verifica la URL o regresa a la página principal.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-300 transform hover:scale-105 transition-all w-full sm:w-auto"
          >
            <HomeIcon className="h-5 w-5" />
            <span>Ir al inicio</span>
          </button>
          
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transform hover:scale-105 transition-all w-full sm:w-auto"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Volver atrás</span>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-1/4 w-24 h-24 bg-yellow-400/5 rounded-full blur-xl"></div>
          <div className="absolute right-0 bottom-1/4 w-32 h-32 bg-yellow-400/5 rounded-full blur-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Error404;