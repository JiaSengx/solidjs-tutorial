import { createContext, JSX, useContext } from 'solid-js';
import { createStore } from 'solid-js/store';
import { CartModelType } from '../model';

// export const CartContext = createContext();

// export const CartContextProvider = (props: any) => {
//   const [items, setItems] = createStore([{ title: 'test product', quantity: 1, id: 100, price: 15 }]);

//   return <CartContext.Provider value={{ items, setItems }}>{props.children}</CartContext.Provider>;
// };

// export const useCartContext = () => useContext(CartContext);

interface CartContextType {
  items: CartModelType[];
  setItems: (value: CartModelType[] | ((prev: CartModelType[]) => CartModelType[])) => void;
}

const CartContext = createContext<CartContextType>();

export const CartContextProvider = (props: { children: JSX.Element }) => {
  const [items, setItems] = createStore<CartModelType[]>([
    { title: 'test product', quantity: 1, id: 100, price: 15 },
    { title: 'test productasd', quantity: 10, id: 200, price: 50 },
  ]);

  return <CartContext.Provider value={{ items, setItems }}>{props.children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};
