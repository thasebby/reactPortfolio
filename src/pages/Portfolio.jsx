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
        <div className='d-flex flex-wrap justify-content-center container p-4 gap-5'>

            <div className='card text-center p-2 col-lg-3 col-sm-10 col-xxs-10' aria-hidden="true">
                <div className='card-body'>
                    <h2 className='card-title jaro-title text-decoration-underline'>
                        sipAdvisor
                    </h2>
                    <p className='card-text jaro-title'>
                        This application will allow users to look up drinks and will provide the recipe to make it
                        with the use of an API. For the future we plan on implementing a map API that will allow the user to find
                        the closest liquor store.
                    </p>

                    <img src={sipAdvisor} className='card-img-top' alt='Sip Advisor'></img>

                    <a href='https://github.com/cweinstein36/SipAdvisor_API-Project.git' className='card-link btn btn-primary'>GitHub Link</a>
                    <a href='https://cweinstein36.github.io/SipAdvisor_API-Project/' className='card-link btn btn-primary'>Website Link</a>
                </div>

            </div>

            <div className='card text-center p-2 col-lg-3 col-sm-10 col-xs-10 col-xxs-10' aria-hidden="true">
                <div className='card-body'>
                    <h2 className='card-title jaro-title text-decoration-underline'>
                        TaskPro
                    </h2>
                    <p className='card-text jaro-title'>
                        With TaskPro a user can signup as a employee,supervisor and manager. Depending on what they
                        sign up as they will have access to different duties within the application.
                    </p>

                    <img src={taskPro} className='card-img-top' alt='TaskPro'></img>

                    <a href='https://github.com/JMcKenna01/TaskPro.git' className='card-link btn btn-primary'>GitHub Link</a>
                    <a href='https://taskpro-team1-96df893b3174.herokuapp.com/' className='card-link btn btn-primary'>Website Link</a>
                </div>
            </div>

            <div className='card text-center p-2 col-lg-3 col-sm-10 col-xs-10 col-xxs-10' aria-hidden="true">
                <div className='card-body'>
                    <h2 className='card-title jaro-title text-decoration-underline'>
                        Planorama
                    </h2>
                    <p className='card-text jaro-title'>
                        Planorama allows the users to create events and share them with their coworkers. There is also a
                        calendar feature in which the user can see all upcoming events.
                    </p>

                    <img src={planorama} className='card-img-top' alt='Planorama'></img>

                    <a href='https://github.com/nathan26036/Planorama.git' className='card-link btn btn-primary'>GitHub Link</a>
                    <a href='https://planorama.onrender.com/' className='card-link btn btn-primary'>Website Link</a>
                </div>
            </div>

            <div className='card text-center p-2 col-lg-3 col-sm-10 col-xs-10 col-xxs-10' aria-hidden="true">
                <div className='card-body'>
                    <h2 className='card-title jaro-title text-decoration-underline'>
                        noSQL Social Network
                    </h2>
                    <p className='card-text jaro-title'>
                        This is the backend to Social Newtork where a user can add friends and remove friends. This project was
                        created without using mySQL.
                    </p>

                    <img src={noSQL} className='card-img-top' alt='noSQL Social Network'></img>

                    <a href='https://github.com/thasebby/noSQLsocialNetwork.git' className='card-link btn btn-primary'>GitHub Link</a>
                    <a href='https://www.youtube.com/watch?v=dIu0KvuiCqw' className='card-link btn btn-primary'>Website Link to User Routes</a>
                    <a href='https://www.youtube.com/watch?v=7FtS8YR2CJE' className='card-link btn btn-primary'>Website Link to Thought Routes</a>

                </div>
            </div>

            <div className='card text-center p-2 col-lg-3 col-sm-10 col-xs-10 col-xxs-10' aria-hidden="true">
                <div className='card-body'>
                    <h2 className='card-title jaro-title text-decoration-underline'>
                        Note Taker
                    </h2>
                    <p className='card-text jaro-title'>
                        This is a simple note taking application that allows the user to create a note with a title.
                    </p>

                    <img src={noteTaker} className='card-img-top' alt='Note Taker'></img>

                    <a href='https://github.com/thasebby/noteTaker.git' className='card-link btn btn-primary'>GitHub Link</a>
                    <a href='https://hidden-harbor-51856-60d1c10ef951.herokuapp.com/' className='card-link btn btn-primary'>Website Link</a>
                </div>
            </div>

            <div className='card text-center p-2 col-lg-3 col-sm-10 col-xs-10 col-xxs-10' aria-hidden="true">
                <div className='card-body'>
                    <h2 className='card-title jaro-title text-decoration-underline'>
                        Employee Tracker
                    </h2>
                    <p className='card-text jaro-title'>
                        This Employee Tracker uses mySQL to create a database with different departments, roles and employee names.
                        The user can create an employee, role and a department while modifying all aspects of each.
                    </p>

                    <img src={employeeTracker} className='card-img-top' alt='Employee Tracker'></img>

                    <a href='https://github.com/thasebby/employeeTracker.git' className='card-link btn btn-primary'>GitHub Link</a>
                    <a href='#' className='card-link btn btn-primary'>Website Link</a>
                </div>
            </div>

        </div>
    );
}