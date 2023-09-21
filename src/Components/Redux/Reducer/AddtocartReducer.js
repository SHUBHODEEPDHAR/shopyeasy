import * as actionType from '../constants/constantcart.js';

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  carts: 0,
  totalCost: 0,
  totalPrice: 0,
  totalDiscount: 0,
  totalAmount: 0,
  deliveryCharge: 0,
  isEmpty: true,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      const { cart, item } = action.payload;
      const newItem = {
        _id: cart._id,
        id: cart.id + cart.color,
        name: cart.longName,
        price: cart.price,
        cost: cart.cost,
        image: cart.image.small1,
        quantity: item,
        color: cart.color,
        discount: cart.discount,
        stock: cart.stock,
      };

      const updatedCartItems = [...state.cartItems, newItem];
      const uniqueCartItems = Array.from(new Set(updatedCartItems.map(JSON.stringify)), JSON.parse);

      const uniqueIds = new Set();

      const uniqueProducts = uniqueCartItems.filter((Itemss) => {
        if (!uniqueIds.has(Itemss.id)) {
          uniqueIds.add(Itemss.id);
          return true;
        }
        return false;
      });

      const quantity = uniqueCartItems.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);
      localStorage.setItem("cartItems", JSON.stringify(uniqueProducts))
      localStorage.setItem("carts", JSON.stringify(quantity))
      return {
        ...state,
        cartItems: uniqueProducts,
        carts: quantity,
        isEmpty: false,
      };

    case actionType.REMOVE_TO_CART:
      const updatedCart = state.cartItems.filter((item) => item.id !== action.payload);
      const updatedQuantity = updatedCart.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart))
      localStorage.setItem("carts", JSON.stringify(updatedQuantity))
      return {
        ...state,
        cartItems: updatedCart,
        carts: updatedQuantity,
        isEmpty: updatedQuantity === 0 ? state.isEmpty=true :state.isEmpty=false
      };

    case actionType.INCRESE:
      localStorage.setItem('carts', JSON.stringify(state.carts));
      let stock = 0;
      stock = state.cartItems && state.cartItems.map(product => product.stock)
      return {
        ...state,
        carts: state.carts < stock ? state.carts + 1 : state.carts + 1,

      };

    case actionType.DECRESE:
      localStorage.setItem('carts', JSON.stringify(state.carts));
      return {
        ...state,
        carts: state.carts > 1 ? state.carts - 1 : 1,

      };

    case actionType.CLEAR_ALL:
      localStorage.removeItem('cartItems');
      localStorage.removeItem('carts');

      return {
        ...state,
        cartItems: [],
        isEmpty: true,

      };
    case actionType.PRICE_VALUE:
      const { ProductPrice, ProductCost, ProductDiscount } = action.payload;
      let netprice = ProductPrice.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      ProductCost.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      ProductDiscount.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
      let newdelivery = netprice >= 500 ? 0 : 50
      let newtotal = netprice + newdelivery
      return {
        ...state,
        totalCost: ProductCost.reduce((accumulator, currentValue) => accumulator + currentValue, 0),
        totalPrice: ProductPrice.reduce((accumulator, currentValue) => accumulator + currentValue, 0),
        totalDiscount: ProductDiscount.reduce((accumulator, currentValue) => accumulator + currentValue, 0),
        totalAmount: newtotal,
        deliveryCharge: newdelivery,
      }
    default:
      return state;
  }
};
