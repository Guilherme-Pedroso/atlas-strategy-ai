
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-atlas-background/95 backdrop-blur-md py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-atlas">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              Marketing<span className="text-atlas-highlight">Atlas</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white/80 hover:text-white transition-colors">
              Como funciona
            </Link>
            <Link to="/pricing" className="text-white/80 hover:text-white transition-colors">
              Preços
            </Link>
            <Link to="/profile" className="text-white/80 hover:text-white transition-colors">
              <User className="h-5 w-5" />
            </Link>
            <Button 
              className="bg-white text-atlas-background hover:bg-atlas-highlight hover:text-white transition-colors"
              onClick={() => navigate("/login")}
            >
              Entrar
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-white/80 hover:text-white transition-colors py-2">
                Como funciona
              </Link>
              <Link to="/pricing" className="text-white/80 hover:text-white transition-colors py-2">
                Preços
              </Link>
              <Link to="/" className="text-white/80 hover:text-white transition-colors py-2">
                Blog
              </Link>
              <Link to="/" className="text-white/80 hover:text-white transition-colors py-2">
                Contato
              </Link>
              <Link to="/profile" className="text-white/80 hover:text-white transition-colors py-2">
                Perfil
              </Link>
              <Button 
                className="bg-white text-atlas-background hover:bg-atlas-highlight hover:text-white transition-colors w-full"
                onClick={() => navigate("/login")}
              >
                Entrar
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
