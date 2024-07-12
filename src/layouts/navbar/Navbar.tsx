import { useNavigate, useLocation } from "react-router-dom";
import useToggleMenu from "./hooks/useToggleMenu";
import styles from "./navbar.module.scss";
import Logo from "@assets/brand/sipnplay.svg?react";
import LogoDark from "@assets/brand/sipnplay-dark.svg?react";
import DarkModeToggle from "./components/DarkModeToggle";
import { useDarkMode } from "@root/context/DarkModeContext";

const NAV_LINKS = [
  { text: "Home", to: "/" },
  { text: "Menu", to: "/menu" },
  { text: "Board Games", to: "/board-games" },
  {
    text: "Calendar",
    to: "/calendar",
  },
];

function Navbar() {
  const { isMenuOpen, navButton, toggleMenu } = useToggleMenu();
  const darkModeContext = useDarkMode();
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  if (!darkModeContext) {
    return null;
  }

  const { isDarkMode } = darkModeContext;

  return (
    <div className={styles["header-container"]}>
      <header className={styles["header"]}>
        {isDarkMode ? (
          <LogoDark
            className={styles["header-logo"]}
            onClick={() => {
              isMenuOpen && toggleMenu();
              navigate("/");
            }}
          />
        ) : (
          <Logo
            className={styles["header-logo"]}
            onClick={() => {
              isMenuOpen && toggleMenu();
              navigate("/");
            }}
          />
        )}

        <div>
          <div
            className={`${styles["header-button"]} ${
              navButton ? styles["header-toggle-animation"] : ""
            }`}
            onClick={toggleMenu}
          >
            <label className={styles["header-icon"]} />
          </div>
          <nav
            className={`${styles["nav"]} ${
              isMenuOpen && styles["nav-is-open"]
            }`}
          >
            <div className={styles["nav-content"]}>
              <div className={styles["nav-buttons"]}>
                {NAV_LINKS.map((btn, i) => (
                  <button
                    className={`button-link ${
                      location.pathname === btn.to ? "active" : ""
                    }`}
                    key={i}
                    onClick={() => {
                      isMenuOpen && toggleMenu();
                      navigate(btn.to);
                    }}
                  >
                    {btn.text}
                  </button>
                ))}
              </div>
              <div className={styles["toggle-buttons"]}>
                <DarkModeToggle />
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
