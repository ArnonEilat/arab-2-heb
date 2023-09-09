import { convertToFinalForm } from './final-letters-fixer';

// https://en.wikipedia.org/wiki/Final_form

type WordPair = {
  word: string;
  finalForm: string;
};

const finalFormTests: WordPair[] = [
  { word: 'אָבִיכׇ', finalForm: 'אָבִיךׇ' },
  { word: 'אותכ', finalForm: 'אותך' },
  { word: 'אַמִּיצ', finalForm: 'אַמִּיץ' },
  { word: 'בית', finalForm: 'בית' },
  { word: 'בָּרוּכְ', finalForm: 'בָּרוּךְ' },
  { word: 'ילד', finalForm: 'ילד' },
  { word: 'עפ', finalForm: 'עף' },
  { word: 'עציצ', finalForm: 'עציץ' },
  { word: 'שלומ', finalForm: 'שלום' },
  { word: 'תיאטרונ', finalForm: 'תיאטרון' },
];

test.each(finalFormTests)(
  'Should convert $word to $finalForm ',
  ({ word, finalForm }) => {
    expect(convertToFinalForm(word)).toBe(finalForm);
  },
);
