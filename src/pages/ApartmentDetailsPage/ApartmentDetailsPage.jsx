import { Link, useParams } from "react-router-dom"
import { results as apartmentsData } from './../../data/apartments.json'
import { useState } from "react"

const ApartmentDetailsPage = () => {

    const { apartmentId } = useParams()

    const selectedApartment = apartmentsData.find(elm => elm.id === apartmentId)

    const [apartment, setApartment] = useState(selectedApartment)

    return (
        <div className="ApartmentDetailsPage">
            <h1>DETALLES {apartment.name}</h1>
            <hr />
            <Link to={'/'}>Volver al listado</Link>
        </div>
    )
}

export default ApartmentDetailsPage