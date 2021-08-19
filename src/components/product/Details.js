import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../../constants';

const Details = ({ details }) => {
  return (
    <Wrapper>
      <DetailSelection>
        <Summary>Details</Summary>
        {details.details}
      </DetailSelection>
      <DetailSelection>
        <Summary>Size and fit</Summary>
        {details.sizeAndFit}
      </DetailSelection>
      <DetailSelection>
        <Summary>Shipping</Summary>
        {details.shipping}
      </DetailSelection>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const DetailSelection = styled.details`
  font-weight: ${WEIGHTS[300]};

  &:hover {
    cursor: pointer;
    color: ${COLORS.harvestGold};
  }
`;

const Summary = styled.summary`
  font-weight: ${WEIGHTS[400]};
  &:focus {
    outline: none;
  }
`;

export default Details;
