import React from 'react'
import { Row, Container, Col } from 'reactstrap'
import { NFT__DATA } from '../../../Assets/data/Data'
import NftCardd from '../nft-card/NftCardd'

import './Trending.css'

const Trending = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-5' >
                    <h3 className='trending_title'>Trending</h3>
                </Col>

                {
                    NFT__DATA.slice(0, 8).map((items)=>(
                        <Col lg='6' md='6' sm='12' xl='3' className='mb-4' key={items.id}>
                            <NftCardd item={items}></NftCardd>
                        </Col>
                    ))
                }

            </Row>
        </Container>
        
    </section>
  )
}

export default Trending