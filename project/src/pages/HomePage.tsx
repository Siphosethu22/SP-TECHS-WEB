import { Link } from 'react-router-dom';
import { Monitor, Code, ArrowRight } from 'lucide-react';
import Logo from '../components/Logo';
import AboutSection from '../components/AboutSection';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 mb-8">
              <Logo />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Tech Solutions Partner
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Professional computer repair services and cutting-edge web development solutions
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/repair" className="group">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all">
                <div className="flex items-center mb-4">
                  <Monitor className="w-10 h-10 text-purple-600 mr-4" />
                  <h3 className="text-2xl font-semibold">Computer Repair</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Expert computer repair services for all your hardware and software needs. Fast, reliable, and professional service.
                </p>
                <div className="flex items-center text-purple-600 group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="ml-2" />
                </div>
              </div>
            </Link>

            <Link to="/development" className="group">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all">
                <div className="flex items-center mb-4">
                  <Code className="w-10 h-10 text-purple-600 mr-4" />
                  <h3 className="text-2xl font-semibold">Web Development</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Custom web development solutions to bring your digital vision to life. Modern, responsive, and scalable websites.
                </p>
                <div className="flex items-center text-purple-600 group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="ml-2" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <AboutSection />
    </div>
  );
}