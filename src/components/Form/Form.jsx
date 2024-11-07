import './Form.css'
import { useState } from "react"

const Form = ({ addNewApartment }) => {

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [roomType, setRoomType] = useState('')
    const [price, setPrice] = useState(0)
    const [nroBathroom, setNroBathroom] = useState(0)
    const [city, setCity] = useState('')
    const [score, setScore] = useState(0)

    const handleNameChange = e => {
        const { value } = e.target
        setName(value)
    }

    const handleTypeChange = e => {
        const { value } = e.target
        setType(value)
    }

    const handleRoomTypeChange = e => {
        const { value } = e.target
        setRoomType(value)
    }

    const handlePriceChange = e => {
        const { value } = e.target
        setPrice(value)
    }

    const handleBathroomChange = e => {
        const { value } = e.target
        setNroBathroom(value)
    }

    const handleCityChange = e => {
        const { value } = e.target
        setCity(value)
    }

    const handleScoreChange = e => {
        const { value } = e.target
        setScore(value)
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        const aparmentData = { name: name, bathrooms: nroBathroom, price: price, review_scores_rating: score, city: city, property_type: type, room_type: roomType }
        addNewApartment(aparmentData)
    }

    return (
        <div className="Form">

            <h2>Crear Apartamento</h2>

            <form onSubmit={handleFormSubmit}>
                <div>
                    <div className='itemForm'>
                        <label htmlFor={name}>Nombre: </label>
                        <input type="text" value={name} onChange={handleNameChange} placeholder='Ingrese el nombre' />
                    </div>

                    <div className='itemForm'>
                        <label htmlFor="">Tipo Apartamento:</label>
                        <input type="text" value={type} onChange={handleTypeChange} placeholder='Ingrese el tipo de apartamento' />
                    </div>

                    <div className='itemForm'>
                        <label htmlFor="">Tipo Habitación:</label>
                        <input type="text" value={roomType} onChange={handleRoomTypeChange} placeholder='Ingrese el tipo de habitación' />
                    </div>

                    <div className='itemForm'>
                        <label htmlFor="">Precio:</label>
                        <input type="number" value={price} onChange={handlePriceChange} />
                    </div>

                    <div className='itemForm'>
                        <label htmlFor="">Número de Baños:</label>
                        <input type="number" value={nroBathroom} onChange={handleBathroomChange} />
                    </div>

                    <div className='itemForm'>
                        <label htmlFor="">Ciudad:</label>
                        <input type="text" value={city} onChange={handleCityChange} placeholder='Ingrese la ciudad' />
                    </div>

                    <div className='itemForm'>
                        <label htmlFor="">Puntuación:</label>
                        <input type="number" value={score} onChange={handleScoreChange} />
                    </div>
                </div>

                <div className='buttonForm'>
                    <input type="submit" value={'Añadir Nuevo Apartamento'} />
                </div>

            </form>

        </div>

    )
}

export default Form