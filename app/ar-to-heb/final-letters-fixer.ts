export const hebrewNiqqud: string[] = [
  'ְ', // Shva
  'ֱ', // Hatef Patah
  'ֲ', // Hatef Kamatz
  'ֳ', // Hatef Segol
  'ִ', // Hiriq
  'ֵ', // Tsere
  'ֶ', // Segol
  'ַ', // Patach
  'ָ', // Kamatz
  'ֹ', // Holam
  'ֺ', // Holam Haser
  'ֻ', // Qubuts
  'ּ', // Dagesh or Mappiq
  '־', // Maqaf
  'ׇ', // Qamats Qatan
  '’',
];

type FinalLettersMap = {
  [key: string]: string;
};

const finalLettersMap: FinalLettersMap = {
  כ: 'ך',
  מ: 'ם',
  נ: 'ן',
  פ: 'ף',
  צ: 'ץ',
};

const finalLetters: string[] = 'כמנפצ'.split('');

const isFinalLetter = (letter: string): boolean =>
  finalLetters.includes(letter);

const getLastLetterIndex = (word: string): number => {
  for (let i = word.length - 1; i >= 0; i--) {
    if (!hebrewNiqqud.includes(word[i])) {
      return i;
    }
  }

  return -1;
};

export const convertToFinalForm = (word: string): string => {
  if (word.length === 1) {
    return word;
  }
  const lastLetterIndex: number = getLastLetterIndex(word);

  const lastChar: string = word[lastLetterIndex];
  if (isFinalLetter(lastChar)) {
    const newWord: string[] = word.split('');
    newWord[lastLetterIndex] = finalLettersMap[lastChar];
    return newWord.join('');
  }

  return word;
};
