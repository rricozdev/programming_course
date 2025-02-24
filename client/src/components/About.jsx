import React from "react";
import { Briefcase, Award, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            SOBRE <span className="text-yellow-400">NOSOTROS</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Un equipo comprometido por la tecnología y la innovación
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <img
                src="https://i.postimg.cc/VNt5XkZg/I2.png"
                alt="Fundador 1"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="ml-4">
                <h3 className="text-xl font-bold text-yellow-400">
                  Ing. Ricardo Rico <span className="text-sm font-light text-white">(Arch)</span>

                </h3>
                <p className="text-gray-300">
                  Full Stack Developer & Co-fundador
                </p>
              </div>
            </div>
            <p className="text-gray-300">
              Arquitectura de software y experiencia en desarrollo web.
              Comprometido con crear soluciones escalables y eficientes.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <img
                src="https://i.postimg.cc/J4cVnKMD/tiagoperfil.jpg"
                alt="Fundador 2"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="ml-4">
                <h3 className="text-xl font-bold text-yellow-400">
                  Ing. Santiago Malagón <span className="text-sm font-light text-white">(Tiago)</span>

                </h3>
                <p className="text-gray-300">
                  Full Stack Developer & Co-fundador
                </p>
              </div>
            </div>
            <p className="text-gray-300">
              Desarrollo Frontend. Con experiencia en optimización de sistemas y
              seguridad de aplicaciones web.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="flex justify-center">
              <Briefcase className="h-12 w-12 text-yellow-400" />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold text-yellow-400">10+</h3>
              <p className="text-gray-300">Proyectos Completados</p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <Users className="h-12 w-12 text-yellow-400" />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold text-yellow-400">20+</h3>
              <p className="text-gray-300">Clientes Satisfechos</p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <Award className="h-12 w-12 text-yellow-400" />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold text-yellow-400">3+</h3>
              <p className="text-gray-300">Años de Experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
