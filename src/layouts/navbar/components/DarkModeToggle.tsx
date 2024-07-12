import { useDarkMode } from "@root/context/DarkModeContext";

import Sun from "@assets/icons/sun.svg?react";
import SunMobile from "@assets/icons/sun-mobile.svg?react";
import Moon from "@assets/icons/moon.svg?react";

import styles from "../navbar.module.scss";

function DarkModeToggle() {
  const darkModeContext = useDarkMode();

  if (!darkModeContext) {
    return null;
  }

  const { toggleDarkMode, isDarkMode } = darkModeContext;

  return (
    <>
      <div className={styles["mobile-button-body"]} onClick={toggleDarkMode}>
        <button
          className={`${"button-link-tooltip"} ${
            isDarkMode && styles["animate"]
          }`}
        >
          {isDarkMode ? (
            <Moon
              className={`${styles["mobile-button"]} ${styles["mobile-button-active"]}`}
            />
          ) : (
            <SunMobile className={`${styles["mobile-button"]}`} />
          )}
        </button>
      </div>

      <div className={`${styles["desktop-button"]}`}>
        <button className={`${"button-link-tooltip"}`} onClick={toggleDarkMode}>
          {" "}
          <Sun />
        </button>
      </div>
    </>
  );
}

export default DarkModeToggle;
