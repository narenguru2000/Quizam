import React from 'react'
import { Route, Link } from 'react-router-dom'
import './Navbar.css'

export function Navbar() {
  return (
    <div className='wrapper'>
      <div className='nav__container'>
        <div className='brand'>
            <Link to="/">
          <div className='brand__heading'>Quizam</div>
            </Link>
        </div>
        <div className='links'>
            
          <div className='link__name'>Github</div>
        </div>
      </div>
    </div>
  )
}
