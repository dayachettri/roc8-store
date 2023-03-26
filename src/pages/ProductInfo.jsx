import { useLocation, Link } from 'react-router-dom';
import { AiFillMinusCircle } from 'react-icons/ai';
import { AiFillPlusCircle } from 'react-icons/ai';
import useCartContext from '../hooks/useCartContext';
import { useEffect, useState } from 'react';

function ProductInfo() {
  const location = useLocation();
  const linkData = location.state;
  const productId = linkData.id;
  const [currentItemQuantity, setCurrentItemQuantity] = useState(null);

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCartContext();

  useEffect(() => {
    setCurrentItemQuantity(getItemQuantity(productId));
  }, [increaseCartQuantity, decreaseCartQuantity, removeFromCart]);

  return (
    <>
      <Link to=".." className="mb-5 underline">
        Go back to all products
      </Link>
      <div className="grid md:grid-cols-2 gap-10 sm:grid-cols-1 sm:justify-items-center">
        <img
          src={linkData.image}
          alt={linkData.title}
          className="w-[400px] h-auto p-4 shadow-[0px_0px_10px_rgba(0,0,0,0.1)]"
        />
        <div className="flex flex-col">
          <h2 className="text-gray-600 font-medium text-sm">
            {linkData.title}
          </h2>
          <p className="text-sm text-gray-600">{linkData.description}</p>
          <span className="mt-2">${linkData.price}</span>
          <div className="flex flex-row gap-4 mt-4 items-center">
            <span className="text-sm text-gray-400">Quantity</span>
            <button onClick={() => decreaseCartQuantity(productId)}>
              <AiFillMinusCircle className="text-2xl" />
            </button>
            <span className="gray-600 text-md">{currentItemQuantity}</span>
            <button onClick={() => increaseCartQuantity(productId)}>
              <AiFillPlusCircle className="text-2xl" />
            </button>
          </div>
          <button
            onClick={() => increaseCartQuantity(productId)}
            className="bg-slate-900 text-white p-2 mt-4 hover:bg-slate-800"
          >
            Add to cart
          </button>
          {currentItemQuantity !== 0 && (
            <button
              onClick={() => removeFromCart(productId)}
              className="bg-teal-900 text-white p-2 mt-4 hover:bg-slate-800"
            >
              Remove from cart
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
