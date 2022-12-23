import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'
import './Herosec.css'
import heroimg from '../../Assets/images/hero.jpg'
const Herosection = () => {
  return (
    <section className='hero-sec'>
      <Container>
        <Row>
          <Col lg='6' md='12' className='gap-3'>
            <div className="hero-content">
              <h2>Discover rare digital art and collect <span>sell extraordinary </span>NFTs </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reprehenderit laboriosam quisquam laborum molestias ut officiis eos, praesentium aliquid.</p>

              <div className="hero-btns d-flex align-items-center gap-4">
                <button className=' d-flex align-items-center gap-2'><i class='ri-rocket-line'></i> <Link to='/market'>Explore</Link> </button>
                <button className=' d-flex align-items-center gap-2'><i class='ri-ball-pen-line'></i><Link to='/create'>Create</Link> </button>
              </div>

            </div>
          </Col>

          <Col lg='6' md='12'>
              <div className="heroimg justify-content-center d-flex">
                <img src={heroimg} alt="hero"  className='w-100'/>
              </div>
          </Col>
        </Row>
        <Row>
        {/* <div class="wave"></div> */}
        </Row>
      </Container>
    </section>
  )
}

export default Herosection