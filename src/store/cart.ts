import { create } from 'zustand';

import { CartStateItem, getCartDetails } from '@/lib/get-cart-details';
import { Api } from '../../services/api-client';
import { CreateCartItemValues } from '../../services/dto/cart.dto';

export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: CartStateItem[];

  // get items from cart
  fetchCartItems: () => Promise<void>;

  //request for update quantity of items
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;

  //request for add item to cart
  addCartItem: (values: any) => Promise<void>;

  //request for delete item
  removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  error: false,
  loading: true,
  totalAmount: 0,

  fetchCartItems: async () => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.getCart();
      set(getCartDetails(data));
      // const newCartDetails = getCartDetails(data);
      // // Only update state if it has changed
      // if (JSON.stringify(newCartDetails) !== JSON.stringify(get().items)) {
      //   set(newCartDetails);
      // }
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  updateItemQuantity: async (id: number, quantity: number) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.updateItemQuantity(id, quantity);
      set(getCartDetails(data));
      // const newCartDetails = getCartDetails(data);
      // // Only update state if it has changed
      // if (JSON.stringify(newCartDetails) !== JSON.stringify(get().items)) {
      //   set(newCartDetails);
      // }
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  removeCartItem: async (id: number) => {
    try {
      set(state => ({ 
        loading: true, 
        error: false, 
        items: state.items.map((item) => (item.id === id ? {...item, disabled: true} : item)),
     }));
      const data = await Api.cart.removeCartItem(id);
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set((state) => ({ 
        loading: false,
        items: state.items.map((item) => ({...item, disabled: false})),
      }));
    }
  },
  addCartItem: async (values: CreateCartItemValues) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.addCartItem(values);
      set(getCartDetails(data));
      // const newCartDetails = getCartDetails(data);
      // // Only update state if it has changed
      // if (JSON.stringify(newCartDetails) !== JSON.stringify(get().items)) {
      //   set(newCartDetails);
      // }
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
