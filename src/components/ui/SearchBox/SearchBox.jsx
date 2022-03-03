import { useState } from "react"
import styles from "./SearchBox.module.scss"

export const SearchBox = () => {

  const [ searchExpanded, setSearchExpanded ] = useState(false)

  const expandSearch = (e) => {
    if(!searchExpanded) {
      e.stopPropagation()
      setSearchExpanded(true)
    }
  }

  return (
    <div className={styles.SearchWrapper} data-expanded={searchExpanded} onClick={expandSearch}>
      <form onSubmit={(e) => e.preventDefault()}>
        <button type="submit" className={styles.SubmitSearch}>
          <span className="material-icons-round">
            search
          </span>
        </button>
        <label htmlFor="search">Suche</label>
        <input type="text" id="search" placeholder="Gib' einen Suchbegriff ein" />
        <button type="button" className={styles.CloseSearch} onClick={() => setSearchExpanded(false)}>
          Schliessen
          <span className="material-icons-round">
            close
          </span>
        </button>
      </form>
    </div>
  )
}