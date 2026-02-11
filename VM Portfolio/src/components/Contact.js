import React, { useState } from 'react';

function Contact() {
  const [result, setResult] = useState("");
  const [ setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.REACT_APP_WEB3FORMS_ACCESS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        console.log("Error", res);
        setResult("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error", error);
      setResult("Oops! Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="form-card">
        <div className="text-center">
          <h1 className="form-title">Contact Us</h1>
          <p className="form-description">
            Fill up the form below to send us a message.
          </p>
        </div>
        <div className="form-content">
          <form onSubmit={onSubmit} id="form">
            <input
              type="hidden"
              name="access_key"
              value="e210a44a-438c-4d8a-8a3f-7f9dd4363522"
            />
            <input
              type="hidden"
              name="subject"
              value="New Submission from Web3Forms"
            />
            <input
              type="checkbox"
              name="botcheck"
              id=""
              style={{ display: "none" }}
            />

            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Vaibhav Maurya"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="xyz@gmail.com"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="+91 7021587454"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea
                rows="5"
                name="message"
                id="message"
                placeholder="Your Message"
                className="form-textarea"
                required
              ></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="form-button">Send Message</button>
            </div>
            <p className="form-result" id="result">{result}</p>
          </form>
        </div>
      </div>
    </section>
  );
}


export default Contact;
