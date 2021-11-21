import React from 'react';
import { useState } from 'react/cjs/react.development';
import './contact.css';


const ContactFirebase = () => {

    const[user,setUser] = useState({
        first:"",
        last:"",
        email:"",
        phone:"",
        message:""
    });
    var name, value;

    const getUserData = (event) =>{
        name=event.target.name;
        value=event.target.value;
        setUser({...user, [name]: value});
    }


    return (
        <>
            <div className="container">
                <div className="text">Contact us Form</div>
                <form action="#">
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" name="first" value={user.first} onChange={getUserData} />
                            <div className="underline"></div>
                            <label for="">First Name</label>
                        </div>
                        <div className="input-data">
                            <input type="text" name="last" value={user.last} onChange={getUserData} />
                            <div className="underline"></div>
                            <label for="">Last Name</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" name="email" value={user.email} onChange={getUserData} />
                            <div className="underline"></div>
                            <label for="">Email Address</label>
                        </div>
                        <div className="input-data">
                            <input type="text" name="phone" value={user.phone} onChange={getUserData} />
                            <div className="underline"></div>
                            <label for="">Phone Number</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data textarea">
                            <textarea rows="8" cols="80" name="message" value={user.message} onChange={getUserData}></textarea>
                            <br />
                            <div className="underline"></div>
                            <label for="">Write your message</label>
                            <br />
                            <div className="form-row submit-btn">
                                <div className="input-data">
                                    <div className="inner"></div>
                                    <input type="submit" value="submit"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>

    );
}

export default ContactFirebase;