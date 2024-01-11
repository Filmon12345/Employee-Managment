import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function EditEmployee(PropTYpes) {
  const [name, setName] = useState(PropTYpes.name);
  const [Depart, setDepart] = useState(PropTYpes.Depart);
  const [img,setImg] = useState(PropTYpes.img);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button
    onClick={handleShow}
    >Update</button>
    
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form id='editmodal'
          onSubmit={(e)=>{

            PropTYpes.updateEmployee(PropTYpes.id,name,Depart,img);
            handleClose();
            e.preventDefault();
            }}
        >
  <div>
    <label>ImgUrl</label>
    <input type="text" value={img}  onChange={(e)=>setImg(e.target.value)}
    className="form-control" id="img"  placeholder="http://..." />
  </div>
  <div>
    
    <label>Full Name</label>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}
    className="form-control" id="name"  placeholder="Enter Name" />
  </div>
  <div>
    <label>Department</label>
    <input type="text" value={Depart}  onChange={(e)=>setDepart(e.target.value)}
   className="form-control" id="Depart" placeholder="Enter Depart..." />
  </div>

  
</form >
        </Modal.Body>
        <Modal.Footer>
          <Button className='font-bold py-1 px-2  focus:outline-none ' variant="warning" onClick={handleClose}>
            Close
          </Button>
          <button form='editmodal'  className="btn btn-primary hover:bg-red-300 py-1 px-2 " 
          >Update</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;