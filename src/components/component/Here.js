import { useState,useEffect } from "react"

export default function Here(){

    const[No1,setNo1]=useState(0)
    const [No2,setNo2]=useState(0);
    const [result,setresult]=useState(0);
    const [radio,setradio] = useState('none')
    console.log(radio)
   useEffect(()=>{
   //hamara code

   },[radio])
     function handelinput1change(event){
       setNo1(Number(event.target.value))


     }

     function handelinput2change(anshikaevent){

        setNo2(Number(anshikaevent.target.value))
     }
    function add(){
        setresult(No1 + No2)
    }
    function sub(){
        setresult(No1 - No2)
    }
    function multiply(){
        setresult(No1 * No2)
    }
    function handelgroup2change(event){
        setradio(event.target.value)
      
    }
    return<>
    <label>No1</label>
    <input onChange={handelinput1change} type="text"/>
    <label>No2</label>
    <input onChange={handelinput2change} type="text"/>
    <h1>Output{result}</h1>
    {/* <button onClick={add}>add</button>
    <button onClick={sub}>sub</button>
    <button onClick={multiply}>multiply</button> */}
    
    <label>
          <input
          name='cal'
            type="radio"
            value="add"
             checked={radio === 'add'}
             onChange={handelgroup2change}
          />
         add
        </label>
        <label>
          <input
          name='cal'
            type="radio"
            value="sub"
             checked={radio === 'sub'}
             onChange={handelgroup2change}
          />
         sub
        </label>
        <label>
          <input
          name='cal'
            type="radio"
            value="multiply"
             checked={radio === 'multiply'}
             onChange={handelgroup2change}
          />
         multiply
        </label>



    </>
}