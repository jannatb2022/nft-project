import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Header from '../components/header/Header'
import CommonSection from '../components/uii/common-section/CommonSection'
import {NFT__DATA} from '../Assets/data/Data'
import NftCardd from '../components/uii/nft-card/NftCardd'
import '../styles/Market.css'

const Market = () => {
  const [data, setData] = useState(NFT__DATA)

  const handleCategories = () =>{

  }

  const handleItems = () =>{

  }

  // handle---sorting_____

  const handleSort = (e) =>{

    const filterValue = e.target.value;

    if(filterValue === 'high'){
      const filterData = NFT__DATA.filter(item => item.currentBid >= 6)

      setData(filterData)
    }
    if(filterValue === 'mid'){
      const filterData = NFT__DATA.filter(item => item.currentBid >= 5.50 && item.currentBid < 6)

      setData(filterData)
    }
    if(filterValue === 'low'){
      const filterData = NFT__DATA.filter(item => item.currentBid >= 4.89 && item.currentBid < 5.50)

      setData(filterData)
    }
  }

  return (
    <>
      <CommonSection title={'Marketplace'} />
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-4'>
              <div className="market_product_filter d-flex align-items-center justify-content-between">
                <div className="left_filter align-items-center gap-3 d-flex">
                  <div className="all_category_filter">
                    
                    <select onClick={handleCategories}>
                      <option value="">All Categories</option>
                      <option value="art">Art</option>
                      <option value="music">Music</option>
                      <option value="domain_name">Domain Name</option>
                      <option value="virual_world">Virtual World</option>
                      <option value="trending_card">Trending Card</option>
                      
                    </select>
                  </div>
                  <div className="all_items_filter">
                    
                    <select onClick={handleItems}>
                      <option value="All Items">All Items</option>
                      <option value="Single Item">Single Item</option>
                      <option value="Bundle">Bundle</option>
                      
                      
                    </select>
                  </div>
                </div>

                <div className="right_filter">
                  <div className="all_sort_filter">
                      
                      <select onClick={handleSort}>
                        <option value="Sort By">Sort By</option>
                        <option value="high">High Rate</option>
                        <option value="mid">Mid Rate</option>
                        <option value="low">Low Rate</option>
                        
                        
                      </select>
                    </div>
                </div>
              </div>
            </Col>

            {
              data.map((items)=> (
                <Col lg='6' md='6' xl='3' className=' mb-4'>
                    <NftCardd item={items} />
                </Col>
              ))
            }

          </Row>
        </Container>
      </section>
      
    </>
  )
}

export default Market