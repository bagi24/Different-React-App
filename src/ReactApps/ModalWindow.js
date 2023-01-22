import { Modal, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function ModalWindow() {
  const [isShow, invokeModal] = useState(false);

  console.log(isShow);

  const initModal = e => {
    console.log(e.target);
    invokeModal(true);
  };

  const closeModal = e => {
    console.log(e.target);
    invokeModal(false);
  };

  useEffect(() => {
    console.log('Sheicvala');
  }, [isShow]);

  return (
    <div className='ModalCon'>
      <Button variant='success' onClick={initModal}>
        Open Modal
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={closeModal}>
          <Modal.Title>React Modal Popover Example</Modal.Title>
        </Modal.Header>
        <Modal.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={closeModal}>
            Close
          </Button>
          <Button variant='dark' onClick={closeModal}>
            Store
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
  );
}
export default ModalWindow;
