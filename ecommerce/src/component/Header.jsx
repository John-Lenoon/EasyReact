import LogoWhite from '../assets/images/logo-white.png';
import MobileLogoWhite from '../assets/images/mobile-logo-white.png';
import SearchIcon from '../assets/images/icons/search-icon.png';
import CartIcon from '../assets/images/icons/cart-icon.png';
import { Link } from 'react-router';
import './Header.css';
export function Header() {
    return (
            <div className="header">
              <div className="left-section">
                <Link to="/" className="header-link">
                  <img className="logo" src={LogoWhite} alt="logo" />
                  <img className="mobile-logo" src={MobileLogoWhite} alt="mobile logo" />
                </Link>
              </div>
        
              <div className="middle-section">
                <input className="search-bar" type="text" placeholder="Search" />
                <button className="search-button">
                  <img className="search-icon" src={SearchIcon} alt="search" />
                </button>
              </div>
        
              <div className="right-section">
                <Link className="orders-link header-link" to="/orders">
                  <span className="orders-text">Orders</span>
                </Link>
                <Link className="cart-link header-link" to="/checkout">
                  <img className="cart-icon" src={CartIcon} alt="cart" />
                  <div className="cart-quantity">3</div>
                  <div className="cart-text">Cart</div>
                </Link>
              </div>
            </div>
    )
} 

export default Header;