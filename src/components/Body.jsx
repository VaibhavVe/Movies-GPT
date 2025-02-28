import Login from "./Login"
import Browse from "./Browse";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const Body = () => {
  return (
    <BrowserRouter>
    <div>
      <Header/>
      <Routes>
      <Route path = "/" element = {<Body/>}  />
      <Route path = "/Login" element = {<Login/>}  />
      <Route path = "/Browse" element = {<Browse/>}  />
      </Routes>
      </div> 
    </BrowserRouter>
  )
}

export default Body