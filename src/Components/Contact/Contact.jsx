// import React from 'react'
// import './Contact.css'
// import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

// const Contact = () => {

//   const onSubmit = async (event) => {
//     event.preventDefault()

//     const formData = new FormData(event.target)
//     formData.append("access_key","90c118f3-b721-4aba-9fb1-520bc802beba")

//     const response = await fetch(
//       "https://api.web3forms.com/submit",
//       {
//         method: "POST",
//         body: formData
//       }
//     )

//     const data = await response.json()

//     if(data.success){
//       alert("Message sent successfully!")
//       event.target.reset()
//     } else {
//       alert("Something went wrong")
//     }
//   }

//   return (
//     <section id='contact' className='contact-section'>
//       <div className='container'>

//         <div className='contact'>

//           {/* LEFT SIDE */}
//           <div className='contact-left'>

//             <h2>Let’s Work Together</h2>

//             <p>
//               I’m currently open to freelance projects, internships,
//               and full-time opportunities. If you’re looking for a 
//               passionate MERN Stack Developer who loves building 
//               clean and modern web apps — let’s connect.
//             </p>

//             <div className='contact-info'>
//               <div className='info-item'>
//                 <FaEnvelope className="icon" />
//                 <span>vaishnavikolekar1615@gmail.com</span>
//               </div>

//               <div className='info-item'>
//                 <FaPhone className="icon" />
//                 <span>+91 7400432180</span>
//               </div>

//               <div className='info-item'>
//                 <FaMapMarkerAlt className="icon" />
//                 <span>Panvel, Navi Mumbai</span>
//               </div>
//             </div>

//           </div>

//           {/* RIGHT SIDE FORM */}
//           <form onSubmit={onSubmit} className='contact-form'>

//             <input 
//               type='text' 
//               name='name'
//               placeholder='Your Name' 
//               required 
//             />

//             <input 
//               type='email' 
//               name='email'
//               placeholder='Your Email' 
//               required 
//             />

//             <textarea 
//               name='message'
//               rows='6'
//               placeholder='Your Message'
//               required
//             />

//             <button type='submit'>
//               Send Message
//             </button>

//           </form>

//         </div>

//       </div>
//     </section>
//   )
// }

// export default Contact


import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">

        <div className="contact">

          <div className="contact-left">

            <h2>Let’s Work Together</h2>

            <p>
              I’m currently open to internships, freelance projects,
              and full-time opportunities. If you're looking for a
              passionate MERN Stack Developer who enjoys building
              modern and responsive web applications, feel free to
              reach out.
            </p>

            <div className="contact-info">

              <div className="info-item">
                <FaEnvelope className="icon" />
                <span>vaishnavikolekar1615@gmail.com</span>
              </div>

              <div className="info-item">
                <FaPhone className="icon" />
                <span>+91 7400432180</span>
              </div>

              <div className="info-item">
                <FaMapMarkerAlt className="icon" />
                <span>Panvel, Navi Mumbai</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;