import * as React from 'react';
import './contact.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import AddIcCallRoundedIcon from '@mui/icons-material/AddIcCallRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

export default function Contact() {
  

  return (
        <div className='container'>
            <div className='textContainer'>
                <div className='textHeading'>
                    Please do not hesitate to contact us if you have any questions about the Forum
                    We are here to assist you.
                </div>
                <div className='contactDataContainer'> <MailOutlineRoundedIcon className='icons'/>  aaaaaaaaaaaaa@gmail.com </div>
                <div className='contactDataContainer'> <AddIcCallRoundedIcon className='icons'/> +91-361-2230250 </div>
                <div className='contactDataContainer'> <LocationOnRoundedIcon  className='icons'/> Tezpur, Assam </div>
            </div>
            <div>
                <Box
                    component="form"
                    sx={{
                      '& > :not(style)': { m: 1, width: '55ch' },
                    }}
                    

                    className='textFieldContainer'
                    noValidate
                    autoComplete="off"
                >
                    <TextField className='textField' id="outlined-basic" label="Name" variant="outlined" bgcolor= "text.primary" />
                    <TextField className='textField' id="outlined-basic" label="Email" variant="outlined" />
                    <TextField className='textField' id="outlined-basic" label="Subject" variant="outlined" />
                    <TextField
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows={4}
                        
                    />
                    <Button className='submitButton' variant="contained" size="medium">
                        SUBMIT
                    </Button>

                </Box>
            </div>
        </div>
  );
}