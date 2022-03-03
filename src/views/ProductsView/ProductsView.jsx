import { useContext } from "react"
import { Container, FilterBlock, CategoriesBlock, ProductsGrid, Breadcrumbs } from "@/components"
import { GlobalContext } from "@/contexts"
import styles from "./ProductsView.module.scss"

export const ProductsView = () => {
  const { filters } = useContext(GlobalContext)

  return (
    <main>
      <Container className={styles.Main}>
        <Breadcrumbs>
          <a href="#">Make-up</a>
        </Breadcrumbs>
        <aside className={styles.Sidebar}>
          <section className={styles.Categories}>
            <h3>Kategorien</h3>
            <CategoriesBlock categories={filters.categories.data} />
          </section>

          <section className={styles.Filters}>
            <h3>Filtern nach</h3>
            { filters.filterTypes.map(filter => (
              <FilterBlock key={filter.title} filter={filter} />
            )) }
          </section>
        </aside>

        <section className={styles.Banner}>
          <img src="https://images.ctfassets.net/b7rorndewt70/7fOhxjSvapgI9vEloOZzSU/af244b5261cdfaa3074965bbda8cf729/kategorieteaser_AB_MF_MakeUp_851x230.jpg" alt="make-up articles" />
        </section>

        <section className={styles.Title}>
          <h2>Make-up</h2>
        </section>

        <section className={styles.Order}>
          <span>Sortiert nach</span>
          <button>Bestseller</button>
        </section>

        <ProductsGrid />
      </Container>
    </main>
  )
}