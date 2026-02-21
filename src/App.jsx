import React from 'react';
import { createTheme, ThemeProvider, CssBaseline, Container, Typography, Button } from '@mui/material';

import GallerySection from "./components/sections/GallerySection"


// 1. 초대장 컨셉에 맞는 테마 설정
const theme = createTheme({
  palette: {
    primary: {
      main: '#D4A373', // 감성적인 베이지/브라운 톤
    },
    background: {
      default: '#FEFAE0', // 부드러운 배경색
    },
  },
  typography: {
    fontFamily: '"Noto Serif KR", serif', // 초대장에 어울리는 서체
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* CSS 리셋: 브라우저 기본 여백 제거 및 배경색 적용 */}
      <CssBaseline /> 
      
      
    </ThemeProvider>
  );
}

export default App;