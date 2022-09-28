import './App.css';
import Header from './components/Header'


// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
import ContactForm from './components/ContactForm'
import Contact from './components/Contact';
import { useState } from 'react';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list
  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contacts, setContacts] = useState(contactsJSON);

  return (
    <div className="App">
      <Header />

      <ContactForm />
      <Contact data = {contacts} />


    </div>
  );
};

export default App;
