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

import Pizza from '../img/pizza.jpg';
import Burger from '../img/burger.jpg';
import Rolls from '../img/rolls.png';
import Italian from '../img/italian.jpg';
import Asian from '../img/asian.jpg';
import My from '../img/my.avif';

const EatPage = () => {
    const navigate = useNavigate();
    const [isChecked, setChecked] = useState({
      pizza: false,
      burger: false,
      rolls: false,
      italian: false,
      asian: false,
      my: false,
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
          <StyledTitle>Что бы ты хотела скушать?</StyledTitle>
          <StyledBlockJourney>
            <StyledCard>
              <StyledPhoto
                src={Pizza}
                alt="Ваша фотография"
                onClick={() => handlePhotoClick('pizza')}
              />
              <StyledText>
                Пицца
                <StyledCheckbox
                  type="checkbox"
                  checked={isChecked.pizza}
                  onChange={() => handlePhotoClick('pizza')}
                />
              </StyledText>
            </StyledCard>
            <StyledCard>
              <StyledPhoto
                src={Burger}
                alt="Ваша фотография"
                onClick={() => handlePhotoClick('burger')}
              />
              <StyledText>
                Бургерито
                <StyledCheckbox
                  type="checkbox"
                  checked={isChecked.burger}
                  onChange={() => handlePhotoClick('burger')}
                />
              </StyledText>
            </StyledCard>
            <StyledCard>
              <StyledPhoto
                src={Rolls}
                alt="Ваша фотография"
                onClick={() => handlePhotoClick('rolls')}
              />
              <StyledText>
                Роллы
                <StyledCheckbox
                  type="checkbox"
                  checked={isChecked.rolls}
                  onChange={() => handlePhotoClick('rolls')}
                />
              </StyledText>
            </StyledCard>
          </StyledBlockJourney>
          <StyledBlockJourney>
            <StyledCard>
              <StyledPhoto
                src={Italian}
                alt="Ваша фотография"
                onClick={() => handlePhotoClick('italian')}
              />
              <StyledText>
                Итальянская
                <StyledCheckbox
                  type="checkbox"
                  checked={isChecked.italian}
                  onChange={() => handlePhotoClick('italian')}
                />
              </StyledText>
            </StyledCard>
            <StyledCard>
              <StyledPhoto
                src={Asian}
                alt="Ваша фотография"
                onClick={() => handlePhotoClick('asian')}
              />
              <StyledText>
                Азиатская
                <StyledCheckbox
                  type="checkbox"
                  checked={isChecked.asian}
                  onChange={() => handlePhotoClick('asian')}
                />
              </StyledText>
            </StyledCard>
            <StyledCard>
              <StyledPhoto
                src={My}
                alt="Ваша фотография"
                onClick={() => handlePhotoClick('my')}
              />
              <StyledText>
                Домашнее блюдо от меня
                <StyledCheckbox
                  type="checkbox"
                  checked={isChecked.my}
                  onChange={() => handlePhotoClick('my')}
                />
              </StyledText>
            </StyledCard>
          </StyledBlockJourney>
          <StyledButtonContainer>
              <StyledButton onClick={() => navigate('/delicious')}>И еще одно)</StyledButton>
              </StyledButtonContainer>
        </StyledContainer>
      </StyledPage>
    );
  };

  export default EatPage;
