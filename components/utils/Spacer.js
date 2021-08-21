import styled from 'styled-components';

const Spacer = ({ size }) => {
  return <CustomSpacer flexBasis={size}></CustomSpacer>;
};

const CustomSpacer = styled.div`
  flex-basis: ${(p) => p.flexBasis};
  flex-shrink: 0;
`;

export default Spacer;
