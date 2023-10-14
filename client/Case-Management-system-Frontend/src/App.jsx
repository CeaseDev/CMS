import Header from './components/Header'
import{BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Home from './components/Home'
import E_filling from './components/E_filling'
import FooterBottom from './components/FooterBottom'
import Login_Register from './components/Login_Register'

function App() {
 

  return (
    <>
    <Router>
       <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/E_Filling' element={<E_filling/>}/>
          <Route path='/Login_register' element={<Login_Register/>}/>
      </Routes>

       <FooterBottom/>
    </Router>
      
    </>
  )
}

export default App;