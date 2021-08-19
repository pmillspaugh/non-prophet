import styled from 'styled-components';
import ColorButton from './ColorButton';
import { WEIGHTS } from '../../constants';

const ChooseColor = ({
  colorChoices,
  handleColorButtonClick,
  selectedColor,
}) => {
  return (
    <Wrapper>
      <h4>
        Color: <SelectedColor>{selectedColor}</SelectedColor>
      </h4>
      <ColorButton
        source={colorChoices.Navy}
        altText=''
        handleColorButtonClick={handleColorButtonClick}
        buttonColor='Navy'
        selectedColor={selectedColor}
      />
      <ColorButton
        source={colorChoices.Black}
        altText=''
        handleColorButtonClick={handleColorButtonClick}
        buttonColor='Black'
        selectedColor={selectedColor}
      />
      <ColorButton
        source={colorChoices.White}
        altText=''
        handleColorButtonClick={handleColorButtonClick}
        buttonColor='White'
        selectedColor={selectedColor}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const SelectedColor = styled.span`
  font-weight: ${WEIGHTS[400]};
`;

export default ChooseColor;
