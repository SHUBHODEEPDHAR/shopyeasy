

const url = "http://localhost:9000";

const userDetails = [];
export let ID ="";
export let Name ="";
export let Email ="";
export const UserApi = async (picture, email, name) => {

  try {
    const response = await fetch(`${url}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ picture, email, name }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);

    }
   
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
   
  }
 

 
};

export const getUser = async (email)=>{
try {
  const response = await fetch(`${url}/getuser/${email}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
     
    },
   
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);

  }

  const responseData = await response.json();
  console.log(responseData);
  userDetails.push(responseData)
  ID=userDetails[0]._id;
  Name = userDetails[0].name;
  Email= userDetails[0].email;
} catch (error) {
  console.log(error.message);
}

}

export const removeUser = async (email)=>{
  try {
    const response = await fetch(`${url}/removeuser/${email}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
       
      },
     
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
  
    }
  
    const responseData = await response.json();
    console.log(responseData);
   
  } catch (error) {
    console.log(error.message);
  }
  
  }
  

