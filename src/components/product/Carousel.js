import { useState } from 'react';
import styled from 'styled-components/macro';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { COLORS } from '../../constants';

const Carousel = ({ imageCollection, selectedColor }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <Wrapper>
      <ImageWrapper>
        {imageCollection[selectedColor].map((source) => (
          <ProductImage src={source} index={selectedImage} alt='' />
        ))}
      </ImageWrapper>
      <ToggleWrapper>
        {imageCollection[selectedColor].map((source, index) => (
          <ToggleDot
            index={index}
            selectedImage={selectedImage}
            onClick={() => setSelectedImage(index)}
          />
        ))}
      </ToggleWrapper>
      <LeftChevron size={36} />
      <RightChevron size={36} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 496px;
  position: relative;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  background-color: ${COLORS.aliceBlue};
  box-shadow: 0 0 24px ${COLORS.gainsboro};
`;

const ProductImage = styled.img`
  transform: translate(${(p) => `${p.index * -100}%`}, 0);
  transition: 2s transform;
`;

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 16px 0;
`;

const ToggleDot = styled.div`
  width: ${(p) => (p.selectedImage === p.index ? '12px' : '8px')};
  height: ${(p) => (p.selectedImage === p.index ? '12px' : '8px')};
  border-radius: 50%;
  background-color: ${(p) =>
    p.selectedImage === p.index ? COLORS.harvestGold : COLORS.oxfordBlue};

  &:hover {
    cursor: pointer;
    background-color: ${COLORS.gainsboro};
  }
`;

// TODO: change image on click, enlarge on hover
const LeftChevron = styled(ChevronLeft)`
  position: absolute;
  top: calc(50% - 36px);
  left: 0;
`;

const RightChevron = styled(ChevronRight)`
  position: absolute;
  top: calc(50% - 36px);
  right: 0;
`;

export default Carousel;
