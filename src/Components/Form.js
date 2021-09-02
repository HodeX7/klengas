import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Form.css";
function Form() {
  const [other, setOther] = useState(false);
  function handler(value) {
    if (value === "other") {
      setOther(!other);
    } else {
      setOther(false);
    }
  }
  const [uploadFile, setUploadFile] = React.useState();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("service_8pvnahf", "template_la5o6ie", e.target, "user_VQjGhLcKQ6F5qXJa7ZBeI")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  }
  return (
    <form className="main" onSubmit={sendEmail}>
      <h6>Full Name: *</h6>
      <input type="text" className="input" name = 'from_name'></input>
      <h6>Email Address: *</h6>
      <input type="text" className="input" name = 'from__mail'></input>
      <h6>Phone Number: *</h6>
      <input type="text" className="input" name = 'from__number'></input>
      <h6>Company Name: *</h6>
      <input type="text" className="input" name = 'from__company'></input>
      <h6>Industry: *</h6>
      <select className="selector" onChange={(e) => handler(e.target.value)} name='from__industry'>
        <option value="Oil and Gas">Oil and Gas</option>
        <option value="Chemical">Chemical</option>
        <option value="Refining">Refining</option>
        <option value="Petrochemical">Petrochemical</option>
        <option value="Industrial">Industrial</option>
        <option value="Food and Beverages">Food and Bevarage</option>
        <option value="other">Others</option>
      </select>
      {other ? (
        <input type="text" className="input" placeholder="Other" name='from__industry'></input>
      ) : (
        ""
      )}
      <h6>Country: *</h6>
      <input type="text" className="input" name='from__country'></input>
      <h6>What can we help you with today? *</h6>
      <input type="text" className="input" name='message'></input>
      <br />
      <input
        type="file"
        style={{ cursor: "pointer" }}
        onChange={(e) => setUploadFile(e.target.files)}
      />
      <br />
      <div className="checkbox">
        <input type="checkbox" style={{ cursor: "pointer" }} />
        <span className="checkbox">
          {" "}
          I accept that the data submitted will be used to contact me for the
          business intended. I understand and agree to the PRIVACY POLICY
        </span>
      </div>
      <p></p>
      <input type='submit' value='Send Message'></input>
    </form>
  );
}

export default Form;
