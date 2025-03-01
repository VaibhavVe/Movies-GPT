import Login from "./Login"
import Browse from "./Browse";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const Body = () => {
  return (
    <BrowserRouter>
    <div>
      <Routes>
      <Route path = "/" element = {<Login/>}  />
      <Route path = "/Browse" element = {<Browse/>}  />
      </Routes>
      </div> 
    </BrowserRouter>
  )
}

export default Body