import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import AddReportForm from './AddReportForm'


function AddFormModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let handleSubmit = (info) => {
        console.log(info)
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
             Add New Report
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add A New Report</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              Woohoo, you're reading this text in a modal!
              <AddReportForm onSubmit={handleSubmit}/>
        
        
         </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary" onClick={handleClose}>
              Add New
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default AddFormModal