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
  //  ================== function for use data input =============================
  const handleChange=(e)=>{
    const {name,value}=e.target
    setFormData({...formData,[name]:value})
  }
  //  ======================== function for submit of form ==============================
const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(formData)

}

  return (
    // ===================  code for contact form =========================
    <section className="contact-container">
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
          <input name="name" value={formData.name}       onChange={handleChange}   type="text" placeholder=" name.."></input>
          <input  name="email" value={formData.email}    onChange={handleChange}    type="email"  placeholder="email.."></input>
          <input name="subject" value={formData.subject}   onChange={handleChange}   type="subject" placeholder="subject.."></input>
        </section>
        <section>
          <textarea  name="message" value={formData.message} onChange={handleChange}  placeholder="write your message...."></textarea>
        </section>
         </div>
         <button  type="submit" className="btn">Send Message</button>
       </form>
      </div>
      
    </section>
  );
}

export default Contact;
