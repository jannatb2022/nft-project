import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Model from '../model/Model'
import './NftCardd.css'

const NftCardd = (props) => {
    const {id, title, imgUrl, creator, creatorImg, currentBid} = props.item
    const [showModel, setShowModel] = useState(false)

  return (
    <div className="single-nft-card">
                        <div className="nft-img">
                            <img src={imgUrl} alt="img1" className='w-100'/>
                        </div>
                        <div className="nft-content">
                            <h5 className='nft-title'><Link to={`/market/${id}`}> {title}</Link></h5>

                            <div className="creator-info-wrapper d-flex gap-3">
                                <div className='creator-img'>
                                    <img src={creatorImg} alt="ava1" className='w-100'/>
                                </div>
                                <div className="creator-info d-flex align-items-center justify-content-between w-100">
                                    <div>
                                        <h6 className='letter'>Created By</h6>
                                        <p>{creator}</p>
                                    </div>
                                    <div>
                                        <h6 className='letter'>Current Bid</h6>
                                        <p>{currentBid} ETH</p>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex align-items-center justify-content-between mt-3">
                                <button className='bid-btn d-flex align-items-center gap-2' onClick={()=> setShowModel(true)}><i class='ri-shopping-bag-line'></i> Place Bid</button>

                                {
                                    showModel && <Model setShowModel={setShowModel} CurrentBid={currentBid}/>
                                }

                                <span className='history-link'><Link to='#'>View History</Link>  </span>
                            </div>
                        </div>

                    </div>
  )
}

export default NftCardd