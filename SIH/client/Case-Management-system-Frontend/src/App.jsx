import Header from './components/Header'
import{BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/Home'
import E_filling from './components/E_filling'
import FooterBottom from './components/FooterBottom'
import Login_Register from './components/Login_Register'
import Document from './components/Document'
import Access from './components/Access'
import Upload from './components/Upload'

function App() {
 

  return (
    <>
    <Router>
       <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/E_Filling' element={<E_filling/>}/>
          <Route path='/Document' element={<Document/>}/>
          <Route path='/Upload' element={<Upload/>}/>
          <Route path='/Access' element={<Access/>}/>
          <Route path='/Login_register' element={<Login_Register/>}/>
      </Routes>

       <FooterBottom/>
    </Router>
      
    </>
  )
}

export default App;