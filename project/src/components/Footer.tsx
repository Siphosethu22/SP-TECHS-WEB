import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">SP TECHS</h3>
            <p className="text-gray-400">
              Your trusted partner for computer repairs and web development solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+27 67 717 0603</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>sptechs22@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>South Africa</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-purple-400">Home</a></li>
              <li><a href="#repair" className="hover:text-purple-400">Computer Repair</a></li>
              <li><a href="#development" className="hover:text-purple-400">Web Development</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} SP TECHS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}