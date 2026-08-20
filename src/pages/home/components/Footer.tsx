import { Link } from "react-router-dom";

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Login", href: "https://app.klavora.com/login" },
];

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "mailto:info.klavora@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="relative py-16 md:py-20 bg-background-100 border-t border-background-200/10">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12 md:mb-16">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="w-5 h-5 rounded flex items-center justify-center bg-primary-500">
                <i className="ri-add-line text-background-50 text-sm font-bold" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-foreground-50">
                Klavora
              </span>
            </Link>
            <p className="text-xs text-foreground-600 leading-relaxed max-w-xs mb-4">
              Pharmacy Management, Built for Africa.
            </p>
            <a
              href="mailto:info.klavora@gmail.com"
              className="text-xs text-foreground-500 hover:text-primary-300 transition-colors duration-200"
            >
              info.klavora@gmail.com
            </a>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="text-xs font-semibold text-foreground-400 uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground-600 hover:text-foreground-300 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xs font-semibold text-foreground-400 uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground-600 hover:text-foreground-300 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background-200/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground-700">
            &copy; 2026 EliTech CreaTives Limited. All rights reserved.
          </p>
          <a
            href="#"
            className="text-xs text-foreground-600 hover:text-foreground-300 transition-colors duration-200"
          >
            Terms and Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}