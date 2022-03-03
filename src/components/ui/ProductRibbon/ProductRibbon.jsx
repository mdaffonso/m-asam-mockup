import styles from "./ProductRibbon.module.scss"
export const ProductRibbon = ({text}) => {
  const textToColorMap = new Map([
    ["bestseller", "#94c155"],
    ["tipp des monats", "#d19477"]
  ])

  return (
    <div style={{"--color": textToColorMap.get(text) || "#6d6d6d"}} className={styles.Ribbon}>- {text} -</div>
  )
}