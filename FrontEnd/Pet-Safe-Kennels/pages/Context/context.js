import { createContext, useReducer } from "react";

export const CartContext = createContext({
    items: [],
});

const initialState = {
  items: []
}

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD":
      return {
        ...state,
        items: payload.items,
      };

    case "REMOVE":
      return {
        ...state,
        items: payload.items,
      };

    default:
      throw new Error("No case for that type");
  }
};



export const CartProvider = ({ children }) => {

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    const updatedCart = [...state.items, product];

    dispatch({
      type: "ADD",
      payload: {
        items: updatedCart,
      },
    });
  };

  const removeFromCart = (id) => {
    const updatedCart = state.items.filter(
      (currentProduct) => currentProduct.id !== id
    );

    dispatch({
      type: "REMOVE",
      payload: {
        items: updatedCart,
      },
    });
  };

  const value = {
    items: state.items,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};