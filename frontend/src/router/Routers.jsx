import {Routes, Route} from 'react-router-dom'
import LandingPage from '../pages/landing/LandingPage'
import BookNotesPage from '../pages/bookNotes/BookNotesPage'
import Newsletter from '../pages/newsletter/Newsletter'
import ComingSoon from '../pages/comingSoon/ComingSoon'
import Articles from '../pages/articles/Articles'
import Podcast from '../pages/podcast/Podcast'
import Posts from '../pages/articles/posts/Posts'

const Routers = () => {
  return (
    <Routes>
        {/* Landing Page Routing */}
        <Route path='/' element={<LandingPage />}></Route>

        {/* BookNotes Page Routing */}
        <Route path='/booknotes' element={<BookNotesPage />}></Route>
        <Route path='/booknotes/:path' element={<BookNotesPage />}></Route>

        {/* NewsLetter Page Routing */}
        <Route path='/newsletter' element={<Newsletter />}></Route>

        {/* Article Page Routing */}
        {/* <Route path='/articles' element = {<ComingSoon title = {'Article'}/>}></Route> */}
        <Route path='/articles' element = {<Articles />}></Route>
        <Route path='/articles/post/:id' element = {<Posts />}></Route>

        {/* Podcast Page Routing */}
        <Route path='/podcast' element = {<ComingSoon title = {'Podcast'}/>}></Route>
        {/* <Route path='/podcast' element = {<Podcast />}></Route> */}

        {/* Youtube Page Routing */}
        <Route path='/youtube' element = {<ComingSoon title = {'Youtube'}/>}></Route>

        {/* Contact Page Routing */}
        <Route path='/contact' element = {<ComingSoon title = {'Contact'}/>}></Route>
    </Routes>
  )
}

export default Routers