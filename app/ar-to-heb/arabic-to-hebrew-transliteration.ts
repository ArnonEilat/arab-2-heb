import { arabToHebMap } from './arab-to-heb-map';
import { convertToFinalForm, hebrewNiqqud } from './final-letters-fixer';
import { addHhyphenAfterEl } from './utils';

const hebSegmenter = new Intl.Segmenter('he', { granularity: 'word' });

/*
 * The niqqud shuld be before the apostrophe
 */
const fixApostrophe = (heText: string) => {
  const niqqudAfterApostrophe = new RegExp(
    '\u2019([' + hebrewNiqqud.join() + '])',
  );

  do {
    heText = heText.replace(niqqudAfterApostrophe, '$1\u2019');
  } while (heText.match(niqqudAfterApostrophe));

  return heText;
};

export const arabicToHebrew = (arbicText: string) => {
  arbicText = addHhyphenAfterEl(arbicText);

  let heText = arbicText
    .split('')
    .map((chr: string, i: number) => {
      // If chr is taa marbuuta and the next word start with alif its Taw
      if (chr === 'ة' && arbicText[i + 1] === ' ' && arbicText[i + 2] === 'ا') {
        return 'ת';
      }
      if (chr in arabToHebMap) {
        return arabToHebMap[chr];
      }

      return chr;
    })
    .join('');

  //  waw after damma coused unnecesary vav so we need to remove it
  heText = heText.replaceAll('וּו', 'וּ');

  //  hamza below alif converted to hiriq as well as kasra - when they next to each other
  //  we're getting two hiriq and shuld remove the extra one
  heText = heText.replaceAll('ִִ', 'ִ');

  const segmentsHe: Intl.Segments = hebSegmenter.segment(heText);

  heText = Array.from(segmentsHe)
    .map((s: Intl.SegmentData): string => s.segment)
    .map(convertToFinalForm)
    .map(fixApostrophe)
    .join('');

  return heText;
};
