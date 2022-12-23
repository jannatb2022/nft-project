import React, { useEffect, useRef, useState } from 'react'
import './Model.css'
const Model = ({setShowModel, CurrentBid}) => {
  console.log(CurrentBid);

  const currentBid = CurrentBid
  const [amount, setAmount] = useState(0)
  const [quantity, setQuantiy] = useState(0)
  const [tAmount, setTAmount] = useState(0)

  const tmountt = useRef(0)
  useEffect(() => {
    setTAmount(amount * quantity)
  }, [amount, quantity])
  

         
  
  return (
    <div className='model_wrapper' >
        <div className="mmodel">

          <span className="close_model">
            <i class='ri-close-line' onClick={()=> setShowModel(false)}></i>
          </span>

          <h6 className='text-center text-light'>Place a bid</h6>
          <p className='text-center text-light f'>You must bid at least <span className='money'>{currentBid}</span> ETH</p>
          {
            
               amount < currentBid ?
                     <p className='alertt text-danger' id='alertt'>Amount is too low..</p> : null
          }  
  
          <div className="input_item mb-3">
            <input type="number" placeholder='00 : 00 ETH' min='0.01'  onChange={(e)=>{setAmount(e.target.value)}}/>
          </div>

          <div className="input_item">
            <h6>Enter quantity, <span>7</span> available</h6>
            <input type="number" placeholder='Input Quantity' id='quantity' min='1'  required onChange={(e)=>{setQuantiy(e.target.value)}}/>
          </div>

          <div className="d-flex align-items-center justify-content-between">
            <p>You must bid at least</p>
            <span className='money'>{currentBid} ETH</span>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p>Service Fee</p>
            <span className='money' id='famount'>0.89 ETH</span>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p>Total bid amount</p>
            <span className='money' id='tamount' ref={tmountt}> {tAmount.toFixed(2) } ETH</span>
          </div>
           <button className='place-bid-btn'>
              Place a Bid
           </button>
        </div>
        
    </div>
  )
}

export default Model