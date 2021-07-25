import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setprofilePic] = useState("");
  const dispatch=useDispatch();
 

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName:userAuth.user.displayName,
            profileUrl:userAuth.user.photoURL,

          })
        )
      })
  };
  const register = () => {
      if (!name){
          alert("please enter a fullname");
      }
      auth.createUserWithEmailAndPassword(email,password)
      .then((userAuth)=>{
          userAuth.user.updateProfile({
              displayName:name,
              photoUrl:profilePic,
          })
          
          .then (()=>{
              dispatch( login ({
                  email: userAuth.user.email,
                  uid: userAuth.user.uid,
                  displayName:name,
                  photoUrl:profilePic,
                  
              }))
          })
      })
      
      .catch((error)=>alert(error));
  };
  return (
    <div className="login">
      <img src="./images/logo.png" alt="" />

      <form>
        <input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="full name (required if regestring)"
        />
        <input
          value={profilePic}
          type="text"
          onChange={(e) => setprofilePic(e.target.value)}
          placeholder="Profile pic Url (optional)"
        />
        <input      
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email (karim@yahoo.com)"
          type="email"
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button className="login__button" type="submit" onClick={loginToApp}>
          sign in
        </button>
      </form>
      <p>
        Not a member?
        <span className="login__register" onClick={register}>
          Register now
        </span>
      </p>
    </div>
  );
}

export default Login;
