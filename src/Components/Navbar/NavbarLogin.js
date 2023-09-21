import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useProductContext } from '../Context/ProductContext';
import { Link, useNavigate } from 'react-router-dom'
import LoginDetails from './LoginDetails';
import { Button } from '@mui/material';
import GoogleAuth from '../Auth/googleAuth';

export default function NavbarLogin() {
  let userDataString;
// const {setUservalue} =useProductContext();

const history = useNavigate();
const [credential,setCredential]=useState("");
const [singupnewuser,setSignupnewuser] =useState("");
const [products,setProducts]=useState("");

const [errorMessage, setErrorMessage] = useState("");

const [errorUserMessage,setErrorUserMessage] = useState("");
const [errorPasswordMessage,setErrorPasswordMessage]=useState("");
const [errorFirst_name, setErrorFirst_name]=useState("");
const [errorLast_name, setErrorLast_name] = useState("");
const [errorPhonenumber,setErrorPhonenumber]= useState("");

const [errorAddress,setErrorAddress] = useState("");
const [passwordMatch,setPasswordMatch]=useState("");

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");


const [errorPasswordMatch,setErrorPasswordMatch] = useState("");
const [first_name,setFirst_name] = useState("");
const [last_name,setLast_name] = useState("");
const [phonenumber,setPhonenumber] = useState("");
const [address,setAddress]= useState("");


useEffect(() => {
  const token = localStorage.getItem('token');
  
  if (token) {
    // User is already authenticated, perform auto-login
    const autoLogin = async () => {
      try {
        const response = await fetch("http://localhost:9000/auth/getuser", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": token,
          },
        });

        if (response.status === 200) {
          const userData = await response.json();
          localStorage.setItem('userData', JSON.stringify(userData));
          setProducts(userData);
        } else {
          // Handle errors, e.g., token expired or unauthorized.
          localStorage.removeItem('token'); // Clear invalid token
        }
      } catch (error) {
        // Handle network errors or other exceptions.
        console.error("Error fetching user data:", error);
      }
    };

    autoLogin();
  }
}, [setProducts]);


const handleLogin = async(e)=>{
  let json;
  e.preventDefault();
  if (!credential.username || !credential.password) {
    setErrorMessage("Please fill in all fields.");
    return;
  }
  try{
  const response = await fetch("http://localhost:9000/auth/login", {
    method: 'POST',
    mode:"cors",
    credentials: "same-origin",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({username: credential.username, password: credential.password})
    
});
if (response.ok){

  json = await response.json()
  console.log("🚀 ~ file: NavbarLogin.js:94 ~ handleLogin ~ json:", json)
  const token = localStorage.getItem('token', json.jwtData);
  history("/");
}

else{
  
  setErrorMessage('An error occurred during signup.');
}
  }
 catch (error) {
  console.error("Error during login:", error);
  setErrorMessage('An error occurred during login.');
}
const token = localStorage.getItem('token');

if (!token) {
  // Handle the case where the token is not available (user is not authenticated).
  return null;
}
try {
  const response = await fetch("http://localhost:9000/auth/getuser", {
    method: 'POST',
    headers: {
  
      'Content-Type': 'application/json',
      "auth-token":    `${token}`
    },
  });

  if (response.status === 200) {
    const userData = await response.json();

console.log(userData)
 
    localStorage.setItem('userData', JSON.stringify(userData));
  
    userDataString = localStorage.getItem('userData');
    console.log("🚀 ~ file: NavbarLogin.js:127 ~ handleLogin ~ userDataString:", userDataString)
 

  const userDataValue = JSON.parse(userDataString);
  setProducts(userDataValue)
  console.log("🚀 ~ file: NavbarLogin.js:132 ~ handleLogin ~ userDataValue:", userDataValue)

  } else {
    // Handle errors, e.g., token expired or unauthorized.
    return null;
  }
} catch (error) {
  // Handle network errors or other exceptions.
  console.error("Error fetching user data:", error);
  return null;
}
}


// signup function
const handleSignup =async(e)=>{
e.preventDefault();
let json;
const {first_name,last_name,username,email,password,phonenumber,address}=singupnewuser;


try{
const response = await fetch("http://localhost:9000/auth/signup", {
    method: 'POST',
    mode:"cors",
    credentials: "same-origin",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({first_name,last_name,username,email,password,phonenumber,address})
    
});

 if(response.ok){
 json = await response.json()
 console.log("🚀 ~ file: NavbarLogin.js:172 ~ handleSignup ~ json:", json)
 
 localStorage.setItem('token', json); 

history("/")
 }
else{
  setErrorMessage('Invalid credentials');
}
}
catch (error) {
  console.error("Error during signup:", error);
  setErrorMessage('An error occurred during signup.');
}

}
let views = "HELLO!😊"

const handleLogout = () => {
  // Clear user token and data from localStorage
  localStorage.removeItem('token');
  localStorage.removeItem('userData');

  // Reset the products and any other user-related state in your context
  setProducts({});
  // You may also need to reset other user-related state here

  // Redirect to the login page or any other desired route
  history('/');
};

//validation of User 
const handleUser=()=>{

 if(username.length === 0 ){
  setErrorUserMessage("Please put the correct Username")
 }
 else if(username.length >=1 && username.length<=5){
  setErrorUserMessage("Username must be atleast 6 characters")
 }
 else if (!username === username.trim()){
  setErrorUserMessage(" Username must not be emplty")
 }
 else{
 setErrorUserMessage("")
}
 }

 // validation password

const handlePassword=()=>{
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/;
  if(password.length === 0 ){
    setErrorPasswordMessage("Please put the correct Username")
   }
   else if (password.length < 7) {
    setErrorPasswordMessage("Password must be at least 8 characters long");
  } else if (!passwordRegex.test(password)) {
    setErrorPasswordMessage(
      "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character (@$!%*?&)"
    );
  }
   else{
   setErrorPasswordMessage("")
  }
}

//validation for first name
const handleFirst_name=()=>{
 
  if(first_name.length === 0 ){
    setErrorFirst_name("Please put the correct first name")
   }

   else{
   setErrorFirst_name("")
  }
}

//validation for last name
const handleLast_name=()=>{
 
  if(last_name.length === 0 ){
    setErrorLast_name("Please put the correct Last name")
   }

   else{
   setErrorLast_name("")
  }
}

 
//validation of phone number
const handlePhonenumber=()=>{
  const isPhoneNumberValid = (phoneNumber) => {
    const phoneRegex = /^\d{9}$/; // Matches exactly 10 digits
    return phoneRegex.test(phoneNumber);
  };
  if(phonenumber.length === 0 ){
    setErrorPhonenumber("Please put the correct Phone Number")
   }
   if (!isPhoneNumberValid(singupnewuser.phonenumber)) {
    setErrorPhonenumber('Please enter a valid 10-digit phone number.');
    return;
  }

   else{
   setErrorPhonenumber("")
  }
}
// validation for address
const handleAddress=()=>{

  if(address.length === 0 ){
   setErrorAddress("Please put the correct Address")
  }
 
  else if (!address === address.trim()){
   setErrorAddress(" Address must not be emplty")
  }
  else{
  setErrorAddress("")
 }
  }
 //validation for password matching
 const handlePasswordmatch =()=>{
  if(password.trim() !== passwordMatch){
    setErrorPasswordMatch("Password is not matching")
  }
 
  else{
    setErrorPasswordMatch("")
  }
 }
const [code,setCode]=useState(
  "text")

  return (
    <Wrapper>
{/* <Button type="submit"  className='login' onClick={()=>{document.getElementById("user").classList.toggle("view")}}>Login</Button> */}
<Button type="submit" className='login' onClick={()=>{document.getElementById("google-auth").classList.toggle("view")}}>LOGIN</Button>
<LoginDetails  view={views} handleLogout={handleLogout}/>
<div className='auth view' id="google-auth" ><GoogleAuth /></div>
<div className="user-information view" id ="user" >
  <div className="container" id="login">
<div className="header">
  <h3 className='login-head'> Login to ShopyEasy</h3>
</div>
<div className="form">
  <form onSubmit={handleLogin} >
 
  <div>
    <div className="div">
    <label htmlFor="username">User Name: </label>
    </div>
    <input type='text' name='username' className='user-name' id='username-login' placeholder='Enter Username' onChange={(e)=>{setCredential({...credential,[e.target.name]:e.target.value}); setUsername(e.target.value); handleUser()} } />
    <div style={{color:"red",fontSize:"12px",marginTop:"-5px",marginBottom:"5px"}}>{errorUserMessage}{errorMessage}</div>
    </div>
 <div>
  <div>
  <label htmlFor="login-password">Password: </label>
  </div>

    <input type={code} name='login-password' className="password-input user-name" id='userlogin-password' placeholder='Enter Password'onChange={(e)=>{setCredential({...credential,[e.target.name]:e.target.value});setPassword(e.target.value);handlePassword()}} onClick={()=>{setCode("password")}}/>
    <div style={{color:"red",fontSize:"12px",marginTop:"-5px",marginBottom:"5px"}}>{errorPasswordMessage}{errorMessage}</div>
    </div>
    <button type="submit" className='btn'  >Submit</button>
  </form>
</div>
<h5 className='foot-login'> If you are a new User click here <span style={{color:"purple",cursor:"pointer",textDecoration:"underline"}} onClick={()=>{document.getElementById("login").classList.add("view");
document.getElementById("signup").classList.remove("view")
}}>Sign up</span></h5>

</div>


{/* function for signup */}

<div className="container view" id="signup">
<div className="header">
  <h3 className='signup-head'> Welcome to ShopyEasy </h3>
</div>
<div style={{color:"red",fontSize:"12px",marginTop:"-5px",marginBottom:"5px",textAlign:"center"}}>{errorMessage}</div>
<div className="form signupinput">
  <form  onSubmit={handleSignup}>
    <div>
    <div className="div">
    <label className='newuser-label' htmlFor="text">First Name: </label>
    </div>
    <input type='text' name='first_name' className='user-name newuser' id='usersignup-fname' placeholder='Enter First name' onChange={(e)=>{setSignupnewuser({...singupnewuser,[e.target.name]:e.target.value});setFirst_name(e.target.value);handleFirst_name()}}/>
    <div style={{color:"red",fontSize:"12px",marginTop:"-5px",marginBottom:"5px"}}>{errorFirst_name}</div>
    </div>
  <div>
    <div className="div">
    <label className='newuser-label' htmlFor="text">Last Name: </label>
    </div>
    <input type='text' name='last_name' className='user-name newuser' id='usersignup-lname' placeholder='Enter Last name' onChange={(e)=>{setSignupnewuser({...singupnewuser,[e.target.name]:e.target.value});setLast_name(e.target.value);handleLast_name()}}/>
    <div style={{color:"red",fontSize:"12px",marginTop:"-5px",marginBottom:"5px"}}>{errorLast_name}</div>
    </div>
  
 <div>
    <div className="div">
    <label className='newuser-label' htmlFor="text">User Name: </label>
    </div>
    <input type='text' name='username' className='user-name newuser' id='username-signup' placeholder='Enter User name' onChange={(e)=>{setSignupnewuser({...singupnewuser,[e.target.name]:e.target.value});setUsername(e.target.value);handleUser()}}/>
    <div style={{color:"red",fontSize:"12px",marginTop:"-5px",marginBottom:"5px"}}>{errorUserMessage}</div>
    
    </div>
 <div>
    <div className="div">
    <label className='newuser-label' htmlFor="email">Email Id: </label>
    </div>
    <input type='email' name='email' className='user-name newuser' id='usersingup-email' placeholder='Enter Email Id'onChange={(e)=>{setSignupnewuser({...singupnewuser,[e.target.name]:e.target.value});;}}/>
    <div style={{color:"red",fontSize:"12px",marginTop:"-5px",marginBottom:"5px"}}></div>
    
    </div>
 <div>
    <div className="div">
    <label  className='newuser-label' htmlFor="password">Password:  </label>
    </div>
    <input type={code} name='password' className='user-name newuser' id='usersignup-password' placeholder='Enter Password' onChange={(e)=>{setSignupnewuser({...singupnewuser,[e.target.name]:e.target.value});setPassword(e.target.value);handlePassword()}}/>
    <div style={{color:"red",fontSize:"12px",marginTop:"-5px",marginBottom:"5px"}}>{errorPasswordMessage}</div>
    </div>
    <div>
    <div className="div">
    <label  className='newuser-label' htmlFor="password_repeat">Repeat Password:  </label>
    </div>
    <input type={code} name='password' className='user-name newuser' id='usersignup-password-repeat' placeholder='Enter Password' onChange={(e)=>{setPasswordMatch(e.target.value);handlePasswordmatch()}}/>
    <div style={{color:"red",fontSize:"12px",marginTop:"-5px",marginBottom:"5px"}}>{errorPasswordMatch}</div>
    </div>
    <div>
    <div className="div">
    <label  className='newuser-label' htmlFor="phonenumber">Phone Number:  </label>
    </div>
    <input type='Number' name='phonenumber' className='user-name newuser' id='usersignup-phonenumber' placeholder='Enter Phone Number' onChange={(e)=>{setSignupnewuser({...singupnewuser,[e.target.name]:e.target.value});setPhonenumber(e.target.value); handlePhonenumber()}}/>
    <div style={{color:"red",fontSize:"12px",marginTop:"-5px",marginBottom:"5px"}}>{errorPhonenumber}</div>
    </div>
    <div>
    <div className="div">
    <label  className='newuser-label' htmlFor="address">Address:  </label>
    </div>
    <textarea type='text' name='address' className='user-name newuser' id='usersignup-address' placeholder='Enter full address' onChange={(e)=>{setSignupnewuser({...singupnewuser,[e.target.name]:e.target.value});setAddress(e.target.value); handleAddress()}}/>
    <div style={{color:"red",fontSize:"12px",marginTop:"-5px",marginBottom:"5px"}}>{errorAddress}</div>
    </div>
    
    <button className='btn' type='submit' onClick={()=>{
      window.location.reload()
    }}>Submit</button>
  </form>
  <h5 className='foot-signup'>Already a user please click on <span style={{color:"purple",cursor:"pointer",textDecoration:"underline"}} onClick={()=>{document.getElementById("signup").classList.add("view");
  document.getElementById("login").classList.remove("view")
}}>login</span></h5>
  </div>
</div>

</div>
    </Wrapper>
  )
}
const Wrapper=styled.div`
position:absolute;
margin-left:80px;
height:auto;
margin-top:8px;
.login{
margin-left:50%;
width:100px;
padding:5px 0px;
height:30px;
color:purple;
background:white;
font-size:16px;
cursor:pointer;
font-weight:bold;
margin-left:-100px;
animation-delay: 0.6s;
}
.login:hover{
    color:black;
    transform:scale(1.05);
}
#user{
  position:absolute;
  background:white;
  width:500px;
  height:400px;
  border-radius:20px;
  background:#f5f5f5;
  margin-left:-260px;
  margin-top:30px;
  box-shadow:0px 120px 340px 1px black;
  overflow-x:scroll;
}
.form {
  text-align:left;
  margin-right:0px;
  font-size:16px;
  margin-left:120px;
  margin-top:60px;

}
input{
  width:250px;
  height:30px;
  font-size:16px;
  opacity:0.7;
  margin:10px 0px;

}
label{
  padding:10px 0px;
  opacity:0.7
}
.foot-login{
  text-align:center;
}
.view{
  display:none;
}
.login-head{
  text-align:center;
  margin-top:60px;
  margin-bottom: -30px;
  font-size:20px;
}
.newuser{
  height:20px;
}

.signupinput{
  margin-top:-25px;
  margin-bottom:100px;
  height:auto;
  padding:20px 10px; 
  overflow-x: scroll;
}

.signup-head{
  text-align:center;
  margin-top:30px;
  margin-bottom: 38px;
  font-size:20px;
}
.foot-signup{
  margin-top:-5px;
  margin-bottom:10px;
}
.btn{
  text-align:center;
  margin-left:230px;
  padding:5px 10px;
  border:none;
  background:purple;
  color:white;
  font-weight:bold;
  opacity:0.7;
  box-shadow:0px 5px 5px 1px gray;
  cursor:pointer;
   margin :20px 100px;
}
.btn:hover{
  transform: scale(0.96);
  
}
.view{
  display:none
}
.login-name{
  position:absolute;
  padding:5px 5px;
  margin-top:2px;
  margin-left:5px;
  width:110px;
  border:none;
  background:none;
  color:#6ff4ff;
  font-weight:bold;
  font-size:16px;
  cursor:pointer;
  
}
#usersignup-address{
  margin-top:4px;
  height:100px;
  width:250px;
  padding:10px 5px;
  font-size:20px;
  
}
.log-out{
position:absolute;
}
.auth{
  position:absolute;
  text-align:center;
  margin-top:10px;
  margin-left:-180px
}
`