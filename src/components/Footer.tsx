import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t-4 border-primary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-glow-red">
                <span className="text-2xl">🐼</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-gray-900">Panda Tech</span>
                <span className="text-xs text-gray-600">Your Innovation Partner</span>
              </div>
            </div>
            <p className="text-sm text-gray-700">
              We Design, Build, and Secure Your Digital World.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-3d-gold" style={{ color: '#d4af37' }}>Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-primary transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-primary transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-600 hover:text-primary transition-smooth">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-gray-600 hover:text-primary transition-smooth">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-gray-600 hover:text-primary transition-smooth">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-primary transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-3d-gold" style={{ color: '#d4af37' }}>Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Web Development</li>
              <li>Software Solutions</li>
              <li>Graphic Design</li>
              <li>Cybersecurity</li>
              <li>IT Support</li>
              <li>Project Documentation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-3d-gold" style={{ color: '#d4af37' }}>Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-gray-600">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-primary" />
                <span>Precious Plaza, Kawangware<br />Naivasha Road, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone size={16} className="flex-shrink-0 text-primary" />
                <span>0111 679 286 / 0793 923 427</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail size={16} className="flex-shrink-0 text-primary" />
                <span>info@labankhisa.co.ke</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-gray-600">
                <Clock size={16} className="mt-1 flex-shrink-0 text-primary" />
                <span>Mon–Sat: 8 AM – 6 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-8 pt-8 border-t-2 border-primary flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-700">
            © {currentYear} Panda Tech. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary transition-smooth"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary transition-smooth"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary transition-smooth"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary transition-smooth"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
