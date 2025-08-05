"use client";

import Link from "next/link";

interface FooterLink {
  name: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const Footer = () => {
  const footerColumns: FooterColumn[] = [
    {
      title: "Company",
      links: [
        { name: "Home", href: "/" },
        { name: "Collection", href: "/collection" },
        { name: "Man", href: "/man" },
        { name: "Woman", href: "/woman" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Newsletter", href: "/newsletter" },
        { name: "Categories", href: "/categories" },
        { name: "About", href: "/about" },
        { name: "FAQ", href: "/faq" },
        { name: "Terms", href: "/terms" },
        { name: "Privacy and Cookies", href: "/privacy" },
      ],
    },
    {
      title: "Social",
      links: [
        { name: "Twitter", href: "https://twitter.com" },
        { name: "Facebook", href: "https://facebook.com" },
        { name: "LinkedIn", href: "https://linkedin.com" },
        { name: "YouTube", href: "https://youtube.com" },
      ],
    },
  ];

  return (
    <footer className="bg-[#1E1E1E] text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - Brand/About */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                <span className="block">Princey</span>
                <span className="block">Glass</span>
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s.
            </p>
            <p className="text-white font-semibold">Princey</p>
          </div>

          {/* Column 2 - Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerColumns[0].links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerColumns[1].links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Social</h4>
            <ul className="space-y-2">
              {footerColumns[2].links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 md:mb-0">© 2024 Princey</div>
            <div className="text-gray-300">Payment Methods</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
