import { useState } from 'react'
import Rentals from '../../data/rentals.json'
import './List.css'
import Content from '../ListItem/ListItem'

const Panel = () => {

    const { results } = Rentals

    const [rentals, setRentals] = useState(results)

    const filteredTest = rentals.filter(eachRental => eachRental.city === 'Madrid')

    const handelRentalRemoval = id => {
        const filteredRentals = filteredTest.filter(eachRental => eachRental.id != id)
        setRentals(filteredRentals)
    }

    return (

        < div className="Panel" >
            <h1>Listado de Apartamentos</h1>
            <table>
                <thead>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>CIUDAD</th>
                    <th>¿ECONOMICO?</th>
                    <th>ACCION</th>
                </thead>
                <tbody>
                    {
                        filteredTest.map(eachRental => {
                            return (

                                <Content
                                    key={eachRental.id}
                                    deleteRental={handelRentalRemoval}
                                    {...eachRental}
                                />
                            )
                        })
                    }
                </tbody>
            </table>
        </div >
    )

}

export default Panel