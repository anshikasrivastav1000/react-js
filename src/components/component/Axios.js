import axios from "axios"

//hm yha pr axios use kr skte hai pr iska koi sense nhi hai


export default function Axios(){
//get
async  function fetchdata(){
try {
    const jsondata = await axios.get('https://dummyjson.com/products') 
    console.log(jsondata.data.products[0].category)
} catch (error) {
    console.log('catch block exeute',error.message)
}
}
return<>
    <button onClick={fetchdata}>
    click
    </button>
    </>
}