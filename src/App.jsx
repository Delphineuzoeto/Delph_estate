
import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import About from "./pages/About"
import SignIn from "./pages/SignIn"
  // prettier-ignore

 
 
 function App() {
   return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/SignIn" element={<SignIn/>} />
      
         
      </Routes>
     </BrowserRouter>
   )
 }
 
 export default App
 