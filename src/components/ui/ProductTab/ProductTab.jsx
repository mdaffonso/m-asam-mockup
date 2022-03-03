import DOMPurify from "dompurify"
import { YoutubeEmbed } from "@/components"
import styles from "./ProductTab.module.scss"
import { useState } from "react"

export const ProductTab = ({data}) => {

  const [ hideExtra, setHideExtra ] = useState(true)

  return (
    <section className={styles.Tab}>
      <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data.content[0])}} className={data.content.length > 1 ? styles.Body : `${styles.Body} ${styles.OnlyChild}`} />

      { data.content.map((v, i) => (
        i !== 0 && (
          v.startsWith("https://www.youtube.com/watch?v=")
            ? <YoutubeEmbed key={v} embed={v} title="Du bist schön" data-hide={hideExtra && i !== 1} />
            : <div
                key={v} 
                dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(v)}} 
                data-hide={hideExtra && i !== 1} 
                className={styles.Body}
              />
        )
      ))}

      { data.content.length > 2 && <button className={styles.ShowMoreButton} data-hideothers={hideExtra} onClick={() => setHideExtra(curr => !curr)}>{hideExtra ? "Mehr anzeigen" : "Weniger anzeigen"}</button> }
    </section>
  )
}