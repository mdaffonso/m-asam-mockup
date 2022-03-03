import { useState } from "react"
import styles from "./FilterBlock.module.scss"
export const FilterBlock = ({filter, onChange}) => {

  const [ hide, toggleHide ] = useState(true)

  return (
    filter.title && filter.data ? <div key={filter.title} className={styles.FilterBlock}>
      <button data-expand={!hide} onClick={() => toggleHide(curr => !curr)}>{filter.title}</button>
      <ul data-hide={hide}>
        {filter.data.map(individualFilter => (
          <li key={individualFilter}>
            <input id={`${filter.title}_${individualFilter}`} type="checkbox" onChange={onChange} />
            <label htmlFor={`${filter.title}_${individualFilter}`}>{individualFilter}</label>
          </li>
        ))}
      </ul>
    </div> : null
  )
}