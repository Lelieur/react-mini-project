import './ApartmentsList.css'
import apartmentsData from './../../data/apartments.json'
import { useState } from 'react'
import ApartmentCard from '../ApartmentCard/ApartmentCard'
import Form from '../Form/Form'

const ApartmentsList = () => {

    const [apartments, setApartments] = useState(apartmentsData.results)

    const removeApartment = apartmentId => {
        const filteredApartments = apartments.filter(elm => elm.id != apartmentId)
        setApartments(filteredApartments)
    }

    const addNewApartment = (newApartment) => {
        const newApartments = [newApartment, ...apartments]
        setApartments(newApartments)
    }

    return (
        <div className="ApartmentsList">
            <Form
                addNewApartment={addNewApartment} />
            {
                apartments.map(elm => {
                    return (
                        <ApartmentCard {...elm} removeApartment={removeApartment} key={elm.id} />
                    )
                })
            }
        </div>
    )
}

export default ApartmentsList