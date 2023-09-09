/**
 * Map besed on this resources:
 * https://en.wikipedia.org/wiki/Arabic_diacritics
 * https://en.wikipedia.org/wiki/Unicode_and_HTML_for_the_Hebrew_alphabet
 * https://en.wiktionary.org/wiki/Category:Arabic_diacritical_marks
 * https://github.com/kariminf/lang-trans/blob/master/lang_trans/arabic.py
 * https://he.wikipedia.org/wiki/אלפבית_ערבי
 * https://he.wikipedia.org/wiki/ניקוד_העברית_בת_ימינו
 * https://he.wikipedia.org/wiki/תשכיל
 * https://hebrew-academy.org.il/wp-content/uploads/התעתיק-מערבית-לעברית-1.pdf
 * https://www.yo-yoo.co.il/tools/niqqud/
 */

type ArabToHebMap = {
  [key: string]: string;
};

export const arabToHebMap: ArabToHebMap = {
  ا: 'א', // alif
  // ب: 'ב', // ba
  ب: 'בּ', // ba
  ت: 'ת', // ta
  ث: 'ת’', // tha
  ج: 'ג’', // jim
  ح: 'ח', // Ḥa
  خ: 'ח’', // kha
  د: 'ד', // dal
  ذ: 'ד’', // dhal
  ر: 'ר', // ra
  ز: 'ז', // zin
  س: 'ס', // sin
  ش: 'ש', // shin
  ص: 'ס’', // ṣad

  ض: 'צ’', // Ḍad
  //  ض: 'ד', // might be better

  ط: 'ט', // Ṭa
  ظ: 'ז', // Ẓa
  ع: 'ע', // 'Ayn

  غ: 'ע’', // ghayn
  // غ: "ר’", // Might be better

  ف: 'פ', // fa
  ق: 'ק', // qaf
  ك: 'כּ', // kaf
  ل: 'ל', // lam
  م: 'מ', // mim
  ن: 'נ', // nun
  ه: 'ה', // ha
  و: 'ו', // waw
  ي: 'י', // ya

  // Hamza
  ء: 'י', // lone hamza

  // أ: 'י', // hamza on alif
  أ: 'א', // hamza on alif

  ؤ: 'י', // hamza on waw
  ئ: 'י', // hamza on ya

  // إ: 'י', // hamza below alif
  إ: 'אִ', // hamza below alif

  // Alif

  // The Hebrew Academy seys to convert madda to duble Alef
  آ: 'אא', // madda on alif

  // ٱ: 'א', // alif alwasla
  ٱ: '(א)', // alif alwasla

  '\u0670': 'א', // dagger alif
  ى: 'א', // alif maqsura

  // Harakat
  '\u064E': 'ַ', // fatha

  // '\u064F': 'וּ', // Damma ( ُ  )- its possible to transliterat it as kubutz as well but shuruk is more convenient
  '\u064F': 'ֻ',

  // '\u0650': 'י', // kasra ( ِ )
  '\u0650': 'ִ', // kasra ( ِ )

  '\u064B': 'ַן', // fathatayn
  '\u064C': 'ֻן', // dammatayn
  '\u064D': 'ִן', // kasratayn
  // '\u0651': '\u0651', // shadda
  '\u0651': 'ּ', // shadda

  // '\u0640': '_', // tatwil
  '\u0640': '', // remove tatwil

  // others
  ة: 'ה', // ta marbuta
  '؟': '?', // ta marbuta

  '\u0652': 'ְ', // sukun ( ْ ) might be more appropriate
  // '\u0652': 'ֶ', //

  ﻻ: 'לא',
  '،': ',',

  'ۡ': '', // \u06E1 (Small high dotless head of khah) - i have no clue what it is
};
