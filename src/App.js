import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { StyledContainer, StyledButton, StyledPage, StyledButtonContainer, StyledTitle, StyledText, StyledImg, StyledImgContainer } from './components/StyledComponent';
import Image from './img/images.png';
import GoPage from './components/Go';
import EatPage from './components/Eat';
import YesPage from './components/YES';
import NoPage from './components/NO';
import DeliciousPage from './components/Delicious';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <StyledPage>
            <StyledContainer>
              <StyledImgContainer>
              <StyledImg src={Image}></StyledImg>
              </StyledImgContainer>
              <StyledTitle>Привет Малышка!!</StyledTitle>
              <StyledText>Проведешь это Святое Валентино со мной?</StyledText>
              <StyledButtonContainer>
              <Link to="/no"><StyledButton>Нет:(</StyledButton></Link>
                <Link to="/go"><StyledButton>Да!!</StyledButton></Link>
              </StyledButtonContainer>
            </StyledContainer>
          </StyledPage>
        } />
        <Route path="/no" element={<NoPage />} />
        <Route path="/yes" element={<YesPage />} />
        <Route path="/go" element={<GoPage />} />
        <Route path="/eat" element={<EatPage />} />
        <Route path="/delicious" element={<DeliciousPage />} />
      </Routes>
    </Router>
  );
}

export default App;
