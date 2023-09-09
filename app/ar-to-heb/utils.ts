const isSunLetter = (chr: string): boolean => {
  switch (chr) {
    case 'ت':
      return true;
    case 'ث':
      return true;
    case 'د':
      return true;
    case 'ذر':
      return true;
    case 'ز':
      return true;
    case 'س':
      return true;
    case 'ش':
      return true;
    case 'ص':
      return true;
    case 'ض':
      return true;
    case 'ط':
      return true;
    case 'ظ':
      return true;
    case 'ل':
      return true;
    case 'ن':
      return true;
    default:
      return false;
  }
};

/**
 * El should be separated from the word with a hyphen, For example: Al־Bira
 * El before sun letter  should be separated from the word with a hyphen and the Lam should be removed.
 */
export const addHhyphenAfterEl = (arbicText: string) => {
  const arbicSegmenter = new Intl.Segmenter('ar', { granularity: 'word' });
  const segments: Intl.Segments = arbicSegmenter.segment(arbicText);

  const wordsArr = Array.from(segments)
    .map(({ segment }) => segment)
    .map((word: string) => {
      if (word === 'ال') {
        return word;
      }
      const isThirdLetterLam = word[2] === 'ل';

      // https://www.softschools.com/languages/arabic/sun_and_moon_letters_in_arabic
      if (word.startsWith('ال') && isSunLetter(word[2]) && !isThirdLetterLam) {
        return word.replace('ال', 'ا־');
      }

      if (word.startsWith('ال') && !isThirdLetterLam) {
        return word.replace('ال', 'ال־');
      }

      return word;
    });

  return wordsArr.join('');
};
