
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import Form from 'react-bootstrap/Form';



function ModalUpdat(props) {
  console.log('current meme', props.passData)

  const updateBooking = async (e) => {
    e.preventDefault();

    const obj = {
    date: e.target.date.value,
    time: e.target.time.value,
    Numberofpeople: e.target.Numberofpeople.value
    }


    const serverURL = `/update/`;

    const result = await axios.put(serverURL, obj);
    console.log('done', result.data)

    props.handleClose();

    props.takeNewDataFromUpdatedModal(result.data)

  }



  return (


    <>

      <Modal show={props.updateBooking} onHide={props.handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{props.passData.nameRe}</Modal.Title>
        </Modal.Header>
        <Modal.Body>



          <Form onSubmit={updateBooking}>
            <Form.Group >
              <Form.Label>
                Date:
                <Form.Control name="date" type="date" defaultValue={props.passData.date} />
              </Form.Label>
              <br />
              <Form.Label>
                Time:
                <Form.Control name="time" type="time" defaultValue={props.passData.time} />
              </Form.Label>
              <br />
              <Form.Label>
                Number of people:
                <Form.Control name="Numberofpeople" type="number" defaultValue={props.passData.Numberofpeople} />
              </Form.Label>

            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>




        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>


        </Modal.Footer>
      </Modal>

    </>



  )



}

export default ModalUpdat;