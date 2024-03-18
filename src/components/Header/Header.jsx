import React from 'react'
import HeroComponent from './HeroComponent'
import Navigation from './Navigation'
import './Header.css'

const Header = () => {
  return (
    <section id="header" className="header">
        <Navigation />
        <HeroComponent />
    </section>
  )
}

export default Header