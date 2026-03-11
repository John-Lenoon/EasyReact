// 1. 修正：去掉所有导入图片的 { }，用默认导入
import "./HomePage.css"
import "./Header.css"
import LogoWhite from "../assets/images/logo-white.png"
import MobileLogoWhite from "../assets/images/mobile-logo-white.png"
import SearchIcon from "../assets/images/icons/search-icon.png"
import CartIcon from "../assets/images/icons/cart-icon.png"
import CheckmarkIcon from "../assets/images/icons/checkmark.png"

// 产品图导入（对应你src/assets/images里的文件）
import SocksImg from "../assets/images/products/athletic-cotton-socks-6-pairs.jpg"
import BasketballImg from "../assets/images/products/intermediate-composite-basketball.jpg"
import TshirtImg from "../assets/images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg"

// 评分星星图导入
import Rating45 from "../assets/images/ratings/rating-45.png"
import Rating40 from "../assets/images/ratings/rating-40.png"

export function HomePage() {
    return (
    <>
    <div className="header">
      <div className="left-section">
        <a href="index.html" className="header-link">
          <img className="logo" src={LogoWhite} alt="logo" />
          <img className="mobile-logo" src={MobileLogoWhite} alt="mobile logo" />
        </a>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />
        <button className="search-button">
          <img className="search-icon" src={SearchIcon} alt="search" />
        </button>
      </div>

      <div className="right-section">
        <a className="orders-link header-link" href="orders.html">
          <span className="orders-text">Orders</span>
        </a>
        <a className="cart-link header-link" href="checkout.html">
          <img className="cart-icon" src={CartIcon} alt="cart" />
          <div className="cart-quantity">3</div>
          <div className="cart-text">Cart</div>
        </a>
      </div>
    </div>

    <div className="home-page">
      <div className="products-grid">
        {/* 第一个商品 */}
        <div className="product-container">
          <div className="product-image-container">
            <img className="product-image" src={SocksImg} alt="socks" />
          </div>
          <div className="product-name limit-text-to-2-lines">
            Black and Gray Athletic Cotton Socks - 6 Pairs
          </div>
          <div className="product-rating-container">
            <img className="product-rating-stars" src={Rating45} alt="rating" />
            <div className="product-rating-count link-primary">87</div>
          </div>
          <div className="product-price">$10.90</div>
          <div className="product-quantity-container">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="product-spacer"></div>
          <div className="added-to-cart">
            <img src={CheckmarkIcon} alt="checkmark" />
            Added
          </div>
          <button className="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>

        {/* 第二个商品 */}
        <div className="product-container">
          <div className="product-image-container">
            <img className="product-image" src={BasketballImg} alt="basketball" />
          </div>
          <div className="product-name limit-text-to-2-lines">
            Intermediate Size Basketball
          </div>
          <div className="product-rating-container">
            <img className="product-rating-stars" src={Rating40} alt="rating" />
            <div className="product-rating-count link-primary">127</div>
          </div>
          <div className="product-price">$20.95</div>
          <div className="product-quantity-container">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="product-spacer"></div>
          <div className="added-to-cart">
            <img src={CheckmarkIcon} alt="checkmark" />
            Added
          </div>
          <button className="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>

        {/* 第三个商品 */}
        <div className="product-container">
          <div className="product-image-container">
            <img className="product-image" src={TshirtImg} alt="tshirt" />
          </div>
          <div className="product-name limit-text-to-2-lines">
            Adults Plain Cotton T-Shirt - 2 Pack
          </div>
          <div className="product-rating-container">
            <img className="product-rating-stars" src={Rating45} alt="rating" />
            <div className="product-rating-count link-primary">56</div>
          </div>
          <div className="product-price">$7.99</div>
          <div className="product-quantity-container">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="product-spacer"></div>
          <div className="added-to-cart">
            <img src={CheckmarkIcon} alt="checkmark" />
            Added
          </div>
          <button className="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </>
    )
}

export default HomePage;