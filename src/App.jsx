import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import Button from './examples/Button'
  
function App() {

//const nombre = 'Laura'

//const saludar = () => {
//  alert('Holis')
//}
//const login = () => {
 //   console.log('holaaaaa')
//}

  return (
    <>
    <Navbar/> 
    <ItemListContainer greeting='Bienvenidos a mi App 😊'/>

    {/*<Button text='Hola Coders' style='button-purple' handler={saludar}/>
    <Button text='Log In' style='button-gray' handler={login}/>*/}
    </>
    )
  }

export default App
