import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";


const Contacts = () => {
   const [successMessage, setSuccessMessage] = useState("");
   const { register, handleSubmit, formState: { errors } } = useForm();

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
            description: data.description,
         }, 
         userID
         )

      reset.target.reset()
   }

   function sendEmail(serviceID, templateID, variables, userID) {
  
      emailjs.send(serviceID, templateID, variables, userID)
      .then((res) => {
         setSuccessMessage("Form sent successfully!")
         console.log(res)
      }).catch(err => console.error(`Something went wrong. ${err}`));
   }


   return (
      <div className="contacts">
         <div className="text-center">
            <h1>Contact Me</h1>
            <p>Please fill out each field in the form to contact me directly!</p>
            <span className="success-message">
               {successMessage}
            </span>
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
                           {...register("name", {
                                 required: "Please enter your name",
                                 maxLength: {
                                    value: 25,
                                    message: "Please enter a name with fewer than 25 characters"
                                 }
                              })
                           }
                        /> 
                        <div className="line"></div>
                        <span className="errors-message">{errors.name && errors.name.message}</span>
                     </div>
                     {/* phone input */}
                     <div className="text-center">
                        <input 
                           type="text"
                           className="form-control"
                           placeholder="Phone Number"
                           name="phone"
                           {...register("phone", {
                                 required: "Please add your phone number",
                              })
                           }
                        /> 
                        <div className="line"></div>
                        <span className="errors-message">{errors.phone && errors.phone.message}</span>
                     </div>
                     {/* email input */}
                     <div className="text-center">
                        <input 
                           type="email"
                           className="form-control"
                           placeholder="Email address"
                           name="email"
                           {...register("email", {
                                 required: "Please provide a valid email address",
                                 pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                 }
                              })
                           }
                        /> 
                        <div className="line"></div>
                        <span className="errors-message">{errors.email && errors.email.message}</span>
                     </div>
                     {/* subject input */}
                     <div className="text-center">
                        <input 
                           type="text"
                           className="form-control"
                           placeholder="Subject"
                           name="subject"
                           {...register("subject", {
                                 required: "Please enter a subject line for your message",
                              })
                           }
                        /> 
                        <div className="line"></div>
                        <span className="errors-message">{errors.subject && errors.subject.message}</span>
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
                           {...register("description", {
                                 required: "Please include a message regarding the subject matter",
                              })
                           }
                        ></textarea>
                        <div className="line"></div>
                        <span className="errors-message">{errors.description && errors.description.message}</span>
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
