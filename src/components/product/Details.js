import styled from 'styled-components/macro';
import { COLORS } from '../../constants';

const Details = () => {
  return (
    <Wrapper>
      <DetailSelection>
        <Summary>Details</Summary>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisi
        arcu, vehicula ac faucibus vel, cursus id diam.
      </DetailSelection>
      <DetailSelection>
        <Summary>Size and fit</Summary>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisi
        arcu, vehicula ac faucibus vel, cursus id diam.
      </DetailSelection>
      <DetailSelection>
        <Summary>Shipping</Summary>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisi
        arcu, vehicula ac faucibus vel, cursus id diam.
      </DetailSelection>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const DetailSelection = styled.details`
  &:hover {
    cursor: pointer;
    color: ${COLORS.harvestGold};
  }
`;

const Summary = styled.summary`
  &:focus {
    outline: none;
  }
`;

export default Details;
