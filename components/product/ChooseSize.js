import styled from 'styled-components';
import SizeButton from './SizeButton';
import { WEIGHTS } from '../../styles/constants';

const ChooseSize = ({
  title,
  sizeChoices,
  selectedSize,
  handleSizeButtonClick,
}) => {
  if (title === 'The Beanie.') return <></>;
  return (
    <Wrapper>
      <h4>
        Size:{' '}
        <SelectedSize selectedSize={selectedSize}>{selectedSize}</SelectedSize>
      </h4>
      {sizeChoices.map((size) => (
        <SizeButton
          key={size}
          sizeOption={size}
          selectedSize={selectedSize}
          handleSizeButtonClick={handleSizeButtonClick}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const SelectedSize = styled.span`
  font-weight: ${WEIGHTS[400]};
  color: ${(p) =>
    p.selectedSize === 'Select a size.' ? 'hsl(0 100% 40%)' : 'inherit'};
`;

export default ChooseSize;
