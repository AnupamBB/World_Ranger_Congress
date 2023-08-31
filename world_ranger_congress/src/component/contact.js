import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery library if not already imported
import './contact.css';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import TextField from '@mui/material/TextField';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import AddIcCallRoundedIcon from '@mui/icons-material/AddIcCallRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import Button from '@mui/material/Button';



let lastScrollTop = 0; // Define lastScrollTop here
let e; // Define e here

function Contact() {
  useEffect(() => {
    const roadLength = $(".road").width();
    $("body").css("height", roadLength);

    $(window).scroll(function () {
      const wWidth = $(window).width();
      const wHeight = $(window).height();
      const scrollTop = $(window).scrollTop();
      const dHeight = $("body").height() - wHeight;
      const wRoad = roadLength - wWidth;
      const step = wRoad / dHeight;
      const goLeft = scrollTop * step;

      $(".road").css({ transform: "translateX(-" + goLeft + "px)" });

      clearTimeout($.data(this, "scrollCheck"));

      $.data(this, "scrollCheck", setTimeout(function () {
        $(".character").removeClass("walking");
      }, 100));

      if (scrollTop > lastScrollTop) {
        $(".character").removeClass("left");
        $(".character").addClass("walking");
      } else {
        $(".character").addClass("left");
        $(".character").addClass("walking");
      }

      lastScrollTop = scrollTop;

      $(".top").text(scrollTop);

      if (scrollTop > 100) {
        $(".road1").addClass("show");
      }
    });

    $(document).keydown(function (event) {
      e = event; // Capture the event object
      if (e.which === 39) { // Use e.which instead of e.width
        const scrollTop = $(document).scrollTop();
        $(window).scrollTop(scrollTop + 50);
      }
      if (e.which === 37) { // Use e.which instead of e.width
        const scrollTop = $(document).scrollTop();
        $(window).scrollTop(scrollTop - 50);
      }
    });
  }, []);

  return (
    <div>
        <div className="rightImage"> </div>
        <div className="leftImage"> </div>
      <div className="road">
        <div className="container road1">
        <div className='textContainer'>
                <div className='textHeading'>
                    <p>Please do not hesitate to contact us if you </p>
                    <p>haveany questions about the Forum</p>
                    <p>We are here to assist you.</p>
                </div>
                <div className='contactDataContainer'> <MailOutlineRoundedIcon className='icons'/>  aaaaaaaaaaaaa@gmail.com </div>
                <div className='contactDataContainer'> <AddIcCallRoundedIcon className='icons'/> +91-361-2230250 </div>
                <div className='contactDataContainer'> <LocationOnRoundedIcon  className='icons'/> Tezpur, Assam </div>
            </div>
        </div>
        <div className="container road2">
            <form className='form'>
                <div className='formContent'>
                    <input className='name' type="text" name="name" placeholder='Name' />
                    <input className='email' type="text" name="email" placeholder='Email'/>
                    <textarea className='message' name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
                    <button className='submitButton'>Submit here</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
