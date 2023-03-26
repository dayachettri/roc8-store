import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Layout() {
  return (
    <main className="max-w-5xl md:mx-auto px-2 flex flex-col ">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default Layout;
