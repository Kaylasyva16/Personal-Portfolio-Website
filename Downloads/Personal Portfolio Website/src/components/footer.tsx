import { Heart } from "lucide-react";
import logo from "figma:asset/21ae3dc31990e5850db81e354ed301d32324f3ae.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Quick: ["Home", "About", "Projects", "Contact"],
    Social: ["LinkedIn", "Instagram", "Behance"],
    Services: ["UI/UX Design", "Web Development", "Prototyping"],
  };

  return (
    <footer className="bg-white border-t border-[#C9CFF8]/30 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Kayla Syva" className="w-12 h-12 rounded-full object-cover" />
              <span className="font-semibold text-[#1D35BD]">Kayla Syva</span>
            </div>
            <p className="text-[#4A5568] text-sm leading-relaxed">UI/UX Designer crafting beautiful digital experiences.</p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[#1D35BD] mb-4">{category} Links</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#4A5568] hover:text-[#1D35BD] transition-smooth text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#C9CFF8]/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#4A5568] text-sm flex items-center gap-1">
              © {currentYear} Kayla Syva. Made with <Heart className="w-4 h-4 text-[#F6DDEB] fill-[#F6DDEB]" /> and lots of coffee.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-[#4A5568] hover:text-[#1D35BD] transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-[#4A5568] hover:text-[#1D35BD] transition-smooth">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
