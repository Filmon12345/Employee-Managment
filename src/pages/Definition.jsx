import { useEffect } from "react"

export default function Definition(){
    useEffect(()=>{
console.log("page is loaded")
    },[])

    return <p style={{marginTop: "200px",
backgroundColor:"red"
}}>Here the definition</p>
} 