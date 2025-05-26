import { createContext, useContext, useState, useEffect } from "react";
import LocalizedStrings from "react-localization";
import cz from "../locales/cz.json";
import en from "../locales/en.json";
import fr from "../locales/fr.json";

const strings = new LocalizedStrings({ cz, en, fr });

const LocalizationContext = createContext();

export const LocalizationProvider = ({ children }) => {
  const [version, setVersion] = useState(0);
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || "cz"
  );

  useEffect(() => {
    strings.setLanguage(language);
    localStorage.setItem("lang", language);
    setVersion((prev) => prev + 1); // force reactivity
  }, [language]);

  return (
    <LocalizationContext.Provider
      value={{ strings, language, setLanguage, version }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => useContext(LocalizationContext);
