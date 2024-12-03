import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Logo />
            <span className="text-2xl font-bold text-purple-600">SP TECHS</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-purple-600' : 'text-gray-600'} hover:text-purple-600`}
            >
              Home
            </Link>
            <Link 
              to="/repair" 
              className={`${isActive('/repair') ? 'text-purple-600' : 'text-gray-600'} hover:text-purple-600`}
            >
              Computer Repair
            </Link>
            <Link 
              to="/development" 
              className={`${isActive('/development') ? 'text-purple-600' : 'text-gray-600'} hover:text-purple-600`}
            >
              Web Development
            </Link>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`${isActive('/') ? 'text-purple-600' : 'text-gray-600'} hover:text-purple-600`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/repair" 
                className={`${isActive('/repair') ? 'text-purple-600' : 'text-gray-600'} hover:text-purple-600`}
                onClick={() => setIsMenuOpen(false)}
              >
                Computer Repair
              </Link>
              <Link 
                to="/development" 
                className={`${isActive('/development') ? 'text-purple-600' : 'text-gray-600'} hover:text-purple-600`}
                onClick={() => setIsMenuOpen(false)}
              >
                Web Development
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}