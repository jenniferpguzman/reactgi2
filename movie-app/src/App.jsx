import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Movies from './pages/Movies'


function App() {
return (
  <>
  <BrowserRouter>
  <Routes>
  <Route path='movies' element={<Movies />} />
  </Routes>
  </BrowserRouter>
  </>
)
}

export default App
