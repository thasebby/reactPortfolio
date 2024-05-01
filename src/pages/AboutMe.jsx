import React, { useState, useEffect } from 'react';
import avatar from '../assets/images/avatar.png'

export default function AboutMe() {

    return (
        <div>
            <div className='row justify-content-center'>
                <h1 className='text-center border-bottom'>About Page</h1>
            </div>

            <div className='d-flex justify-content-center'>
                {/* recent avatar */}
                <img src={avatar} className="rounded-circle" height="200" width="200" alt="Sebastian avatar"></img>
            </div>

            <div>
                {/* short bio */}
                <p className='text-center'>
                    Welcome to my Portfolio! My name's Sebastian Saenz. I have been in the hospitality industry for 8 years, moving from cooking in
                    the back to my current bartending career. I've worked at sports bars, speakeasies and jazz bars and have experienced everything in between.
                    I've recently embarked on this 6 month journey to change career fields and am proud to say that I've made it!

                </p>
            </div>
        </div>
    );
}
