import React from 'react';
import './contact.css';


const ContactFirebase = () => {
    return (
        <>
            <div className="container">
                <div className="text">Contact us Form</div>
                <form action="#">
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" required/>
                            <div className="underline"></div>
                            <label for="">First Name</label>
                        </div>
                        <div className="input-data">
                            <input type="text" required/>
                            <div className="underline"></div>
                            <label for="">Last Name</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" required/>
                            <div className="underline"></div>
                            <label for="">Email Address</label>
                        </div>
                        <div className="input-data">
                            <input type="text" required/>
                            <div className="underline"></div>
                            <label for="">Website Name</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data textarea">
                            <textarea rows="8" cols="80" required></textarea>
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