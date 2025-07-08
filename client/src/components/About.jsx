import React from "react";
import {
  Code,
  Users,
  Award,
  Zap,
  Target,
  BookOpen,
  Star,
  TrendingUp,
  Coffee,
  Heart,
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header mejorado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 rounded-full mb-4">
            <Heart className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-sm font-medium">
              Conoce a tu equipo
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            SOBRE <span className="text-yellow-400">NOSOTROS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Somos desarrolladores apasionados que creemos en el poder de la
            educación tech para transformar vidas.
            <span className="text-yellow-400 font-semibold">
              {" "}
              Formamos la próxima generación de programadores en Colombia.
            </span>
          </p>
        </div>

        {/* Estadísticas destacadas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300">
            <div className="text-3xl font-bold text-yellow-400 mb-2">
              Formando
            </div>
            <div className="text-gray-300 text-sm">Desarrolladores</div>
          </div>
          <div className="text-center bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300">
            <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
            <div className="text-gray-300 text-sm">Tasa de satisfacción</div>
          </div>
          <div className="text-center bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300">
            <div className="text-3xl font-bold text-yellow-400 mb-2">10+</div>
            <div className="text-gray-300 text-sm">Proyectos reales</div>
          </div>
          <div className="text-center bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300">
            <div className="text-3xl font-bold text-yellow-400 mb-2">8/5</div>
            <div className="text-gray-300 text-sm">Soporte técnico</div>
          </div>
        </div>

        {/* Fundadores con diseño mejorado */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 group">
            <div className="flex items-start mb-6">
              <div className="relative">
                <img
                  src="https://i.postimg.cc/VNt5XkZg/I2.png"
                  alt="Ing. Ricardo Rico"
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-yellow-400"
                />
                <div className="absolute -bottom-2 -right-2 bg-yellow-400 rounded-full p-1">
                  <Code className="w-4 h-4 text-gray-900" />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold text-white mb-1">
                  Ing. Ricardo Rico
                </h3>
                <span className="text-yellow-400 text-sm font-medium bg-yellow-400/10 px-3 py-1 rounded-full">
                  (Arch)
                </span>
                <p className="text-gray-300 mt-2 font-medium">
                  Full Stack Developer & Co-fundador
                </p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Especialista en arquitectura de software y desarrollo web
              escalable. Apasionado por enseñar las mejores prácticas de
              programación y crear soluciones innovadoras.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-gray-700 text-yellow-400 px-3 py-1 rounded-full">
                Backend
              </span>
              <span className="text-xs bg-gray-700 text-yellow-400 px-3 py-1 rounded-full">
                DevOps
              </span>
              <span className="text-xs bg-gray-700 text-yellow-400 px-3 py-1 rounded-full">
                Mentor
              </span>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 group">
            <div className="flex items-start mb-6">
              <div className="relative">
                <img
                  src="https://i.postimg.cc/J4cVnKMD/tiagoperfil.jpg"
                  alt="Ing. Santiago Malagón"
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-yellow-400"
                />
                <div className="absolute -bottom-2 -right-2 bg-yellow-400 rounded-full p-1">
                  <Zap className="w-4 h-4 text-gray-900" />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold text-white mb-1">
                  Ing. Santiago Malagón
                </h3>
                <span className="text-yellow-400 text-sm font-medium bg-yellow-400/10 px-3 py-1 rounded-full">
                  (Tiago)
                </span>
                <p className="text-gray-300 mt-2 font-medium">
                  Full Stack Developer & Co-fundador
                </p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Desarrollo Frontend. Con experiencia en optimización de sistemas y
              seguridad de aplicaciones web.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-gray-700 text-yellow-400 px-3 py-1 rounded-full">
                Frontend
              </span>
              <span className="text-xs bg-gray-700 text-yellow-400 px-3 py-1 rounded-full">
                UX/UI
              </span>
              <span className="text-xs bg-gray-700 text-yellow-400 px-3 py-1 rounded-full">
                Seguridad
              </span>
            </div>
          </div>
        </div>

        {/* Nuestra metodología */}
        <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-500/5 rounded-2xl p-8 border border-yellow-400/20 mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-400/20 rounded-full mb-4">
              <BookOpen className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-yellow-400 text-sm font-medium">
                Nuestra metodología
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Por qué elegir{" "}
              <span className="text-yellow-400">Software Labs</span>?
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Combinamos teoría sólida con práctica intensiva, creando una
              experiencia de aprendizaje única y efectiva.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center group">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300">
                <div className="bg-yellow-400/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-yellow-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Proyectos Reales
                </h4>
                <p className="text-gray-300 text-sm">
                  Trabajas en proyectos que usarán empresas reales, no solo
                  ejercicios teóricos.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300">
                <div className="bg-yellow-400/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-yellow-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Mentoría Personal
                </h4>
                <p className="text-gray-300 text-sm">
                  Acompañamiento 1:1 con desarrolladores senior durante todo tu
                  proceso.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300">
                <div className="bg-yellow-400/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-yellow-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Crecimiento Profesional
                </h4>
                <p className="text-gray-300 text-sm">
                  Te preparamos para conseguir tu primer trabajo en tech o
                  mejorar tu posición actual.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 rounded-full mb-4">
            <Coffee className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-sm font-medium">
              ¡Hablemos!
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Listo para cambiar tu futuro profesional?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Únete a cientos de estudiantes que ya están transformando sus
            carreras con nosotros. El próximo éxito podrías ser tú.
          </p>
          {/* <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105">
            Conoce más sobre nuestros cursos
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default About;
