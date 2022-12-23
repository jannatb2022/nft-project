import React from 'react'

import { Container, Col, Row } from 'reactstrap'
import './SellerSection.css'

import { SELLER__DATA } from '../../../Assets/data/Data'

const SellerSection = () => {

  return (
    <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <div className="seller_section_title">
                <h3>Top Seller</h3>
              </div>
            </Col>

            {
              SELLER__DATA.map((items)=>(
                <Col lg='2' md='3' sm='4' xs='6' className='mb-4' key={items.id}>
                  <div className="siingle-seller-card d-flex align-items-center gap-3">
                    <div className="seller-iimg">
                      <img src={items.sellerImg} alt="ava1_img" className='w-100'/>
                    </div>
                    <div className="seller-content">
                      <h6>{items.sellerName}</h6>
                      <h6>{items.currentBid} ETH</h6>
                    </div>
                  </div>
                </Col>
              ))
            }
            
          </Row>
        </Container>
    </section>
  )
}

export default SellerSection