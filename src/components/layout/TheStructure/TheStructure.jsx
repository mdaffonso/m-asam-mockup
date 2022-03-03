import { SalesBanner, PreHeader, TheHeader, TheFooter } from "@/components"
import { Outlet } from "react-router"

export const TheStructure = () => {
  return (
    <>
      <SalesBanner />
      <PreHeader />
      <TheHeader />
      <Outlet />
      <TheFooter />
    </>
  )
}