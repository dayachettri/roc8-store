import useProductsContext from '../hooks/useProductsContext';
import useCartContext from '../hooks/useCartContext';
import { AiFillMinusCircle } from 'react-icons/ai';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  const [displayItems, setDisplayItems] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const {
    cartItems,
    increaseCartQuantity,
    decreaseCartQuantity,
    getItemQuantity,
    removeFromCart,
  } = useCartContext();
  const { products } = useProductsContext();

  useEffect(() => {
    const filteredProducts = products.filter(product =>
      cartItems.some(
        cartItem => cartItem.id === product.id && cartItem.quantity !== 0
      )
    );
    setDisplayItems(filteredProducts);

    const total = cartItems.reduce(
      (acc, curr) =>
        acc + curr.quantity * products.find(p => p.id === curr.id).price,
      0
    );
    const totalPrice = total.toFixed(2);
    setTotalValue(totalPrice);
  }, [cartItems, products]);

  const renderedItems = displayItems.map(item => {
    const itemQuantity = getItemQuantity(item.id);
    const itemPrice = item.price * itemQuantity;
    const itemTotalPrice = itemPrice.toFixed(2);

    return (
      <div
        key={item.id}
        className="flex flex-row justify-between items-center mb-5 p-3 shadow-[0px_0px_10px_rgba(0,0,0,0.1)]"
      >
        <div className="flex items-center">
          <img
            src={item.image}
            alt=""
            className="w-[100px] h-[100px] object-contain"
          />
          <div className="flex flex-col gap-2 ml-4">
            <span className="font-sm font-medium">{item.title}</span>
            <span className="font-bold">${itemTotalPrice}</span>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-4 mt-4 items-center">
            <span className="text-sm text-gray-400">Quantity</span>
            <button onClick={() => decreaseCartQuantity(item.id)}>
              <AiFillMinusCircle className="text-2xl" />
            </button>
            <span className="gray-600 text-md">{itemQuantity}</span>
            <button onClick={() => increaseCartQuantity(item.id)}>
              <AiFillPlusCircle className="text-2xl" />
            </button>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-teal-900 text-white p-2 mt-4 hover:bg-slate-800"
          >
            Remove from cart
          </button>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Link to=".." className="mb-5 underline">
        Go back to all products
      </Link>
      {renderedItems.length !== 0 && (
        <h1 className="text-lg font-bold text-teal-600 mb-3">
          Your total: ${totalValue}
        </h1>
      )}
      {renderedItems.length ? (
        renderedItems
      ) : (
        <h1 className="my-5">No items in your cart ☹️</h1>
      )}
    </div>
  );
}

export default Cart;
