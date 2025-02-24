import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const FloatButton = ({ onClick, icon: Icon = ArrowUp, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null; // No renderiza el botón si no es visible

  return (
    <button
      onClick={onClick}
      className={`fixed bottom-8 right-8 bg-yellow-500 text-black p-4 rounded-full shadow-lg hover:bg-yellow-400 transition ${className} cursor-pointer`}
    >
      <Icon className="w-6 h-6" />
    </button>
  );
};

export default FloatButton;
