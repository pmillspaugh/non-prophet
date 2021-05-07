import { useState, useEffect, useContext } from 'react';
import ShoppingCartContext from '../ShoppingCartContext';
import styled from 'styled-components/macro';
import { X } from 'react-feather';
import { COLORS } from '../../constants';

// ! when cart side bar is visible, rest of content should be disabled (i.e. buttons not clickable, no hover states, etc.)
const CartSideBar = ({ cartTransform, toggleCartTransform }) => {
  // hook into shopping cart context and parse JSON
  const shoppingCartContextValue = useContext(ShoppingCartContext);
  let shoppingCartObject = {};
  if (shoppingCartContextValue !== 'initial shopping cart context value')
    shoppingCartObject = JSON.parse(shoppingCartContextValue);

  // state variable to track shopping cart
  const [shoppingCartArray, setShoppingCartArray] = useState([]);

  const handleShoppingCartChange = () => {
    const shoppingCartItems = [];
    // ! awful time complexity?
    // traverse shopping cart object to create an array of items
    for (const product in shoppingCartObject) {
      // traverse color option object for each product
      for (const color in shoppingCartObject[product]) {
        // traverse sizes added to cart for each color
        for (const size in shoppingCartObject[product][color]) {
          shoppingCartItems.push({
            product,
            color,
            size,
            quantity: shoppingCartObject[product][color][size],
          });
        }
      }
    }
    setShoppingCartArray(shoppingCartItems);
  };

  // ! the cart should update when the context updates, and when the user refreshes the page the cart should still appear in the sidebar
  useEffect(() => {
    handleShoppingCartChange();
  }, [shoppingCartContextValue]);

  return (
    <Wrapper cartTransform={cartTransform}>
      {localStorage.shoppingCart ? (
        <CartStatus>The Cart.</CartStatus>
      ) : (
        <CartStatus>Your cart is empty.</CartStatus>
      )}
      <ShoppingCartList>
        {shoppingCartArray.map((item) => (
          <ShoppingCartListItem
            key={`${item.product}${item.color}${item.size}`}
          >
            <ProductAndQuantity>
              <h4>{item.product}</h4>
              <ItemQuantity>x{item.quantity}</ItemQuantity>
            </ProductAndQuantity>
            <p>
              <span>{item.color}</span>
              {item.product !== 'The Beanie.' && ', '}
              <span>{item.size}</span>
            </p>
          </ShoppingCartListItem>
        ))}
      </ShoppingCartList>
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
