"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "Shopping", href: "/shop" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] px-3 py-2 mt-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg px-6 py-2">
          <div className="flex justify-between items-center h-12">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 pl-2">
                {/* Brand Text - Stacked */}
                <div className="text-left">
                  <span className="block text-black font-bold text-lg leading-tight">
                    Princey
                  </span>
                  <span className="block text-black font-bold text-lg leading-tight">
                    Glass
                  </span>
                </div>

                {/* Logo Image - Person */}
                <div className="relative w-12 h-12">
                  <Image
                    src="/image/plogo.png"
                    alt="Princey Glass Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-black hover:text-olive transition-colors duration-200 font-bold text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-black hover:text-olive transition-colors duration-200"
                aria-label="Toggle menu"
                type="button"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 mt-2">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg px-4 pt-4 pb-6 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block px-4 py-3 text-black hover:text-olive transition-colors duration-200 font-medium text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
