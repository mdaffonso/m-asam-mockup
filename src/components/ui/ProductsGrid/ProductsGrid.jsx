import { useContext } from "react"
import { GlobalContext } from "@/contexts"
import { ProductCard } from "@/components"
import styles from "./ProductsGrid.module.scss"
export const ProductsGrid = () => {
  const { products } = useContext(GlobalContext)

  return (
    <section className={styles.Products}>
      {
        products.map(product => <ProductCard key={product.id} product={product} />)
      }
    </section>
  )
}