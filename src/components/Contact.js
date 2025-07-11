import React, { useState } from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
    const [showPopup, setShowPopup] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = document.getElementById('subject').value || "";
        const message =  document.getElementById('message').value;

        if(!message){
            alert("Please Type a message");
            return;
        }

        const emailID = "gauravheera001@gmail.com";
        const mailtolink = `mailto:${emailID}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

        setShowPopup(true);

        setTimeout(() => {
            window.location = mailtolink;

            document.getElementById('subject').value = "";
            document.getElementById('message').value = "";

            setShowPopup(false);

        }, 2000);
    }

    return(

        <div className="contact page" data-page="contact">

            <Helmet>
                <title>Let's Connect</title>
                <meta name="description" content="Get in touch with Gaurav Heera—React.js developer and full-stack learner. Reach out for collaborations, portfolio inquiries, or mentorship opportunities."></meta>
            </Helmet>

            <h1>Drop me an E-mail</h1>

            <form onSubmit={handleSubmit} className="contact-form">

                <input type="text" name="subject" id="subject" className="subject" placeholder="Subject (Optional)"/>

                <textarea name="message" className="message" id="message" placeholder="Type Your Message Here" cols="5"></textarea>

                <button className="mail-send" type="submit">Send Mail</button>
            
            </form>

            {showPopup && (
                <div className="contact-popup">
                    <p>Redirecting to your E-mail client...</p>
                </div>
            )}

        </div>
    );
}
export default Contact;