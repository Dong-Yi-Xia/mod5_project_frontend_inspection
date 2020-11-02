import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import { propTypes } from 'react-bootstrap/esm/Image';
import Modal from 'react-bootstrap/Modal'
import ReportContainer from './ReportContainer'



function ReportModal(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch My Reports
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
             <Modal.Title>{props.storeName} Report</Modal.Title>
          </Modal.Header>
          <Modal.Body>
             My Reports . . . 
                <ReportContainer reports={props.reports}/>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }



  export default ReportModal