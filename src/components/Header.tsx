import { useState } from "react";
import { scrollToSection } from "@/lib/scrollToSection";
import { Button } from "@/components/ui/button";
import { Menu, X, Film, Phone } from "lucide-react";
import nextDeskLogo from "@/assets/nextdesk-blue.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Workspaces", href: "#services" },
    { label: "Impact", href: "#stats" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Our Promise", href: "#commitment" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    scrollToSection(href, () => setIsMenuOpen(false), e);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm shadow transition-shadow duration-300">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center space-x-2 relative group"
            aria-label="NextDesk Home"
          >
            <div className="absolute -left-2 -top-2 w-8 h-8 bg-primary/10 blur-md rounded-full opacity-60 z-0" />
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform relative z-10">
              <img
                src={nextDeskLogo}
                alt="NextDesk Logo"
                className="w-7 h-7 object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-foreground tracking-wide ml-1">
              NextDesk
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-base font-semibold text-muted-foreground hover:text-primary hover:underline underline-offset-4 transition-colors duration-200 px-1"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Phone size={18} className="text-primary" />
              <span className="font-semibold text-primary">(555) 123-4567</span>
            </div>
            <Button
              variant="default"
              className="hover-scale font-semibold px-6 py-2 rounded-full"
            >
              <Film size={16} className="mr-2" />
              Join Now
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                  <Phone size={16} />
                  <span>Hotline: (555) 123-4567</span>
                </div>
                <Button variant="default" className="w-full">
                  <Film size={16} className="mr-2" />
                  Join Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
