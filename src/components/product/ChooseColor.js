import styled from 'styled-components/macro';
import ColorButton from './ColorButton';

const ChooseColor = ({ handleColorButtonClick, selectedColor }) => {
  return (
    <Wrapper>
      <h4>Color: </h4>
      <ColorButton
        source='../../assets/theShirt/navy/shirt-navy-flat-1.png'
        altText='navy shirt'
        handleColorButtonClick={handleColorButtonClick}
        buttonColor='navy'
        selectedColor={selectedColor}
      />
      <ColorButton
        source='../../assets/theShirt/black/shirt-black-flat-1.png'
        altText='black shirt'
        handleColorButtonClick={handleColorButtonClick}
        buttonColor='black'
        selectedColor={selectedColor}
      />
      <ColorButton
        source='../../assets/theShirt/white/shirt-white-flat-1.png'
        altText='white shirt'
        handleColorButtonClick={handleColorButtonClick}
        buttonColor='white'
        selectedColor={selectedColor}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default ChooseColor;
