import "./HomePage.css"
import { Header } from "../component/Header"
import CheckmarkIcon from "../assets/images/icons/checkmark.png"

//import.meta.glob
//这是Vite 专门提供的静态资源批量导入 API（注意：只有 Vite 项目能用，原生 React/Webpack 没有），
// 它的作用是：根据你写的 “文件匹配模式”，一次性把匹配到的所有文件导入成一个 JavaScript 对象。
const productImages = import.meta.glob("../assets/images/products/*.jpg", { eager: true, as: "url" })
const ratingImages = import.meta.glob("../assets/images/ratings/*.png", { eager: true, as: "url" })

// 2. 直接用产品数据
import { products } from "../../starting-code/data/products"

export function HomePage() {
  return (
    <>
      <title>Ecommerce Project</title>
      <Header />

      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => {
            // 3. 一行代码匹配产品图（简洁）
            //split("/")
            // 结果：["images", "products", "athletic-cotton-socks-6-pairs.jpg"]

            //pop()取数组的最后一个元素
            const productImg = productImages[`../assets/images/products/${product.image.split("/").pop()}`]
            // 4. 一行代码匹配评分图（直接拼文件名，清晰）
            const ratingImg = ratingImages[`../assets/images/ratings/rating-${product.rating.stars * 10}.png`]

            return (
              <div key={product.id} className="product-container">
                <div className="product-image-container">
                  <img className="product-image" src={productImg} alt={product.name} />
                </div>
                <div className="product-name limit-text-to-2-lines">
                  {product.name}
                </div>
                <div className="product-rating-container">
                  {/* 直接用匹配到的评分图，加个兜底避免报错 */}
                  <img 
                    className="product-rating-stars" 
                    src={ratingImg || ""} 
                    alt="rating" 
                  />
                  <div className="product-rating-count link-primary">{product.rating.count}</div>
                </div>
                <div className="product-price">${(product.priceCents / 100).toFixed(2)}</div>
                <div className="product-quantity-container">
                  <select>
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
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
            )
          })}
        </div>
      </div>
    </>
  )
}

export default HomePage