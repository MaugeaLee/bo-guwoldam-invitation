import { Box, Container } from '@mui/material';


const Section = ({ children, sx = {} }) => {
    return (
        <Box
          sx={{
            minHeight: '100dvh',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            // 공통 패딩
            px: 3,
            py: 6,
            boxSizing: 'border-box',
            position: 'relative',
            ...sx,
          }}>
            <Container maxWidth='sm'>
                {children}
            </Container>
        </Box>
    );
};

export default Section;