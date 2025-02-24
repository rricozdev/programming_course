// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";
// import { FaReact, FaNodeJs, FaGitAlt, FaCss3Alt } from "react-icons/fa";
// import { CiDatabase } from "react-icons/ci";
// import {
//   SiExpress,
//   SiSequelize,
//   SiJavascript,
//   SiMongodb,
// } from "react-icons/si";

// import Program from "../components/Program";
// import LoadingOverlay from "../components/LoadingOverlay";
// import imageBg from "../assets/bgcurso2.jpg";
// import logo from "../assets/labs.png";
// import Footer from "../components/Footer";

// const LandingPage = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [activeIcon, setActiveIcon] = useState(null);
//   const navigate = useNavigate();

//   const contactsManager = {
//     contacts: [
//       {
//         id: 1,
//         name: "Arch",
//         role: "Instructor",
//         phone: "573135344581",
//         platform: "whatsapp",
//       },
//       {
//         id: 2,
//         name: "Tiago",
//         role: "Instructor",
//         phone: "573205510452",
//         platform: "whatsapp",
//       },
//     ],

//     messages: {
//       whatsapp:
//         "¡Hola! Estoy interesado en el curso de programación. ¿Podrías darme más información?",
//     },

//     openChat(contact) {
//       const message = encodeURIComponent(this.messages[contact.platform]);

//       if (contact.platform === "whatsapp") {
//         const whatsappUrl = `whatsapp://send?phone=${contact.phone}&text=${message}`;
//         try {
//           window.location.href = whatsappUrl;
//         } catch (error) {
//           window.location.href = `https://wa.me/${contact.phone}?text=${message}`;
//         }
//       }
//     },
//   };

//   const scrollToContact = () => {
//     document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
//   };

//   const handleClickCronograma = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       navigate("/cronograma")
//     }, 3000);
//   }

//   const handleClick = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       navigate("/registro");
//     }, 3000);
//   };

//   return (
//     <div className="min-h-screen bg-gray-900">
//       {loading && <LoadingOverlay />}

//       {/* Navbar */}
//       <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-40">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex-shrink-0">
//               <img src={logo} alt="Logo" className="h-12 w-42" />
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center space-x-4">
//               <button
//                 onClick={handleClickCronograma}
//                 className="bg-slate-900 p-4 text-white px-4 py-2 rounded-lg hover:bg-slate-600 cursor-pointer"
//               >
//                 Cronograma
//               </button>
//               <button
//                 onClick={scrollToContact}
//                 className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300 cursor-pointer"
//               >
//                 Contáctanos
//               </button>
//             </div>

//             {/* Mobile menu button */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="text-gray-300 hover:text-yellow-400"
//               >
//                 {isMenuOpen ? (
//                   <X className="h-6 w-6" />
//                 ) : (
//                   <Menu className="h-6 w-6" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-gray-800">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               <button
//                 onClick={scrollToContact}
//                 disabled={loading}
//                 className="block w-full text-center bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300 disabled:opacity-75 disabled:cursor-not-allowed"
//               >
//                 Contáctanos
//               </button>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-16">
//         <div className="relative h-screen">
//           <img
//             src={imageBg}
//             alt="Curso de Programación"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90">
//             <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
//               <div className="space-y-6 max-w-3xl">
//                 <h1 className="text-5xl md:text-7xl font-bold">
//                   <span className="text-white">CURSO</span>
//                   <br />
//                   <span className="text-yellow-400">PROGRAMACIÓN</span>
//                 </h1>
//                 <p className="text-2xl text-white">100% ONLINE</p>
//                 <p className="text-3xl md:text-4xl text-yellow-400 font-semibold relative group">
//                   <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-yellow-500">
//                     {">"}
//                   </span>
//                   ¿Eres estudiante de Ingeniería de Software y aún no dominas la
//                   programación?
//                   <span className="absolute -right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-yellow-500">
//                     {"<"}
//                   </span>
//                 </p>
//                 <div className="space-y-2">
//                   <p className="text-2xl text-white font-semibold">
//                     ¡Regístrate ya!
//                   </p>
//                 </div>
//                 <button
//                   onClick={handleClick}
//                   disabled={loading}
//                   className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transform hover:scale-105 transition-all disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
//                 >
//                   Regístrate
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Program Section */}
//       <Program />

//       {/* Contact Section */}
//       <section id="contact" className="py-20 bg-black">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//               Regístrate ahora y empieza tu camino en la programación
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <div className="bg-gray-800 rounded-lg p-6">
//                 <h3 className="text-xl font-semibold text-yellow-400 mb-4">
//                   Contacta por WhatsApp
//                 </h3>
//                 {contactsManager.contacts.map((contact) => (
//                   <div
//                     key={contact.id}
//                     className="flex items-center space-x-4 mb-4 cursor-pointer hover:bg-gray-700 p-2 rounded-lg"
//                     onClick={() => contactsManager.openChat(contact)}
//                   >
//                     <FaWhatsapp className="text-yellow-400 h-5 w-5" />
//                     <div>
//                       <p className="text-gray-300 capitalize">{contact.name}</p>
//                       <p className="text-gray-400 text-sm">{contact.role}</p>
//                       <p className="text-gray-400">{contact.phone}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Tech Icons Section */}
//             <div className="flex flex-col items-center space-y-8">
//               {/* Primera fila: 3 íconos */}
//               <div className="flex justify-center space-x-12">
//                 <div className="group relative">
//                   <FaReact
//                     className="text-6xl text-blue-400 cursor-pointer transition-all duration-300 ease-in-out
//                     group-hover:text-blue-300 group-hover:scale-110
//                     group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]"
//                     title="React"
//                   />
//                   <div className="absolute -inset-2 bg-blue-400/20 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
//                 </div>

//                 <div className="group relative">
//                   <FaNodeJs
//                     className="text-6xl text-green-600 cursor-pointer transition-all duration-300 ease-in-out
//                     group-hover:text-green-500 group-hover:scale-110
//                     group-hover:drop-shadow-[0_0_12px_rgba(22,163,74,0.8)]"
//                     title="Node.js"
//                   />
//                   <div className="absolute -inset-2 bg-green-500/20 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
//                 </div>

//                 <div className="group relative">
//                   <SiExpress
//                     className="text-6xl text-green-400 cursor-pointer transition-all duration-300 ease-in-out
//                     group-hover:text-green-300 group-hover:scale-110
//                     group-hover:drop-shadow-[0_0_12px_rgba(74,222,128,0.8)]"
//                     title="Express"
//                   />
//                   <div className="absolute -inset-2 bg-green-300/20 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
//                 </div>
//               </div>

//               {/* Segunda fila: 3 íconos */}
//               <div className="flex justify-center space-x-12">
//                 <div className="group relative">
//                   <SiSequelize
//                     className="text-6xl text-blue-600 cursor-pointer transition-all duration-300 ease-in-out
//                     group-hover:text-blue-500 group-hover:scale-110
//                     group-hover:drop-shadow-[0_0_12px_rgba(37,99,235,0.8)]"
//                     title="Sequelize"
//                   />
//                   <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
//                 </div>

//                 <div className="group relative">
//                   <SiMongodb
//                     className="text-6xl text-green-700 cursor-pointer transition-all duration-300 ease-in-out
//                     group-hover:text-green-600 group-hover:scale-110
//                     group-hover:drop-shadow-[0_0_12px_rgba(21,128,61,0.8)]"
//                     title="MongoDB"
//                   />
//                   <div className="absolute -inset-2 bg-green-600/20 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
//                 </div>

//                 <div className="group relative">
//                   <SiJavascript
//                     className="text-6xl text-yellow-400 cursor-pointer transition-all duration-300 ease-in-out
//                     group-hover:text-yellow-300 group-hover:scale-110
//                     group-hover:drop-shadow-[0_0_12px_rgba(250,204,21,0.8)]"
//                     title="JavaScript"
//                   />
//                   <div className="absolute -inset-2 bg-yellow-300/20 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
//                 </div>
//               </div>

//               {/* Tercera fila: 3 íconos */}
//               <div className="flex justify-center space-x-12">
//                 <div className="group relative">
//                   <FaGitAlt
//                     className="text-6xl text-orange-500 cursor-pointer transition-all duration-300 ease-in-out
//                     group-hover:text-orange-400 group-hover:scale-110
//                     group-hover:drop-shadow-[0_0_12px_rgba(249,115,22,0.8)]"
//                     title="Git"
//                   />
//                   <div className="absolute -inset-2 bg-orange-400/20 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
//                 </div>

//                 <div className="group relative">
//                   <CiDatabase
//                     className="text-6xl text-blue-500 cursor-pointer transition-all duration-300 ease-in-out
//                     group-hover:text-blue-400 group-hover:scale-110
//                     group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]"
//                     title="Database"
//                   />
//                   <div className="absolute -inset-2 bg-blue-400/20 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
//                 </div>

//                 <div className="group relative">
//                   <FaCss3Alt
//                     className="text-6xl text-blue-300 cursor-pointer transition-all duration-300 ease-in-out
//                     group-hover:text-blue-200 group-hover:scale-110
//                     group-hover:drop-shadow-[0_0_12px_rgba(147,197,253,0.8)]"
//                     title="CSS3"
//                   />
//                   <div className="absolute -inset-2 bg-blue-200/20 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <Footer />
//     </div>
//   );
// };

// export default LandingPage;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FaReact, FaNodeJs, FaGitAlt, FaCss3Alt } from "react-icons/fa";
import { CiDatabase } from "react-icons/ci";
import {
  SiExpress,
  SiSequelize,
  SiJavascript,
  SiMongodb,
} from "react-icons/si";

import Program from "../components/Program";
import LoadingOverlay from "../components/LoadingOverlay";
import imageBg from "../assets/bgcurso2.jpg";
import logo from "../assets/labs.png";
import Footer from "../components/Footer";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false); // Mantenemos el estado de carga
  const navigate = useNavigate();

  const contactsManager = {
    contacts: [
      {
        id: 1,
        name: "Arch",
        role: "Instructor",
        phone: "573135344581",
        platform: "whatsapp",
      },
      {
        id: 2,
        name: "Tiago",
        role: "Instructor",
        phone: "573205510452",
        platform: "whatsapp",
      },
    ],

    messages: {
      whatsapp:
        "¡Hola! Estoy interesado en el curso de programación. ¿Podrías darme más información?",
    },

    openChat(contact) {
      const message = encodeURIComponent(this.messages[contact.platform]);

      if (contact.platform === "whatsapp") {
        const whatsappUrl = `whatsapp://send?phone=${contact.phone}&text=${message}`;
        try {
          window.location.href = whatsappUrl;
        } catch (error) {
          window.location.href = `https://wa.me/${contact.phone}?text=${message}`;
        }
      }
    },
  };

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  const handleClickCronograma = () => {
    setLoading(true); // Mostrar el spinner
    setTimeout(() => {
      navigate("/cronograma"); // Navegar después de un tiempo
    }, 1000); // Ajusta el tiempo según sea necesario
  };

  const handleClick = () => {
    setLoading(true); // Mostrar el spinner
    setTimeout(() => {
      navigate("/registro"); // Navegar después de un tiempo
    }, 1000); // Ajusta el tiempo según sea necesario
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {loading && <LoadingOverlay />} {/* Mostrar el spinner si loading es true */}

      {/* Navbar */}
      <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <img src={logo} alt="Logo" className="h-12 w-42" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={handleClickCronograma}
                disabled={loading}
                className="bg-slate-900 p-4 text-white px-4 py-2 rounded-lg hover:bg-slate-600 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
              >
                Cronograma
              </button>
              <button
                onClick={scrollToContact}
                className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300 cursor-pointer"
              >
                Contáctanos
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-yellow-400"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
            <button
                onClick={handleClickCronograma}
                disabled={loading}
                className="block w-full text-center bg-slate-900 p-4 text-white px-4 py-2 rounded-lg hover:bg-slate-600 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed mb-4"
              >
                Cronograma
              </button>
              <button
                onClick={scrollToContact}
                className="block w-full text-center bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300 cursor-pointer"
              >
                Contáctanos
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-16">
        <div className="relative h-screen">
          <img
            src={imageBg}
            alt="Curso de Programación"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90">
            <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
              <div className="space-y-6 max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-bold">
                  <span className="text-white">CURSO</span>
                  <br />
                  <span className="text-yellow-400">PROGRAMACIÓN</span>
                </h1>
                <p className="text-2xl text-white">100% ONLINE</p>
                <p className="text-3xl md:text-4xl text-yellow-400 font-semibold relative group">
                  <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-yellow-500">
                    {">"}
                  </span>
                  ¿Eres estudiante de Ingeniería de Software y aún no dominas la
                  programación?
                  <span className="absolute -right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-yellow-500">
                    {"<"}
                  </span>
                </p>
                <div className="space-y-2">
                  <p className="text-2xl text-white font-semibold">
                    ¡Regístrate ya!
                  </p>
                </div>
                <button
                  onClick={handleClick}
                  disabled={loading}
                  className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transform hover:scale-105 transition-all disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                >
                  Regístrate
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <Program />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Regístrate ahora y empieza tu camino en la programación
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                  Contacta por WhatsApp
                </h3>
                {contactsManager.contacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="flex items-center space-x-4 mb-4 cursor-pointer hover:bg-gray-700 p-2 rounded-lg"
                    onClick={() => contactsManager.openChat(contact)}
                  >
                    <FaWhatsapp className="text-yellow-400 h-5 w-5" />
                    <div>
                      <p className="text-gray-300 capitalize">{contact.name}</p>
                      <p className="text-gray-400 text-sm">{contact.role}</p>
                      <p className="text-gray-400">{contact.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Icons Section */}
            <div className="flex flex-col items-center space-y-8">
              {/* Primera fila: 3 íconos */}
              <div className="flex justify-center space-x-12">
                <div className="group relative">
                  <FaReact
                    className="text-6xl text-blue-400 cursor-pointer transition-all duration-300 ease-in-out
                    group-hover:text-blue-300 group-hover:scale-110
                    group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                    title="React"
                  />
                  <div className="absolute -inset-2 bg-blue-400/20 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                </div>

                <div className="group relative">
                  <FaNodeJs
                    className="text-6xl text-green-600 cursor-pointer transition-all duration-300 ease-in-out
                    group-hover:text-green-500 group-hover:scale-110
                    group-hover:drop-shadow-[0_0_12px_rgba(22,163,74,0.8)]"
                    title="Node.js"
                  />
                  <div className="absolute -inset-2 bg-green-500/20 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                </div>

                <div className="group relative">
                  <SiExpress
                    className="text-6xl text-green-400 cursor-pointer transition-all duration-300 ease-in-out
                    group-hover:text-green-300 group-hover:scale-110
                    group-hover:drop-shadow-[0_0_12px_rgba(74,222,128,0.8)]"
                    title="Express"
                  />
                  <div className="absolute -inset-2 bg-green-300/20 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                </div>
              </div>

              {/* Segunda fila: 3 íconos */}
              <div className="flex justify-center space-x-12">
                <div className="group relative">
                  <SiSequelize
                    className="text-6xl text-blue-600 cursor-pointer transition-all duration-300 ease-in-out
                    group-hover:text-blue-500 group-hover:scale-110
                    group-hover:drop-shadow-[0_0_12px_rgba(37,99,235,0.8)]"
                    title="Sequelize"
                  />
                  <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                </div>

                <div className="group relative">
                  <SiMongodb
                    className="text-6xl text-green-700 cursor-pointer transition-all duration-300 ease-in-out
                    group-hover:text-green-600 group-hover:scale-110
                    group-hover:drop-shadow-[0_0_12px_rgba(21,128,61,0.8)]"
                    title="MongoDB"
                  />
                  <div className="absolute -inset-2 bg-green-600/20 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                </div>

                <div className="group relative">
                  <SiJavascript
                    className="text-6xl text-yellow-400 cursor-pointer transition-all duration-300 ease-in-out
                    group-hover:text-yellow-300 group-hover:scale-110
                    group-hover:drop-shadow-[0_0_12px_rgba(250,204,21,0.8)]"
                    title="JavaScript"
                  />
                  <div className="absolute -inset-2 bg-yellow-300/20 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                </div>
              </div>

              {/* Tercera fila: 3 íconos */}
              <div className="flex justify-center space-x-12">
                <div className="group relative">
                  <FaGitAlt
                    className="text-6xl text-orange-500 cursor-pointer transition-all duration-300 ease-in-out
                    group-hover:text-orange-400 group-hover:scale-110
                    group-hover:drop-shadow-[0_0_12px_rgba(249,115,22,0.8)]"
                    title="Git"
                  />
                  <div className="absolute -inset-2 bg-orange-400/20 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                </div>

                <div className="group relative">
                  <CiDatabase
                    className="text-6xl text-blue-500 cursor-pointer transition-all duration-300 ease-in-out
                    group-hover:text-blue-400 group-hover:scale-110
                    group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                    title="Database"
                  />
                  <div className="absolute -inset-2 bg-blue-400/20 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                </div>

                <div className="group relative">
                  <FaCss3Alt
                    className="text-6xl text-blue-300 cursor-pointer transition-all duration-300 ease-in-out
                    group-hover:text-blue-200 group-hover:scale-110
                    group-hover:drop-shadow-[0_0_12px_rgba(147,197,253,0.8)]"
                    title="CSS3"
                  />
                  <div className="absolute -inset-2 bg-blue-200/20 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default LandingPage;