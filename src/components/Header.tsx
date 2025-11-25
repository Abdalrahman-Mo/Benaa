import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "الرئيسية", href: "/" },
    { label: "الحاسبة الذكية", href: "/smart-calculator" },
    { label: "موارد البناء", href: "/suppliers" },
    { label: "ابدأ مشروعك", href: "/start-project" },
    { label: "العمل الحر", href: "/freelance" },
    // { label: "الأكاديمية", href: "/academy" },
    // { label: "الشركات", href: "/companies" },
    // { label: "المصادر", href: "/resources" },
    { label: "من نحن", href: "/about" },
    { label: "الدعم", href: "/support" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white backdrop-blur-md border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16" dir="rtl">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center space-x-2 space-x-reverse">
              <img src={Logo} alt="logo" className=" h-16" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 space-x-reverse">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-foreground hover:text-primary transition-smooth font-medium font-cairo"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4  space-x-reverse border-[#4e4e4e] border-r-[2px] pr-[22px]">
            <a
              href="/account"
              className="text-foreground hover:text-primary transition-smooth font-medium font-cairo"
            >
              حسابي
            </a>
            <Link to="/start-project">
              <button className="btn-primary font-cairo">ابدأ الآن</button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="lg:hidden absolute top-16 right-0 w-full bg-white border-b border-border shadow-lg"
            dir="rtl"
          >
            <nav className="container-custom py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-smooth font-medium font-cairo py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Link to="/start-project">
                  <button className="btn-primary font-cairo mt-4 w-full">
                    ابدأ الآن
                  </button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
