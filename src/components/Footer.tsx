import { Button } from "@/components/ui/button";
import {
  Film,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#home" },
        { label: "Workspaces", href: "#services" },
        { label: "Impact", href: "#stats" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "Our Promise", href: "#commitment" },
      ],
    },
    {
      title: "Popular Amenities",
      links: [
        { label: "Private Offices", href: "#" },
        { label: "Meeting Room Booking", href: "#" },
        { label: "High-Speed Internet", href: "#" },
        { label: "Community Events", href: "#" },
      ],
    },
    {
      title: "Get In Touch",
      links: [
        { label: "(555) 987-6543", href: "tel:+15559876543", icon: Phone },
        {
          label: "hello@nextdesk.com",
          href: "mailto:hello@nextdesk.com",
          icon: Mail,
        },
        { label: "123 Innovation St, Downtown", href: "#", icon: MapPin },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <a
              href="#home"
              className="flex items-center space-x-2 group"
              aria-label="NextDesk Home"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <Film className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-wide">NextDesk</span>
            </a>
            <p className="text-gray-300 leading-relaxed">
              Modern coworking space connecting creative and entrepreneurial
              communities.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 hover-scale"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-4">
              <h4 className="text-lg font-semibold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link.icon && <link.icon className="w-4 h-4" />}
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="text-lg font-semibold mb-2">Stay Connected</h4>
              <p className="text-gray-300">
                Subscribe to our newsletter for updates and exclusive offers.
              </p>
            </div>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary"
              />
              <Button variant="default" className="hover-scale">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} NextDesk. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
