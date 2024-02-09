import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { StyledContainer, StyledButton, StyledPage, StyledButtonContainer, StyledTitle, StyledText, StyledImg, StyledImgContainer } from './components/StyledComponent';
import Image from './img/images.png';
import YesPage from './components/YES';
import NoPage from './components/NO';

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
              <StyledText>Будешь моей любимкой?</StyledText>
              <StyledButtonContainer>
              <Link to="/no"><StyledButton>Нет:(</StyledButton></Link>
                <Link to="/yes"><StyledButton>Да!!</StyledButton></Link>
              </StyledButtonContainer>
            </StyledContainer>
          </StyledPage>
        } />
        <Route path="/no" element={<NoPage />} />
        <Route path="/yes" element={<YesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
