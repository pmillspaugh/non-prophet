import styled from 'styled-components/macro';
import { PrimaryButton } from '../Buttons';

const AddToCartButton = styled(PrimaryButton)`
  width: 100%;
  margin: 12px 0;

  &:focus {
    outline: none;
  }
`;

export default AddToCartButton;
