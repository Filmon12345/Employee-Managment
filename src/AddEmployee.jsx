import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function AddEmployee(PropTYpes) {
  const [name, setName] = useState('');
  const [Depart, setDepart] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button
    onClick={handleShow}
    style={{
     display: 'inline-block',
      wordSpacing:"none",
      whiteSpace: "nowrap",
      borderRadius:"5px",
width: "140px",
padding: "6px 10px 6px 10px",
backgroundColor:"powderblue",
color:"black",
margin: "20px 0 10px 10px"

    }}
    >+ Add Employee </button>
    
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <form id='editmodal'
           onSubmit={(e)=>{
           e.preventDefault();
    PropTYpes.NewEmployee(name,Depart,imgUrl)
    setName('');
    setDepart('');
    setImgUrl('');
          }}
        >
  <div className="form-group m-2">
    <label htmlFor="exampleInput">Full Name</label>
    <input type="text" value={name} 
    onChange={(e)=>setName(e.target.value)}
    className="form-control" id="name"  placeholder="Enter Name" />
 
  </div>
  <div className="form-group m-2">
    <label htmlFor="exampleInputPassword1">Department</label>
    <input type="text" value={Depart}  onChange={(e)=>setDepart(e.target.value)}
   className="form-control" id="Depart" placeholder="Enter Depart..." />
  </div>
  <div className="form-group m-2">
    <label htmlFor="exampleImgUrl">ImgUrl</label>
    <input type="text" value={imgUrl}  onChange={(e)=>setImgUrl(e.target.value)}
   className="form-control" id="imgUrl" placeholder="http://..." />
  </div>
</form >
        </Modal.Body>
        <Modal.Footer>
          <Button className='  font-bold py-1 px-2  focus:outline-none ' variant="warning" onClick={handleClose}>
            Close
          </Button>
          <button form='editmodal'  className="btn btn-primary hover:bg-red-300  font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline" 
         onClick={handleClose}
          >Add</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;