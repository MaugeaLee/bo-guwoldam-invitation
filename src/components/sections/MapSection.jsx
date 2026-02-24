import { useEffect, useRef } from 'react';
import { Typography, Box, Container, Paper } from '@mui/material';
import Section from '../Section';


const MapSection = () => {
    const mapContainer = useRef(null); // 지도를 담을 영역의 Ref

    useEffect(() => {
        const x = 33.450701
        const y = 126.570667
        const { kakao } = window; // 전역 변수(웹 페이지)에서 kakao obj 뽑아 사용하기

        // 지도 표시를 위한 상세 옵션
        const options = {
             center: new kakao.maps.LatLng(x, y), // 제주 카카오 본사
            level: 3,
        };

        // 지도 객체 생성
        const map = new kakao.maps.Map(mapContainer.current, options);

        // 마커 추가
        const markerPosition = new kakao.maps.LatLng(x, y);
        const marker = new kakao.maps.Marker({
            position: markerPosition,

        });
        marker.setMap(map);

    }, []);

    return (
        <Section sx={{ backgroundColor: '#f0f000'}}>
            <Container>
                <Typography variant="h5">
                    오시는 길
                </Typography>


                {/** MUI Container 지도 표기 */}
                <Paper elevation={3} sx={{ overflow: 'hidden', borderRadius: 2, backgroundColor: "#00ff00" }}>
                    <Box
                        ref={mapContainer}
                        sx={{
                            width: '100%',
                            height: '400px',
                            backgroundColor: '#f0f0f0'
                        }}
                    />
                </Paper>
            </Container>

        </Section>
    )
}

export default MapSection;