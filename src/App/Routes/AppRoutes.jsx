import { Route, Routes } from 'react-router-dom'
import About from '../../components/about/About'
import Blog from '../../components/blog/Blog'
import Contacto from '../../components/contacto/Contacto'
import Home from '../../components/home/Home'
import Productos from '../../components/productos/Productos'

function AppRoutes() {
    return (
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/productos' element={<Productos/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/about' element={<About/>}/>
        </Routes>
    )
}

export default AppRoutes