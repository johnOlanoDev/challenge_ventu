import React, { useEffect, useState } from 'react'
import './sidebar.scss'
import { Link, useLocation } from 'react-router-dom'
import { images } from '../../constants'
import sidebarNav from '../../configs/sidebarNav'

export function showHamburguer () {
    const sidebar = document.querySelector('.sidebar')
    const overlay = document.querySelector('.overlay')
    const navbar__hamburger = document.querySelector('.navbar__hamburger')
    
    sidebar.style.right === '0%' ? sidebar.style.right = '-100%' : sidebar.style.right = '0%'
    overlay.classList.contains('active') ? overlay.classList.remove('active') : overlay.classList.add('active')
    navbar__hamburger.classList.contains('active') ? navbar__hamburger.classList.remove('active') : navbar__hamburger.classList.add('active')
}

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const location = useLocation()  

    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1]
        const activeItem = sidebarNav.findIndex(item => item.section === curPath)

        setActiveIndex(curPath.length === 0 ? 0 : activeItem)
    }, [location])

    return (
        <>
            <div className='overlay'></div>
            <div className='sidebar'>
                <div className="sidebar__logo">
                    <img src={images.logo} alt="" />
                </div>
                <div className="sidebar__menu">
                    {
                        sidebarNav.map((nav, index) => (
                            <Link to={nav.link} key={`nav-${index}`} className={`sidebar__menu__item ${activeIndex === index && 'active'}`}>
                                <div className="sidebar__menu__item__icon">
                                    <img src={nav.icon} alt="" />
                                </div>
                                <div className="sidebar__menu__item__txt">
                                    {nav.text}
                                </div>
                            </Link>
                        ))
                    }
                    <div className="sidebar__menu__item">
                        <div className="sidebar__menu__item__icon">
                            <i className='bx bx-log-out'></i>
                        </div>
                        <div className="sidebar__menu__item__txt">
                            Logout
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
