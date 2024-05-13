
import "./App.css";
import { Route, Routes, Navigate, useLocation} from "react-router-dom";
import Home from "./components/home";
import AboutUs from "./components/about";
import Users from "./components/users"
import Navbar from "./components/navbar"
import NotFound from "./components/notfound";
import UserProfile from "./components/userProfile";
import SearchUser from "./components/searchUser";
import Login from "./components/login";
import AuthProfile from "./components/authProfile"
import { useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";


function App() {
  const [username, setUsername] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const location = useLocation();

  return (
    <SwitchTransition component={null}> 
      <CSSTransition key={location.pathname} classNames="fade" timeout={300} unmountOnExit>
 
      <Routes location={location }>
         <Route exact path="/" element={<Home />} /> 
          <Route path="/about" element={<AboutUs />} />
          <Route path="/users" element={<Users/>} />
          <Route element={<UserProfile/>} path="/users/user/:username"/>
          <Route element={<SearchUser/>} path="/search"/>
          <Route element={<Login setIsLogged={setIsLogged} setUsername={setUsername}/>} path="/login"/>

          <Route element={isLogged ?( <AuthProfile username={username}/> ): (<Navigate replace to ={"/login"}/>)} path="/authProfile"/>
         


        <Route path="*" element={<NotFound/>}/>;
      </Routes> 


      </CSSTransition>

    </SwitchTransition>
    
     
  
  );
}

export default App;
