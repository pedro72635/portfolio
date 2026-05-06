import { Brain, Database, MonitorSmartphone, Server, Cpu, Bot, Network, LineChart, Table, HardDrive, Smartphone, Layout, Blocks, Code2 } from 'lucide-react';
import { SiPython, SiDotnet, SiReact, SiApachespark, SiPandas, SiDocker } from 'react-icons/si';

const skillCategories = [
  {
    name: 'Inteligencia Artificial',
    icon: Brain,
    color: 'from-purple-400 to-indigo-500',
    skills: [
      { name: 'Redes Neuronales', icon: Network },
      { name: 'LangChain & LLMs', icon: Bot },
      { name: 'Scikit-learn', icon: SiPython },
      { name: 'LM Studio', icon: Cpu },
    ],
  },
  {
    name: 'Big Data & Analytics',
    icon: Database,
    color: 'from-blue-400 to-cyan-500',
    skills: [
      { name: 'Apache Spark', icon: SiApachespark },
      { name: 'HDFS', icon: HardDrive },
      { name: 'Pandas', icon: SiPandas },
      { name: 'Seaborn & Matplotlib', icon: LineChart },
    ],
  },
  {
    name: 'Desarrollo Multiplataforma',
    icon: MonitorSmartphone,
    color: 'from-emerald-400 to-green-500',
    skills: [
      { name: 'C# (MAUI / WPF)', icon: Code2 },
      { name: '.NET', icon: SiDotnet },
      { name: 'Java', icon: Smartphone },
      { name: 'React Native', icon: SiReact },
    ],
  },
  {
    name: 'DevOps & Integración',
    icon: Server,
    color: 'from-orange-400 to-red-500',
    skills: [
      { name: 'Docker', icon: SiDocker },
      { name: 'Node-RED', icon: Blocks },
      { name: 'Servidores MCP', icon: Server },
      { name: 'Sistemas Expertos', icon: Brain },
      { name: 'Algoritmos Genéticos', icon: Network },
    ],
  },
];

const SkillCard = ({ skill }) => (
  <div className="flex items-center gap-3 p-4 rounded-xl bg-dark/50 hover:bg-dark-light transition-all duration-300 hover:shadow-md hover:shadow-primary/10 group border border-transparent hover:border-gray-700 hover:-translate-y-1">
    <skill.icon className="text-2xl flex-shrink-0 text-gray-400 group-hover:text-primary transition-colors" />
    <span className="font-medium text-gray-300 text-sm group-hover:text-white transition-colors">{skill.name}</span>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      
      <div className="w-full px-4 sm:px-8 lg:px-16 2xl:px-24 relative">
        <div className="text-center mb-20 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mis <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Habilidades</span>
          </h2>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full opacity-50" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg text-center">
            Tecnologías y herramientas en las que me he especializado durante mi formación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div key={category.name} className="aspect-square p-6 rounded-2xl bg-dark-light/50 border border-gray-800 hover:border-primary/30 transition-colors duration-300 flex flex-col items-center justify-center text-center">
              <div className="flex flex-col items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                  <category.icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.name}</h3>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 w-full">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
