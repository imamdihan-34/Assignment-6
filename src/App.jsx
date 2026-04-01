
import { Suspense } from 'react'
import './App.css'
import Banner from './components/Homepage/banner/Banner'

import Navbar from './components/navbar/Navbar'
import Stats from './components/Stats'




function App() {
  
  return (
    <>
  <Navbar/>
  <Banner/>

    <Stats/>
        
  
    </>
  )
}

export default App
