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

import Icecream from '../img/ice-cream.avif';
import Kinder from '../img/kinder.jpg';
import Macaruns from '../img/macaruns.jpg';
import Milka from '../img/milka.jpeg';
import Lux from '../img/lux delice.avif';
import Me from '../img/me.jpg';

const DeliciousPage = () => {
    const navigate = useNavigate();
    const [isChecked, setChecked] = useState({
      icecream: false,
      kinder: false,
      macaruns: false,
      milka: false,
      lux: false,
      me: false,
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
          <StyledTitle>Чем бы ты хотела из следенького?</StyledTitle>
          <StyledBlockJourney>
            <StyledCard>
              <StyledPhoto
                src={Icecream}
                alt="Ваша фотография"
                onClick={() => handlePhotoClick('icecream')}
              />
              <StyledText>
                Мороженное
                <StyledCheckbox
                  type="checkbox"
                  checked={isChecked.icecream}
                  onChange={() => handlePhotoClick('icecream')}
                />
              </StyledText>
            </StyledCard>
            <StyledCard>
              <StyledPhoto
                src={Kinder}
                alt="Ваша фотография"
                onClick={() => handlePhotoClick('kinder')}
              />
              <StyledText>
                Киндер
                <StyledCheckbox
                  type="checkbox"
                  checked={isChecked.kinder}
                  onChange={() => handlePhotoClick('kinder')}
                />
              </StyledText>
            </StyledCard>
            <StyledCard>
              <StyledPhoto
                src={Macaruns}
                alt="Ваша фотография"
                onClick={() => handlePhotoClick('macaruns')}
              />
              <StyledText>
                Макаруны
                <StyledCheckbox
                  type="checkbox"
                  checked={isChecked.macaruns}
                  onChange={() => handlePhotoClick('macaruns')}
                />
              </StyledText>
            </StyledCard>
          </StyledBlockJourney>
          <StyledBlockJourney>
            <StyledCard>
              <StyledPhoto
                src={Milka}
                alt="Ваша фотография"
                onClick={() => handlePhotoClick('milka')}
              />
              <StyledText>
                Милка
                <StyledCheckbox
                  type="checkbox"
                  checked={isChecked.milka}
                  onChange={() => handlePhotoClick('milka')}
                />
              </StyledText>
            </StyledCard>
            <StyledCard>
              <StyledPhoto
                src={Lux}
                alt="Ваша фотография"
                onClick={() => handlePhotoClick('lux')}
              />
              <StyledText>
              Изысканный десерт
                <StyledCheckbox
                  type="checkbox"
                  checked={isChecked.lux}
                  onChange={() => handlePhotoClick('lux')}
                />
              </StyledText>
            </StyledCard>
            <StyledCard>
              <StyledPhoto
                src={Me}
                alt="Ваша фотография"
                onClick={() => handlePhotoClick('me')}
              />
              <StyledText>
                Меня?)
                <StyledCheckbox
                  type="checkbox"
                  checked={isChecked.me}
                  onChange={() => handlePhotoClick('me')}
                />
              </StyledText>
            </StyledCard>
          </StyledBlockJourney>
          <StyledButtonContainer>
              <StyledButton onClick={() => navigate('/yes')}>:)</StyledButton>
              </StyledButtonContainer>
        </StyledContainer>
      </StyledPage>
    );
  };

  export default DeliciousPage;
