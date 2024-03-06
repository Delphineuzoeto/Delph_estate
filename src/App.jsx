
import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import Contact from "./pages/Contact"
 
 function App() {
   return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/SignIn" element={<SignIn/>} />  
        <Route path="/Contact" element={<Contact/>} />  
      </Routes>
     </BrowserRouter>
   )
 }
 
 export default App
 