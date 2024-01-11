  import { useState } from 'react';
import './Navbar.css'
  import { Link } from 'react-router-dom';

  const Navbar=(PropTypes)=>{
const [activeh,setActiveh] = useState(true)
const [activee,setActivee] = useState(false)
const [activec,setActivec] = useState(false)
const [actived,setActived] = useState(false)
const btnstyle = {
  border:'0.5px solid blue',
  borderRadius:'7px',
 padding:0,
};
    return(
        <>
        <div className="containers">
        <div className="left">
          <h3>React Blogs</h3>
        </div>
        
        <div className="right">
          <button style={btnstyle}
          onClick={()=>{
            
            if(!activeh){
setActiveh(true);
setActivee(false);
setActivec(false);
setActived(false);
            }
            
          }}
          ><Link  className={`link btn btn-${activeh?'primary':''}`} to="/Home">Home</Link></button>

         <button style={btnstyle}
          onClick={()=>{
           
            if(!activee){
              setActivee(true);
              setActiveh(false);
              setActivec(false);
              setActived(false)
                          }
           
          }}
         >
         <Link className={`link btn  btn-${activee?'primary':''}`} to="/Employee">Employee</Link>
         </button >
          <button style={btnstyle}
        
           onClick={()=>{
            if(!activec){
              setActivec(true);
              setActiveh(false);
              setActivee(false);
              setActived(false)
                          }
            
          }}
          ><Link className={`link btn btn-${activec?'primary':''}`} to="/Customer">Customer</Link></button>
            <button style={btnstyle}
        
        onClick={()=>{
         if(!actived){
           setActived(true);
           setActiveh(false);
           setActivee(false);
           setActivec(false)
                       }
         
       }}
       ><Link className={`link btn btn-${actived?'primary':''}`} to="/Dictionary">Dictionary</Link></button>
        </div>
          
       
      </div>
      {PropTypes.children}
      </>
    );
}

export default Navbar;