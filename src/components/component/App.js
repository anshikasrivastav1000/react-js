import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

function App(){
    
    const [productData,setProductData]=useState([]);
    

    const fetchDataFromApi= async ()=>{

        try {
            const dataFromApi= await axios.get("https://dummyjson.com/products");
            console.log(dataFromApi.data.products);
            setProductData(dataFromApi.data.products);

        } catch (error) {
            console.log("something went wrong ", error.message);
        }                                            
    }

    return <>
         <button 
         style={{backgroundColor:"blue",border:"1px solid black"}}
         onClick={fetchDataFromApi}
         >Click here</button>

         <div style={{margin:"20px",display:"flex",justifyContent:"center" ,flexWrap:"wrap",gap:"5px"}}>
         {

             productData.map((eachProduct,index)=>{
                        return  <Card 
                        key={index}
                          image={eachProduct.images[0]}
                           price={eachProduct.price}
                            desc={eachProduct.title}/>
                 })
         }
         </div>
    </>
}

export default App;