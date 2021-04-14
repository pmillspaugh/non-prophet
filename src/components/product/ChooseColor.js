import styled from 'styled-components/macro';
import ColorButton from './ColorButton';

const ChooseColor = ({
  colorChoices,
  handleColorButtonClick,
  selectedColor,
}) => {
  return (
    <Wrapper>
      <h4>Color: </h4>
      <ColorButton
        source={colorChoices.navy}
        altText=''
        handleColorButtonClick={handleColorButtonClick}
        buttonColor='navy'
        selectedColor={selectedColor}
      />
      <ColorButton
        source={colorChoices.black}
        altText=''
        handleColorButtonClick={handleColorButtonClick}
        buttonColor='black'
        selectedColor={selectedColor}
      />
      <ColorButton
        source={colorChoices.white}
        altText=''
        handleColorButtonClick={handleColorButtonClick}
        buttonColor='white'
        selectedColor={selectedColor}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default ChooseColor;
