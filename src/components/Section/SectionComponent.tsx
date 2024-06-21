import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeComponent from '../Home/HomeComponent'
import CheckerComponent from '../Checker/CheckerComponent'
import './SectionComponent.css'

const SectionComponent = () => {
  return (
    <main className='container'>
        <div className='page-wrapper'>
          <Routes>
            <Route path='/' element={<HomeComponent />} />
            <Route path='/checker' element={<CheckerComponent />} />
          </Routes>
        </div>
    </main>
  )
}

export default SectionComponent