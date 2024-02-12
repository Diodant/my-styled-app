import styled from 'styled-components';
import BgImg from '../img/cute.jpg';

export const StyledContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  font-family: 'Caveat-Variable';
  padding: 50px 0px;
`;

export const StyledPage = styled.div`
  background: url(${BgImg}) center/cover no-repeat fixed;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    background-size: cover;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPhoto = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 1100px) {
    width: 250px;
    height: 250px;
  }
  @media (max-width: 950px) {
    width: 200px;
    height: 200px;
  }
    @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

export const StyledBlockJourney = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    gap: 50px;
    @media (max-width: 768px) {
        flex-direction: column;
  }
`;

export const StyledCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 768px) {
        margin: 0px;
  }
`;

export const StyledTitle = styled.div`
  font-size: 65px;
  text-align: center;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

export const StyledText = styled.div`
display: flex;
align-items: center;
justify-content: center;
  font-size: 30px;
  margin-top: 15px;
  text-align: center;
`;

export const StyledCheckbox = styled.input`
  margin: 5px 0px 0px 10px;
  padding: 0;
  width: 20px;
  height: 20px;
  appearance: none;
  position: relative;
  border: 2px solid #f17db8;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  background-color: transparent;

  &:checked {
    background-color: #f17db8;

    &::before {
      content: '\u2713';
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #ffffff;
      font-size: 14px;
      font-weight: bold;
    }
  }

  &:hover {
    border-color: #e5498b; /* цвет рамки при наведении курсора */
  }
`;

export const StyledButton = styled.button`
  font-family: 'Caveat-Variable';
  background-color: #ffafc1;
  color: white;
  padding: 15px 25px;
  font-size: 26px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    background-color: #f8bfca;
    transform: scale(1.1);
  }
`;
