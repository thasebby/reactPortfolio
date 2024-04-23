// import 6 images of dev apps
import employeeTracker from '../assets/images/employeeTracker.png'
import noSQL from '../assets/images/noSQLSocialNetwork.png'
import noteTaker from '../assets/images/noteTaker.png'
import planorama from '../assets/images/Planorama.png'
import sipAdvisor from '../assets/images/sipAdvisor.png'
import taskPro from '../assets/images/taskPro.png'

// titled images, links to deployed apps and GitHub repos
export default function Portfolio() {
    return (
        <div className='d-flex flex-wrap justify-content-center container'>
            <h1 className='text-center mb-3 border-bottom'>Sebastian Saenz's Portfolio</h1>

            <div className='card text-center' aria-hidden="true">
                <img src={sipAdvisor} className='card-img-top' alt='Sip Advisor'></img>
                <div className='card-body'>
                    <h2 className='card-title'>
                        sipAdvisor
                    </h2>
                    <p className='card-text'>
                        This application will allow users to look up drinks and give them the recipe to make it
                    </p>
                    <a href='https://github.com/cweinstein36/SipAdvisor_API-Project.git' className='card-link btn btn-primary'>GitHub Link</a>
                    <a href='https://cweinstein36.github.io/SipAdvisor_API-Project/' className='card-link btn btn-primary'>Website Link</a>
                </div>
            </div>

            <div className='card text-center' aria-hidden="true">
                <img src={taskPro} className='card-img-top' alt='TaskPro'></img>
                <div className='card-body'>
                    <h2 className='card-title'>
                        TaskPro
                    </h2>
                    <p className='card-text'>
                        With TaskPro a user can signup as a employee,supervisor and manager. Depending on what they
                        sign up as they will have access to different duties within the application.
                    </p>
                    <a href='https://github.com/JMcKenna01/TaskPro.git' className='card-link btn btn-primary'>GitHub Link</a>
                    <a href='https://taskpro-team1-96df893b3174.herokuapp.com/' className='card-link btn btn-primary'>Website Link</a>
                </div>
            </div>

            <div className='card text-center' aria-hidden="true">
                <img src={planorama} className='card-img-top' alt='Planorama'></img>
                <div className='card-body'>
                    <h2 className='card-title'>
                        Planorama
                    </h2>
                    <p className='card-text'>
                        Planorama allows the users to create events and share them with their coworkers. There is also a
                        calendar feature in which the user can see all upcoming events.
                    </p>
                    <a href='https://github.com/nathan26036/Planorama.git' className='card-link btn btn-primary'>GitHub Link</a>
                    <a href='https://planorama.onrender.com/' className='card-link btn btn-primary'>Website Link</a>
                </div>
            </div>

            <div className='card text-center' aria-hidden="true">
                <img src={noSQL} className='card-img-top' alt='noSQL Social Network'></img>
                <div className='card-body'>
                    <h2 className='card-title'>
                        noSQL Social Network
                    </h2>
                    <p className='card-text'>
                        This is the backend to Social Newtork where a user can add friends and remove friends. This project was
                        created without using mySQL.
                    </p>
                    <a href='https://github.com/thasebby/noSQLsocialNetwork.git' className='card-link btn btn-primary'>GitHub Link</a>
                    <a href='https://www.youtube.com/watch?v=dIu0KvuiCqw' className='card-link btn btn-primary'>Website Link to User Routes</a>
                    <a href='https://www.youtube.com/watch?v=7FtS8YR2CJE' className='card-link btn btn-primary'>Website Link to Thought Routes</a>

                </div>
            </div>

            <div className='card text-center' aria-hidden="true">
                <img src={noteTaker} className='card-img-top' alt='Note Taker'></img>
                <div className='card-body'>
                    <h2 className='card-title'>
                        Note Taker
                    </h2>
                    <p className='card-text'>
                        This is a simple note taking application that allows the user to create a note with a title.
                    </p>
                    <a href='https://github.com/thasebby/noteTaker.git' className='card-link btn btn-primary'>GitHub Link</a>
                    <a href='https://hidden-harbor-51856-60d1c10ef951.herokuapp.com/' className='card-link btn btn-primary'>Website Link</a>
                </div>
            </div>

            <div className='card text-center' aria-hidden="true">
                <img src={employeeTracker} className='card-img-top' alt='Employee Tracker'></img>
                <div className='card-body'>
                    <h2 className='card-title'>
                        Employee Tracker
                    </h2>
                    <p className='card-text'>
                        This Employee Tracker uses mySQL to create a database with different departments, roles and employee names.
                        The user can create an employee, role and a department while modifying all aspects of each.
                    </p>
                    <a href='https://github.com/thasebby/employeeTracker.git' className='card-link btn btn-primary'>GitHub Link</a>
                    <a href='#' className='card-link btn btn-primary'>Website Link</a>
                </div>
            </div>

        </div>
    );
}