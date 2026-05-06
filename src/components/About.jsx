import { Brain, Database, MonitorSmartphone, Network } from 'lucide-react';

const stats = [
  { label: 'Títulos Oficiales', value: '2' },
  { label: 'Proyectos Prácticos', value: '10+' },
  { label: 'Tecnologías', value: '15+' },
];

const highlights = [
  { icon: Brain, title: 'Inteligencia Artificial', description: 'Machine & Deep Learning, Algoritmos Genéticos y Sistemas Expertos. Uso de LangChain, Sklearn y LM Studio.' },
  { icon: Database, title: 'Big Data & Analytics', description: 'Pipelines ETL completos, análisis y visualización con Pandas, Matplotlib, Seaborn, Spark y HDFS.' },
  { icon: MonitorSmartphone, title: 'Desarrollo Multiplataforma', description: 'Creación de interfaces y aplicaciones móviles usando C# (MAUI, WPF), Java y React Native.' },
  { icon: Network, title: 'IoT & Automatización', description: 'Integración de hardware mediante servidores MCP, Node-RED y control de dispositivos inteligentes.' }
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="w-full px-4 sm:px-8 lg:px-16 2xl:px-24">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">mí</span>
          </h2>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full opacity-50" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Izquierda: Foto / Iniciales */}
          <div className="flex justify-center lg:order-1 w-full">
            <div className="relative max-w-[320px] w-full">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-1 group">
                <div className="w-full h-full rounded-2xl bg-dark-light flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="text-9xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                    PG
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>

          {/* Centro: Texto de presentación */}
          <div className="text-center flex flex-col items-center lg:order-2">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Apasionado por la innovación
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              Soy un entusiasta de la tecnología, siempre dispuesto a aprender y desarrollarme. Mi base como Técnico en <strong>Desarrollo Multiplataforma (DAM)</strong> me ha proporcionado una lógica sólida, mientras que mi Máster en <strong>Big Data e Inteligencia Artificial</strong> me da las herramientas para el futuro.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed text-sm">
              Ya sea diseñando una interfaz moderna, entrenando modelos de Deep Learning, construyendo pipelines ETL o integrando sistemas IoT con Node-RED, pongo todo mi empeño en crear soluciones eficientes.
            </p>

            <div className="flex justify-center gap-6 w-full">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Derecha: Highlights / Skills resumen */}
          <div className="flex flex-col gap-4 lg:order-3 mt-10 lg:mt-0">
            {highlights.map((item) => (
              <div key={item.title} className="p-4 rounded-2xl bg-dark-light/50 border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:-translate-x-2 group flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-primary" size={24} />
                </div>
                <div className="text-left">
                  <h4 className="text-base font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
