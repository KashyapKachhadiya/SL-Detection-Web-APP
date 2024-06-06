import React from 'react'
import "./Header.css"
import SignHand from "../../assests/SignHand.png";

const Header = () => {
  return (
    <div className="signlang__header section__padding gradient__bg" id="home">
      <div className="signlang__header-image">
      <img src={SignHand} alt='SIGN-HAND'/>
    </div>
    <div className="signlang__header-content">
      <h1 className="gradient__text">Sign Language Communicate with Grace...!!</h1>
      <p>
      Studies have shown that studying sign language improves your cognitive function and keeps you mobile as you age. Additionally, you may converse with 72 million sign language speakers globally by studying sign language. Try out our tool, study and practice sign language, and enjoy yourself.      
      </p>

    </div>
    
  </div>
  )
}

export default Header