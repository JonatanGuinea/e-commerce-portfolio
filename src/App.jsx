import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import "bootstrap/dist/css//bootstrap.min.css"




import "./App.css"
import Header from './Components/Header'
import Home from './pages/Home'




function App() {
  return (
    <BrowserRouter>
    
      <Header/>
        
      <Routes>
          <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App