import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './Pages/Hero/Hero'
import ConvertMain from './Pages/ConvertMain/ConvertMain'
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/Login' element={<Hero/>}/>
        <Route path='/Converter' element={<ConvertMain/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
