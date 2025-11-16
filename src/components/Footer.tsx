import { Linkedin, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 - AIRA */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold text-lg">A</span>
              </div>
              <span className="text-2xl font-bold">AIRA</span>
            </div>
            <p className="text-background/80 mb-4 leading-relaxed">
              Advanced Institute of Robotics and Automation. Transforming classrooms into innovation 
              hubs where young minds engineer the robots of tomorrow.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/_aira_academy_?igsh=djVpd3FpZmJrbDZ5&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "About Us", id: "about" },
                { label: "Vision & Mission", id: "vision" },
                { label: "Gallery", id: "gallery" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Connect */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <a
                  href="mailto: aira.festivamoments@gmail.com"
                  className="text-background/80 hover:text-background transition-colors break-all"
                >
                   aira.festivamoments@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">A unit of Festiva Moments</h4>
              <p className="text-background/80 text-sm">
                MSME Udyam Reg: UDYAM-KR-03-0571027
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/80">
            © {new Date().getFullYear()} AIRA - Advanced Institute of Robotics and Automation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
