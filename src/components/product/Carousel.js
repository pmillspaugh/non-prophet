import styled from 'styled-components/macro';

const Carousel = ({ imageCollection }) => {
  return (
    <Wrapper>
      <img src={imageCollection[0]} alt='' />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Carousel;
