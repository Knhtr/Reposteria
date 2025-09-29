import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './App/Routes/AppRoutes'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <AppRoutes></AppRoutes>
      <Footer></Footer>
    </Router>
  )
}

export default App
