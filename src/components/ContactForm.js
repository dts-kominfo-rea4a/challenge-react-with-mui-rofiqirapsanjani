import React, {useState} from 'react'
import { TextField } from '@mui/material';
;
// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

const ContactForm = (props) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        phonenumber: "",
        url: ""
      });




  // ini adalah fungsi yang digunakan untuk melihat perubahan nilai
  // dari input text

  // ini adalah fungsi untuk submit form
  // perhatikan di sini ada menggunakan props.propsSubmitHandler
  // yang merupakan suatu fungsi (bisa di-invoke)

    const handleSubmit = (event) => {
        // prevents the submit button from refreshing the page
        event.preventDefault();
        console.log(contactInfo);
        setContactInfo({ name: "", email: "", phonenumber: "", url: "" });
      };
      const handleChange = (event) => {
        setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
      };

    const addContact = (contact) => {

        const objContact ={

        }
    }

    return (
        <>
         <form onSubmit={handleSubmit}>
        <div>
          <h3>Contact Form</h3>
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={contactInfo.name}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}

            value={contactInfo.email}
          />
        </div>
        <div>
          <input
            type="number"
            name="phonenumber"
            placeholder="Phone Number"
            onChange={handleChange}

            value={contactInfo.phonenumber}
          />
        </div>
        <div>
          <input
            type="text"
            name="url"
            onChange={handleChange}

            placeholder="photo URL"
            value={contactInfo.url}
          />
        </div>
        <div>
          <button>Submit Contact</button>
        </div>
      </form>
        </>
    );
}

export default ContactForm;