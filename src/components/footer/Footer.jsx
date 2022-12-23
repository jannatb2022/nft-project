import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import './Footer.css'
const Footer = () => {

  const my_account = [
    {
      display: 'Author Profile',
      url: '/sellerprofile'
    },
    {
      display: 'Create Item',
      url: '/create'
    },
    {
      display: 'Collection',
      url: '/market'
    },
    {
      display: 'Edit Profile',
      url: '/editprofile'
    },
  ]
  const resources = [
    {
      display: 'Help Center',
      url: '#'
    },
    {
      display: 'Partner',
      url: '#'
    },
    {
      display: 'Community',
      url: '#'
    },
    {
      display: 'Activity',
      url: '#'
    }
  ]
  const company = [
    {
      display: 'About',
      url: '#'
    },
    {
      display: 'Career',
      url: '#'
    },
    {
      display: 'Ranking',
      url: '#'
    },
    {
      display: 'Contact Us',
      url: '/contact'
    }
  ]
 
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col lg='3' md='6' sm='6' className='mb-4'>
            <div className="logo text-light">
                  <h2 className='d-flex gap-2 align-items-center'><span><i class="ri-fire-fill"></i></span>NFTs</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat tempora rerum rem saepe quisquam commodi fugit non, officiis dolor.</p>
            </div>
          </Col>
          <Col lg='2' md='3' sm='6' className='mb-4'>
            <h5>
              My Account
            </h5>
            <ListGroup className='list_group'>
              {
                my_account.map((item, index) => (
                 
                  <ListGroupItem key={index} className='list_item'>
                    <Link to={item.url} >{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='2' md='3' sm='6' className='mb-4'>
          <h5>
              Resources
            </h5>
            <ListGroup className='list_group'>
              {
                resources.map((item, index)=>(
                  <ListGroupItem key={index} className='list_item'>
                    <Link to={item.url} >{item.display}</Link>
                  </ListGroupItem>
                ))
              }
              
            </ListGroup>
          </Col>
          <Col lg='2' md='3' sm='6' className='mb-4'>
          <h5>
              Company
            </h5>
            <ListGroup className='list_group'>
              {
                company.map((item, index)=>(
                  <ListGroupItem key={index} className='list_item'>
                    <Link to={item.url} >{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3' md='6' sm='6' className='mb-4'>
            <h5>Newsletter</h5>
            <input type="text" className="newsletter" placeholder='Email'/>
            <div className="social-links d-flex gap-3 align-items-center">
              <span><Link to='#'><i class="ri-facebook-line"></i></Link></span>
              <span><Link to='#'><i class="ri-instagram-line"></i></Link></span>
              <span><Link to='#'><i class="ri-twitter-line"></i></Link></span>
              <span><Link to='#'><i class="ri-telegram-line"></i></Link></span>
              <span><Link to='#'><i class="ri-discord-line"></i></Link></span>
            </div>
          </Col>
          <Col lg='12' className='mt-4 text-center'>
            <p className='copyright'>Copyrights 2022, developed by Bilkis. </p>
          </Col>
          
          
        </Row>
      </Container>
    </div>
  )
}

export default Footer