import './App.css'

import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar.jsx'
import Panel from './components/List/List.jsx'
import Sidebar from './components/Sidebar/Sidebar'


function App() {

  return (

    <div className='App'>

      <Navbar />

      <div className="viewport-content">

        <Sidebar />

        <Panel />


      </div>

      <Footer />

    </div>
  )
}

export default App