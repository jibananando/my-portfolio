"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation"; // 👈 for active route
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // current route

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-blue-600 tracking-wide"
        >
          JP<span className="text-gray-800">Dev</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition relative ${
                pathname === link.href
                  ? "text-blue-600 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-blue-600"
                  : "hover:text-blue-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg">
          <nav className="flex flex-col items-center gap-4 p-6 text-lg font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`transition ${
                  pathname === link.href
                    ? "text-blue-600 font-semibold underline"
                    : "hover:text-blue-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
