import React from 'react'

function Comp() {
  return (
    <div className='div-main'>
       <div className="para1">
        India's First digital <br/> Native Doctor Booking service 
        
       </div>
       <div class="card-section">
  <div class="card">
    <h3 className='sub-headin'>Find a Doctor</h3>
    <p>Discover and book appointments with experienced and reliable doctors in your area.</p>
    <div className="book"><a href="#link-to-find-doctor">Book Now</a></div>
  </div>

  <div class="card">
    <h3 className='sub-headin'>Telemedicine</h3>
    <p>Access healthcare from the comfort of your home with our telemedicine services.</p>
    <div className="book"><a href="#link-to-telemedicine">Book Now</a></div>
  </div>

  <div class="card">
    <h3 className='sub-headin'>Specialist Services</h3>
    <p>Explore specialized medical services provided by expert doctors in various fields.</p>
    <div className="book"><a href="#link-to-specialist-services">Book Now</a></div>
  </div>
</div>

<div className="rest-page">
  <div className="heading">
    <h1 className="head2">
      Get the most trusted AI generated medical advice for free !!

    </h1>
  </div>
  <div className="photo">
    <img src="src/assets/l.png" alt="" id='photo-right'/>
  </div>
</div>
      
    </div>

    
  )
}

export default Comp;