import styled from "styled-components";
import img4 from '../../images/img4.jpg'

const Contact = () => {

  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        
        }
      }
    }
   .img-contact{
    width:100%;
    height:500px;
    margin-top:-100px;
   }
   .btn{
    width:40%;
    margin-left:80px;
    background:purple;
    border:none;
    padding:10px;
    color:white;
    box-shadow: 0px 0px 5px 1px gray;
    opacity:0.7;
    cursor:pointer;
   }
   .btn:hover{
    transform:scale(0.96);
    opacity:1;
   }
  
   @media(max-width:995px){
    width:1321px;
    .img-contact{
      width:1321px;
      height:500px;
      margin-top:-100px;
     }
  }
  `
document.body.style.color="purple";
  return<Wrapper >
    <img src={img4} alt="img" className="img-contact"/>
    <h2 className="common-heading" id="contact">Contact Us</h2>
   
<div className="container" style={{display:"inline-grid"}}>
  <div className="contact-form">
   <form action="https://formspree.io/f/mzblbzvq" method ="POST" className="contact-inputs" style={{display:"inline-grid"}}>
    <input
    type="text" placeholder="username" name="username"
    required autoComplete="off"  style={{padding:"10px",margin:"10px"}}
    />
    <input type="email" name="Email" autoComplete="off"  placeholder="Email"  required style={{padding:"10px",margin:"10px"}} />

    <textarea name="Enter your message" cols="30" rows="10" required autoComplete="off" placeholder="Enter your message" style={{padding:"10px",margin:"10px"}}></textarea>

    <input type="submit" value="send" className="btn" /> 
   </form>

  </div>
</div> 
  </Wrapper>;
 

 };

export default Contact;