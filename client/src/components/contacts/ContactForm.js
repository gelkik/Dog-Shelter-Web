import React,{useState,useEffect} from 'react';
import ContactAddress from './ContactAddress'

function ContactForm() {
  const newObj = {
    name: '',
    email: '',
    comment: ''
    }
  const [email, setEmail] = useState(newObj)
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [commentError, setCommentError] = useState(false)

  function handleSubmit(e){
    e.preventDefault();

    // setEmail({[e.target.name]:e.target.value})
    console.log(email)
    setNameError(false)
    setEmailError(false)
    setCommentError(false)

    if (email.name === ''){
        setNameError(true)
    }
    if (email.email === ''){
        setEmailError(true)
    }
    if (email.comment === ''){
        setCommentError(true)
    }
    fetch('http://127.0.0.1:5555/contacts',{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(email)
    })
    .then(r=>r.json())
    .then(setEmail(newObj)
    )
  }

  function handleChange(e){
    setEmail({...email,[e.target.name]:e.target.value})
  }
  
  return (

	  <section className="contact-area pt-110 pb-110">
        <div className="container">
          <div className="container-inner-wrap">
            <div className="row justify-content-center justify-content-lg-between">
              <div className="col-lg-6 col-md-8 order-2 order-lg-0">
                <div className="contact-title mb-20">
                  <h5 className="sub-title">Contact Us</h5>
                </div>
                <div className="contact-wrap-content">
                  <p>Thank you for considering adoption from our dog shelter! We are always excited to help match our furry friends with loving forever homes. We want to make sure that every adoption is a great match for both the dog and the adopter, so please feel free to ask any questions you may have about the adoption process or about our available dogs. Our staff and volunteers are happy to provide information and guidance to help make your adoption experience a positive one.

Thank you again for considering adoption from our shelter. We look forward to hearing from you soon!</p>
                  <form 
                    className="contact-form"
                    onSubmit={handleSubmit}
                  >
                    <div className="form-grp">
                      <label htmlFor="name">Your Name <span>*</span></label>
                      <input type="text" id="name" name = 'name' placeholder="Jon Deo..." 
                        value ={email.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-grp">
                      <label htmlFor="email">Your Email <span>*</span></label>
                      <input type="text" id="email" name = 'email'placeholder="info.example@.com"  
                        value ={email.email}
                        onChange={handleChange}/>
                    </div>
                    <div className="form-grp">
                      <label htmlFor="message">Your Message <span>*</span></label>
                      <textarea name="comment" id="message" placeholder="Opinion..." defaultValue={""}
                        value ={email.comment}
                        onChange={handleChange}
                      />
                    </div>
                    {/* <div className="form-grp checkbox-grp">
                      <input type="checkbox" id="checkbox" />
                      <label htmlFor="checkbox">Don’t show your email address</label>
                    </div> */}
                    <button type="submit" className="btn rounded-btn">Send Now</button>
                  </form>
                </div>
              </div>

              <ContactAddress/>

            </div>
          </div>
        </div>
      </section>
  )
}

export default ContactForm;
