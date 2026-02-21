import React, { useState } from 'react';
import { 
  Box, 
  ImageList, 
  ImageListItem, 
  Typography, 
  Modal, 
  Fade, 
  Backdrop,
  Container,
} from '@mui/material';

// 샘플 이미지 데이터 (실제 이미지 경로로 교체하세요)
const itemData = [
  { img: 'https://images.unsplash.com/photo-1519741497674-61148186352', title: 'Image 1' },
  { img: 'https://images.unsplash.com/photo-1511285560929-80b456fe0bc', title: 'Image 2' },
  { img: 'https://images.unsplash.com/photo-1522673607200-1648832ee98', title: 'Image 3' },
  { img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b', title: 'Image 4' },
  { img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed', title: 'Image 5' },
  { img: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde', title: 'Image 6' },
];

const GallerySection = () => {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState('');

  const handleOpen = (img) => {
    setSelectedImg(img);
    setOpen(true);
  };

  return (
    <Box sx={{ width: '100%', px: 2, py: 6 }}>
      <Container maxWidth="sm">
        <Typography variant="h5" align="center" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
          GALLERY
        </Typography>

        {/* 모바일 최적화 그리드: cols={3} (3열 배치), gap={8} (간격) */}
        <ImageList variant="quilted" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem 
              key={item.img} 
              onClick={() => handleOpen(item.img)}
              sx={{ 
                cursor: 'pointer',
                borderRadius: '8px',
                overflow: 'hidden',
                '&:hover': { opacity: 0.8, transition: '0.3s' }
              }}
            >
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{ height: '100%', objectFit: 'cover' }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>

      {/* 이미지 크게 보기 (Modal) */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '90vw',
            maxHeight: '90vh',
            outline: 'none',
          }}>
            <img 
              src={selectedImg} 
              alt="Selected" 
              style={{ width: '100%', height: 'auto', borderRadius: '4px' }} 
            />
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default GallerySection;