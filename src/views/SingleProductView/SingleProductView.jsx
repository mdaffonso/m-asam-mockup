import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "@/contexts"
import { 
  Breadcrumbs, 
  Container, 
  ProductDescriptionHeader, 
  ProductDescriptionSpecialOffer, 
  ProductDescriptionGrid,
  ProductDescriptionMain 
} from "@/components"
import { useParams } from "react-router"
import styles from "./SingleProductView.module.scss"

export const SingleProductView = () => {
  const { products } = useContext(GlobalContext)

  const {id} = useParams()
  const [ product, setProduct ] = useState(products.find((p) => p.id === id) || {})


  useEffect(() => {
    setProduct(products.find(p => p.id === id))
  }, [id])

  return (
    <main>
      <Container>
        <Breadcrumbs>
          <a href="#">{product.title}</a>
        </Breadcrumbs>
        <div className={styles.ProductHeader}>
          <div className={styles.HeaderGallery}>
            <img src={product.media[0].url} />
          </div>

          <ProductDescriptionHeader product={product} />
        </div>
        {product.description.long.specialOffer && <ProductDescriptionSpecialOffer data={product.description.long.specialOffer} />}
        {product.description.long.gridOfStatements && <ProductDescriptionGrid data={product.description.long.gridOfStatements} />}
        {product.description.long.mainPart && <ProductDescriptionMain data={product.description.long.mainPart} />}
      </Container>
    </main>
  )
}