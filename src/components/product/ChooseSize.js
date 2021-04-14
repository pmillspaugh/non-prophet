import styled from 'styled-components/macro';
import SizeButton from './SizeButton';

const ChooseSize = ({ selectedSize, handleSizeButtonClick }) => {
  return (
    <Wrapper>
      <h4>Size: </h4>
      <SizeButton
        sizeOption='S'
        selectedSize={selectedSize}
        handleSizeButtonClick={handleSizeButtonClick}
      />
      <SizeButton
        sizeOption='M'
        selectedSize={selectedSize}
        handleSizeButtonClick={handleSizeButtonClick}
      />
      <SizeButton
        sizeOption='L'
        selectedSize={selectedSize}
        handleSizeButtonClick={handleSizeButtonClick}
      />
      <SizeButton
        sizeOption='XL'
        selectedSize={selectedSize}
        handleSizeButtonClick={handleSizeButtonClick}
      />
      <SizeButton
        sizeOption='XXL'
        selectedSize={selectedSize}
        handleSizeButtonClick={handleSizeButtonClick}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default ChooseSize;
