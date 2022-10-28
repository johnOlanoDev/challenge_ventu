import React from 'react'
import './navbar.scss'
import { showHamburguer } from '../sidebar/Sidebar'

const Navbar = () => {

    return (
        <div className='navbar'>
            <div className='navbar__hamburger' onClick={showHamburguer}>
                <div className='hamburger'></div>
            </div>
            <div className='navbar__dolar'>
                <span>1 USD</span>
                <span>=</span>
                <span>20.20 MXN</span>
            </div>
            <div className='navbar__info'>
                <div className='navbar__info_date'>May 10, 2022</div>
                <div className='navbar__info_dropdown'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="29" viewBox="0 0 30 29" fill="none">
                        <path d="M14.8574 1.8125V2.9C19.094 3.73998 22.2859 7.39727 22.2859 11.7812V12.8461C22.2859 15.5139 23.29 18.0797 25.1007 20.0734L25.5301 20.5436C26.0176 21.0816 26.1395 21.8406 25.8377 22.492C25.5359 23.1434 24.8743 23.5625 24.1431 23.5625H1.85737C1.12612 23.5625 0.462833 23.1434 0.163253 22.492C-0.136328 21.8406 -0.0165015 21.0816 0.469391 20.5436L0.899784 20.0734C2.71282 18.0797 3.71452 15.5139 3.71452 12.8461V11.7812C3.71452 7.39727 6.85425 3.73998 11.1431 2.9V1.8125C11.1431 0.81166 11.973 0 13.0002 0C14.0275 0 14.8574 0.81166 14.8574 1.8125ZM13.0002 29C12.0136 29 11.0676 28.6205 10.3712 27.9408C9.67478 27.2611 9.28594 26.2869 9.28594 25.375H16.7145C16.7145 26.2869 16.3257 27.2611 15.6292 27.9408C14.9328 28.6205 13.9346 29 13.0002 29Z" fill="#2B478B"/>
                        <circle cx="24" cy="6" r="5.5" fill="#EF5350" stroke="white"/>
                        <path d="M23.6667 8H24.7833V4.09667H24.0467C24.0044 4.21667 23.95 4.31778 23.8833 4.4C23.8167 4.48222 23.7367 4.54667 23.6433 4.59333C23.55 4.64 23.4611 4.67444 23.3767 4.69667C23.2922 4.71889 23.1878 4.73889 23.0633 4.75667V5.46667L23.6667 5.4V8Z" fill="white"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Navbar
