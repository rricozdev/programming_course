
import React from "react";

const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="w-16 h-16 border-8 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-yellow-400 mt-4 text-xl font-semibold">
          Cargando...
        </p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
