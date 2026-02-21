import React, { useState } from 'react';
import {Container, Typography, Button} from '@mui/material';

const MainSection = () => {
    return (
        <Container maxWidth="sm" sx={{ textAlign: 'center', py: 10 }}>
            <Typography variant="overline" color="primary">
                SAVE THE DATE
            </Typography>
            <Typography variant="h3" sx={{ my: 2, fontWeight: 'bold' }}>
                구월담
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
                2026년 5월 23일 토요일 오후 12시<br />
                동도로동동 합주실
            </Typography>
            <Button variant="contained" disableElevation>
                구글 캘린더 추가
            </Button>
      </Container>
    )
}

export default MainSection;