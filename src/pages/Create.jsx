import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import img1 from '../Assets/images/img-01.jpg'
import ava1 from '../Assets/images/ava-01.png'
import CommonSection from '../components/uii/common-section/CommonSection'
import NftCardd from '../components/uii/nft-card/NftCardd'
import '../styles/Create.css'
const Create = () => {
  const previewdata = 
    {
      id: "01",
      title: "Travel Monkey Club",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
      imgUrl: img1,
      creator: "Trista Francis",
      creatorImg: ava1,
      currentBid: 5.89,
    };

  return (
    <>
      <CommonSection title='Create Item'/>

      <section>
        <Container>
          <Row>
            <Col lg='4' md='6' sm='6' xl='3'>
                <h5 className='mb-4 preview'>Preview Item</h5>
                <NftCardd item={previewdata} />
            </Col>
            <Col lg='8' md='6' sm='6'>
                <div className="create_item">
                  <form action="">
                    <div className="form_input">
                      <label htmlFor="">Upload File</label>
                      <input type="file" className='upload' />
                    </div>

                    <div className="form_input">
                      <label htmlFor="">Price</label>
                      <input type="number"  placeholder='Enter price for one item(ETH)' />
                    </div>

                    <div className="form_input">
                      <label htmlFor="">Minimum Bid</label>
                      <input type="number"  placeholder='Enter minimum bid' />
                    </div>

                    <div className="date d-flex align-items-center justify-content-between gap-2">
                      <div className="form_input w-50">
                        <label htmlFor="">Starting Date</label>
                        <input type="date"  />
                      </div>

                      <div className="form_input w-50">
                        <label htmlFor="">Expiration Date</label>
                        <input type="date"  />
                      </div>
                    </div>

                    <div className="form_input">
                      <label htmlFor="">Title</label>
                      <input type="text" placeholder='Enter title' />
                    </div>

                    <div className="form_input">
                      <label htmlFor="">Description</label>
                      <textarea
                       name="" 
                       id="" 
                       
                       rows="7"
                       placeholder='Enter description'
                       className='w-100' >
                       </textarea>
                    </div>

                  </form>
                </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Create