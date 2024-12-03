import { Code, Globe, Smartphone, Zap } from 'lucide-react';

export default function DevelopmentSection() {
  const services = [
    {
      icon: <Globe className="w-12 h-12 text-purple-600" />,
      title: "Website Development",
      description: "Custom websites tailored to your needs"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-purple-600" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications"
    },
    {
      icon: <Code className="w-12 h-12 text-purple-600" />,
      title: "Custom Software",
      description: "Bespoke software solutions for your business"
    },
    {
      icon: <Zap className="w-12 h-12 text-purple-600" />,
      title: "E-commerce",
      description: "Online store development and integration"
    }
  ];

  const handleContact = () => {
    window.open('https://wa.me/27677170603', '_blank');
  };

  return (
    <section id="development" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Web Development Services</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your web development needs and create something amazing together.
          </p>
          <button
            onClick={handleContact}
            className="bg-purple-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-purple-700 transition"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}