import { ProductStars, AddToCart } from "@/components"
import DOMPurify from "dompurify"
import styles from "./ProductDescriptionHeader.module.scss"

export const ProductDescriptionHeader = ({product}) => {
  return (
    <div className={styles.HeaderDescription}>
      <p className={styles.Brand}>{product.brand}</p>
      <h3 className={styles.Product}>{product.title}</h3>
      <div className={styles.Reviews}>
        <ProductStars rate={product.rate.average} />
        <p>{product.rate.numberOfReviews} Kundermeinungen</p>
      </div>
      <div className={styles.Description} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(product.description.individualCard)}} />
      <div className={styles.PriceBlock}>
        <div>
          <strong data-sale={product.sale.active}>{product.price}</strong>
          {product.sale.active && <strong data-sale={product.sale.active}>{product.sale.salePrice}</strong>}
        </div>

        <div>
          <p>(inkl. MwSt., zzgl. Versand)</p>
          <small>Art-Nr.: {product.productCode}</small>
          <small>Inhalt: {product.size} ({product.standardPrice})</small>
        </div>
      </div>

      <div className={styles.CartBlock}>
        <AddToCart large />
        <a href="#">
          <span className="material-icons">favorite_border</span>
          <span>Auf den Wunschzettel</span>
        </a>
      </div>

      <div className={styles.ShippingBlock}>
        Lieferung ca. <a href="#">05/03/2022</a>
      </div>
    </div>
  )
}