import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  font-family: 'Caveat-Variable';
  padding: 50px 0px;
`;

export const StyledTitle = styled.div`
  font-size: 65px;
  padding: 0px 10px 20px 10px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 45px;
  }
`;

export const StyledText = styled.div`
  font-size: 50px;
  padding: 0px 10px 20px 10px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 35px;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
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

  &:hover {
    background-color: #f8bfca;
  }
`;

export const StyledPage = styled.div`
  background: url('/cute.jpg') center/cover no-repeat fixed;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    background-size: cover;
  }
`;

export const StyledImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 0px 20px 0px;
`;

export const StyledImg = styled.img`
  width: 300px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 80%;
  }
`;
