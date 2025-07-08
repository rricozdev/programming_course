// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogFooter,
// } from "../components/ui/dialog";
// import { CheckCircle, Home, XCircle } from "lucide-react";
// import LoadingOverlay from "../components/LoadingOverlay";

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     Programa: "",
//     Semestre: "",
//     NúmeroContacto: "",
//     Facultad: "",
//     linkedinOrFacebook: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [showErrorModal, setShowErrorModal] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//   const validate = () => {
//     let newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "El nombre es obligatorio.";
//     } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(formData.name)) {
//       newErrors.name = "El nombre solo debe contener letras y espacios.";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "El email es obligatorio.";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "El formato del email no es válido.";
//     }

//     if (!formData.NúmeroContacto.trim()) {
//       newErrors.NúmeroContacto = "El número de contacto es obligatorio.";
//     } else if (!/^\d+$/.test(formData.NúmeroContacto)) {
//       newErrors.NúmeroContacto = "El número de contacto solo debe contener dígitos.";
//     }

//     if (!formData.Programa.trim()) {
//       newErrors.Programa = "El programa es obligatorio.";
//     }

//     if (!formData.Semestre.trim()) {
//       newErrors.Semestre = "El semestre es obligatorio.";
//     } else if (!/^\d+$/.test(formData.Semestre) || formData.Semestre < 1 || formData.Semestre > 10) {
//       newErrors.Semestre = "El semestre debe ser un número entre 1 y 10.";
//     }

//     if (!formData.Facultad.trim()) {
//       newErrors.Facultad = "La facultad es obligatoria.";
//     }

//     if (!formData.linkedinOrFacebook.trim()) {
//       newErrors.linkedinOrFacebook = "El enlace de LinkedIn o Facebook es obligatorio.";
//     } else if (!/^https?:\/\/(www\.)?(linkedin|facebook)\.com\/.+$/.test(formData.linkedinOrFacebook)) {
//       newErrors.linkedinOrFacebook = "Debe ser un enlace válido de LinkedIn o Facebook.";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validate()) return;

//     setLoading(true);

//     try {
//       const response = await fetch(
//         "https://backend-curso-two.vercel.app/api/student",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       if (response.ok) {
//         setShowSuccessModal(true);
//         setFormData({
//           name: "",
//           email: "",
//           Programa: "",
//           Semestre: "",
//           NúmeroContacto: "",
//           Facultad: "",
//           linkedinOrFacebook: "",
//         });
//         // Redirigir automáticamente a WhatsApp después del registro exitoso
//         // Abrir WhatsApp inmediatamente después del registro exitoso
//       window.open("https://chat.whatsapp.com/BURt1usoDSF2Jl2re5DNML", "_blank");
//       } else {
//         setErrorMessage("Hubo un error al registrar. Inténtalo de nuevo.");
//         setShowErrorModal(true);
//       }
//     } catch (error) {
//       setErrorMessage("Error de conexión. Verifica tu internet e intenta de nuevo.");
//       setShowErrorModal(true);
//     } finally {
//       setTimeout(() => {
//         setLoading(false);
//       }, 2000)
//     }
//   };

//   const handleGoHome = () => {
//     setLoading(true);
//     setTimeout(() => {
//       navigate("/")
//     }, 1000)
//   };

//   return (
//     <div className="bg-gray-900 py-20">
//       {loading && < LoadingOverlay/>}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Success Modal */}
//         <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
//           <DialogContent className="sm:max-w-md">
//             <DialogHeader>
//               <DialogTitle className="flex items-center gap-2 text-green-500">
//                 <CheckCircle className="h-6 w-6" />
//                 ¡Registro Exitoso!
//               </DialogTitle>
//               <DialogDescription>
//                 Tu registro ha sido completado satisfactoriamente. Pronto nos pondremos en contacto contigo.
//               </DialogDescription>
//             </DialogHeader>
//             <DialogFooter className="sm:justify-start">
//               <button
//                 onClick={() => setShowSuccessModal(false)}
//                 className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
//               >
//                 Entendido
//               </button>
//             </DialogFooter>
//           </DialogContent>
//         </Dialog>

//         {/* Error Modal */}
//         <Dialog open={showErrorModal} onOpenChange={setShowErrorModal}>
//           <DialogContent className="sm:max-w-md">
//             <DialogHeader>
//               <DialogTitle className="flex items-center gap-2 text-red-500">
//                 <XCircle className="h-6 w-6" />
//                 Error
//               </DialogTitle>
//               <DialogDescription>
//                 {errorMessage}
//               </DialogDescription>
//             </DialogHeader>
//             <DialogFooter className="sm:justify-start">
//               <button
//                 onClick={() => setShowErrorModal(false)}
//                 className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
//               >
//                 Cerrar
//               </button>
//             </DialogFooter>
//           </DialogContent>
//         </Dialog>

//         {/* Botón de Inicio */}
//         <div className="mb-8">
//           <button
//             onClick={handleGoHome}
//             className="mt-6 px-4 py-2 flex items-center gap-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 cursor-pointer"
//           >
//             <Home className="w-5 h-5" />
//             Volver a inicio
//           </button>
//         </div>

//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Regístrate para el Curso de Programación
//           </h2>
//           <p className="text-xl text-gray-400">
//             Completa el formulario y empieza tu camino en la programación.
//           </p>
//         </div>

//         {/* Formulario */}
//         <form
//           onSubmit={handleSubmit}
//           className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg"
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Nombre completo */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300">
//                 Nombre completo
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className={`mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-yellow-400 focus:border-yellow-400 ${
//                   errors.name ? 'border-red-500' : ''
//                 }`}
//                 required
//               />
//               {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={`mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-yellow-400 focus:border-yellow-400 ${
//                   errors.email ? 'border-red-500' : ''
//                 }`}
//                 required
//               />
//               {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//             </div>

//             {/* Facultad */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300">
//                 Facultad
//               </label>
//               <input
//                 type="text"
//                 name="Facultad"
//                 value={formData.Facultad}
//                 onChange={handleChange}
//                 className={`mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-yellow-400 focus:border-yellow-400 ${
//                   errors.Facultad ? 'border-red-500' : ''
//                 }`}
//                 required
//               />
//               {errors.Facultad && <p className="text-red-500 text-sm mt-1">{errors.Facultad}</p>}
//             </div>

//             {/* Programa */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300">
//                 Programa
//               </label>
//               <input
//                 type="text"
//                 name="Programa"
//                 value={formData.Programa}
//                 onChange={handleChange}
//                 className={`mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-yellow-400 focus:border-yellow-400 ${
//                   errors.Programa ? 'border-red-500' : ''
//                 }`}
//                 required
//               />
//               {errors.Programa && <p className="text-red-500 text-sm mt-1">{errors.Programa}</p>}
//             </div>

//             {/* Semestre */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300">
//                 Semestre
//               </label>
//               <input
//                 type="text"
//                 name="Semestre"
//                 value={formData.Semestre}
//                 onChange={handleChange}
//                 className={`mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-yellow-400 focus:border-yellow-400 ${
//                   errors.Semestre ? 'border-red-500' : ''
//                 }`}
//                 required
//               />
//               {errors.Semestre && <p className="text-red-500 text-sm mt-1">{errors.Semestre}</p>}
//             </div>

//             {/* Número de contacto */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300">
//                 Número de contacto
//               </label>
//               <input
//                 type="tel"
//                 name="NúmeroContacto"
//                 value={formData.NúmeroContacto}
//                 onChange={handleChange}
//                 className={`mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-yellow-400 focus:border-yellow-400 ${
//                   errors.NúmeroContacto ? 'border-red-500' : ''
//                 }`}
//                 required
//               />
//               {errors.NúmeroContacto && <p className="text-red-500 text-sm mt-1">{errors.NúmeroContacto}</p>}
//             </div>

//             {/* LinkedIn o Facebook */}
//             <div className="md:col-span-2">
//               <label className="block text-sm font-medium text-gray-300">
//                 Perfil de LinkedIn o Facebook
//               </label>
//               <input
//                 type="url"
//                 name="linkedinOrFacebook"
//                 value={formData.linkedinOrFacebook}
//                 onChange={handleChange}
//                 className={`mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-yellow-400 focus:border-yellow-400 ${
//                   errors.linkedinOrFacebook ? 'border-red-500' : ''
//                 }`}
//                 placeholder="https://linkedin.com/in/tu-perfil"
//               />
//               {errors.linkedinOrFacebook && <p className="text-red-500 text-sm mt-1">{errors.linkedinOrFacebook}</p>}
//             </div>
//           </div>

//           {/* Botón de envío */}
//           <div className="mt-8 text-center">
//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-yellow-400 text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-300 transform hover:scale-105 transition-all"
//             >
//               {loading ? "Enviando..." : "Enviar Registro"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegistrationForm;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../components/ui/dialog";
import {
  CheckCircle,
  Home,
  XCircle,
  User,
  Mail,
  Phone,
  GraduationCap,
  BookOpen,
  Building,
  Link,
  Send,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import LoadingOverlay from "../components/LoadingOverlay";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Programa: "",
    Semestre: "",
    NúmeroContacto: "",
    Facultad: "",
    linkedinOrFacebook: "",
  });
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio.";
    } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(formData.name)) {
      newErrors.name = "El nombre solo debe contener letras y espacios.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El formato del email no es válido.";
    }

    if (!formData.NúmeroContacto.trim()) {
      newErrors.NúmeroContacto = "El número de contacto es obligatorio.";
    } else if (!/^\d+$/.test(formData.NúmeroContacto)) {
      newErrors.NúmeroContacto =
        "El número de contacto solo debe contener dígitos.";
    }

    if (!formData.Programa.trim()) {
      newErrors.Programa = "El programa es obligatorio.";
    }

    if (!formData.Semestre.trim()) {
      newErrors.Semestre = "El semestre es obligatorio.";
    } else if (
      !/^\d+$/.test(formData.Semestre) ||
      formData.Semestre < 1 ||
      formData.Semestre > 10
    ) {
      newErrors.Semestre = "El semestre debe ser un número entre 1 y 10.";
    }

    if (!formData.Facultad.trim()) {
      newErrors.Facultad = "La facultad es obligatoria.";
    }

    if (!formData.linkedinOrFacebook.trim()) {
      newErrors.linkedinOrFacebook =
        "El enlace de LinkedIn o Facebook es obligatorio.";
    } else if (
      !/^https?:\/\/(www\.)?(linkedin|facebook)\.com\/.+$/.test(
        formData.linkedinOrFacebook
      )
    ) {
      newErrors.linkedinOrFacebook =
        "Debe ser un enlace válido de LinkedIn o Facebook.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const response = await fetch(
        "https://backend-curso-two.vercel.app/api/student",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setShowSuccessModal(true);
        setFormData({
          name: "",
          email: "",
          Programa: "",
          Semestre: "",
          NúmeroContacto: "",
          Facultad: "",
          linkedinOrFacebook: "",
        });
        // Abrir WhatsApp inmediatamente después del registro exitoso
        window.open(
          "https://chat.whatsapp.com/BURt1usoDSF2Jl2re5DNML",
          "_blank"
        );
      } else {
        setErrorMessage("Hubo un error al registrar. Inténtalo de nuevo.");
        setShowErrorModal(true);
      }
    } catch (error) {
      setErrorMessage(
        "Error de conexión. Verifica tu internet e intenta de nuevo."
      );
      setShowErrorModal(true);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  const handleGoHome = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const InputField = ({
    icon: Icon,
    label,
    type,
    name,
    value,
    onChange,
    error,
    placeholder,
    required = true,
  }) => (
    <div className="group">
      <label className="block text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
        <Icon className="h-4 w-4 text-yellow-400" />
        {label}
        {required && <span className="text-red-400">*</span>}
      </label>
      <div className="relative">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-4 py-3 bg-gray-700 text-white rounded-lg 
            border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 
            hover:bg-gray-600 group-hover:border-yellow-400/30 ${
              error
                ? "border-red-500 focus:border-red-500 focus:ring-red-400/50"
                : "border-gray-600 focus:border-yellow-400"
            }`}
          required={required}
        />
        {error && (
          <div className="absolute -bottom-1 right-0 transform translate-y-full">
            <div className="bg-red-500/10 border border-red-500/30 rounded-md px-2 py-1 mt-1">
              <p className="text-red-400 text-xs flex items-center gap-1">
                <XCircle className="h-3 w-3" />
                {error}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/3 rounded-full blur-3xl"></div>
      </div>

      {loading && <LoadingOverlay />}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header mejorado */}
        <div className="flex items-center justify-between mb-12">
          <button
            onClick={handleGoHome}
            className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 
              text-black font-bold rounded-xl hover:from-yellow-300 hover:to-orange-400 
              transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl
              border-2 border-yellow-400/20 backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver a inicio</span>
          </button>

          <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-yellow-400/10 rounded-full border border-yellow-400/20 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">
              Curso Intensivo
            </span>
          </div>
        </div>

        {/* Hero Section mejorada */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 
            rounded-full border border-yellow-400/20 backdrop-blur-sm mb-8"
          >
            <GraduationCap className="w-6 h-6 text-yellow-400" />
            <span className="text-yellow-400 font-bold text-lg">
              Registro de Estudiante
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Únete al Curso de
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent animate-pulse">
              Programación
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Completa tu registro y comienza tu viaje hacia convertirte en un{" "}
            <span className="text-yellow-400 font-semibold">
              desarrollador profesional
            </span>
          </p>

          <div className="flex items-center justify-center gap-6 mt-8 text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Aprendizaje práctico</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Proyectos reales</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Mentorías personalizadas</span>
            </div>
          </div>
        </div>

        {/* Formulario principal mejorado */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden">
            {/* Decorative header */}
            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 h-1"></div>

            <div className="p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Información del Estudiante
                </h2>
                <p className="text-gray-400">
                  Completa todos los campos para procesar tu inscripción
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Información Personal */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-yellow-400 border-b border-yellow-400/20 pb-2">
                      Información Personal
                    </h3>

                    <InputField
                      icon={User}
                      label="Nombre completo"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      error={errors.name}
                      placeholder="Ingresa tu nombre completo"
                    />

                    <InputField
                      icon={Mail}
                      label="Correo electrónico"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                      placeholder="tu@email.com"
                    />

                    <InputField
                      icon={Phone}
                      label="Número de contacto"
                      type="tel"
                      name="NúmeroContacto"
                      value={formData.NúmeroContacto}
                      onChange={handleChange}
                      error={errors.NúmeroContacto}
                      placeholder="3001234567"
                    />
                  </div>

                  {/* Información Académica */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-yellow-400 border-b border-yellow-400/20 pb-2">
                      Información Académica
                    </h3>

                    <InputField
                      icon={Building}
                      label="Facultad"
                      type="text"
                      name="Facultad"
                      value={formData.Facultad}
                      onChange={handleChange}
                      error={errors.Facultad}
                      placeholder="Ej: Ingeniería, Ciencias, etc."
                    />

                    <InputField
                      icon={BookOpen}
                      label="Programa académico"
                      type="text"
                      name="Programa"
                      value={formData.Programa}
                      onChange={handleChange}
                      error={errors.Programa}
                      placeholder="Ej: Ingeniería de Sistemas"
                    />

                    <InputField
                      icon={GraduationCap}
                      label="Semestre actual"
                      type="number"
                      name="Semestre"
                      value={formData.Semestre}
                      onChange={handleChange}
                      error={errors.Semestre}
                      placeholder="1-10"
                    />
                  </div>
                </div>

                {/* Redes Sociales */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-yellow-400 border-b border-yellow-400/20 pb-2">
                    Redes Profesionales
                  </h3>

                  <InputField
                    icon={Link}
                    label="Perfil de LinkedIn o Facebook"
                    type="url"
                    name="linkedinOrFacebook"
                    value={formData.linkedinOrFacebook}
                    onChange={handleChange}
                    error={errors.linkedinOrFacebook}
                    placeholder="https://linkedin.com/in/tu-perfil"
                  />
                </div>

                {/* Botón de envío mejorado */}
                <div className="pt-8 text-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 
                      text-black font-bold text-lg rounded-xl hover:from-yellow-300 hover:to-orange-400 
                      transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl 
                      disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                      border-2 border-yellow-400/20 backdrop-blur-sm"
                  >
                    <Send className="w-5 h-5" />
                    <span>
                      {loading ? "Enviando..." : "Completar Registro"}
                    </span>
                    {!loading && <Sparkles className="w-5 h-5" />}
                  </button>

                  <p className="text-gray-400 text-sm mt-4">
                    Al registrarte, aceptas participar en el curso de
                    programación y recibir comunicaciones del programa
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Success Modal mejorado */}
        <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
          <DialogContent className="sm:max-w-lg bg-gray-800/95 backdrop-blur-sm border-gray-700/50">
            <DialogHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-400" />
              </div>
              <DialogTitle className="text-2xl font-bold text-green-400 mb-2">
                ¡Registro Exitoso!
              </DialogTitle>
              <DialogDescription className="text-gray-300 text-base leading-relaxed">
                Tu registro ha sido completado satisfactoriamente. Te hemos
                redirigido al grupo de WhatsApp del curso donde encontrarás toda
                la información necesaria.
                <br />
                <br />
                <span className="text-yellow-400 font-semibold">
                  ¡Bienvenido a la comunidad de programadores!
                </span>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="justify-center pt-4">
              <button
                onClick={() => setShowSuccessModal(false)}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-xl 
                  hover:from-green-400 hover:to-green-500 transition-all duration-300 font-semibold 
                  transform hover:scale-105 shadow-lg border-2 border-green-400/20"
              >
                Continuar
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Error Modal mejorado */}
        <Dialog open={showErrorModal} onOpenChange={setShowErrorModal}>
          <DialogContent className="sm:max-w-lg bg-gray-800/95 backdrop-blur-sm border-gray-700/50">
            <DialogHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                <XCircle className="h-8 w-8 text-red-400" />
              </div>
              <DialogTitle className="text-2xl font-bold text-red-400 mb-2">
                Error en el Registro
              </DialogTitle>
              <DialogDescription className="text-gray-300 text-base leading-relaxed">
                {errorMessage}
                <br />
                <br />
                <span className="text-yellow-400">
                  Por favor, verifica tu información e intenta nuevamente.
                </span>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="justify-center pt-4">
              <button
                onClick={() => setShowErrorModal(false)}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-xl 
                  hover:from-red-400 hover:to-red-500 transition-all duration-300 font-semibold 
                  transform hover:scale-105 shadow-lg border-2 border-red-400/20"
              >
                Intentar de nuevo
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default RegistrationForm;
