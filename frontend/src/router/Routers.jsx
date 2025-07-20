import {Routes, Route} from 'react-router-dom'
import LandingPage from '../pages/landing/LandingPage'
import BookNotesPage from '../pages/bookNotes/BookNotesPage'
import Newsletter from '../pages/newsletter/Newsletter'

const Routers = () => {
  return (
    <Routes>
        {/* Landing Page Routing */}
        <Route path='/' element={<LandingPage />}></Route>

        {/* BookNotes Page Routing */}
        <Route path='/booknotes' element={<BookNotesPage />}></Route>
        <Route path='/booknotes/:path' element={<BookNotesPage />}></Route>

        {/* NewsLetter Page Routing */}
        <Route path='newsletter' element={<Newsletter />}></Route>
    </Routes>
  )
}

export default Routers