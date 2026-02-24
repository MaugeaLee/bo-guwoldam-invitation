import {Container, Typography, Button, Box} from '@mui/material';
import Section from '../Section';

import TitleImg from '../../assets/logo.svg';

const MainSection = () => {
    return (
        <Section sx={{ backgroundColor: '#ffffff' }}>
            <Container maxWidth="sm" sx={{ textAlign: 'center', py: 10 }}>
                <Typography variant="overline" color="primary">
                    SAVE THE DATE
                </Typography>
                <Box sx={{
                    width: '100%',
                    height: '30vh',
                    backgroundImage: `url(${TitleImg})`,

                    backgroundRepeat: 'no-repeat', // 반복 금지
                    backgroundSize: 'contain', // 전체 이미지가 다 보이도록
                    backgroundPosition: 'center', // 중앙 정렬
                    
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}/>
                
                <Typography variant="body1" sx={{ mb: 4, mt:4 }}>
                    2026년 5월 23일 토요일 오후 12시<br />
                    동도로동동 합주실
                </Typography>
                <Button variant="contained" disableElevation>
                    참석하기
                </Button>
        </Container>
      </Section>
    )
}

export default MainSection;