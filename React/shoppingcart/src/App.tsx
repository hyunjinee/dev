import { useState } from 'react';
import { useQuery } from 'react-query';
// Components
// Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> => 
    await (await fetch('https://fakestoreapi.com/products')).json()



function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setcartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error} = useQuery<CartItemType[]>(
    'products',
    getProducts
  );
  console.log(data);

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setcartItems(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id);
      if (isItemInCart) { 
        return prev.map(item => 
          item.id === clickedItem.id ? {...item, amount: item.amount + 1} : item
          )
      }
      return [...prev, {...clickedItem, amount: 1}];
    })
  }
  const handleRemoveFromCart = (id: number) => {
    setcartItems(prev => 
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if(item.amount === 1) return ack;
          return [...ack, {...item, amount: item.amount - 1}];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
      )
  }
  return (
    
  );
}

export default App;
