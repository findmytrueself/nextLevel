import Login from "./pages/Login";
import Detail from "./pages/Detail";
import UserInfo from "./pages/UserInfo"
import React, {useState, useEffect} from "react"
import {Routes, Route} from "react-router-dom"


function App() {
  const [cookie, setCookie] = useState(null)
  const [jwt , setJwt] = useState('')
  const cookieStateHandler = (cookie, getCookie) => {
    setJwt(getCookie())
  }

  return (
    <div >
      <Routes>
        <Route path="/sign-in" element={<Login cookie={cookie} cookieStateHandler={cookieStateHandler}/>}/>
        <Route path="/content" element={<Detail/>}/>
        <Route exact path="/" element={<UserInfo jwt={jwt}/>}/>
      </Routes>
    </div>
  );
}

export default App;
