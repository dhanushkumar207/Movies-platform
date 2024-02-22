// Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className='contact'>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or concerns, feel free to reach out to us. We'd
        love to hear from you!
      </p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Type your message here..."
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
         