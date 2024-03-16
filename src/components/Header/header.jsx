import React from 'react'
import Navigation from './Navigation'
import HeroComponent from './HeroComponent'
import './Header.css'


const Header = () => {
  return (
    <section id='header' className='header'>
        <Navigation />
        <HeroComponent />

    </section>
  )
}

export default Header