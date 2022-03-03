import { useState } from "react"
import { ProductTab } from "@/components"
import styles from "./ProductDescriptionMain.module.scss"

export const ProductDescriptionMain = ({data}) => {

  const [ active, setActive ] = useState("description")

  return (
    <section className={styles.Main}>
      <ul className={styles.Tabs}>
        <li><button onClick={() => setActive("description")} data-active={active === "description"}>Beschreibung</button></li>
        <li><button onClick={() => setActive("usability")} data-active={active === "usability"}>Anwendungstipps</button></li>
        <li><button onClick={() => setActive("ingredients")} data-active={active === "ingredients"}>Inhaltstoffe</button></li>
      </ul>
      <div className={styles.Content}>
        <ProductTab variant={active} key={active} data={data[active]} />
      </div>
    </section>
  )
}