import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";


const Contacts = () => {
   const [successMessage, setSuccessMessage] = useState("");
   const { register, handleSubmit, errors } = useForm();

   const serviceID = "service_ID";
   const templateID = "template_ID";
   const userID = "user_vSj9S8Hlk2B8gzayUG4e1"

   const onSubmit = (data, reset) => {
      sendEmail(
         serviceID, 
         templateID, 
         { 
            name: data.name, 
            phone: data.phone, 
            email: data.email, 
            subject: data.subject, 
            description: data.description
         }, 
         userID
         )

      reset.target.reset()
   }

   function sendEmail(serviceID, templateID, variables, userID) {
  
      emailjs.send(serviceID, templateID, variables, userID)
      .then(() => {
         setSuccessMessage("Form sent successfully!")
      }).catch(err => console.error(`Something went wrong. ${err}`));
   }


   return (
      <div className="contacts">
         <div className="text-center">
            <h1>Contact Me</h1>
            <p>Please fill out the form to contact me directly</p>
         </div>
         <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="row">
                  <div className="col-md-6 col-xs-12">
                     {/* name input */}
                     <div className="text-center">
                        <input 
                           type="text"
                           className="form-control"
                           placeholder="Name"
                           name="name"
                           ref = {
                              register({
                                  required: "Please enter your name",
                                  maxLength: {
                                      value: 25,
                                      message: "Please enter a name with fewer than 25 characters"
                                  }
                              })
                          }
                        /> 
                        <div className="line"></div>
                     </div>
                     <span className="error-messages">
                        {errors.name && errors.name.message}
                     </span>
                     {/* phone input */}
                     <div className="text-center">
                        <input 
                           type="text"
                           className="form-control"
                           placeholder="Phone Number"
                           name="phone"
                        /> 
                        <div className="line"></div>
                     </div>
                     {/* email input */}
                     <div className="text-center">
                        <input 
                           type="email"
                           className="form-control"
                           placeholder="Email address"
                           name="email"
                        /> 
                        <div className="line"></div>
                     </div>
                     {/* subject input */}
                     <div className="text-center">
                        <input 
                           type="text"
                           className="form-control"
                           placeholder="Subject"
                           name="subject"
                        /> 
                        <div className="line"></div>
                     </div>
                  </div>
                  <div className="col-md-6 col-xs-12">
                     {/* message input */}
                     <div className="text-center">
                        <textarea
                           type="text"
                           className="form-control"
                           placeholder="Leave message here..."
                           name="description"
                        ></textarea>
                        <div className="line"></div>
                     </div>
                     <button className="btn-main-offer contact-btn">Contact Me</button>
                  </div>
               </div>
            </form>
         </div>
      </div>
   )
}

export default Contacts;
