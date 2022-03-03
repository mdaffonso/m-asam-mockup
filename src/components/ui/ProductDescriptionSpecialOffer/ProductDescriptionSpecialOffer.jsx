import DOMPurify from "dompurify"
import { useWindowSize } from "@/hooks"
import { ProductDescriptionTitle } from "@/components"
import styles from "./ProductDescriptionSpecialOffer.module.scss"

export const ProductDescriptionSpecialOffer = ({data}) => {
  const size = useWindowSize()
  return (
    <section className={styles.SpecialOffer}>
      <ProductDescriptionTitle children={data.title} />
      <a href="#">
        <div className={styles.Banner} style={{backgroundImage: `url("${size.width > 767 ? data.backgroundImage.desktop : data.backgroundImage.mobile}")`}}>
          <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data.body)}} />
          <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data.stamp)}} />
        </div>
      </a>
    </section>
  )
}