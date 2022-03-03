import { ProductDescriptionTitle } from "@/components"
import styles from "./ProductDescriptionGrid.module.scss"

export const ProductDescriptionGrid = ({data}) => {
  return (
    <section className={styles.Grid}>
      <ProductDescriptionTitle children={data.title} />
      
      <div className={styles.Statements}>
        {
          data.statements.map(statement => (
            <div key={statement.headline} className={styles.Statement}>
              <p>{statement.headline}</p>
              <p>{statement.followUp}</p>
              <small>{statement.bottomLine}</small>
            </div>
          ))
        }
      </div>
    </section>
  )
}