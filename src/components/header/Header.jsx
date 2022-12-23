import React, { useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Container } from 'reactstrap'
import './Header.css'
// import Home from '../../pages/Home'
// import Market from '../../pages/Home'
// import Create from '../../pages/Home'
// import Contact from '../../pages/Home'
// import Wallet from '../../pages/Home'

const Header = () => {

  const headerRef = useRef(null)
  const menuref = useRef(null)

  const togglemenu = ()=> menuref.current.classList.toggle('acive_menu')

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('header_shrink')
      }
      else{
        headerRef.current.classList.remove('header_shrink')
      }
    });

    // return ()=>{
    //   window.removeEventListener('scroll');
    // };
  }, [])

  const nav_links = [
    {
      display: 'Home',
      url: '/home'
    },
    {
      display: 'Market',
      url: '/market'
    },
    {
      display: 'Create',
      url: '/create'
    },
    {
      display: 'Contact',
      url: '/contact'
    },
  ]
  
  return (
    <div className='header' ref={headerRef}>
        <Container>
            <div className="navigation">
                <div className="logo text-light">
                  <h2 className='d-flex gap-2 align-items-center'><span><i class="ri-fire-fill"></i></span>NFTs</h2>
                </div>
                <div className="nav-menu" ref={menuref}  onClick={togglemenu}>
                  <ul className="nav-list">
                    {
                      nav_links.map((item, index) =>(
                        <li className="nav-item" key={index}>
                            <NavLink to={item.url} className={navClass=> navClass.isActive ? 'active' : ''}>{item.display}</NavLink>
                        </li>
                      ))
                    }
                     
                  </ul>
                </div>
                <div className="nav-right d-flex align-items-center gap-5">
                  <button className='btn'><Link to='/Wallet' className='d-flex gap-2 align-items-center'><span><i class="ri-wallet-line"></i></span>Connect Wallet</Link> </button>

                  <span  className='mobile-menu'>
                  <i class="ri-menu-line" onClick={togglemenu}></i>
                  </span>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Header