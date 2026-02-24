import React from 'react';
import { createTheme, ThemeProvider, CssBaseline, Box, Stack} from '@mui/material';

import MainSection from './components/sections/MainSection';
import GallerySection from './components/sections/GallerySection'
import MapSection from './components/sections/MapSection'

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
      
      {/* 전체 배경 및 모바일 중앙 정렬 컨테이너 */}
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        {/* Stack을 사용하여 섹션 사이 간격(spacing)을 일괄 조절 가능 */}
        <Stack spaceing={0}>

          
          {/* Main 비주얼 */}
          <MainSection />

          {/* 인삿말 */}
          
          {/* 갤러리 그리드 */}
          <GallerySection />


          {/* 정보 입력 */}

          {/* 오시는 길 */}
          <MapSection />

        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;