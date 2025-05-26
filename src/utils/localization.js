import LocalizedStrings from 'react-localization';
import cz from '../locales/cz.json';
import en from '../locales/en.json';
import fr from '../locales/fr.json'; // pokud chceš

const strings = new LocalizedStrings({
  cz,
  en,
  fr,
});

const savedLang = localStorage.getItem("lang") || "cz";
strings.setLanguage(savedLang);

export default strings;