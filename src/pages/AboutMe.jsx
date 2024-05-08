import React, { useState, useEffect } from 'react';
import avatar from '../assets/images/avatar.png'
import '../App.css';

export default function AboutMe() {

    return (
        <div>
            <div className='align-items-center d-flex justify-content-center vh-100'>
                <div className='text-center'>
                    <h1 className='slide-in-blurred-top jaro-title' style={{ fontSize: '4rem'}} >What's Up! My name is Sebastian Saenz</h1>
                    <p className='slide-in-blurred-top jaro-title' style={{ animationDelay: '0.5s', fontSize:'1rem' }}>
                        After 8 long years in hospitality, I am attempting to make a career change into the tech field.
                        Take a peruse to learn a little more about me.


                    </p>
                </div>
            </div>


            {/* <div className='d-flex justify-content-center'> */}
            {/* recent avatar */}
            {/* <img src={avatar} className="rounded-circle" height="200" width="200" alt="Sebastian avatar"></img>
            </div> */}

        </div>
    );
}
