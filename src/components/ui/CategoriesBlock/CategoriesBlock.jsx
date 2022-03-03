import styles from "./CategoriesBlock.module.scss"
export const CategoriesBlock = ({categories}) => {
  return (
    <ul className={styles.CategoriesBlock}>
      { categories.map(category => (
        <li key={category[0]}>
          <input type="checkbox" id={category[0]} />
          <label htmlFor={category[0]}>{category[0]} <span>({category[1]})</span></label>
        </li>
      ))}
    </ul>
  )
}