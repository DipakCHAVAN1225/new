import { useState } from "react";
import "./contact.css";
function Contact() {
  // ============================ useState for handling user data ======================= 
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    subject:"",
    message:"",
  })
  const [showPopup, setShowPopup] = useState(false);
  //  ================== function for use data input =============================
  const handleChange=(e)=>{
    const {name,value}=e.target
    setFormData({...formData,[name]:value})
  }
  //  ======================== function for submit of form ==============================
const handleSubmit=(e)=>{

  fetch('https://sheetdb.io/api/v1/g2hk8hj79ymzx', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        data: [
            {
                'name': formData.name,
                'email': formData.email,
                'subject': formData.subject,
                'message':formData.message
            }
        ]
    })
}).then((response) => response.json())
.then((data) => console.log(data));




  e.preventDefault()
  console.log(formData);
  setShowPopup(true);
  setFormData({
    name: "",
    email: "",
    subject:"",
    message: "",
  });
  // Hide the popup after 5 seconds
  setTimeout(() => {
    setShowPopup(false);
  }, 5000);

 console.log(formData)
}
 
// const createSheet=()=>{
//   fetch('https://sheetdb.io/api/v1/g2hk8hj79ymzx', {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         data: [
//             {
//                 'name': formData.name,
//                 'email': formData.email,
//                 'subject': formData.subject,
//                 'message':formData.message
//             }
//         ]
//     })
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// }

// const handleSubmit2 = (e) => {
//   e.preventDefault();

//   // Show the popup
//   setShowPopup(true);

//   // Hide the popup after 5 seconds
//   setTimeout(() => {
//     setShowPopup(false);
//   }, 5000);
// };
  return (
    // ===================  code for contact form =========================
    <section className="contact-container" id="contact">
      <h2>CONTACT</h2>
      {/* ================== basic info cards ========================================= */}
      <div className="contact-detail">
        <section className="contact-card">
        <i className="fa-solid fa-phone"></i>
          <strong>Phone</strong>
          <p>9322706604</p>
        </section>
        <section className="contact-card">
        <i className="fa-solid fa-envelope"></i>
        <strong>Email Address</strong>
        <p>dc741094@gmail.com</p>
        </section>
        <section className="contact-card">
        <i className="fa-solid fa-location-dot"></i>
        <strong>Address</strong>
        <p>Jalgaon,Maharashtra</p>
        </section>
      </div>
      {/* ==================== main login form code ======================================== */}
      <div className="contact-form">
       <form onSubmit={handleSubmit}>
         <div className="form">
         <section className="form-input">
          <input name="name" value={formData.name}       onChange={handleChange}   type="text" placeholder=" name.." required></input>
          <input  name="email" value={formData.email}    onChange={handleChange}    type="email"  placeholder="email.." required></input>
          <input name="subject" value={formData.subject}   onChange={handleChange}   type="subject" placeholder="subject.." required></input>
        </section>
        <section>
          <textarea  name="message" value={formData.message} onChange={handleChange}  placeholder="write your message...."></textarea>
        </section>
         </div>
         <button  type="submit" className="btn">Send Message</button>
         {/*================================= login for showing the Pop Up ======================= */}
         {showPopup && (
        <div className="fixed bottom-5 w-1/3 right-5 bg-green-500 text-white p-4 rounded-lg flex flex-col gap-5 items-center shadow-lg animate-slideIn">
        
          <span className="text-2xl"><video src="/Tick.mp4" autoPlay loop height="100px" width="100px"></video></span>
          <span className="text-4xl">Thank you </span>
          <span className="ml-2 text-lg">Your form submitted successfully!
          </span>
        
        </div>
      )}
       </form>
      </div>
      
    </section>
  );
}

export default Contact;
