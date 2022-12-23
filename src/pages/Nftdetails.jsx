import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { NFT__DATA } from '../Assets/data/Data'
import CommonSection from '../components/uii/common-section/CommonSection'
import LiveAuction from '../components/uii/live-auction/LiveAuction'
import '../styles/Nftdetails.css'

const Nftdetails = () => {

  const {id} = useParams()
  const  singlenft = NFT__DATA.find(items => items.id === id)
 

  return (
    <>
      <CommonSection title={singlenft.title} />
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='6'>
                <img src={singlenft.imgUrl} alt="imag" className='w-100 single_nft_img'/>
            </Col>

            <Col lg='6' md='6' sm='6'>
                <div className='single_nft_content'>
                  <h2>{singlenft.title}</h2>

                  <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                    <div className="d-flex align-items-center gap-4 single-nft-seen">
                        <span><i class='ri-eye-line'></i> 234</span>
                        <span><i class='ri-heart-line'></i> 124</span>
                    </div>

                    <div className="d-flex align-items-center gap-3 single-nft-more">
                        <span><i class='ri-send-plane-line'></i></span>
                        <span><i class='ri-more-2-line'></i> </span>
                    </div>
                    <div className="d-flex"></div>
                  </div>

                  <div className="nft_creator d-flex gap-3 align-items-center">
                    <div className="creator_image">
                      <img src={singlenft.creatorImg} alt="creator_img" className='w-100'/>
                    </div>
                    <div className="creator_detail">
                      <p>Created By</p>
                      <h6>{singlenft.creator}</h6>
                    </div>

                  </div>

                  <p className='mt-4'>{singlenft.desc}</p>

                  <button className='place_bid_btn d-flex align-items-center gap-2'><i class='ri-shopping-bag-line'></i> <Link to='/wallet'>Place a Bid</Link></button>

                </div>
            </Col>
          </Row>
        </Container>
      </section>
      <LiveAuction />
    </>
  )
}

export default Nftdetails