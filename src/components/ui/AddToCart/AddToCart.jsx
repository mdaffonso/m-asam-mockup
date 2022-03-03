import { useEffect, useState } from "react"
import styles from "./AddToCart.module.scss"
export const AddToCart = ({className, large}) => {
  const [ amount, setAmount ] = useState(1)
  
  useEffect(() => {
    if (amount < 1) {
      setAmount(1)
    }

    if (amount > 3) {
      setAmount(3)
    }
  }, [amount, setAmount])

  return (
    <div className={className ? `${styles.AddToCart} ${className}`: styles.AddToCart}>
      <div className={styles.AddToCartWrapper}>
        <button aria-label="weniger" disabled={amount <= 1} onClick={() => setAmount(curr => curr -1)}> </button>
        <span>{amount}</span>
        <button arias-label="mehr" disabled={amount >= 3} onClick={() => setAmount(curr => curr + 1)}> </button>
      </div>
      <button className={styles.AddToCartButton} data-large={large}>In den Warenkorb</button>
    </div>
  )
}