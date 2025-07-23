import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-white text-black">
      <nav style={{ marginBottom: "30px" }}>
        <Link to="/" style={{ marginRight: "20px" }}>
          Loader
        </Link>
        <Link to="/home" style={{ marginRight: "20px" }}>
          Home
        </Link>
        <Link to="/about" style={{ marginRight: "20px" }}>
          About
        </Link>
      </nav>
      <h1>Contact Us</h1>
      <p>Get in touch with the Fokus team!</p>
      <form>
        <div style={{ marginBottom: "20px" }}>
          <label>Name: </label>
          <input type="text" />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label>Email: </label>
          <input type="email" />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label>Message: </label>
          <textarea></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};
export default Contact;
