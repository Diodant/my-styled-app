import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Image from '../img/sad.jpg';
import backgroundSound from '../sound/huh-cat.mp3';
import { StyledContainer, StyledButton, StyledPage, StyledButtonContainer, StyledTitle, StyledImg, StyledImgContainer } from './StyledComponent';

const NoPage = () => {
  const audioRef = useRef(null);
  const [clicked, setClicked] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  const handleNoButtonClick = () => {
    const новыйX = Math.random() * window.innerWidth;
    const новыйY = Math.random() * window.innerHeight;
    setNoButtonPosition({ x: новыйX, y: новыйY });
    setClicked(true);
  };

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
          <StyledImg src={Image}></StyledImg>
        </StyledImgContainer>
        <StyledTitle>Кнопка нет для визуала.</StyledTitle>
        <StyledButtonContainer>
          <StyledButton
            style={{ position: clicked ? 'absolute' : 'static', left: noButtonPosition.x, top: noButtonPosition.y }}
            onClick={handleNoButtonClick}
          >
            Нет:(
          </StyledButton>
          <Link to="/yes">
            <StyledButton>Да!!</StyledButton>
          </Link>
          <audio ref={audioRef}>
            <source src={backgroundSound} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </StyledButtonContainer>
      </StyledContainer>
    </StyledPage>
  );
};

export default NoPage;
