import React, { useEffect, useRef } from 'react';
import happyCatGif from '../img/happy-cat.gif';
import backgroundSound from '../sound/happy-cat.mp3';
import {
  StyledContainer,
  StyledPage,
  StyledButtonContainer,
  StyledTitle,
  StyledImg,
  StyledImgContainer,
} from './StyledComponent';

const YesPage = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;

    const playAudio = () => {
      audioElement.play().catch(error => {
        document.getElementById('error-message').innerText = 'Ошибка при воспроизведении звука';
      });
      document.removeEventListener('click', playAudio);
    };

    document.addEventListener('click', playAudio);

    return () => {
      document.removeEventListener('click', playAudio);
    };
  }, []);

  return (
    <StyledPage>
      <StyledContainer>
        <StyledImgContainer>
          <StyledImg src={happyCatGif} alt="Happy Cat"></StyledImg>
        </StyledImgContainer>
        <StyledTitle>УРАААА!!! Так и знал что ты согласишься:)</StyledTitle>
        <StyledButtonContainer>
          <audio ref={audioRef}>
            <source src={backgroundSound} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </StyledButtonContainer>
      </StyledContainer>
    </StyledPage>
  );
};

export default YesPage;
