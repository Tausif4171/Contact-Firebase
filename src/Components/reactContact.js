import React from 'react';
import { useState } from 'react/cjs/react.development';
import './contact.css';


const ContactFirebase = () => {

    const [user, setUser] = useState({
        first: "",
        last: "",
        email: "",
        phone: "",
        message: ""
    });
    var name, value;

    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value });
    }

    const postData = async (e) => {
        e.preventDefault();
        //here we have done destructuring 
        const { first, last, email, phone, message } = user;
        if (first && last && email && phone && message) {
            const res = await fetch(
                "https://contact-firebase-3eaaf-default-rtdb.firebaseio.com/contact-firebase.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "Application/json",
                    },
                    body: JSON.stringify({
                        first,
                        last,
                        email,
                        phone,
                        message
                    })
                }
            );
            if (res) {
                setUser({
                    first: "",
                    last: "",
                    email: "",
                    phone: "",
                    message: ""
                });
                alert("Form Data Stored Successfully");
            }
        }
        else {
            alert("Please Fill all Data!!");
        }

    }

    return (
        <>
            <div className="container">
                <div className="text">Contact us Form</div>
                <form action="#" method="POST">
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" name="first" value={user.first} onChange={getUserData} autoComplete="on" />
                            <div className="underline"></div>
                            <label for="">First Name</label>
                        </div>
                        <div className="input-data">
                            <input type="text" name="last" value={user.last} onChange={getUserData} autoComplete="on" />
                            <div className="underline"></div>
                            <label for="">Last Name</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" name="email" value={user.email} onChange={getUserData} autoComplete="on" />
                            <div className="underline"></div>
                            <label for="">Email Address</label>
                        </div>
                        <div className="input-data">
                            <input type="text" name="phone" value={user.phone} onChange={getUserData} autoComplete="on" />
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
                            <div className="form-row submit-btn" onClick={postData}>
                                <div className="input-data">
                                    <div className="inner"></div>
                                    <input type="submit" value="submit" autoComplete="on" />
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