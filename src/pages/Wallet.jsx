import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import CommonSection from '../components/uii/common-section/CommonSection'
import '../styles/Wallet.css'

const Wallet = () => {
  const wallet_data = [
    {
      title: 'Bitcoin',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate atque delectus veritatis tempora nemo accusantium.',
      icon: 'ri-bit-coin-line'
    },
    {
      title: 'Coinbase',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate atque delectus veritatis tempora nemo accusantium.',
      icon: 'ri-coin-line'
    },
    {
      title: 'Matamask',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate atque delectus veritatis tempora nemo accusantium.',
      icon: 'ri-money-cny-circle-line'
    },
    {
      title: 'Authereum',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate atque delectus veritatis tempora nemo accusantium.',
      icon: 'ri-bit-coin-line'
    }
  ]
  return (
    <>
      <CommonSection title='Connect Wallet' />

      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5 text-center'>
              <h2 className='text-light'>Connect your Wallet</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />Facilis iusto quaerat cupiditate reiciendis quis officiis, unde impedit</p>
            </Col>

            {
              wallet_data.map((items) =>(
                <Col lg='3' md='6' className='mb-4'>
              <div className="wallet_item">
                <span>
                  <i class={items.icon}></i>
                </span>
                <h6>{items.title}</h6>
                <p>{items.desc}</p>
              </div>
            </Col>
              ))
            }
            
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Wallet