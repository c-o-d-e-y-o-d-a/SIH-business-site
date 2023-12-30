import React from 'react';
import Navbar from '../components/Navbar';
import Facility from '../components/Facility';
import Contact from '../components/Contact';
import Facility2 from '../components/Facility2';
import Discover from '../components/Discover';



function Home() {
  return (

     <>
     <Navbar/>
     
     <div className='main-app'>
        <form id='top-form'>
            <input type="text" name="location" id="place" placeholder='Your location' />
            <input type="text" name='disease' id='disease' placeholder='disease/symptoms' />
            <input type="date" name='date' id='date'/>
            <button type='submit' className='sub-button'>Find doctors</button>
        </form>
        <div className='hero-section'>
        <div className='left-hero'>
            <img src="src/assets/doctor.png" alt="" id='doctor-image'/>

        </div>
        <div className='right-hero'>
            <div className='big-text'>
                Find the Best <br /> hospitals near you

            </div>
            <div className='small-text'>
                we will help you get the best <br /> medical treatment you can

            </div>

        </div>

        
     </div>
     <Facility2/>

     <Facility/>
     <Discover/>
     <Contact/>
     
     </div>

     
     </>
     
   
  )
}

export default Home;