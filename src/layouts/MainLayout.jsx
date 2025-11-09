import { Outlet, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import Navbar from '../components/Navbar';
import MobileNavbar from '../components//MobileNavbar'
import Footer from '../components/Footer';
import MobileFooter from '../components/MobileFooter';

const MainLayout = () => {
  const isMobile = useMediaQuery({ maxWidth: 705 })
  const location = useLocation();
  return (
    <div className={location.pathname === "/" ? "homepage" : ""} >
        { isMobile ? <MobileNavbar /> : <Navbar /> }
        <Outlet />
        { isMobile ? <MobileFooter /> : <Footer />}
    </div>
  )
}

export default MainLayout