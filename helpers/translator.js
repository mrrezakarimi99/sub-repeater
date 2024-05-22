import { useSelector } from 'react-redux';

const Translator = (path, key = {}) => {
  const lang = useSelector((state) => state.language.lang);
  let translation = require(`../locales/${lang}.json`);
  const pathArray = path.split('.');
  pathArray.forEach((item) => {
    translation = translation[item];
  });
  //if length of key > 1 make loop and find all variable in text and replace it with key
  if (key.length > 1) {
    key.forEach((item, index) => {
      if (translation.includes('{' + index + '}')) {
        translation = translation.replace('{' + index + '}', item);
      }
    });
  } else {
    if (translation.includes('{0}')) {
      translation = translation.replace('{0}', key);
    }
  }
  return translation;
};
export default Translator;
