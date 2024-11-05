const Content = ({ id, name, city, price, deleteRental }) => {

    const formatPrice = price.toFixed(2);

    return (

        <tr key={id}>

            <th>{id}</th>
            <th className="nameColum">{name}</th>
            <th>{city}</th>
            <th>
                {formatPrice}€ {price >= 75 ? '🔴' : '🟢'}
            </th>
            <th><button onClick={() => deleteRental(id)}>Eliminar</button></th>

        </tr>

    )

}

export default Content