import styled from 'styled-components/macro';
import { COLORS } from '../../constants';

const ImageContainer = ({ source, product }) => {
  return (
    <Wrapper>
      <img src={source} alt={product} />
      <TextContainer>
        <h2>{product}</h2>
      </TextContainer>
    </Wrapper>
  );
};

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
