// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import {
    Button,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
  } from '@mui/material';
  import ListItemAvatar from '@mui/material/ListItemAvatar';
  import Avatar from '@mui/material/Avatar';

  
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = (data) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
    <>
    <Table sx={{ maxWidth: 650 }}>
      <TableHead>
        <TableRow>
         
          <TableCell>Name</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Email</TableCell>

          <TableCell>Photo</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {/* Asumsi nama props adalah todos */}
        {data.contacts.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell>{todo.name}</TableCell>
            <TableCell>{todo.phone}</TableCell>
            <TableCell>{todo.email}</TableCell>
            <TableCell><ListItemAvatar>
          <Avatar alt="Remy Sharp" src={todo.photo}/>
        </ListItemAvatar></TableCell>


          </TableRow>
        ))}
      </TableBody>
    </Table>

    </>
    );
};

export default Contact;
