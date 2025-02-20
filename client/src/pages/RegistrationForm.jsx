import React, { useState } from "react";

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


  const validate = () => {
    let newErrors = {};
  
    // Validación de Nombre
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio.";
    } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(formData.name)) {
      newErrors.name = "El nombre solo debe contener letras y espacios.";
    }
  
    // Validación de Email
    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El formato del email no es válido.";
    }
  
    // Validación de Número de Contacto
    if (!formData.NúmeroContacto.trim()) {
      newErrors.NúmeroContacto = "El número de contacto es obligatorio.";
    } else if (!/^\d+$/.test(formData.NúmeroContacto)) {
      newErrors.NúmeroContacto = "El número de contacto solo debe contener dígitos.";
    }
  
    // Validación de Programa
    if (!formData.Programa.trim()) {
      newErrors.Programa = "El programa es obligatorio.";
    }
  
    // Validación de Semestre
    if (!formData.Semestre.trim()) {
      newErrors.Semestre = "El semestre es obligatorio.";
    } else if (!/^\d+$/.test(formData.Semestre) || formData.Semestre < 1 || formData.Semestre > 10) {
      newErrors.Semestre = "El semestre debe ser un número entre 1 y 10.";
    }
  
    // Validación de Facultad
    if (!formData.Facultad.trim()) {
      newErrors.Facultad = "La facultad es obligatoria.";
    }
  
    // Validación de LinkedIn o Facebook
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

    if (!validate()) return; // Evita el envío si hay errores

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
        alert("¡Registro exitoso!");
        setFormData({
          name: "",
          email: "",
          Programa: "",
          Semestre: "",
          NúmeroContacto: "",
          Facultad: "",
          linkedinOrFacebook: "",
        });
      } else {
        alert("Hubo un error al registrar. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Error de conexión. Verifica tu internet e intenta de nuevo.");
    }
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Botón de Inicio */}
        <div className="mb-8">
          <button
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
                className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                required
              />
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
                className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                required
              />
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
                className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                required
              />
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
                className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                required
              />
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
                className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                required
              />
               {errors.Semestre && <p className="text-red-500 text-sm">{errors.Semestre}</p>}
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
                className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                required
              />
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
                className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="https://linkedin.com/in/tu-perfil"
              />
            </div>
          </div>

          {/* Botón de envío */}
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="bg-yellow-400 text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-300 transform hover:scale-105 transition-all"
            >
              Enviar Registro
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;