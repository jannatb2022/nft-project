import React from 'react'
import { Row, Container, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import './StepSection.css'

const StepSection = () => {
    const step_data = [
        {
            title: 'Setup your wallet',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni repudiandae possimus voluptate dolorum excepturi atque.',
            icon: 'ri-wallet-line'
        },
        {
            title: 'Create your collection',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni repudiandae possimus voluptate dolorum excepturi atque.',
            icon: 'ri-layout-masonry-line'
        },
        {
            title: 'Add your NFTs',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni repudiandae possimus voluptate dolorum excepturi atque.',
            icon: 'ri-image-line'
        },
        {
            title: 'List them for sale',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni repudiandae possimus voluptate dolorum excepturi atque.',
            icon: 'ri-list-check'
        }
    ]
  return (
    <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-4'>
                    <h3 className='step_title'>Create and sell your NFTs</h3>
                </Col>

                {
                    step_data.map((item, index)=>(
                        <Col lg='6' md='6' sm='6' xl='3' key={index} className='mb-4'>
                            <div className="single_step">
                                <span><i class={item.icon}></i> </span>
                                <div className="single_step_content">
                                    <h5><Link to='/Wallet'>{item.title}</Link> </h5>
                                    <p className='mb-0'>{item.desc}</p>
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

export default StepSection