import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ProductRibbon, ProductStars, AddToCart } from "@/components"
import { useTimeout } from "@/hooks"
import styles from "./ProductCard.module.scss"
export const ProductCard = ({product}) => {

  const [ hoverState, setHoverState ] = useState(false)
  const [ transition, setTransition ] = useState(false)
  
  useTimeout(() => {
    setTransition(false)
  }, transition ? 200 : null)

  const mouseEnter = () => {
    setTransition(true)
    setHoverState(true)
  }

  const mouseLeave = () => {
    setTransition(true)
    setHoverState(false)
  }

  return (
    <div className={styles.ProductCard} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        <div className={styles.UpperHalf} data-hover={hoverState} data-transition={transition}>
          <a href="#" className={styles.AddToFavorites} data-show={hoverState}><span className="material-icons">favorite_border</span></a>
          <Link to={`/product/${product.id}`}>
            <img src={product.thumbnail} />
            { product.ribbon && <ProductRibbon text={product.ribbon} />}
            <p className={styles.Brand}>{product.brand}</p>
            <strong className={styles.Title}>{product.title}</strong>
            <p className={styles.Size} data-hovertext={`Art-Nr.: ${product.productCode}`} data-hover={hoverState}>{product.size}</p>
            <p className={styles.ProductType}>{product.filters.productType}</p>
            <p className={styles.Description}>{product.description.listCard}</p>
            <ProductStars rate={product.rate.average} className={styles.Stars} />
            <div className={styles.PricesWrapper} data-sale={product.sale.active}>
              <strong className={styles.NormalPrice} data-sale={product.sale.active}>{product.price}</strong>
              { product.sale.active && <strong className={styles.SalePrice}>{product.sale.salePrice}</strong>}
            </div>
            <small className={styles.SmallPrint}>({product.standardPrice})</small>
          </Link>
        </div>

      <div className={styles.LowerHalf} data-hover={hoverState} data-transition={transition}>
        <small className={styles.SmallPrint}>(inkl. MwSt., zzgl. <a href="#">Versand</a>)</small>
        <AddToCart />
        <Link to={`/product/${product.id}`} className={styles.ProductDetailsLink}>Produktdetails</Link>
      </div>
    </div>
  )
}