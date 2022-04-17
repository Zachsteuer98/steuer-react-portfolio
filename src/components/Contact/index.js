import React, { useState } from 'react';

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    var confirm;
    if(formState.name === '') {
        confirm = <ConfirmName /> 
    } 
    else if (formState.email === ''){
        confirm = <div>please verify you entered your email</div>
    }
    else if (formState.message === '') {
        confirm = <div>Please enter a message</div>
    }
    else {
        confirm =<div>Ready To Send</div>
    }

    const { name, email, message } = formState;

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
      }
    
      
    //   console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }
    return (
        <section>
            <div className="center-contact">
                <h1 className="title-contact">Contact me</h1>
                <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" defaultValue={name} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email address:</label>
                        <input type="email" name="email" defaultValue={email} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" rows="5" defaultValue={message} onChange= {handleChange} />
                    </div>
                    {confirm}
                    <button type="submit" className= "btn btn-info col-sm-4">Submit</button>
                </form>
            </div>
        </section>
    )
}

function ConfirmName() {
    return (
        <div>Please enter a Name into the field</div>
    )
}

export default Contact