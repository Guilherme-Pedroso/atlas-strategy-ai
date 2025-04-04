
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <span className="text-2xl font-bold text-white">
              Marketing<span className="text-atlas-highlight">Atlas</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Como funciona
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Preços
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Blog
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Contato
            </a>
            <Button className="bg-white text-atlas-background hover:bg-atlas-highlight hover:text-white transition-colors">
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
              <a href="#" className="text-white/80 hover:text-white transition-colors py-2">
                Como funciona
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors py-2">
                Preços
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors py-2">
                Blog
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors py-2">
                Contato
              </a>
              <Button className="bg-white text-atlas-background hover:bg-atlas-highlight hover:text-white transition-colors w-full">
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
