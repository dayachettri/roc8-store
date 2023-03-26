import { AiOutlineShoppingCart, AiFillRocket } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import useProducts from '../hooks/useProductsContext';
import useCartContext from '../hooks/useCartContext';

function Navbar() {
  const { handleFilterChange } = useProducts();
  const { cartQuantity } = useCartContext();
  const location = useLocation();

  return (
    <nav className="py-5 flex justify-between items-center mb-10">
      <Link to="..">
        <div className="font-bold text-2xl flex items-center">
          Roc8 Store <AiFillRocket className="font-4xl" />
        </div>
      </Link>
      {location.pathname === '/' && (
        <div className="flex w-[80%]">
          <input
            onChange={e => handleFilterChange(e)}
            type="text"
            placeholder="Search"
            className="w-[80%] mx-auto border-b-2 border-slate-300 outline-none"
          />
        </div>
      )}
      <div>
        <Link to="/cart">
          <button className="text-4xl relative">
            <AiOutlineShoppingCart />
            <span className="absolute text-sm font-bold top-0 -right-4 text-teal-600">
              {cartQuantity}
            </span>
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
