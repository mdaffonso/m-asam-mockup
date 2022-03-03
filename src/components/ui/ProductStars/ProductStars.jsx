import styles from "./ProductStars.module.scss"
export const ProductStars = ({rate, className, ...otherProps}) => {
  const width = rate / 5 * 100

  return (
    <div className={className ? `${styles.Stars} ${className}` : styles.Stars} {...otherProps} >
      <div className={styles.Filling} style={{width: `${width}%`}} />
    </div>
  )
}