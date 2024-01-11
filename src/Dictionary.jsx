import { useState } from "react"


function Dictionary() {
    const [word , setWord] = useState('')
    const styles ={
        marginTop:'100px',
      
    
        }
  return (
    <>
    <div style={styles}>

    <input type="text" onChange ={(e)=>{
       
        setWord(e.target.value);
    }} />
    <p>Lets Find a Meaning for {word}</p>
    </div>
    </>

  )
}

export default Dictionary