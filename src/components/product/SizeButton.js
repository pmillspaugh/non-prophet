import styled from 'styled-components/macro';
import { COLORS } from '../../constants';

const SizeButton = ({ sizeOption, selectedSize, handleSizeButtonClick }) => {
  return (
    <Button
      sizeOption={sizeOption}
      selectedSize={selectedSize}
      onClick={() => handleSizeButtonClick(sizeOption)}
    >
      {sizeOption}
    </Button>
  );
};

const Button = styled.button`
  padding: 0;
  margin-right: 12px;
  width: 44px;
  height: 44px;
  background: ${COLORS.gainsboro};
  border: 1px solid
    ${(p) =>
      p.selectedSize === p.sizeOption ? COLORS.harvestGold : COLORS.gainsboro};
  border-radius: 3px;
  color: ${(p) =>
    p.selectedSize === p.sizeOption ? COLORS.harvestGold : COLORS.eerieBlack};

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export default SizeButton;
