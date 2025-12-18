import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { localize } from './redux/localizer';


interface RootState {
  localizer: {
    locale: string;
  };
}

const LanguageSelector: React.FC = () => {
  const dispatch = useDispatch();

  // Obtener locale actual desde Redux
  let currentLocale = useSelector((state: RootState) => state.localizer.locale);

  // Ajustar mapeos si tu backend usa es-419, etc.
  if (currentLocale === 'es-419') {
    currentLocale = 'es-ES';
  }

  // Cambiar idioma desde el <select>

  // Cambiar idioma desde los botones ES / EN
  const handleButtonChange = (locale: string) => {
    dispatch(localize({ locale }));
  };

  return (
    <div className="lang-wrapper">
      <div className="lang-container">
        <button
          onClick={() => handleButtonChange("es-ES")}
          className={`lang-btn ${
            currentLocale === "es-ES" ? "active" : ""
          }`}
        >
          ES
        </button>

        <button
          onClick={() => handleButtonChange("en-US")}
          className={`lang-btn ${
            currentLocale === "en-US" ? "active" : ""
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );

      {/* Select para más idiomas directo de los posibles idiomas y funciona 
      <select
        onChange={handleLocaleChange}
        value={currentLocale}
        className="px-3 py-1.5 rounded-md bg-gray-900/40 border border-white/10 text-gray-200 text-sm"
      >
        {AVAILABLE_LOCALES.map((locale) => (
          <option key={locale.code} value={locale.code}>
            {locale.name}
          </option>
        ))}
      </select>
        */}


};

export default LanguageSelector;
