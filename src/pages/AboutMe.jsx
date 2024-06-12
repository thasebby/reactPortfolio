import React, { useState, useEffect } from 'react';
import avatar from '../assets/images/avatar.png'
import '../App.css';

export default function AboutMe() {

    return (
        <div>
            <div className='align-items-center d-flex justify-content-center'>
                <div className='text-center'>


                    <div className='d-flex justify-content-center'>
                    <img src={avatar} className="rounded-circle" height="200" width="200" alt="Sebastian avatar"></img>
                    </div>
                    
                    <h1 className='slide-in-blurred-top poppins-regular' style={{ fontSize: '4rem' }} >What's Up! My name's Sebastian Saenz.</h1>
                   
                </div>
            </div>


            {/* <div className='d-flex justify-content-center'> */}
            {/* recent avatar */}
            {/* <img src={avatar} className="rounded-circle" height="200" width="200" alt="Sebastian avatar"></img>
            </div> */}

        </div>
    );
}
