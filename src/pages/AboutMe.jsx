import React, { useState, useEffect } from 'react';
import avatar from '../assets/images/avatar.png'
import '../App.css';
import { Link,useLocation } from 'react-router-dom'

export default function AboutMe() {
    const currentPage = useLocation().pathname;

    return (
        <div>
            <div className='align-items-center d-flex justify-content-center'>
                <div className='text-center'>


                    <div className='d-flex justify-content-center'>
                    <img src={avatar} className="rounded-circle slide-in-blurred-top" height="200" width="200" alt="Sebastian avatar"></img>
                    </div>
                    
                    <h1 className='slide-in-blurred-top poppins-regular' style={{ fontSize: '4rem' }} >What's Up! My name's Sebastian Saenz.</h1>

                    <div className='nav-container justify-content-center'>
                        <ul className='nav poppins-light'>
                            <li className='footer-link'>
                                <Link 
                                    to = "/Bio"
                                    className={`nav-color ${currentPage === '/Bio' ? 'bio-link active' : 'bio-link'}`}

                                >
                                    Get to know me!
                                </Link>
                            </li>
                        </ul>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}
