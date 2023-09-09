'use client';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import StopIcon from '@mui/icons-material/Stop';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Paper, styled } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { ScaleContinuousNumeric, scaleLinear } from 'd3-scale';
import {
  ChangeEvent,
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { arabicToHebrew } from './ar-to-heb/arabic-to-hebrew-transliteration';
import { useSpeechSynthesis } from './use-speech-synthesis';

import theme from '@/components/ThemeRegistry/theme';
import useMediaQuery from '@mui/material/useMediaQuery';

const Container = styled('div')`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 64px);
  align-items: center;
`;

const textFieldProps = {
  variant: 'filled' as const,
  multiline: true,
  minRows: 6,
  maxRows: 10,
};
const baseTextFieldStyle = {
  transition: 'font-size 0.1s ease-in-out, line-height 0.1s ease-in-out 0s',
  lineHeight: 1.4,
  height: '350px',
};

const x: ScaleContinuousNumeric<number, number> = scaleLinear()
  .range([50, 20])
  .clamp(true);

const getFontSize = (text: string): number => {
  const length = text.trim().length;
  return x(length / 100);
};

const HomePage: FunctionComponent = () => {
  const [arabic, setArabic] = useState<string>(
    'السلام عليكم ورحمة الله وبركاته',
  );
  const [hebrew, setHebrew] = useState<string>('');
  const [selectedText, setSelected] = useState<string>('');
  const [fontSize, setFontSize] = useState<number>(getFontSize(arabic));
  const [speak, cancel, speaking, supported] = useSpeechSynthesis();

  useEffect(() => {
    setHebrew(arabicToHebrew(arabic));
    setSelected(arabic);
    setFontSize(getFontSize(arabic));
  }, [arabic]);

  const tts = useCallback(() => {
    if (speaking) {
      cancel();
    } else {
      speak(selectedText);
    }
  }, [speaking, cancel, speak, selectedText]);

  const onSelect = useCallback(() => {
    const selection = window.getSelection()?.toString();

    if (selection && selection?.length > 1) {
      setSelected(selection);

      const hebWord = arabicToHebrew(selection);
      const hebTextField = document.getElementById(
        'hebTextField',
      ) as HTMLTextAreaElement;

      const value = hebTextField.value;
      try {
        const start = value.search(hebWord.trim());
        hebTextField.setSelectionRange(start, start + hebWord.length);
      } catch (e) {
        console.log(e);
      }
    } else {
      setSelected(arabic);
    }
  }, [arabic]);

  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const xsMatches = useMediaQuery(theme.breakpoints.down(426));

  const textFieldStyle = { ...baseTextFieldStyle, fontSize };

  return (
    <Container>
      <Paper elevation={24} sx={{ width: ['100vw', '100vw', '90vw', '80vw'] }}>
        <Grid sx={{ p: [1, 2, 2, 2] }} container>
          <Grid item={true} xs={12}>
            <ButtonGroup
              orientation={matches ? 'vertical' : 'horizontal'}
              size="large"
              aria-label="Toolbar"
              style={xsMatches ? { width: '100%' } : {}}
            >
              <Button
                href={`https://translate.google.com/?sl=ar&tl=iw&text=${selectedText}`}
                target="_blank"
              >
                <GTranslateIcon sx={{ mr: 1 }} />
                תרגום
              </Button>

              <Button href={`#`} disabled={!supported} onClick={tts}>
                {speaking ? (
                  <StopIcon sx={{ mr: 1 }} />
                ) : (
                  <VolumeUpIcon sx={{ mr: 1 }} />
                )}
                {speaking ? 'הפסק' : 'דיבור'}
              </Button>
              <Button
                href={`#`}
                onClick={async () => {
                  const descriptor: PermissionDescriptor = {
                    name: 'clipboard-read' as PermissionName,
                  };
                  const permission = await navigator.permissions.query(
                    descriptor,
                  );
                  if (permission.state === 'denied') {
                    // throw new Error('Not allowed to read clipboard.');
                    return;
                  }
                  const txt = await navigator?.clipboard?.readText();
                  setArabic(txt.trim());
                }}
              >
                <ContentPasteIcon sx={{ mr: 1 }} />
                הדבקה
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>

        <Grid
          sx={{ p: [1, 2, 2, 2], pt: [0, 0, 0, 0] }}
          container
          rowSpacing={2}
          columnSpacing={2}
          direction={matches ? 'column' : 'row'}
        >
          <Grid item={true} sm={12} md={6}>
            <TextField
              sx={{ width: '100%' }}
              placeholder="טקסט בערבית"
              label="ערבית"
              lang="ar"
              {...textFieldProps}
              value={arabic}
              disabled={speaking}
              inputProps={{ style: textFieldStyle }}
              onSelect={onSelect}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setArabic(event.target.value)
              }
            />
          </Grid>
          <Grid item={true} sm={12} md={6}>
            <TextField
              sx={{ width: '100%' }}
              placeholder="תעתיק עברי"
              lang="he"
              label="עברית"
              {...textFieldProps}
              value={hebrew}
              id="hebTextField"
              inputProps={{ style: { ...textFieldStyle }, spellCheck: false }}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setHebrew(event.target.value)
              }
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default HomePage;
