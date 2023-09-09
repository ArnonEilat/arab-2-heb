// not in use
export const getArabicLetterName = (char: string) => {
  const charCode: number = char.charCodeAt(0);

  switch (charCode) {
    case 0x0600:
      return 'number sign';
    case 0x0601:
      return 'sign sanah';
    case 0x0602:
      return 'footnote marker';
    case 0x0603:
      return 'sign safha';
    case 0x0604:
      return 'sign samvat';
    case 0x0606:
      return 'arabic-indic cube root';
    case 0x0607:
      return 'arabic-indic fourth root';
    case 0x0608:
      return 'ray';
    case 0x0609:
      return 'arabic-indic per mille sign';
    case 0x060a:
      return 'arabic-indic per ten thousand sign';
    case 0x060b:
      return 'afghani sign';
    case 0x060c:
      return 'comma';
    case 0x060d:
      return 'date separator';
    case 0x060e:
      return 'poetic verse sign';
    case 0x060f:
      return 'sign misra';
    case 0x0610:
      return 'sign sallallahou alayhe wassallam';
    case 0x0611:
      return 'sign alayhe assallam';
    case 0x0612:
      return 'sign rahmatullah alayhe';
    case 0x0613:
      return 'sign radi allahou anhu';
    case 0x0614:
      return 'sign takhallus';
    case 0x0615:
      return 'small high tah';
    case 0x0616:
      return 'small high ligature alef with lam with yeh';
    case 0x0617:
      return 'small high zain';
    case 0x0618:
      return 'small fatha';
    case 0x0619:
      return 'small damma';
    case 0x061a:
      return 'small kasra';
    case 0x061b:
      return 'semicolon';
    case 0x061c:
      return 'mark';
    case 0x061e:
      return 'triple dot punctuation mark';
    case 0x061f:
      return 'question mark';
    case 0x0620:
      return 'kashmiri yeh';
    case 0x0621:
      return 'hamza';
    case 0x0622:
      return 'alef with madda above';
    case 0x0623:
      return 'alef with hamza above';
    case 0x0624:
      return 'waw with hamza above';
    case 0x0625:
      return 'alef with hamza below';
    case 0x0626:
      return 'yeh with hamza above';
    case 0x0627:
      return 'alef';
    case 0x0628:
      return 'beh';
    case 0x0629:
      return 'teh marbuta';
    case 0x062a:
      return 'teh';
    case 0x062b:
      return 'theh';
    case 0x062c:
      return 'jeem';
    case 0x062d:
      return 'hah';
    case 0x062e:
      return 'khah';
    case 0x062f:
      return 'dal';
    case 0x0630:
      return 'thal';
    case 0x0631:
      return 'reh';
    case 0x0632:
      return 'zain';
    case 0x0633:
      return 'seen';
    case 0x0634:
      return 'sheen';
    case 0x0635:
      return 'sad';
    case 0x0636:
      return 'dad';
    case 0x0637:
      return 'tah';
    case 0x0638:
      return 'zah';
    case 0x0639:
      return 'ain';
    case 0x063a:
      return 'ghain';
    case 0x063b:
      return 'keheh with two dots above';
    case 0x063c:
      return 'keheh with three dots below';
    case 0x063d:
      return 'farsi yeh with inverted v';
    case 0x063e:
      return 'farsi yeh with two dots above';
    case 0x063f:
      return 'farsi yeh with three dots above';
    case 0x0640:
      return 'tatweel';
    case 0x0641:
      return 'feh';
    case 0x0642:
      return 'qaf';
    case 0x0643:
      return 'kaf';
    case 0x0644:
      return 'lam';
    case 0x0645:
      return 'meem';
    case 0x0646:
      return 'noon';
    case 0x0647:
      return 'heh';
    case 0x0648:
      return 'waw';
    case 0x0649:
      return 'alef maksura';
    case 0x064a:
      return 'yeh';
    case 0x064b:
      return 'fathatan';
    case 0x064c:
      return 'dammatan';
    case 0x064d:
      return 'kasratan';
    case 0x064e:
      return 'fatha';
    case 0x064f:
      return 'damma';
    case 0x0650:
      return 'kasra';
    case 0x0651:
      return 'shadda';
    case 0x0652:
      return 'sukun';
    case 0x0653:
      return 'maddah above';
    case 0x0654:
      return 'hamza above';
    case 0x0655:
      return 'hamza below';
    case 0x0656:
      return 'subscript alef';
    case 0x0657:
      return 'inverted damma';
    case 0x0658:
      return 'mark noon ghunna';
    case 0x0659:
      return 'zwarakay';
    case 0x065a:
      return 'vowel sign small v above';
    case 0x065b:
      return 'vowel sign inverted small v above';
    case 0x065c:
      return 'vowel sign dot below';
    case 0x065d:
      return 'reversed damma';
    case 0x065e:
      return 'fatha with two dots';
    case 0x065f:
      return 'wavy hamza below';
    case 0x0660:
      return 'arabic-indic digit zero';
    case 0x0661:
      return 'arabic-indic digit one';
    case 0x0662:
      return 'arabic-indic digit two';
    case 0x0663:
      return 'arabic-indic digit three';
    case 0x0664:
      return 'arabic-indic digit four';
    case 0x0665:
      return 'arabic-indic digit five';
    case 0x0666:
      return 'arabic-indic digit six';
    case 0x0667:
      return 'arabic-indic digit seven';
    case 0x0668:
      return 'arabic-indic digit eight';
    case 0x0669:
      return 'arabic-indic digit nine';
    case 0x066a:
      return 'percent sign';
    case 0x066b:
      return 'decimal separator';
    case 0x066c:
      return 'thousands separator';
    case 0x066d:
      return 'five pointed star';
    case 0x066e:
      return 'dotless beh';
    case 0x066f:
      return 'dotless qaf';
    case 0x0670:
      return 'superscript alef';
    case 0x0671:
      return 'alef wasla';
    case 0x0672:
      return 'alef with wavy hamza above';
    case 0x0673:
      return 'alef with wavy hamza below';
    case 0x0674:
      return 'high hamza';
    case 0x0675:
      return 'high hamza alef';
    case 0x0676:
      return 'high hamza waw';
    case 0x0677:
      return 'u with hamza above';
    case 0x0678:
      return 'high hamza yeh';
    case 0x0679:
      return 'tteh';
    case 0x067a:
      return 'tteheh';
    case 0x067b:
      return 'beeh';
    case 0x067c:
      return 'teh with ring';
    case 0x067d:
      return 'teh with three dots above downwards';
    case 0x067e:
      return 'peh';
    case 0x067f:
      return 'teheh';
    case 0x0680:
      return 'beheh';
    case 0x0681:
      return 'hah with hamza above';
    case 0x0682:
      return 'hah with two dots vertical above';
    case 0x0683:
      return 'nyeh';
    case 0x0684:
      return 'dyeh';
    case 0x0685:
      return 'hah with three dots above';
    case 0x0686:
      return 'tcheh';
    case 0x0687:
      return 'tcheheh';
    case 0x0688:
      return 'ddal';
    case 0x0689:
      return 'dal with ring';
    case 0x068a:
      return 'dal with dot below';
    case 0x068b:
      return 'dal with dot below and small tah';
    case 0x068c:
      return 'dahal';
    case 0x068d:
      return 'ddahal';
    case 0x068e:
      return 'dul';
    case 0x068f:
      return 'dal with three dots above downwards';
    case 0x0690:
      return 'dal with four dots above';
    case 0x0691:
      return 'rreh';
    case 0x0692:
      return 'reh with small v';
    case 0x0693:
      return 'reh with ring';
    case 0x0694:
      return 'reh with dot below';
    case 0x0695:
      return 'reh with small v below';
    case 0x0696:
      return 'reh with dot below and dot above';
    case 0x0697:
      return 'reh with two dots above';
    case 0x0698:
      return 'jeh';
    case 0x0699:
      return 'reh with four dots above';
    case 0x069a:
      return 'seen with dot below and dot above';
    case 0x069b:
      return 'seen with three dots below';
    case 0x069c:
      return 'seen with three dots below and three dots above';
    case 0x069d:
      return 'sad with two dots below';
    case 0x069e:
      return 'sad with three dots above';
    case 0x069f:
      return 'tah with three dots above';
    case 0x06a0:
      return 'ain with three dots above';
    case 0x06a1:
      return 'dotless feh';
    case 0x06a2:
      return 'feh with dot moved below';
    case 0x06a3:
      return 'feh with dot below';
    case 0x06a4:
      return 'veh';
    case 0x06a5:
      return 'feh with three dots below';
    case 0x06a6:
      return 'peheh';
    case 0x06a7:
      return 'qaf with dot above';
    case 0x06a8:
      return 'qaf with three dots above';
    case 0x06a9:
      return 'keheh';
    case 0x06aa:
      return 'swash kaf';
    case 0x06ab:
      return 'kaf with ring';
    case 0x06ac:
      return 'kaf with dot above';
    case 0x06ad:
      return 'ng';
    case 0x06ae:
      return 'kaf with three dots below';
    case 0x06af:
      return 'gaf';
    case 0x06b0:
      return 'gaf with ring';
    case 0x06b1:
      return 'ngoeh';
    case 0x06b2:
      return 'gaf with two dots below';
    case 0x06b3:
      return 'gueh';
    case 0x06b4:
      return 'gaf with three dots above';
    case 0x06b5:
      return 'lam with small v';
    case 0x06b6:
      return 'lam with dot above';
    case 0x06b7:
      return 'lam with three dots above';
    case 0x06b8:
      return 'lam with three dots below';
    case 0x06b9:
      return 'noon with dot below';
    case 0x06ba:
      return 'noon ghunna';
    case 0x06bb:
      return 'rnoon';
    case 0x06bc:
      return 'noon with ring';
    case 0x06bd:
      return 'noon with three dots above';
    case 0x06be:
      return 'heh doachashmee';
    case 0x06bf:
      return 'tcheh with dot above';
    case 0x06c0:
      return 'heh with yeh above';
    case 0x06c1:
      return 'heh goal';
    case 0x06c2:
      return 'heh goal with hamza above';
    case 0x06c3:
      return 'teh marbuta goal';
    case 0x06c4:
      return 'waw with ring';
    case 0x06c5:
      return 'kirghiz oe';
    case 0x06c6:
      return 'oe';
    case 0x06c7:
      return 'u';
    case 0x06c8:
      return 'yu';
    case 0x06c9:
      return 'kirghiz yu';
    case 0x06ca:
      return 'waw with two dots above';
    case 0x06cb:
      return 've';
    case 0x06cc:
      return 'farsi yeh';
    case 0x06cd:
      return 'yeh with tail';
    case 0x06ce:
      return 'yeh with small v';
    case 0x06cf:
      return 'waw with dot above';
    case 0x06d0:
      return 'e';
    case 0x06d1:
      return 'yeh with three dots below';
    case 0x06d2:
      return 'yeh barree';
    case 0x06d3:
      return 'yeh barree with hamza above';
    case 0x06d4:
      return 'full stop';
    case 0x06d5:
      return 'ae';
    case 0x06d6:
      return 'small high ligature sad with lam with alef maksura';
    case 0x06d7:
      return 'small high ligature qaf with lam with alef maksura';
    case 0x06d8:
      return 'small high meem initial form';
    case 0x06d9:
      return 'small high lam alef';
    case 0x06da:
      return 'small high jeem';
    case 0x06db:
      return 'small high three dots';
    case 0x06dc:
      return 'small high seen';
    case 0x06dd:
      return 'end of ayah';
    case 0x06de:
      return 'start of rub el hizb';
    case 0x06df:
      return 'small high rounded zero';
    case 0x06e0:
      return 'small high upright rectangular zero';
    case 0x06e1:
      return 'small high dotless head of khah';
    case 0x06e2:
      return 'small high meem isolated form';
    case 0x06e3:
      return 'small low seen';
    case 0x06e4:
      return 'small high madda';
    case 0x06e5:
      return 'small waw';
    case 0x06e6:
      return 'small yeh';
    case 0x06e7:
      return 'small high yeh';
    case 0x06e8:
      return 'small high noon';
    case 0x06e9:
      return 'place of sajdah';
    case 0x06ea:
      return 'empty centre low stop';
    case 0x06eb:
      return 'empty centre high stop';
    case 0x06ec:
      return 'rounded high stop with filled centre';
    case 0x06ed:
      return 'small low meem';
    case 0x06ee:
      return 'dal with inverted v';
    case 0x06ef:
      return 'reh with inverted v';
    case 0x06f0:
      return 'extended arabic-indic digit zero';
    case 0x06f1:
      return 'extended arabic-indic digit one';
    case 0x06f2:
      return 'extended arabic-indic digit two';
    case 0x06f3:
      return 'extended arabic-indic digit three';
    case 0x06f4:
      return 'extended arabic-indic digit four';
    case 0x06f5:
      return 'extended arabic-indic digit five';
    case 0x06f6:
      return 'extended arabic-indic digit six';
    case 0x06f7:
      return 'extended arabic-indic digit seven';
    case 0x06f8:
      return 'extended arabic-indic digit eight';
    case 0x06f9:
      return 'extended arabic-indic digit nine';
    case 0x06fa:
      return 'sheen with dot below';
    case 0x06fb:
      return 'dad with dot below';
    case 0x06fc:
      return 'ghain with dot below';
    case 0x06fd:
      return 'sign sindhi ampersand';
    case 0x06fe:
      return 'sign sindhi postposition men';
    case 0x06ff:
      return 'heh with inverted v';
    default:
      return false;
  }
};
