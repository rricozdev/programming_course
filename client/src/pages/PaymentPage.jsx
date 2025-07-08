// // import React, { useState } from "react";
// // import { useNavigate, Link } from "react-router-dom";
// // import nequiQrCode from "../assets/QR.png";
// // import {
// //   Smartphone,
// //   MessageSquare,
// //   ArrowRight,
// //   Home,
// //   ChevronLeft,
// // } from "lucide-react";

// // const PaymentPage = () => {
// //   const navigate = useNavigate();
// //   const [loading, setLoading] = useState(false);
// //   const [isPaid, setIsPaid] = useState(false);

// //   const handleContinue = () => {
// //     if (isPaid) {
// //       setLoading(true);
// //       setTimeout(() => {
// //         navigate("/registro");
// //       }, 2000);
// //     } else {
// //       alert("Por favor, realiza el pago antes de continuar.");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6">
// //       {/* Botón volver al inicio */}
// //       <div className="max-w-md w-full mx-auto mb-4">
// //         <Link
// //           to="/"
// //           className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors duration-300 w-fit"
// //         >
// //           <ChevronLeft size={20} />
// //           <Home size={16} className="mr-1" />
// //           <span>Volver al inicio</span>
// //         </Link>
// //       </div>

// //       <div className="max-w-md w-full mx-auto bg-gray-800 rounded-xl shadow-2xl p-8">
// //         <div className="text-center mb-8">
// //           <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">
// //             Pago del Curso
// //           </h1>
// //           <div className="h-1 w-24 bg-yellow-400 mx-auto rounded"></div>
// //         </div>

// //         {/* Card con información de precio */}
// //         <div className="bg-gray-700 rounded-lg p-4 mb-6 border-l-4 border-yellow-400">
// //           <p className="text-lg text-white mb-2 font-medium">
// //             Precio del curso:
// //           </p>
// //           <p className="text-2xl font-bold text-yellow-400">$59.999 COP/MES</p>
// //           <p className="text-gray-300 text-sm">Plan de 6 meses</p>
// //         </div>

// //         <p className="text-gray-300 mb-6 text-center">
// //           Escanea el código QR para realizar el pago y acceder al curso
// //         </p>

// //         {/* Código QR con diseño mejorado */}
// //         <div className="flex justify-center mb-6">
// //           <div className="p-3 bg-white rounded-lg shadow-lg">
// //             <img
// //               src={nequiQrCode}
// //               alt="Código QR de pago"
// //               className="w-56 h-56 object-contain"
// //             />
// //           </div>
// //         </div>

// //         {/* Información de contacto */}
// //         <div className="bg-gray-700 rounded-lg p-4 mb-6">
// //           <p className="text-yellow-400 text-lg font-semibold mb-3 flex items-center">
// //             <Smartphone size={20} className="mr-2" /> Enviar comprobante a:
// //           </p>
// //           <div className="text-gray-200 space-y-3 ml-2">
// //             <p className="flex items-center">
// //               <MessageSquare size={18} className="text-yellow-400 mr-2" />
// //               <span className="mr-2">WhatsApp:</span>
// //               <span className="font-mono bg-gray-600 px-2 py-1 rounded text-yellow-200">
// //                 +57 313 534 4581
// //               </span>
// //             </p>
// //             <p className="flex items-center">
// //               <MessageSquare size={18} className="text-yellow-400 mr-2" />
// //               <span className="mr-2">WhatsApp:</span>
// //               <span className="font-mono bg-gray-600 px-2 py-1 rounded text-yellow-200">
// //                 +57 320 551 0452
// //               </span>
// //             </p>
// //           </div>
// //         </div>

// //         {/* Checkbox con diseño mejorado */}
// //         <div className="flex items-center bg-gray-700 p-4 rounded-lg mb-6">
// //           <input
// //             type="checkbox"
// //             id="confirmPayment"
// //             checked={isPaid}
// //             onChange={() => setIsPaid(!isPaid)}
// //             className="w-5 h-5 text-yellow-400 bg-gray-600 border-gray-500 rounded focus:ring-yellow-400 focus:ring-2"
// //           />
// //           <label
// //             htmlFor="confirmPayment"
// //             className="ml-3 text-gray-200 font-medium cursor-pointer select-none flex-1"
// //           >
// //             He realizado el pago
// //           </label>
// //         </div>

// //         {/* Botón para continuar */}
// //         <button
// //           onClick={handleContinue}
// //           className={`w-full py-4 rounded-lg text-lg font-bold transition-all duration-300 flex items-center justify-center ${
// //             isPaid
// //               ? "bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 hover:from-yellow-400 hover:to-yellow-300 shadow-lg hover:shadow-xl"
// //               : "bg-gray-600 text-gray-400 cursor-not-allowed"
// //           }`}
// //           disabled={!isPaid || loading}
// //         >
// //           {loading ? (
// //             <div className="flex items-center">
// //               <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
// //                 <circle
// //                   className="opacity-25"
// //                   cx="12"
// //                   cy="12"
// //                   r="10"
// //                   stroke="currentColor"
// //                   strokeWidth="4"
// //                   fill="none"
// //                 ></circle>
// //                 <path
// //                   className="opacity-75"
// //                   fill="currentColor"
// //                   d="M4 12a8 8 0 018-8V0L4 4l4 4V4a8 8 0 01-8 8h4z"
// //                 ></path>
// //               </svg>
// //               Redirigiendo...
// //             </div>
// //           ) : (
// //             <>
// //               <span>Continuar al Registro</span>
// //               <ArrowRight size={18} className="ml-2" />
// //             </>
// //           )}
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PaymentPage;

// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import nequiQrCode from "../assets/QR.png";
// import {
//   Smartphone,
//   MessageSquare,
//   ArrowRight,
//   Home,
//   ChevronLeft,
// } from "lucide-react";

// const PaymentPage = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [isPaid, setIsPaid] = useState(false);

//   const handleContinue = () => {
//     if (isPaid) {
//       setLoading(true);
//       setTimeout(() => {
//         navigate("/registro");
//       }, 2000);
//     } else {
//       alert("Por favor, realiza el pago antes de continuar.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white px-4 py-10">
//       {/* Botón volver al inicio */}
//       <div className="max-w-xl mx-auto mb-6">
//         <Link
//           to="/"
//           className="inline-flex items-center text-gray-400 hover:text-yellow-400 transition-colors"
//         >
//           <ChevronLeft size={20} />
//           <Home size={16} className="ml-1 mr-2" />
//           <span className="text-sm font-medium">Volver al inicio</span>
//         </Link>
//       </div>

//       <div className="max-w-xl mx-auto bg-gray-800 rounded-2xl shadow-2xl p-8">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-white">
//             Confirmación de Pago
//           </h1>
//           <p className="text-gray-400 mt-2">
//             Escanea el QR y accede a una experiencia práctica y guiada en
//             programación.
//           </p>
//           <div className="h-1 w-16 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
//         </div>

//         {/* Información de precio */}
//         <div className="bg-gray-700 rounded-xl p-4 border border-yellow-500 mb-6 text-center">
//           <p className="text-sm text-gray-300 mb-1">Valor mensual del curso</p>
//           <p className="text-2xl font-bold text-yellow-400">$59.999 COP</p>
//           <p className="text-xs text-gray-400">Plan de 6 meses</p>
//         </div>

//         {/* QR */}
//         <div className="flex justify-center mb-6">
//           <div className="bg-white p-3 rounded-lg shadow-xl">
//             <img
//               src={nequiQrCode}
//               alt="Código QR Nequi"
//               className="w-52 h-52 object-contain"
//             />
//           </div>
//         </div>

//         {/* Contacto para comprobante */}
//         <div className="bg-gray-700 rounded-xl p-4 mb-6">
//           <p className="text-yellow-400 font-semibold flex items-center mb-3">
//             <Smartphone size={20} className="mr-2" />
//             Enviar comprobante a:
//           </p>
//           <div className="space-y-2 ml-1">
//             {["+57 313 534 4581", "+57 320 551 0452"].map((phone, i) => (
//               <p key={i} className="flex items-center text-sm text-gray-300">
//                 <MessageSquare size={18} className="text-yellow-400 mr-2" />
//                 <span className="bg-gray-600 px-2 py-1 rounded text-yellow-300 font-mono">
//                   {phone}
//                 </span>
//               </p>
//             ))}
//           </div>
//         </div>

//         {/* Checkbox */}
//         <div className="flex items-center bg-gray-700 p-3 rounded-lg mb-6">
//           <input
//             type="checkbox"
//             id="confirmPayment"
//             checked={isPaid}
//             onChange={() => setIsPaid(!isPaid)}
//             className="w-5 h-5 text-yellow-500 bg-gray-800 border-gray-600 rounded focus:ring-yellow-500 focus:ring-2"
//           />
//           <label
//             htmlFor="confirmPayment"
//             className="ml-3 text-gray-200 cursor-pointer select-none text-sm"
//           >
//             He realizado el pago y envié el comprobante
//           </label>
//         </div>

//         {/* Botón continuar */}
//         <button
//           onClick={handleContinue}
//           disabled={!isPaid || loading}
//           className={`w-full py-4 rounded-xl text-lg font-bold flex items-center justify-center transition-all duration-300 ${
//             isPaid
//               ? "bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 hover:from-yellow-400 hover:to-yellow-300 shadow-md hover:shadow-xl"
//               : "bg-gray-600 text-gray-400 cursor-not-allowed"
//           }`}
//         >
//           {loading ? (
//             <>
//               <svg
//                 className="animate-spin h-5 w-5 mr-2"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   stroke="currentColor"
//                   strokeWidth="4"
//                 ></circle>
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 018-8V0L4 4l4 4V4a8 8 0 01-8 8h4z"
//                 ></path>
//               </svg>
//               Redirigiendo...
//             </>
//           ) : (
//             <>
//               Continuar al Registro
//               <ArrowRight size={18} className="ml-2" />
//             </>
//           )}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;

import React, { useState } from "react";

import {
  Smartphone,
  MessageSquare,
  ArrowRight,
  Home,
  ChevronLeft,
  CheckCircle,
  Clock,
  Users,
  BookOpen,
  Star,
} from "lucide-react";
import nequiQrCode from "../assets/QR.png";

const PaymentPage = () => {
  const [loading, setLoading] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const handleContinue = () => {
    if (isPaid) {
      setLoading(true);
      setTimeout(() => {
        // navigate("/registro");
        console.log("Navigating to registration...");
      }, 2000);
    } else {
      alert("Por favor, realiza el pago antes de continuar.");
    }
  };

  const courseFeatures = [
    { icon: BookOpen, text: "Contenido práctico y actualizado" },
    { icon: Users, text: "Mentorías personalizadas" },
    { icon: Clock, text: "Acceso guiado 2h / 3 veces por semana" },
    { icon: Star, text: "90 % de estudiantes satisfechos" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-4 py-8">
      {/* Back to home button */}
      <div className="max-w-2xl mx-auto mb-8">
        <a
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-yellow-400 transition-all duration-300 group"
        >
          <div className="flex items-center bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg transition-all duration-300">
            <ChevronLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform duration-300"
            />
            <Home size={16} className="ml-1 mr-2" />
            <span className="text-sm font-medium">Volver al inicio</span>
          </div>
        </a>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
            Confirma tu
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 ml-2">
              Inscripción
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-lg mx-auto leading-relaxed">
            Escanea el código QR y accede a una experiencia práctica y guiada en
            programación
          </p>
        </div>

        {/* Course features */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {courseFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10"
            >
              <div className="flex items-center">
                <div className="bg-yellow-500/20 p-2 rounded-lg mr-3">
                  <feature.icon size={18} className="text-yellow-400" />
                </div>
                <p className="text-sm text-gray-300 font-medium">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Main payment card */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden">
          {/* Price section */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 border-b border-yellow-500/30 p-6">
            <div className="text-center">
              <p className="text-sm text-gray-300 mb-2">Inversión mensual</p>
              <div className="flex items-center justify-center mb-2">
                <span className="text-4xl font-bold text-yellow-400">
                  $59.999
                </span>
                <span className="text-gray-300 ml-2">COP</span>
              </div>
              <div className="inline-flex items-center bg-gray-700 px-3 py-1 rounded-full">
                <Clock size={14} className="text-yellow-400 mr-1" />
                <span className="text-xs text-gray-300">
                  Plan completo de 6 meses
                </span>
              </div>
            </div>
          </div>

          {/* QR Code section */}
          <div className="p-8">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Realiza tu pago
              </h3>
              <p className="text-gray-400 text-sm">
                Escanea con tu app de Nequi o pago móvil
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <div className="relative">
                <img
                  src={nequiQrCode}
                  alt="QR de pago Nequi"
                  className="w-56 h-56 object-contain rounded-lg"
                />

                <div className="absolute -top-2 -right-2 bg-yellow-500 text-gray-900 p-2 rounded-full">
                  <Smartphone size={16} />
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="bg-gray-700 rounded-xl p-6 mb-6">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500/20 p-2 rounded-lg mr-3">
                  <MessageSquare size={18} className="text-yellow-400" />
                </div>
                <h4 className="text-lg font-semibold text-white">
                  Enviar comprobante
                </h4>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Envía tu comprobante de pago a cualquiera de estos números:
              </p>
              <div className="space-y-3">
                {["+57 313 534 4581", "+57 320 551 0452"].map((phone, i) => (
                  <div
                    key={i}
                    className="flex items-center bg-gray-800 p-3 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                  >
                    <div className="bg-yellow-500/20 p-2 rounded-lg mr-3">
                      <Smartphone size={16} className="text-yellow-400" />
                    </div>
                    <span className="text-yellow-300 font-mono text-sm">
                      {phone}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Confirmation checkbox */}
            <div className="mb-6">
              <label className="flex items-center bg-gray-700 p-4 rounded-xl cursor-pointer hover:bg-gray-600 transition-colors">
                <input
                  type="checkbox"
                  checked={isPaid}
                  onChange={() => setIsPaid(!isPaid)}
                  className="form-checkbox h-5 w-5 text-yellow-400 bg-gray-800 border-gray-600 rounded focus:ring-yellow-500"
                />
                <span className="ml-3 text-gray-200 font-medium">
                  He realizado el pago y envié el comprobante
                </span>
              </label>
            </div>

            {/* Continue button */}
            <button
              onClick={handleContinue}
              disabled={!isPaid || loading}
              className={`w-full py-4 rounded-xl font-bold flex items-center justify-center transition-all duration-300 text-lg ${
                isPaid
                  ? "bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 hover:from-yellow-400 hover:to-yellow-300 shadow-md"
                  : "bg-gray-700 text-gray-400 cursor-not-allowed"
              }`}
            >
              {loading ? (
                <div className="flex items-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3"
                    viewBox="0 0 24 24"
                  >
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
      </div>
    </div>
  );
};

export default PaymentPage;
