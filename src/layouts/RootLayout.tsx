import { Link, Outlet } from "react-router";
import { Navbar, Footer } from "../components";
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { NavLinks } from "../constant";
import { FaLongArrowAltRight } from "react-icons/fa";
import Logo from "../components/Logo";


interface MobileMenuItemProps {
  link: any;
  onLinkClick: () => void;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({ link, onLinkClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    if (link.links.length > 0) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="flex flex-col text-white">
      {link.links.length === 0 ? (
        <Link 
          className="uppercase hover:text-primary transition-colors duration-300 flex items-center justify-between" 
          to={link.url}
          onClick={onLinkClick}
        >
          {link.title}
          <FaLongArrowAltRight className="text-white"/>
        </Link>
      ) : (
        <div>
          <div 
            className="flex items-center justify-between cursor-pointer"
            onClick={handleToggle}
          >
            <p>{link.title}</p>
            <span className="ml-2">
              {isExpanded ? (
                <IoIosArrowUp className="text-white" />
              ) : (
                <IoIosArrowDown className="text-white" />
              )}
            </span>
          </div>
          <div 
            className={`flex flex-col gap-3 ml-8 overflow-hidden transition-all duration-300 ease-in-out ${
              isExpanded ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'
            }`}
          >
            {link.links.map((subLink: any) => (
              <Link
                key={subLink.id}
                className="uppercase hover:text-primary transition-colors duration-300"
                to={subLink.link}
                onClick={onLinkClick}
              >
                {subLink.title}
              </Link>
            ))}
          </div>
        </div>
      )}
      <hr className="h-0.5 text-blue-100/20 mt-4" />
    </div>
  );
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setIsAnimating(false);
    }
  };

  if (!isOpen && !isAnimating) return null;


  return (
    <div className={`bg-secondary fixed inset-0 z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      onTransitionEnd={handleAnimationEnd}>
      <div className="flex flex-col gap-8 py-8 px-6">
        <div 
          className="w-full flex justify-end lg:hidden cursor-pointer" 
          onClick={onClose}
          role="button"
          aria-label="Close menu"
        >
          <IoCloseSharp size={30} className="text-white" />
        </div>
        <div className="grid gap-4">
          {NavLinks.map((link) => (
            <MobileMenuItem 
              key={link.id} 
              link={link} 
              onLinkClick={onClose}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const RootLayout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
      <div className="bg-[#fcf9f9]">
        <Navbar setIsMenuOpen={setIsMenuOpen} />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;