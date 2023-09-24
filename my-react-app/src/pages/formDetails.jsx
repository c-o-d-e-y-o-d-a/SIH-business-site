import React , {useState}from 'react'

function FormDetails() {
  const [userData,setUserData] = useState({
    doctorName:"",
    doctorAdress:"",
    doctorPhoneNO:"",
    doctorEmail:"",
    doctorSpecilisation:"",
    doctorUID:"",
    doctorGender:"",
    doctorFee:""

  });

  let name, value;
  const postUserData = (event) =>{
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData,[name]:value});

  };

  const submitData = async (event) =>{
    event.preventDefault();
    const {doctorName,doctorAdress,doctorPhoneNO,doctorEmail,doctorSpecilisation,doctorUID,doctorGender,doctorFee} = userData;
    const res = fetch('https://doctor-ji-63a56-default-rtdb.firebaseio.com/doctorRecords.json',
    {
    method : "POST",
    headers:{
      "Content-Type": "application/json",
    },
    body:JSON.stringify({
      doctorName,doctorAdress,doctorPhoneNO,doctorEmail,doctorSpecilisation,doctorUID,doctorGender,doctorFee,

    }), 

    }
    );
    if(res){alert('done yay');}
    else{alert("mehhhhhhhh")}

  };



  return (
    <>
    
    <div className='form-cont'>
      <h1 className='doctor-form-head'>Doctor Registeration Portal</h1>
      
        <div className='form-doctor' >
          <form action="" id="form-doctor2" method='POST'  >
          <input type="text" id="doctor-name" placeholder=" Your Name" required name='doctorName'  value={userData.doctorName} onChange={postUserData} className='top'/>
          <input type="text" id="doctor-address" placeholder=" Where you practice" required name='doctorAdress' value={userData.doctorAdress} onChange={postUserData} className='top'/>
          <input type="text" id="doctor-spec" placeholder=" Your specialization" required name='doctorSpecilisation' value={userData.doctorSpecilisation} onChange={postUserData}/>
          <input type="email" id="doctor-email" placeholder=" Your E-mail" required name='doctorEmail' value={userData.doctorEmail} onChange={postUserData}/>
          <input type="phone" id="doctor-phone" placeholder=" Your Phone Number" required name='doctorPhoneNO' value={userData.doctorPhoneNO} onChange={postUserData}/>
          <input type="text" id="doctor-UID" required name=' doctorUID' value={userData.doctorUID} onChange={postUserData} placeholder=' Your UID'/>
          <input type="text" id="doctor-gender" placeholder=" Your Gender" name='doctorGender' required value={userData.doctorGender} onChange={postUserData}/>
          <input type="number" id="expected-consultation-fees" name='doctorFee' placeholder=" consultation fees" required value={userData.doctorFee} onChange={postUserData}/>
          <button type='submit' onClick={submitData} id='submit-button'>submit</button>
        </form>

        </div>
      
    </div>
    </>
  )
}

export default FormDetails;
