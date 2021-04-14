import styled from 'styled-components/macro';
import { COLORS } from '../../constants';

const ColorButton = ({
  source,
  altText,
  handleColorButtonClick,
  buttonColor,
  selectedColor,
}) => {
  return (
    <Button
      onClick={() => handleColorButtonClick(buttonColor)}
      buttonColor={buttonColor}
      selectedColor={selectedColor}
    >
      <img src={source} alt={altText} />
    </Button>
  );
};

const Button = styled.button`
  width: 72px;
  height: 72px;
  margin-right: 12px;
  border: 1px solid
    ${(p) =>
      p.selectedColor === p.buttonColor
        ? COLORS.harvestGold
        : COLORS.gainsboro};
  border-radius: 3px;
  background: ${COLORS.gainsboro};

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export default ColorButton;
