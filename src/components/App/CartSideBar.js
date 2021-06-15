import styled from 'styled-components/macro';
import { X } from 'react-feather';
import { COLORS } from '../../constants';

// ! when cart side bar is visible, rest of content should be disabled (i.e. buttons not clickable, no hover states, etc.)
// TODO: dynamically render cart (currently dummy cart)
const CartSideBar = ({ cartTransform, toggleCartTransform }) => {
  return (
    <Wrapper cartTransform={cartTransform}>
      <CartStatus>Your cart is empty.</CartStatus>
      {/* <ShoppingCartList>
        <ShoppingCartListItem key='dummyItem'>
          <ProductAndQuantity>
            <h4>PRODUCT</h4>
            <ItemQuantity>x1</ItemQuantity>
          </ProductAndQuantity>
          <p>
            <span>COLOR, SIZE</span>
          </p>
        </ShoppingCartListItem>
      </ShoppingCartList> */}
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

const CartStatus = styled.h3`
  margin-top: 60px;
  color: ${COLORS.aliceBlue};
  text-align: center;
`;

const ShoppingCartList = styled.ul`
  color: ${COLORS.aliceBlue};
  border-top: 1px solid ${COLORS.aliceBlue};
  margin: 20px;
  padding: 20px 0;
`;

const ShoppingCartListItem = styled.li`
  margin-bottom: 20px;
`;

const ProductAndQuantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const ItemQuantity = styled.span`
  margin-left: auto;
  font-size: 1.25rem;
`;

const XIcon = styled(X)`
  position: absolute;
  top: 12px;
  left: 12px;

  &:hover {
    cursor: pointer;
  }
`;

export default CartSideBar;
