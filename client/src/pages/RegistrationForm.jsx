import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    facultad: "",
    programa: "",
    semestre: "",
    NumeroContacto: "",
    linkedinOrFacebook: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Datos del formulario:", formData);
  //   alert("¡Registro exitoso!");
  // };

   const handleSubmit = async (e) => {
    e.preventDefault();

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
          facultad: "",
          programa: "",
          semestre: "",
          contactNumber: "",
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
        {/* Botón de Inicio con efectos hover mejorados */}
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
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 transition-transform duration-300 "></span>
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

        {/* El resto del formulario permanece igual */}
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nombre completo */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-300"
              >
                Nombre completo
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                required
              />
            </div>

            {/* Facultad */}
            <div>
              <label
                htmlFor="faculty"
                className="block text-sm font-medium text-gray-300"
              >
                Facultad
              </label>
              <input
                type="text"
                id="faculty"
                name="faculty"
                value={formData.facultad}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                required
              />
            </div>

            {/* Programa */}
            <div>
              <label
                htmlFor="program"
                className="block text-sm font-medium text-gray-300"
              >
                Programa
              </label>
              <input
                type="text"
                id="program"
                name="program"
                value={formData.programa}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                required
              />
            </div>

            {/* Semestre */}
            <div>
              <label
                htmlFor="semester"
                className="block text-sm font-medium text-gray-300"
              >
                Semestre
              </label>
              <input
                type="number"
                id="semester"
                name="semester"
                value={formData.semestre}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                required
              />
            </div>

            {/* Número de contacto */}
            <div>
              <label
                htmlFor="contactNumber"
                className="block text-sm font-medium text-gray-300"
              >
                Número de contacto
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                required
              />
            </div>

            {/* Perfil de LinkedIn o Facebook */}
            <div className="md:col-span-2">
              <label
                htmlFor="socialMediaProfile"
                className="block text-sm font-medium text-gray-300"
              >
                Perfil de LinkedIn o Facebook
              </label>
              <input
                type="url"
                id="socialMediaProfile"
                name="socialMediaProfile"
                value={formData.linkedinOrFacebook}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="https://linkedin.com/in/tu-perfil"
                required
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
