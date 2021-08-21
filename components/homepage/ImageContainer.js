import styled from 'styled-components';
import Image from 'next/image';
import { COLORS } from '../../styles/constants';

const ImageContainer = ({ source, product }) => {
  return (
    <Wrapper>
      <Image src={source} alt={product} layout='fill' />
      <TextContainer>
        <h2>{product}</h2>
      </TextContainer>
    </Wrapper>
  );
};

// TODO: check if transition property functions using & img selector with Next Image
const Wrapper = styled.div`
  position: relative;
  background-color: ${COLORS.gainsboro};
  opacity: 1;
  overflow: hidden;
  transition: all 1s ease;

  & img {
    transition: all 1s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 24px ${COLORS.oxfordBlue};
    opacity: 0.5;
    transition: all 1s ease-in-out;

    & img {
      transform: scale(1.5);
    }
  }
`;

const TextContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 1s ease;

  & h2 {
    color: ${COLORS.aliceBlue};
  }

  &:hover {
    opacity: 1;
  }
`;

export default ImageContainer;
