import styles from "./SalesBanner.module.scss"
export const SalesBanner = () => {
  return (
    <a className={styles.SalesBanner} href="#">
      10€ Rabatt - Spare 10€ ab einem Bestellwert von 55€ | CODE: HAPPY-10
    </a>
  )
}