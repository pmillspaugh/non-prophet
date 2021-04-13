import styled from 'styled-components/macro';
import { X } from 'react-feather';
import { COLORS } from '../../constants';

const CartSideBar = ({ cartTransform, toggleCartTransform }) => {
  return (
    <Wrapper cartTransform={cartTransform}>
      <CartStatus>Your cart is empty.</CartStatus>
      <XIcon color={COLORS.aliceBlue} size={36} onClick={toggleCartTransform} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  transform: ${(p) => p.cartTransform};
  transition: 1s transform;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 250px;
  background-color: ${COLORS.eerieBlack};
`;

const CartStatus = styled.p`
  margin-top: 60px;
  color: ${COLORS.aliceBlue};
  text-align: center;
`;

const XIcon = styled(X)`
  position: absolute;
  top: 12px;
  left: 12px;
`;

export default CartSideBar;
