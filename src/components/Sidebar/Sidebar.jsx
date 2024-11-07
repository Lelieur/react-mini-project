import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>Inicio</Link>
                    </li>
                    <li>
                        <Link to={'/sobre-mi'}>Sobre-mi</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Sidebar