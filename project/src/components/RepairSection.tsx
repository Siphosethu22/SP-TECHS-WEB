import { useState } from 'react';
import { Wrench, Clock, Cpu, HardDrive } from 'lucide-react';

export default function RepairSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    device: '',
    issue: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `New Repair Request:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}
Device: ${formData.device}
Issue: ${formData.issue}`;
    const whatsappUrl = `https://wa.me/27677170603?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    {
      icon: <Wrench className="w-12 h-12 text-purple-600" />,
      title: "Hardware Repairs",
      description: "Expert repair for laptops, desktops, and peripherals"
    },
    {
      icon: <Clock className="w-12 h-12 text-purple-600" />,
      title: "Quick Turnaround",
      description: "Fast and efficient repair service"
    },
    {
      icon: <Cpu className="w-12 h-12 text-purple-600" />,
      title: "Component Upgrade",
      description: "RAM, storage, and performance upgrades"
    },
    {
      icon: <HardDrive className="w-12 h-12 text-purple-600" />,
      title: "Data Recovery",
      description: "Professional data recovery services"
    }
  ];

  return (
    <section id="repair" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Computer Repair Services</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">Book a Repair</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <textarea
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                rows={2}
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                placeholder="Enter your full address"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Device Type</label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                value={formData.device}
                onChange={(e) => setFormData({...formData, device: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Issue Description</label>
              <textarea
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                rows={4}
                value={formData.issue}
                onChange={(e) => setFormData({...formData, issue: e.target.value})}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}