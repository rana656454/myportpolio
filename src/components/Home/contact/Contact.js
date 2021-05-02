import React from 'react';
import './contact.css'
import {useForm} from 'react-hook-form'
import * as FaIcons from 'react-icons/fa'
import * as GiIcons from 'react-icons/gi'
import ContactCard from './contactcard/ContactCard';
import emailjs from 'emailjs-com';


const ContactInfo = [

    {
        name:'Office Address',
        ref:'Mohammadpur, Dhaka',
        icon:<GiIcons.GiWorld />
    },
  
    {
        name:'Email',
        ref:'ranamd1993@gmail.com',
        icon:<FaIcons.FaMailBulk />
    },
    {
        name:'Phone',
        icon:<FaIcons.FaPhone /> ,
        ref:'01771656454'
    }
]

const Contact = () => {

  
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const sendmail = (e) =>{
      e.preventDefault();     
    emailjs.sendForm('service_pg2zstb', 'template_bs96pgy', e.target, 'user_9gHFPqLAr5FRbidCdIskz')
    .then((result) => {
        console.log(result.text);

        alert('mail send sucess fully')
        e.target.reset()
    }, (error) => {
        console.log(error.text);
    });
   

    }

    return (
        <div className="contact-section" id="contact">
            <h1 className="text-white">this is contact form</h1>
            <div className="container">
            <div className="row pb-5">
             
             <div className="col-md-7">
              <div className="contact-form">
              <h1 className="form-heading">Get In Touch</h1>
              <form action="" onSubmit={sendmail}>
        <div className="row">
        <div className="col-md-6">
        <input type="text" id="fname" name="fname" {...register("fname",{required:true})} required placeholder="First Name" className="inp1"  /> 
        </div>
        <div className="form-group col-md-6">
        <input type="text" id="fname" name="lname" {...register("fname",{required:true})} required placeholder="First Name" className="inp1"  />       
        </div>

        <div className="form-group col-md-12">
        <input className="inp1" id="email" name="email" {...register("email",{required:true})} placeholder="Your Email" rows="5" />
      </div>

      <div className="form-group col-md-12">
        <input className="inp1" id="subject" name="subject" {...register("subjcet",{required:true})} placeholder="Email Subject" rows="5" />
      </div>

      <div className="form-group col-md-12">
        <textarea className="inp1" id="message" name="message" {...register("message",{required:true})} placeholder="Your Message" rows="5" />
      </div>
      <div className="form-group col-md-12">
        <input type="submit" value="Send Message" id="submit" name="event" className="inp-btn"  />
      </div>

      </div>

        </form>
              </div>
             </div>

             <div className="col-md-5">
               <div className="row">
           {
               ContactInfo.map(info=><ContactCard info={info}></ContactCard>)
           }
               </div>
             </div>
             
            </div>

            </div>
            
        </div>
    );
};

export default Contact;