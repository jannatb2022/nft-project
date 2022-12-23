
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'



import './LiveAuction.css'
import NftCardd from '../nft-card/NftCardd'
import { NFT__DATA } from '../../../Assets/data/Data'


const LiveAuction = () => {
  return (
    <section>
        <Container >
            <Row>
                <Col lg='12' className='mb-4'>
                    <div className="live_auction_top d-flex align-items-center justify-content-between">
                        <h3>Live Auction</h3>
                        <span><Link to='/market'>Explore More</Link> </span>
                    </div>
                </Col>
                
                    {
                        NFT__DATA.slice(0, 4).map((items)=> (
                        <Col lg='6' md='6' xl='3' className=' mb-4'>
                            <NftCardd key={items.id} item={items} />
                        </Col>
                        ))
                    }

                    
                
                
            </Row>
        </Container>
    </section>
  )
}

export default LiveAuction