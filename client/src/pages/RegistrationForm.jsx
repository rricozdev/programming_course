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
import { CheckCircle, Home, XCircle } from "lucide-react";
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
      newErrors.NúmeroContacto = "El número de contacto solo debe contener dígitos.";
    }
  
    if (!formData.Programa.trim()) {
      newErrors.Programa = "El programa es obligatorio.";
    }
  
    if (!formData.Semestre.trim()) {
      newErrors.Semestre = "El semestre es obligatorio.";
    } else if (!/^\d+$/.test(formData.Semestre) || formData.Semestre < 1 || formData.Semestre > 10) {
      newErrors.Semestre = "El semestre debe ser un número entre 1 y 10.";
    }
  
    if (!formData.Facultad.trim()) {
      newErrors.Facultad = "La facultad es obligatoria.";
    }
  
    if (!formData.linkedinOrFacebook.trim()) {
      newErrors.linkedinOrFacebook = "El enlace de LinkedIn o Facebook es obligatorio.";
    } else if (!/^https?:\/\/(www\.)?(linkedin|facebook)\.com\/.+$/.test(formData.linkedinOrFacebook)) {
      newErrors.linkedinOrFacebook = "Debe ser un enlace válido de LinkedIn o Facebook.";
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
        // Redirigir automáticamente a WhatsApp después del registro exitoso
        setTimeout(() => {
          window.location.href = "https://chat.whatsapp.com/BURt1usoDSF2Jl2re5DNML";
        }, 2000); // Espera 2 segundos antes de redirigir
      } else {
        setErrorMessage("Hubo un error al registrar. Inténtalo de nuevo.");
        setShowErrorModal(true);
      } 
    } catch (error) {
      setErrorMessage("Error de conexión. Verifica tu internet e intenta de nuevo.");
      setShowErrorModal(true);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000)
    }
  };

  const handleGoHome = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/")
    }, 1000)
  };

  return (
    <div className="bg-gray-900 py-20">
      {loading && < LoadingOverlay/>}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Modal */}
        <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-green-500">
                <CheckCircle className="h-6 w-6" />
                ¡Registro Exitoso!
              </DialogTitle>
              <DialogDescription>
                Tu registro ha sido completado satisfactoriamente. Pronto nos pondremos en contacto contigo.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="sm:justify-start">
              <button
                onClick={() => setShowSuccessModal(false)}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                Entendido
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Error Modal */}
        <Dialog open={showErrorModal} onOpenChange={setShowErrorModal}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-red-500">
                <XCircle className="h-6 w-6" />
                Error
              </DialogTitle>
              <DialogDescription>
                {errorMessage}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="sm:justify-start">
              <button
                onClick={() => setShowErrorModal(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                Cerrar
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Botón de Inicio */}
        <div className="mb-8">
          {/* <button
            onClick={handleGoHome}
            className="group flex items-center text-yellow-400 hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:translate-x-2 hover:scale-105 font-medium"
          >
            <svg
              className="w-5 h-5 mr-2 transform transition-transform duration-300 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span className="relative cursor-pointer">
              Volver a Inicio
            </span>
          </button> */}
          <button
            onClick={handleGoHome}
            className="mt-6 px-4 py-2 flex items-center gap-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 cursor-pointer"
          >
            <Home className="w-5 h-5" />
            Volver a inicio
          </button>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Regístrate para el Curso de Programación
          </h2>
          <p className="text-xl text-gray-400">
            Completa el formulario y empieza tu camino en la programación.
          </p>
        </div>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nombre completo */}
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Nombre completo
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-yellow-400 focus:border-yellow-400 ${
                  errors.name ? 'border-red-500' : ''
                }`}
                required
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-yellow-400 focus:border-yellow-400 ${
                  errors.email ? 'border-red-500' : ''
                }`}
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Facultad */}
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Facultad
              </label>
              <input
                type="text"
                name="Facultad"
                value={formData.Facultad}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-yellow-400 focus:border-yellow-400 ${
                  errors.Facultad ? 'border-red-500' : ''
                }`}
                required
              />
              {errors.Facultad && <p className="text-red-500 text-sm mt-1">{errors.Facultad}</p>}
            </div>

            {/* Programa */}
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Programa
              </label>
              <input
                type="text"
                name="Programa"
                value={formData.Programa}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-yellow-400 focus:border-yellow-400 ${
                  errors.Programa ? 'border-red-500' : ''
                }`}
                required
              />
              {errors.Programa && <p className="text-red-500 text-sm mt-1">{errors.Programa}</p>}
            </div>

            {/* Semestre */}
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Semestre
              </label>
              <input
                type="text"
                name="Semestre"
                value={formData.Semestre}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-yellow-400 focus:border-yellow-400 ${
                  errors.Semestre ? 'border-red-500' : ''
                }`}
                required
              />
              {errors.Semestre && <p className="text-red-500 text-sm mt-1">{errors.Semestre}</p>}
            </div>

            {/* Número de contacto */}
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Número de contacto
              </label>
              <input
                type="tel"
                name="NúmeroContacto"
                value={formData.NúmeroContacto}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-yellow-400 focus:border-yellow-400 ${
                  errors.NúmeroContacto ? 'border-red-500' : ''
                }`}
                required
              />
              {errors.NúmeroContacto && <p className="text-red-500 text-sm mt-1">{errors.NúmeroContacto}</p>}
            </div>

            {/* LinkedIn o Facebook */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300">
                Perfil de LinkedIn o Facebook
              </label>
              <input
                type="url"
                name="linkedinOrFacebook"
                value={formData.linkedinOrFacebook}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-yellow-400 focus:border-yellow-400 ${
                  errors.linkedinOrFacebook ? 'border-red-500' : ''
                }`}
                placeholder="https://linkedin.com/in/tu-perfil"
              />
              {errors.linkedinOrFacebook && <p className="text-red-500 text-sm mt-1">{errors.linkedinOrFacebook}</p>}
            </div>
          </div>

          {/* Botón de envío */}
          <div className="mt-8 text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-yellow-400 text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-300 transform hover:scale-105 transition-all"
            >
              {loading ? "Enviando..." : "Enviar Registro"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;