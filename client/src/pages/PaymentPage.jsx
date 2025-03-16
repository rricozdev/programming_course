import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import nequiQrCode from "../assets/QR.png";
import { Smartphone, MessageSquare, ArrowRight, Home, ChevronLeft } from "lucide-react";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const handleContinue = () => {
    if (isPaid) {
      setLoading(true);
      setTimeout(() => {
        navigate("/registro");
      }, 2000);
    } else {
      alert("Por favor, realiza el pago antes de continuar.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6">
      {/* Botón volver al inicio */}
      <div className="max-w-md w-full mx-auto mb-4">
        <Link 
          to="/"
          className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors duration-300 w-fit"
        >
          <ChevronLeft size={20} />
          <Home size={16} className="mr-1" />
          <span>Volver al inicio</span>
        </Link>
      </div>
      
      <div className="max-w-md w-full mx-auto bg-gray-800 rounded-xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">Pago del Curso</h1>
          <div className="h-1 w-24 bg-yellow-400 mx-auto rounded"></div>
        </div>

        {/* Card con información de precio */}
        <div className="bg-gray-700 rounded-lg p-4 mb-6 border-l-4 border-yellow-400">
          <p className="text-lg text-white mb-2 font-medium">Precio del curso:</p>
          <p className="text-2xl font-bold text-yellow-400">$59.999 COP/MES</p>
          <p className="text-gray-300 text-sm">Plan de 6 meses</p>
        </div>

        <p className="text-gray-300 mb-6 text-center">
          Escanea el código QR para realizar el pago y acceder al curso
        </p>

        {/* Código QR con diseño mejorado */}
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-white rounded-lg shadow-lg">
            <img 
              src={nequiQrCode} 
              alt="Código QR de pago" 
              className="w-56 h-56 object-contain" 
            />
          </div>
        </div>

        {/* Información de contacto */}
        <div className="bg-gray-700 rounded-lg p-4 mb-6">
          <p className="text-yellow-400 text-lg font-semibold mb-3 flex items-center">
            <Smartphone size={20} className="mr-2" /> Enviar comprobante a:
          </p>
          <div className="text-gray-200 space-y-3 ml-2">
            <p className="flex items-center">
              <MessageSquare size={18} className="text-yellow-400 mr-2" />
              <span className="mr-2">WhatsApp:</span>
              <span className="font-mono bg-gray-600 px-2 py-1 rounded text-yellow-200">+57 313 534 4581</span>
            </p>
            <p className="flex items-center">
              <MessageSquare size={18} className="text-yellow-400 mr-2" />
              <span className="mr-2">WhatsApp:</span>
              <span className="font-mono bg-gray-600 px-2 py-1 rounded text-yellow-200">+57 320 551 0452</span>
            </p>
          </div>
        </div>

        {/* Checkbox con diseño mejorado */}
        <div className="flex items-center bg-gray-700 p-4 rounded-lg mb-6">
          <input
            type="checkbox"
            id="confirmPayment"
            checked={isPaid}
            onChange={() => setIsPaid(!isPaid)}
            className="w-5 h-5 text-yellow-400 bg-gray-600 border-gray-500 rounded focus:ring-yellow-400 focus:ring-2"
          />
          <label htmlFor="confirmPayment" className="ml-3 text-gray-200 font-medium cursor-pointer select-none flex-1">
            He realizado el pago
          </label>
        </div>

        {/* Botón para continuar */}
        <button
          onClick={handleContinue}
          className={`w-full py-4 rounded-lg text-lg font-bold transition-all duration-300 flex items-center justify-center ${
            isPaid
              ? "bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 hover:from-yellow-400 hover:to-yellow-300 shadow-lg hover:shadow-xl"
              : "bg-gray-600 text-gray-400 cursor-not-allowed"
          }`}
          disabled={!isPaid || loading}
        >
          {loading ? (
            <div className="flex items-center">
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0L4 4l4 4V4a8 8 0 01-8 8h4z"
                ></path>
              </svg>
              Redirigiendo...
            </div>
          ) : (
            <>
              <span>Continuar al Registro</span>
              <ArrowRight size={18} className="ml-2" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;