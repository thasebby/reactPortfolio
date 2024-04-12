import resume from '../assets/sebastianResume.pdf'
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
            <Modal.Header className='bg-dark' closeButton>
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
            <Modal.Header className='bg-dark' closeButton>
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
        link.download = 'SebastianSaenzResume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='row justify-content-center p-4'>
            <h1 className='text-center col-3 pb-3 mb-4 border-bottom'>Sebastian Saenz's Resume</h1>
            <button onClick={onButtonClick}>
                Download my Resume!
            </button>

            <section className='d-flex flex-wrap justify-content-center text-center'>
                <h1>Developer's Profeciencies</h1>

                <>
                    <div className='card'>
                        <Button variant="primary" onClick={() => setModalShow(true)}>
                            Front-End Web Development
                        </Button>

                        <FrontEndModal
                            show = {modalShow}
                            onHide = {() => setModalShow(false)}
                        />
                    </div>
                </> 

                <>
                    <div className='card'>
                        <Button variant="primary" onClick={() => setModalShow(true)}>
                            Back-End Web Development
                        </Button>

                        <BackEndModal
                            show = {modalShow}
                            onHide = {() => setModalShow(false)}
                        />
                    </div>
                </>

            </section>

        </div>
    );
}