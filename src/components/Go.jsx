import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    StyledContainer,
    StyledPage,
    StyledPhoto,
    StyledBlockJourney,
    StyledCard,
    StyledTitle,
    StyledText,
    StyledCheckbox,
    StyledButtonContainer,
    StyledButton
  } from './Journey';

import Park from '../img/park.jpg';
import Kino from '../img/kino.jpg';
import Restrant from '../img/restrant.jpg';
import Roud from '../img/roud.jpg';
import Shop from '../img/shop.jpg';
import Home from '../img/home.jpg';

const GoPage = () => {
    const navigate = useNavigate();
    const [isChecked, setChecked] = useState({
      park: false,
      kino: false,
      rest: false,
      roud: false,
      shop: false,
      home: false,
    });

    const handlePhotoClick = (key) => {
      setChecked((prevChecked) => ({
        ...prevChecked,
        [key]: !prevChecked[key],
      }));
    };

    return (
      <StyledPage>
        <StyledContainer>
          <StyledTitle>Куда бы ты хотела сходить?</StyledTitle>
          <StyledBlockJourney>
            <StyledCard>
              <StyledPhoto
                src={Park}
                alt="Ваша фотография"
                onClick={() => handlePhotoClick('park')}
              />
              <StyledText>
                Парк
                <StyledCheckbox
                  type="checkbox"
                  checked={isChecked.park}
                  onChange={() => handlePhotoClick('park')}
                />
              </StyledText>
            </StyledCard>
            <StyledCard>
              <StyledPhoto
                src={Kino}
                alt="Ваша фотография"
                onClick={() => handlePhotoClick('kino')}
              />
              <StyledText>
                Кино
                <StyledCheckbox
                  type="checkbox"
                  checked={isChecked.kino}
                  onChange={() => handlePhotoClick('kino')}
                />
              </StyledText>
            </StyledCard>
            <StyledCard>
              <StyledPhoto
                src={Restrant}
                alt="Ваша фотография"
                onClick={() => handlePhotoClick('rest')}
              />
              <StyledText>
                Ресторан
                <StyledCheckbox
                  type="checkbox"
                  checked={isChecked.rest}
                  onChange={() => handlePhotoClick('rest')}
                />
              </StyledText>
            </StyledCard>
          </StyledBlockJourney>
          <StyledBlockJourney>
            <StyledCard>
              <StyledPhoto
                src={Roud}
                alt="Ваша фотография"
                onClick={() => handlePhotoClick('roud')}
              />
              <StyledText>
                Поехать куда захочешь
                <StyledCheckbox
                  type="checkbox"
                  checked={isChecked.roud}
                  onChange={() => handlePhotoClick('roud')}
                />
              </StyledText>
            </StyledCard>
            <StyledCard>
              <StyledPhoto
                src={Shop}
                alt="Ваша фотография"
                onClick={() => handlePhotoClick('shop')}
              />
              <StyledText>
                По магазинам
                <StyledCheckbox
                  type="checkbox"
                  checked={isChecked.shop}
                  onChange={() => handlePhotoClick('shop')}
                />
              </StyledText>
            </StyledCard>
            <StyledCard>
              <StyledPhoto
                src={Home}
                alt="Ваша фотография"
                onClick={() => handlePhotoClick('home')}
              />
              <StyledText>
                Остаться домки
                <StyledCheckbox
                  type="checkbox"
                  checked={isChecked.home}
                  onChange={() => handlePhotoClick('home')}
                />
              </StyledText>
            </StyledCard>
          </StyledBlockJourney>
          <StyledButtonContainer>
              <StyledButton onClick={() => navigate('/eat')}>Дальше)</StyledButton>
              </StyledButtonContainer>
        </StyledContainer>
      </StyledPage>
    );
  };

  export default GoPage;
