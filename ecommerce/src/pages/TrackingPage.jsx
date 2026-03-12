import './TrackingPage.css'
// 补充导入所有剩余图片，保持和你一致的命名/路径风格
import LogoWhite from "../assets/images/logo-white.png"
import MobileLogoWhite from "../assets/images/mobile-logo-white.png"
import SearchIcon from "../assets/images/icons/search-icon.png"
import CartIcon from "../assets/images/icons/cart-icon.png"
import AthleticCottonSocks6Pairs from "../assets/images/products/athletic-cotton-socks-6-pairs.jpg"

export function TrackingPage() {
    return (
        <>
            <title>Tracking</title>
            <div className="header">
                <div className="left-section">
                    <a href="/" className="header-link">
                        {/* 替换 logo-white.png 为导入的变量 */}
                        <img className="logo" src={LogoWhite} />
                        {/* 替换 mobile-logo-white.png 为导入的变量 */}
                        <img className="mobile-logo" src={MobileLogoWhite} />
                    </a>
                </div>

                <div className="middle-section">
                    <input className="search-bar" type="text" placeholder="Search" />

                    <button className="search-button">
                        {/* 替换 search-icon.png 为导入的变量 */}
                        <img className="search-icon" src={SearchIcon} />
                    </button>
                </div>

                <div className="right-section">
                    <a className="orders-link header-link" href="/orders">
                        <span className="orders-text">Orders</span>
                    </a>

                    <a className="cart-link header-link" href="/checkout">
                        {/* 替换 cart-icon.png 为导入的变量 */}
                        <img className="cart-icon" src={CartIcon} />
                        <div className="cart-quantity">3</div>
                        <div className="cart-text">Cart</div>
                    </a>
                </div>
            </div>

            <div className="tracking-page">
                <div className="order-tracking">
                    <a className="back-to-orders-link link-primary" href="/orders">
                        View all orders
                    </a>

                    <div className="delivery-date">
                        Arriving on Monday, June 13
                    </div>

                    <div className="product-info">
                        Black and Gray Athletic Cotton Socks - 6 Pairs
                    </div>

                    <div className="product-info">
                        Quantity: 1
                    </div>

                    {/* 替换袜子商品图为导入的变量 */}
                    <img className="product-image" src={AthleticCottonSocks6Pairs} />

                    <div className="progress-labels-container">
                        <div className="progress-label">
                            Preparing
                        </div>
                        <div className="progress-label current-status">
                            Shipped
                        </div>
                        <div className="progress-label">
                            Delivered
                        </div>
                    </div>

                    <div className="progress-bar-container">
                        <div className="progress-bar"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrackingPage;