import styles from "./HeaderIcon.module.scss"
export const HeaderIcon = ({materialClassName, materialIconCode, subtitle, showCounter, counterValue}) => {
  return (
    <div className={styles.Icon} data-showcounter={showCounter} data-countervalue={counterValue}>
      <span className={materialClassName || "material-icons"}>
        {materialIconCode}
      </span>
      <p>{subtitle}</p>
    </div>
  )
}