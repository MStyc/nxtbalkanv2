import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Artists', path: '/artists' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' },
    { name: 'Join Us', path: '/join' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md border-b border-blue-400/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 group z-50 relative">
              <img 
                src="/lovable-uploads/3ca2924a-8d56-4eae-9341-d0262f6a5fb8.png" 
                alt="NXT Balkan" 
                className="h-8 w-auto transition-transform duration-300 group-hover:scale-110"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative text-sm font-medium transition-all duration-300 hover:text-blue-400 ${
                    location.pathname === item.path ? 'text-blue-400' : 'text-gray-300'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                    location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white hover:text-blue-400 transition-colors duration-200 z-50 relative"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-0 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2.5' : ''
                }`} />
                <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`} />
                <span className={`absolute top-5 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2.5' : ''
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black/95 backdrop-blur-xl transition-opacity duration-500 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Content */}
          <div className={`relative h-full flex flex-col justify-center items-center transform transition-all duration-500 ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="text-center space-y-8">
              {navItems.map((item, index) => (
                <div
                  key={item.name}
                  className={`transform transition-all duration-700 ${
                    isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: isOpen ? `${index * 100 + 200}ms` : '0ms' }}
                >
                  <Link
                    to={item.path}
                    className={`block text-3xl font-bold transition-all duration-300 hover:text-blue-400 hover:scale-110 ${
                      location.pathname === item.path ? 'text-blue-400' : 'text-white'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className={`absolute bottom-20 flex space-x-6 transform transition-all duration-700 ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: isOpen ? '800ms' : '0ms' }}>
              {['Instagram', 'Spotify', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};