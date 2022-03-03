import { BrowserRouter, Routes, Route } from "react-router-dom"
import { TheStructure } from "@/components"
import { GlobalProvider } from "@/contexts"
import { ProductsView, SingleProductView } from "@/views"

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<TheStructure />}>
            <Route index element={<ProductsView />} />  
            <Route path="product/:id" element={<SingleProductView />} />  
          </Route>
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  )
}

export default App
