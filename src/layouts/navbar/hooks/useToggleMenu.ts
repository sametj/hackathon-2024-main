import { useState, useCallback, useEffect } from "react";

const useToggleMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [navButton, setNavButton] = useState(false);

  const toggleMenu = useCallback(() => {
    setNavButton((prev) => !prev);
    setMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const bodyStyle = document.body.style;
    if (isMenuOpen) {
      bodyStyle.overflow = "hidden";
    } else {
      bodyStyle.overflow = "";
    }
    return () => {
      bodyStyle.overflow = "";
    };
  }, [isMenuOpen]);

  return { isMenuOpen, navButton, toggleMenu };
};

export default useToggleMenu;
