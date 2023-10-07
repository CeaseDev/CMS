import { useState } from 'react'
import Header from './components/Header'
import{BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
       <Header/>
      <Routes>
          <Route>  </Route>
      </Routes>

       <Footer/>
    </Router>
      
    </>
  )
}

export default App;