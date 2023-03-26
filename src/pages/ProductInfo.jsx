import { useLocation } from 'react-router-dom';
import { AiFillMinusCircle } from 'react-icons/ai';
import { AiFillPlusCircle } from 'react-icons/ai';

function ProductInfo() {
  const location = useLocation();
  const linkData = location.state;
  console.log(linkData);

  return (
    <div className="grid md:grid-cols-2 gap-10 sm:grid-cols-1 sm:justify-items-center">
      <img
        src={linkData.image}
        alt={linkData.title}
        className="w-[400px] h-auto p-4 shadow-lg"
      />
      <div className="flex flex-col">
        <h2 className="text-gray-600 font-medium text-sm">{linkData.title}</h2>
        <p className="text-sm text-gray-600">{linkData.description}</p>
        <span className="mt-2">${linkData.price}</span>
        <div className="flex flex-row gap-4 mt-4 items-center">
          <span className="text-sm text-gray-400">Quantity</span>
          <button>
            <AiFillMinusCircle className="text-2xl" />
          </button>
          <span className="gray-600 text-md">1</span>
          <button>
            <AiFillPlusCircle className="text-2xl" />
          </button>
        </div>
        <button className="bg-slate-900 text-white p-2 mt-4 hover:bg-slate-800">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;
