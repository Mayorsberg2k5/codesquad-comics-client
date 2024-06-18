import Footer from "./shared/Footer";
import Header from "./shared/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Create from "./components/Create";

import { useState } from "react";


function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || {});;

  return (
    <div className="App">   
    <Header  user={user} setUser={setUser}/>
    <Login user={user} setUser={setUser}/>

    <Signup user={user} setUser={setUser} />
    <Footer  />

      
    </div>
  )
}

export default App;
