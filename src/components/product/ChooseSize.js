import styled from 'styled-components/macro';
import SizeButton from './SizeButton';

const ChooseSize = ({
  product,
  sizeChoices,
  selectedSize,
  handleSizeButtonClick,
}) => {
  if (product === 'The Beanie.') return <></>;
  return (
    <Wrapper>
      <h4>Size: </h4>
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

export default ChooseSize;
