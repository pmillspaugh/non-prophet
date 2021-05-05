import styled from 'styled-components/macro';
import SizeButton from './SizeButton';
import { WEIGHTS } from '../../constants';

const ChooseSize = ({
  product,
  sizeChoices,
  selectedSize,
  handleSizeButtonClick,
}) => {
  if (product === 'The Beanie.') return <></>;
  return (
    <Wrapper>
      <h4>
        Size: <SelectedSize>{selectedSize}</SelectedSize>
      </h4>
      {sizeChoices.map((size, index) => (
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
`;

export default ChooseSize;
