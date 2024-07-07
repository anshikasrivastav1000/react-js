import { useState } from "react"

export default function Form(){
    
    const [emaildata , setemaildata] = useState("-")
   
    function handelEmailChange(anshika){

    setemaildata(anshika.target.value)   
    // console.log("onchange handelchange + event object usestate  update function state variable updated component re render ",emaildata)
     console.log("handel change andar wala",emaildata)

    }
    

    console.log("handelchange ki bhar wala",emaildata)
    

    return<>
    <label>Email</label>
    <input onChange={handelEmailChange} value={emaildata} type="text"/>

    </>
}