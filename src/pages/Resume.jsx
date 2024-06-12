import resume from '../assets/SebastianSaenzResume2024v3.pdf'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function FrontEndModal(props) {
    const { onHide } = props;
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className='bg-dark'>
                <Modal.Title className="text-light" id='contained-modal-title-vcenter'>
                    Front-End Proficiencies
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='dark'>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Understanding of different CSS frameworks</li>
                    <li>jQuery</li>
                    <li>RESTful Services/APIs</li>
                    <li>Website Responsiveness</li>
                    <li>GIT/Version Control</li>
                </ul>
            </Modal.Body>
            <Modal.Footer className='dark'>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function BackEndModal(props) {
    const { onHide } = props;
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className='bg-dark'>
                <Modal.Title className="text-light" id='contained-modal-title-vcenter'>
                    Back-End Proficiencies
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='dark'>
                <ul>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Understanding and manipulating JWT</li>
                    <li>Mongoose</li>
                    <li>Apollo Client</li>
                    <li>Sequelize</li>
                </ul>
            </Modal.Body>
            <Modal.Footer className='dark'>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default function Resume() {

    const [modalShow, setModalShow] = useState(false);

    const onButtonClick = () => {
        const pdfUrl = resume;
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'SebastianSaenz2024Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='container p-4'>
            {/* <h1 className='text-center mb-3'>Sebastian Saenz's Resume</h1> */}
            <h1 className='text-center mb-4 poppins-extrabold'>Developer's Profeciencies</h1>
            
            <div className='d-flex flex-column align-items-center'>
                <div className='mb-4'>
                    <button className='btn btn-primary poppins-regular' onClick={onButtonClick}>
                        Download my Resume!
                    </button>
                </div>
            </div>
            

            <section className='d-flex flex-wrap justify-content-center text-center'>
                <>
                    <div className='card d-grid gap-2 m-2'>
                        <Button variant="primary" className='btn btn-primary poppins-regular' onClick={() => setModalShow(true)}>
                            Front-End Web Development
                        </Button>

                        <FrontEndModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </div>
                </>

                <>
                    <div className='card d-grid gap-2 m-2'>
                        <Button variant="primary" className='btn btn-primary poppins-regular' onClick={() => setModalShow(true)}>
                            Back-End Web Development
                        </Button>

                        <BackEndModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </div>
                </>

            </section>

        </div>
    );
}