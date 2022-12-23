import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import CommonSection from '../components/uii/common-section/CommonSection'
const Contact = () => {

  
  const [formValues, setFormValues] = useState([])
  const [display, setDisplay] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  

  let formvalue = {
    name,
    email,
    subject,
    message
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(name);
    
    setFormValues([...formValues, formvalue]);
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    
    const formsec = document.querySelector('.frmSec')
    const msent = document.querySelector('.msent')

    formsec.style.display = 'none'
    msent.style.display = 'block'
    
  }

  useEffect(() => {
    localStorage.setItem('form', JSON.stringify(formValues))
  }, [formValues])
  

  return (
    <>
      <CommonSection title='Contact' />

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' className='m-auto text-center frmSec'>
              <h2>Drop a Message</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur totam aspernatur maiores obcaecati. Quod sit odit minima est</p>
              <div className="contact mt-4">

                <form onSubmit={handleSubmit} >
                    <div className="form_input">
                      <input type="text" placeholder='Enter your name' value={name}  onChange={e => {setName(e.target.value)}} required/>
                    </div>
                    <div className="form_input">
                      <input type="email" placeholder='Enter your email' value={email}  onChange={e => {setEmail(e.target.value)}} required/>
                    </div>
                    <div className="form_input">
                      <input type="text" placeholder='Enter subject' value={subject}  onChange={e => {setSubject(e.target.value)}} required/>
                    </div>
                    <div className="form_input">
                      <textarea name=""
                       
                        placeholder='Write messages...'
                         rows="7" value={message}  onChange={e => {setMessage(e.target.value)}} required>

                         </textarea>
                    </div>

                    <button type='submit'
                     className='send_btn'
                    style={{border: 'none',
                    borderRadius: '5px',
                    padding: '7px 25px',
                  marginTop: '20px' }}
                    >Send a Message</button>
                </form>
              </div>
            </Col>
          </Row>

          <Row style={{display: 'none'}} className='msent'>
            <Col>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', }}>
                <h2 style={{color: '#ee82ee'}}>Message Sent... </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact