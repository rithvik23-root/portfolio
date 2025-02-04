import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/contact.css";
import emailjs from "emailjs-com";

export default function ContactComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(false);
  function buttonSubmit(e) {
    e.preventDefault();
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(() => {
        setStatus(true);
      })
      .catch((err) => {
        console.log(err);
      });
    setStatus(true);

    setFormData({ name: "", email: "", message: "" });
  }
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <div className="contact-div">
      <h1 className="heading">Contact Me</h1>
      {status ? <p className="stmsg">Message Sent!</p> : ""}
      <form className="form-div" autoComplete="off">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          autoComplete="off"
          onChange={handleChange}
          
        ></input>
        <input
          autoComplete="off"
          type="text"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
        ></input>
        <textarea
          autoComplete="off"
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button onClick={buttonSubmit} className="learn-bt ct">
          Submit
        </button>
      </form>
    </div>
  );
}
