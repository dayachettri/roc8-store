import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import useProducts from '../hooks/useProducts';

function Navbar() {
  const { handleFilterChange } = useProducts();
  const location = useLocation();

  return (
    <nav className="py-5 flex justify-between items-center mb-10">
      <Link to="..">
        <div className="font-bold text-2xl text-gray-500">Roc8 Store🚀</div>
      </Link>
      {location.pathname === '/' && (
        <div className="w-96">
          <input
            onChange={e => handleFilterChange(e)}
            type="text"
            placeholder="Search"
            className="w-96 border-b-2 border-slate-300 outline-none"
          />
        </div>
      )}
      <div>
        <button className="text-3xl">
          <AiOutlineShoppingCart />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
