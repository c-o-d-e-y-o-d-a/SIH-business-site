import React from 'react'

function Bottombar() {
  return (
   <>
   <div className="upper-b-bar">
    <img src="/assets/logo1.png" alt="" />
    Copyright © 2023 DoctorJi, all rights reserved.


   </div>

   <div className="middle-b-bar">
    <div className="link-container-middle-b-bar">
        <div className="link-middle-b-bar">About us</div>
        <div className="link-middle-b-bar">Privacy Policy</div>
        <div className="link-middle-b-bar">Prevention</div>
        <div className="link-middle-b-bar">Video consultation</div>
        <div className="link-middle-b-bar">Jobs</div>

    </div>
    <div className="link-container-middle-b-bar">
         <div className="link-middle-b-bar">DoctoJi Pro Management software</div>
        <div className="link-middle-b-bar">DoctorJi Community</div>
        <div className="link-middle-b-bar">doctor Ji App</div>
        

    </div>
    <div className="link-container-middle-b-bar">
         <div className="link-middle-b-bar">NeuroSurgeon</div>
        <div className="link-middle-b-bar">Dermatologist</div>
        <div className="link-middle-b-bar">Cardiologist</div>
        <div className="link-middle-b-bar">Dentist </div>
        <div className="link-middle-b-bar">Psycologist</div>

    </div>

   </div>

   <div className="lower-b-bar">
    <div className="social-media-container">
        <img src="" alt="" id="social-media-icon" />
        <img src="" alt="" id="social-media-icon" />
        <img src="" alt="" id="social-media-icon" />
        <img src="" alt="" id="social-media-icon" />
    </div>
    <div className="bottom-most">
       <a href=""> Terms and conditions of use</a>
<a href="">• Terms of use agreement</a>
<a href="">• Personal data protection policy</a>
<a href="">• Cookie policy</a>
<a href="">• Cookie management and consent settings</a>
<a href="">• Cookie management and consent settings</a>
    </div>

   </div>
   </>
  )
}

export default Bottombar
