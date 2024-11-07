import { Route, Routes } from "react-router-dom"
import DashboardPage from "../pages/DashboardPage/DashboardPage"
import AboutPage from "../pages/AboutPage/AboutPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import ApartmentDetailsPage from "../pages/ApartmentDetailsPage/ApartmentDetailsPage"

const AppRoutes = () => {

    return (

        <div className="AppRoutes">

            <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/sobre-mi" element={<AboutPage />} />
                <Route path="/detalles/:apartmentId" element={<ApartmentDetailsPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    )
}

export default AppRoutes