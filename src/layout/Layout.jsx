import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Layout() {
  return (
    <main className="flex flex-col font-poppins max-w-5xl md:mx-auto px-2">
      <Navbar />
      <div className="grow">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

export default Layout;
