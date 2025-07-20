import {Routes, Route} from 'react-router-dom'
import LandingPage from '../pages/landing/LandingPage'
import BookNotesPage from '../pages/bookNotes/BookNotesPage'
import Categories from '../pages/bookNotes/components/Categories'
import BooksContainer from '../pages/bookNotes/sections/BooksContainer'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/booknotes' element={<BookNotesPage />}></Route>
        <Route path='/booknotes/:path' element={<BookNotesPage />}></Route>
    </Routes>
  )
}

export default Routers