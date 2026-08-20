import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "@/mocks/homeContent";

const LOGIN_URL = "https://app.klavora.com/login";
const GET_STARTED_URL = "https://app.klavora.com/signup";
const THEME_KEY = "klavora-theme";

function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  try {
    const stored = window.localStorage.getItem(THEME_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* ignore */
  }
  return "dark";
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    try {
      window.localStorage.setItem(THEME_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background-50/90 backdrop-blur-xl border-b border-background-200/20"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="w-5 h-5 rounded flex items-center justify-center bg-primary-500">
              <i className="ri-add-line text-background-50 text-sm font-bold" />
            </span>
            <span className="text-lg md:text-xl font-semibold tracking-tight text-foreground-50">
              Klavora
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link: typeof navLinks[number]) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm text-foreground-400 hover:text-foreground-50 transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-md border border-background-200/25 text-foreground-300 hover:text-foreground-50 hover:border-primary-400/50 transition-colors duration-200"
              aria-label={
                theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              <i
                className={`${
                  theme === "dark" ? "ri-sun-line" : "ri-moon-line"
                } text-base`}
              />
            </button>
            <a
              href={LOGIN_URL}
              className="px-4 py-2 text-sm text-foreground-300 hover:text-foreground-50 transition-colors duration-200 whitespace-nowrap"
            >
              Login
            </a>
            <a
              href={GET_STARTED_URL}
              className="px-4 py-2 text-sm font-medium bg-primary-500 text-background-50 rounded-md hover:bg-primary-400 transition-colors duration-200 whitespace-nowrap"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden w-8 h-8 flex items-center justify-center text-foreground-300 hover:text-foreground-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <i
              className={`ri-${mobileOpen ? "close" : "menu"}-line text-xl`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background-50/95 backdrop-blur-xl border-b border-background-200/20">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link: typeof navLinks[number]) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2.5 text-sm text-foreground-400 hover:text-foreground-50 hover:bg-background-100/50 rounded-md transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-3 border-t border-background-200/20 flex flex-col gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                className="flex items-center justify-center gap-2 px-3 py-2.5 text-sm text-foreground-300 hover:text-foreground-50 transition-colors"
              >
                <i
                  className={`${
                    theme === "dark" ? "ri-sun-line" : "ri-moon-line"
                  } text-base`}
                />
                {theme === "dark" ? "Light mode" : "Dark mode"}
              </button>
              <a
                href={LOGIN_URL}
                className="block px-3 py-2.5 text-sm text-foreground-300 hover:text-foreground-50 transition-colors"
              >
                Login
              </a>
              <a
                href={GET_STARTED_URL}
                className="block px-3 py-2.5 text-sm font-medium text-center bg-primary-500 text-background-50 rounded-md hover:bg-primary-400 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}