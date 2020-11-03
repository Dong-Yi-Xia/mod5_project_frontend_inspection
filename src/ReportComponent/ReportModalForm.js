import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ReportForm from './ReportForm'
import {connect} from 'react-redux'




function ReportModalForm(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => {
      setShow(true)
      props.singleReport(props.report)
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Edit My Report
        </Button>
  
        <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>Report Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Woohoo, you're reading this text in a modal!
            <ReportForm />

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
  

  let singleReport = (theReport) => {
    return {
      type: "SET_SINGLE_REPORT",
      payload: theReport
    }
  }

  let mapDispatchToProps = {
    singleReport
  }


  export default connect(null,mapDispatchToProps)(ReportModalForm)