import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <section id="contact">
      {" "}
      <div className="page-title">
        <h1>CONTACT</h1>
        <span>Drop Your Message!</span>
      </div>
      <div>
        <form className="contact-form">
          <div style={{ marginBottom: "20px" }}>
            <input placeholder="Name" />

            <input placeholder="Email" />
          </div>
          <div>
            <textarea rows="3" placeholder="Write Message ....." />
          </div>
        </form>
      </div>
    </section>
  );
};
