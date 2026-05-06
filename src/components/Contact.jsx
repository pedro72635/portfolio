import { useState } from 'react';
import { Mail, MapPin, Send, Phone, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'pedro.galera3031@gmail.com', href: 'mailto:pedro.galera3031@gmail.com' },
    { icon: Phone, label: 'Teléfono', value: '+34 684 34 74 54', href: 'tel:+34684347454' },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="w-full px-4 sm:px-8 lg:px-16 2xl:px-24 relative">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Contacto</span>
          </h2>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full opacity-50" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-center text-lg">
            ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para nuevas oportunidades.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-8 w-full mt-4">
          {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-dark-light/50 border border-gray-800 hover:border-primary/50 transition-all group text-center hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 w-full sm:w-[350px]"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:from-primary/40 group-hover:to-secondary/40 transition-all group-hover:scale-110">
                    <item.icon className="text-primary" size={28} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-2">{item.label}</div>
                    <div className="font-semibold text-white text-lg">{item.value}</div>
                  </div>
                </a>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
