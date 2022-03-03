import { menuData, productsData, specialsData, filterData } from "@/data"
import { createContext, useState } from "react";


export const GlobalContext = createContext({
  menu: [],
  products: [],
  specials: [],
  filters: []
})

export const GlobalProvider = ({children}) => {

  const [ menu ] = useState(menuData)
  const [ products ] = useState(productsData)
  const [ specials ] = useState(specialsData)
  const [ filters ] = useState(filterData)

  return <GlobalContext.Provider value={{ menu, products, specials, filters }}>{children}</GlobalContext.Provider>
} 