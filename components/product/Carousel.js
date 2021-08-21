import { useState } from 'react';
import styled from 'styled-components';
import Spacer from '../utils/Spacer';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { COLORS } from '../../styles/constants';

const Carousel = ({ imageCollection, selectedColor }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleLeftChevronClick = () => {
    if (selectedImage > 0) setSelectedImage(selectedImage - 1);
  };

  const handleRightChevronClick = () => {
    if (selectedImage < imageCollection[selectedColor].length - 1)
      setSelectedImage(selectedImage + 1);
  };

  return (
    <Wrapper>
      <ImageWrapper>
        {imageCollection[selectedColor].map((source) => (
          <ProductImage
            src={source}
            index={selectedImage}
            alt=''
            key={source}
          />
        ))}
      </ImageWrapper>
      <ToggleWrapper>
        {imageCollection[selectedColor].map((source, index) => (
          <DotWrapper index={index} selectedImage={selectedImage} key={source}>
            <ToggleDot
              index={index}
              selectedImage={selectedImage}
              onClick={() => setSelectedImage(index)}
            />
            <Spacer size='4px' />
          </DotWrapper>
        ))}
      </ToggleWrapper>
      <LeftChevron size={44} onClick={handleLeftChevronClick} />
      <RightChevron size={44} onClick={handleRightChevronClick} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const ImageWrapper = styled.div`
  width: calc(100vw - 48px);
  height: calc(100vw - 48px);
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  background-color: ${COLORS.aliceBlue};
  box-shadow: 0 0 24px ${COLORS.gainsboro};
  flex-shrink: 0;

  @media (min-width: 576px) {
    width: 500px;
    height: 500px;
  }
  @media (min-width: 768px) {
    width: 342px;
    height: 342px;
  }
  @media (min-width: 992px) {
    width: 492px;
    height: 492px;
  }
  @media (min-width: 1200px) {
    width: 600px;
    height: 600px;
  }
  @media (min-width: 1400px) {
    width: 700px;
    height: 700px;
  }
`;

const ProductImage = styled.img`
  object-fit: contain;
  transform: translate(${(p) => `${p.index * -100}%`}, 0);
  transition: 1s transform;
`;

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
`;

const DotWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(p) => (p.selectedImage === p.index ? '16px' : '12px')};
`;

const ToggleDot = styled.div`
  width: ${(p) => (p.selectedImage === p.index ? '12px' : '8px')};
  height: ${(p) => (p.selectedImage === p.index ? '12px' : '8px')};
  border-radius: 50%;
  background-color: ${(p) =>
    p.selectedImage === p.index ? COLORS.harvestGold : COLORS.oxfordBlue};

  &:hover {
    cursor: pointer;
    width: 12px;
    height: 12px;
    background-color: ${COLORS.gainsboro};
  }
`;

const LeftChevron = styled(ChevronLeft)`
  position: absolute;
  top: calc(50% - 44px);
  left: 16px;
  color: ${COLORS.gainsboro};

  &:hover {
    cursor: pointer;
    color: ${COLORS.harvestGold};
    transform: scale(1.25);
    transition: 1s transform;
  }
`;

const RightChevron = styled(ChevronRight)`
  position: absolute;
  top: calc(50% - 44px);
  right: 16px;
  color: ${COLORS.gainsboro};

  &:hover {
    cursor: pointer;
    color: ${COLORS.harvestGold};
    transform: scale(1.25);
    transition: 1s transform;
  }
`;

export default Carousel;
