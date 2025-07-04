import { Route, Routes } from "react-router"
import LayoutWebsite from "../pages/(website)/layout"
import HomePage from "../pages/(website)/homepage/page"
import ProductDetail from "@/pages/(website)/productdetail/page"
import CategoryPage from "@/pages/(website)/category/page"
// import TestPage from "@/pages/(website)/test/page"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LayoutWebsite />}>
                <Route index element={<HomePage />} />
                <Route path="detail" element={<ProductDetail />} />
                <Route path="category" element={<CategoryPage />} />
            </Route>
        </Routes>
    )
}

export default Router