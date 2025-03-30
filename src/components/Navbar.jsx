//import Button from '../examples/Button'
import '../styles/Navbar.css'
import CartWidget from './CartWidget'

const Navbar = () => {
    const cart = () => {
        alert('carrito')
    }
    return(
        <nav className= 'nav-container'>
            <img src='../libro-abierto.svg' alt='logo' className='logo'/>
            
            <div className='a-container'>
                <a>Nuevos</a>
                <a>Ofertas</a>
                <a>Más vendidos</a>
            </div>
            <CartWidget/>
         </nav>
    )
}

export default Navbar