import {Routes, Route} from 'react-router-dom'
import LandingPage from '../pages/landing/LandingPage'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<LandingPage />}></Route>
    </Routes>
  )
}

export default Routers