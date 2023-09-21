
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import AllProducts from './Components/ProductsList/AllProducts';
import { ProductContextProvider } from './Components/Context/ProductContext';
import AllSingleProducts from './Components/SingleProduct/AllSingleProducts';
import AddToCart from './Components/Cart/AddToCart';
import LoadingItems from './Components/Loading/sliderLoading.js'
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Contact from './Components/contact/contact';
import Error500 from './Components/Error/error500';
import Error from './Components/Error/Error';
import GoogleAuth from './Components/Auth/googleAuth';
import { GoogleOAuthProvider } from '@react-oauth/google';

// import { ProductContextProvider } from './Components/Context/ProductContext';

function App() {
  return (
   <>
    < GoogleOAuthProvider clientId="637415186657-930povu12n1oedjmd88tonju3r6lqlpn.apps.googleusercontent.com">
    <ProductContextProvider>
   <BrowserRouter>
 <Navbar/>
 <LoadingItems/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Products' element={<AllProducts/>}/>
   <Route exact path='/:id' element={<AllSingleProducts/>}/>
   <Route exact path='/cart'element={<AddToCart/>}/>
   <Route exact path="/placeorder" element={<PlaceOrder/>}/>
   <Route exact path="/contact" element={<Contact/>} />
   <Route exact path="/error"   element={<Error500/>} />
   <Route path="*" element={<Error/>}/>
   <Route path="/auth" element={<GoogleAuth/>}/>
 </Routes>
 <Footer/>
 </BrowserRouter>
 </ProductContextProvider>
 </GoogleOAuthProvider>
 </>
  );
}

export default App;
