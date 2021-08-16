const getUrl = (method: 'discs' | 'numbers' | 'about' | 'faq') => {
  const macroId = 'AKfycbxOGHWJzv9m7vC4CgoD0elthQNOih5Fa1bYv5LSyIC0FCcKOUxfu2q51p_4HHeTj3aw8w';
  return `https://script.google.com/macros/s/${macroId}/exec?method=${method}`;
}

export {getUrl}
