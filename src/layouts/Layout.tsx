import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';
import LoadingScreen from '../components/LoadingScreen';

const Layout = () => {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main className="relative min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
