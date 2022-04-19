import React from 'react'
import { Link } from 'react-router-dom'
// import KeyboardDoubleArrowDownIcon from '@mui/icons-material';
import './HomePage.css'

export function HomePage() {
  return (
    <div className='wrapper'>
        <section>
            <div className="heading__content">
                <div className='heading'>Quizam</div>
                <p className="subtitle">Automatic Question Generation WebApp</p>
                <Link to="/generate">
                    <button className='getStarted__btn'>
                        Get Started 
                        {/* <KeyboardDoubleArrowDownIcon />  */}
                    </button>
                </Link>
            </div>
        </section>
    </div>
  )
}
