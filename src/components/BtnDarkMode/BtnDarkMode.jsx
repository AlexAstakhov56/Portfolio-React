import { useEffect } from "react";
import sun from "../../Images/icons/sun.svg";
import moon from "../../Images/icons/moon.svg";
import "./BtnDarkMode.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function BtnDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", "light");

  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode((curValue) => {
      return curValue === "light" ? "dark" : "light";
    });
  }

  const btnDefault = "dark-mode-btn";
  const btnActive = "dark-mode-btn dark-mode-btn--active";

  return (
    <button
      className={darkMode === "dark" ? btnActive : btnDefault}
      onClick={toggleDarkMode}
    >
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
}
