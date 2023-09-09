import { arabicToHebrew } from './arabic-to-hebrew-transliteration';

// https://www.facebook.com/Kilme.A.Word.A.Day/
// https://arabit.me/page/2/
// https://www.arab48.com
// https://panet.com/
// https://www.alarab.com/
// https://hebrew-academy.org.il/2022/06/27/רשימת-היישובים-בישראל/

type WordPair = {
  arabicWord: string;
  hebrewTransliteration: string;
};

const transliterationTests: WordPair[] = [
  { arabicWord: '', hebrewTransliteration: '' },

  { arabicWord: 'ﻻ', hebrewTransliteration: 'לא' },
  { arabicWord: 'لا', hebrewTransliteration: 'לא' },
  { arabicWord: 'ال', hebrewTransliteration: 'אל' },
  { arabicWord: 'آدم', hebrewTransliteration: 'אאדם' },
  { arabicWord: 'آكل', hebrewTransliteration: 'אאכּל' },
  { arabicWord: 'وادي النعم', hebrewTransliteration: 'ואדי א־נעם' },
  { arabicWord: 'الطيّبة', hebrewTransliteration: 'א־טיּבּה' },
  { arabicWord: 'رُمة الهـَيـْب', hebrewTransliteration: 'רֻמת אל־הַיְבּ' },
  { arabicWord: 'أُمّ ٱلْفَحْم', hebrewTransliteration: 'אֻםּ (א)לְפַחְם' },
  { arabicWord: 'رهط', hebrewTransliteration: 'רהט' },
  {
    arabicWord: 'أَلْكِتَاب عَلَى ٱلْمَكْتَبَة',
    hebrewTransliteration: 'אַלְכִּתַאבּ עַלַא (א)לְמַכְּתַבַּה',
  },
  {
    arabicWord: 'أَلْوَلَد فِي ٱلْبَيْت',
    hebrewTransliteration: 'אַלְוַלַד פִי (א)לְבַּיְת',
  },
  { arabicWord: 'دالية الكرمل', hebrewTransliteration: 'דאלית אל־כּרמל' },

  { arabicWord: 'الله', hebrewTransliteration: 'אללה' },
  { arabicWord: 'بيت سوريك', hebrewTransliteration: 'בּית סוריךּ' },
  { arabicWord: 'ذنابة', hebrewTransliteration: 'ד’נאבּה' },
  { arabicWord: 'ذهب', hebrewTransliteration: 'ד’הבּ' },
  { arabicWord: 'مْرَشْرَش', hebrewTransliteration: 'מְרַשְרַש' },
  { arabicWord: 'سَاعَة', hebrewTransliteration: 'סַאעַה' },
  { arabicWord: 'رَغْوَة', hebrewTransliteration: 'רַעְ’וַה' },
  { arabicWord: 'أباريق', hebrewTransliteration: 'אבּאריק' },
  { arabicWord: 'إِبْرِيق', hebrewTransliteration: 'אִבְּרִיק' },
  { arabicWord: 'عَالَج', hebrewTransliteration: 'עַאלַג’' },
  { arabicWord: 'مِتان', hebrewTransliteration: 'מִתאן' },
  { arabicWord: 'وَقِح', hebrewTransliteration: 'וַקִח' },
  { arabicWord: 'بَشَرَة', hebrewTransliteration: 'בַּשַרַה' },
  { arabicWord: 'شوق', hebrewTransliteration: 'שוק' },
  { arabicWord: 'مَجْد', hebrewTransliteration: 'מַגְ’ד' },
  { arabicWord: 'حَمّ', hebrewTransliteration: 'חַםּ' },
  { arabicWord: 'شوب', hebrewTransliteration: 'שובּ' },
  { arabicWord: 'شماتة', hebrewTransliteration: 'שמאתה' },
  { arabicWord: 'كَاس', hebrewTransliteration: 'כַּאס' },
  { arabicWord: 'مِشْوَار', hebrewTransliteration: 'מִשְוַאר' },
  { arabicWord: 'مُسَاوَاة', hebrewTransliteration: 'מֻסַאוַאה' },
  { arabicWord: 'إشْرَاف', hebrewTransliteration: 'אִשְרַאף' },
  { arabicWord: 'لُيُونَة', hebrewTransliteration: 'לֻיֻונַה' },
  { arabicWord: 'ثُعْبَان', hebrewTransliteration: 'תֻ’עְבַּאן' },
  { arabicWord: 'حَقْل', hebrewTransliteration: 'חַקְל' },
  { arabicWord: 'شوق', hebrewTransliteration: 'שוק' },
  { arabicWord: 'حَامض', hebrewTransliteration: 'חַאמץ’' },
  { arabicWord: 'ذيل', hebrewTransliteration: 'ד’יל' },
];

test.each(transliterationTests)(
  'Should convert $arabicWord to $hebrewTransliteration',
  ({ arabicWord, hebrewTransliteration }) => {
    expect(arabicToHebrew(arabicWord)).toBe(hebrewTransliteration);
  },
);
