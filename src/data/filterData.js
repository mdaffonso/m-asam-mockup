import { productsData } from "@/data"

const makeFilters = (data) => {
  
  const makeArray = (o) => {
    const newArray = Array.from(o, (v) => v)
    return newArray.sort((a, b) => b.localeCompare(a, "en", { numeric: true }))
  }

  const categoriesArray = []
  const agesArray = []
  const skinCareArray = []
  const skinTypeArray = []
  const brandArray = []
  const productLineArray = []
  const productTypeArray = []
  const ingredientsArray = []
  
  for (let product of data) {
    categoriesArray.push(...product.filters.tags)
    agesArray.push(...product.filters.ages)
    skinCareArray.push(...product.filters.skinCare)
    skinTypeArray.push(...product.filters.skinType)
    brandArray.push(product.brand)
    productLineArray.push(...product.filters.productLine)
    productTypeArray.push(product.filters.productType)
    ingredientsArray.push(...product.filters.ingredients)
  }
  
  const categoriesMap = new Map()
  categoriesArray.forEach(category => {
    if (categoriesMap.get(category)) {
      categoriesMap.set(category, categoriesMap.get(category) + 1)
    } else {
      categoriesMap.set(category, 1)
    }
  })
  
  const sortedCategories = Array.from(categoriesMap, ([k, v]) => [k, v]).sort((a, b) => b[1]-a[1])
  
  const vegan =         { title: "Vegane", data: [ "Ja" ] }
  const ages =          { title: "Alter", data: makeArray(new Set(agesArray)) }
  const skinCare =      { title: "Haut Pflegebedürfnis", data: makeArray(new Set(skinCareArray)) }
  const skinType =      { title: "Hauttyp", data: makeArray(new Set(skinTypeArray)) }
  const brand =         { title: "Marke", data: makeArray(new Set(brandArray)) }
  const productLine =   { title: "Pflegelinie", data: makeArray(new Set(productLineArray)) }
  const productType =   { title: "Produkt-Typ", data: makeArray(new Set(productTypeArray)) }
  const ingredients =   { title: "Wirkstoffe", data: makeArray(new Set(ingredientsArray)) }
  const categories =    { title: "Kategorien", data: sortedCategories }

  return {
    categories,
    filterTypes: [
      ages,
      skinCare,
      skinType,
      brand,
      vegan,
      productLine,
      productType,
      ingredients
    ]
  }
}

export const filterData = makeFilters(productsData)