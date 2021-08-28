const getUrl = (method: 'discs' | 'numbers' | 'about' | 'faq' | 'home') => {
  const macroId = 'AKfycbxLC6shj7OKpsWH6qHW2z7rslcCBG5Oc-9byOxFtuVDUJpH7LEhcF1XgxkKKA9DbRWevA';
  return `https://script.google.com/macros/s/${macroId}/exec?method=${method}`;
}

export {getUrl}
