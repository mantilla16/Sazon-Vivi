import { Routes, Route, Link } from 'react-router-dom';
import HomePage from '../../view/pages/home-page';
import Menu from '../../view/menu/menu';
// import OptionsModal from '../../App';
import './header-styles.css';

function Header() {
    return (
        <>
            <header>
                <h1>LA SAZÓN DE VIVI</h1>
            </header>
            <hr />
            <div className="nav-bg">
                <nav className="navegacion-principal contenedor">
                    <Link to="/" className='link'>Home</Link>
                    <Link to="/menu" className='link'>Menu</Link>
                    <Link to="/quienes-somos" className='link'>Quienes somos</Link>
                    <Link to="/platos" className='link'>Platos de la casa</Link>
                </nav>
            </div>
        
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/menu" element={<Menu />} />
                {/* <Route path="/app" element={<OptionsModal />} /> */}
                {/* Aquí puedes añadir más rutas cuando tengas más páginas */}
            </Routes>
        </>
    );
}

export default Header;