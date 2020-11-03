import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ReportContainer from './ReportContainer'
import {connect} from 'react-redux'
import AddFormModal from './AddFormModal'



function ReportModal(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => {
      setShow(true)
      props.setReports(props.reports) 
    }
  
    // console.log(props.reports)
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
                <ReportContainer />


          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" >
               <AddFormModal />
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  let setReports = (reportsArr) => {
    return {
      type: "SET_SINGLE_INSPECTION_REPORTS",
      payload: reportsArr
    }
  }

  let mapDispatchToProps = {
    setReports
  }

  export default connect(null,mapDispatchToProps)(ReportModal)