import { useState } from "react";
import { useLanguage } from "../context/useLanguage.js";

function SettingsPage() {
  const {
    t,
    language,
    changeLanguage,
    darkMode,
    changeDarkMode,
  } = useLanguage();

  const [font, setFont] = useState(
    localStorage.getItem("font") || "Poppins"
  );

  // Cambiar fuente
  const handleFontChange = (e) => {
    const newFont = e.target.value;

    setFont(newFont);
    localStorage.setItem("font", newFont);

    document.documentElement.style.setProperty(
      "--font-family",
      newFont
    );
  };

  // Cambiar idioma
  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
  };

  // Cambiar Dark Mode
  const handleDarkMode = (e) => {
    changeDarkMode(e.target.checked);
  };

  return (
    <>
      <div className="settings-header">
        <h1>{t("settings")}</h1>
      </div>

      <section className="settings-container">
        <h2>{t("appearance")}</h2>

        {/* FONT */}
        <div className="setting-item">
          <div className="setting-info">
            <h3>{t("font")}</h3>

            <p>
              {language === "English"
                ? "Choose the font used throughout the application."
                : "Elige la fuente utilizada en toda la aplicación."}
            </p>
          </div>

          <select
            value={font}
            onChange={handleFontChange}
          >
            <option value="Poppins">Poppins</option>
            <option value="Arial">Arial</option>
            <option value="Roboto">Roboto</option>
            <option value="Montserrat">Montserrat</option>
          </select>
        </div>

        {/* LANGUAGE */}
        <div className="setting-item">
          <div className="setting-info">
            <h3>{t("language")}</h3>

            <p>
              {language === "English"
                ? "Select the language of the application."
                : "Selecciona el idioma de la aplicación."}
            </p>
          </div>

          <select
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="English">English</option>
            <option value="Spanish">Español</option>
          </select>
        </div>

        {/* DARK MODE */}
        <div className="setting-item">
          <div className="setting-info">
            <h3>{t("darkMode")}</h3>

            <p>
              {language === "English"
                ? "Change the appearance of the application."
                : "Cambia la apariencia de la aplicación."}
            </p>
          </div>

          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={handleDarkMode}
            />

            <span className="slider"></span>
          </label>
        </div>
      </section>
    </>
  );
}

export default SettingsPage;