// import axios from "axios";

// const url ="http://localhost:9000"
// export  const payUsingPaytm = async (data) => {
  
//         try{
//         let response = await axios.post(`${url}/paynow`, data);
//         return response.data;
//     } catch (error) {
//         console.log('Error', error);
//     }
// }



const url ="http://localhost:9000"
export  const payUsingPaytm =async(data) => {
    {

        return fetch(`http://localhost:9000/paynow`,{
            method:"POST",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }).then(response=>response.json()).catch(err=>console.log(err))
      }
}