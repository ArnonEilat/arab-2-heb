import { useCallback, useEffect, useRef, useState } from 'react';

const getArabicVoice = (): SpeechSynthesisVoice | undefined => {
  for (const voice of window.speechSynthesis.getVoices()) {
    if (voice.lang.toLowerCase().includes('ar-')) {
      return voice;
    }
  }

  return undefined;
};

type UseSpeechSynthesisReturnType = [
  (s: string) => void,
  () => void,
  boolean,
  boolean,
];

export const useSpeechSynthesis = (): UseSpeechSynthesisReturnType => {
  const synth = useRef<SpeechSynthesis>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [supported, setSupported] = useState(false);

  const speak = useCallback((text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    const arabicVoice = getArabicVoice();
    if (!arabicVoice) {
      setIsPlaying(false);
      setSupported(false);
      return;
    }
    utterance.voice = arabicVoice;
    utterance.rate = 0.85;

    utterance.onend = () => setIsPlaying(false);
    utterance.onpause = () => setIsPlaying(false);

    setIsPlaying(true);

    synth?.current?.speak(utterance);
  }, []);

  const cancel = () => {
    synth?.current?.cancel();
    setIsPlaying(false);
  };

  useEffect(() => {
    synth.current = window.speechSynthesis;

    if (typeof window !== 'undefined' && window.speechSynthesis) {
      setSupported(true);
    }

    return () => {};
  }, []);

  return [speak, cancel, isPlaying, supported];
};
