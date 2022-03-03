import { Container } from "@/components"
import styles from "./PreHeader.module.scss"
export const PreHeader = () => {
  return (
    <div className={styles.PreHeader}>
      <Container as="ul" className={styles.Container}>
        <li>Schnelle Lieferung</li>
        <li>Gratis Versand ab 39 € in DE/AT</li>
        <li>30 Tage Rückgaberecht</li>
      </Container>
    </div>
  )
}