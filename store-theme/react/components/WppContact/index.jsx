import React from 'react';

import "./wpp.css";

const WppContact = () => {

  const svgStyle = {
    width: "70px",
  };

  const wppStyle = {
    position: "fixed",
    right: "2rem",
    bottom: "2rem",
  };


  return (
    <>
      <div className="wpp-contact" style={wppStyle}>
        <div className="img-wpp">
          <a href="https://api.whatsapp.com/send?l=pt_br&phone=5545991470404" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" style={svgStyle}><path fill="#61b260" d="M66.2 13.2c3.6 3.6 6.3 7.6 8.3 12.1 1.9 4.5 2.9 9.2 2.9 14.1 0 6.7-1.7 12.8-5.1 18.5s-8 10.1-13.7 13.4c-5.7 3.3-11.9 5-18.6 5-6.3 0-12.2-1.5-17.7-4.5L2.7 77 8 57.8C4.7 52.2 3 46 3 39.3s1.7-12.8 5-18.5 7.8-10.2 13.5-13.5 11.8-5 18.5-5c4.9 0 9.6.9 14.1 2.8s8.5 4.6 12.1 8.1z"/><path fill="#fff" d="M62.9 16.5c3.1 3.1 5.5 6.6 7.2 10.6 1.7 3.9 2.6 8 2.6 12.3 0 5.8-1.5 11.2-4.4 16.2s-7 8.9-12 11.8-10.5 4.4-16.3 4.4c-5.5 0-10.7-1.3-15.5-3.9L7.3 72.3 12 55.6c-2.9-5-4.4-10.4-4.4-16.2S9.1 28.1 12 23.2s6.9-8.9 11.8-11.8S34.2 7 40 7c4.3 0 8.4.8 12.3 2.5s7.5 4 10.6 7zM40 66.4c4.9 0 9.4-1.2 13.6-3.6s7.5-5.7 10-9.8c2.5-4.1 3.7-8.6 3.7-13.5 0-3.5-.7-6.9-2.2-10.2-1.5-3.3-3.5-6.2-6.1-8.8s-5.5-4.5-8.8-5.9-6.7-2-10.3-2c-4.9 0-9.4 1.2-13.5 3.6S19 21.9 16.6 26 13 34.5 13 39.4c0 5.2 1.4 9.9 4.2 14.3l.6 1-2.8 9.9L25.3 62l1 .6c4.2 2.5 8.7 3.8 13.7 3.8zm14.7-20.3l.4.3c.7.3 1.1.5 1.2.7.1.2.1.7.1 1.5s-.2 1.6-.6 2.4c-.3.8-1.1 1.7-2.3 2.5-1.2.8-2.3 1.3-3.1 1.4-1.4.2-2.7.2-3.9 0-1.5-.3-3.4-1-5.8-2-5-2.1-9.5-6.1-13.6-12l-.3-.3c-2.1-3-3.2-5.8-3.2-8.3 0-2.5.9-4.7 2.6-6.6l.1-.1c.7-.7 1.4-1 2.2-1h1.8c.4 0 .7.1.9.2s.5.5.7 1.1l2.5 6c.3.6.3 1.1.1 1.5-.5 1-1.1 1.8-1.9 2.6-.4.4-.6.7-.7.9-.1.2 0 .5.3.8 1.4 2.5 3 4.5 4.8 6 1.4 1.1 3.4 2.3 6.1 3.6.8.4 1.4.3 1.8-.1 1.3-1.5 2.1-2.5 2.6-3.2.2-.4.4-.6.7-.6.3 0 .6 0 1 .1.8.3 2.6 1.1 5.5 2.6z"/></svg>
          </a>
        </div>
      </div>
    </>
  )
}
  
export default WppContact