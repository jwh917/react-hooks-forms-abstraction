import React, { useState } from "react";

// function Form() {
//   const [firstName, setFirstName] = useState("John");
//   const [lastName, setLastName] = useState("Henry");

//   function handleFirstNameChange(event) {
//     setFirstName(event.target.value);
//   }

//   function handleLastNameChange(event) {
//     setLastName(event.target.value);
//   }

//   return (
//     <form>
//       <input type="text" onChange={handleFirstNameChange} value={firstName} />
//       <input type="text" onChange={handleLastNameChange} value={lastName} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }


function Form() {
  const [formData, setFormData] = useState({
    firstName: "Sylvia",
    lastName: "Woods",
    admin: false,
    submittedData: [{firstName: "Julien" , lastName: "Henry", ifChecked: "✔️"}]
  });

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    // use `checked` property of checkboxes instead of `value`
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let check
    if(formData.admin){
      check = "✔️"
    }
    else check = ""

    setFormData({
      firstName: "",
      lastName: "",
      admin: false,
      submittedData: [...formData.submittedData, {firstName: formData.firstName, lastName: formData.lastName, ifChecked: check}]
      });

  }

  const listOfSubmissions = formData.submittedData.map((data, index) => { 
    return (
      <div key={index}>
        {data.firstName} {data.lastName} {data.ifChecked}
      </div>
    );
  });

  function AfterSubmit(){
    return(
      <div>
        <h3>Submissions</h3>
        {listOfSubmissions}
      </div>
    )
  }

  

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />
      <button type="submit">Submit</button>
      <AfterSubmit />
    </form>
    </div>
  );
}

export default Form;
