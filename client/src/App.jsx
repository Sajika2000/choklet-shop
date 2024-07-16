import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Product from "./pages/Product"
import Contact from "./pages/Contact"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import Hedader from "./components/Hedader"

const App = () => {
  return (
    <BrowserRouter>
   {/*  header */}
   <Hedader/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/about" element= {<About/>}/>
        <Route path="/product" element= {<Product/>}/>
        <Route path="/contact" element= {<Contact/>}/>
        <Route path="/sign-in" element= {<Signin/>}/>
        <Route path="/sign-up" element= {<Signup/>}/>
        <Route path="/profile" element= {<Profile/>}/>
        
      </Routes>
    
    </BrowserRouter>
    
  )
}

export default App
