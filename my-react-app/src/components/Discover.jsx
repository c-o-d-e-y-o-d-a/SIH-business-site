import React from 'react'

function Discover() {
  return (
   <>
   <div className="discover-container">
    <div className="discover-left">

    <div className="dicover-left1">Discover the DoctorJi app</div>
    <div className="dicover-left2">Access to your healthcare practitioners, whenever you want, wherever you are.</div>
    <div className="dicover-left3"> 
    <img src="" alt="" id='review-starts' />
    <p className="text-review">
        5stars on google reviews
    </p>
     <img src="./src/assets/5star.png" alt="" id='star5-left-image'/>
    </div>
    <div className="dicover-left4">
        <img src="src/assets/store.png" alt="" id='star5-left-image'/>

    </div>

   </div>
   
   <div className="discover-right">
    <img src="src/assets/doctorji-app.png" alt="" id='discover-right-image'/>

   </div>

   </div>
   </>
  )
}

export default Discover
