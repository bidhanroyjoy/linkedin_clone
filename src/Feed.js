import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import InputOption from "./InputOption";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
import 'firebase/firestore'; 
import { db } from "./firebase";
import firebase from "firebase"
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const user= useSelector(selectUser);
  

 useEffect(()=>{
   db.collection("posts").onSnapshot((snapshot)=>
     setPosts(snapshot.docs.map((doc)=>({
       id:doc.id,
       data:doc.data(),
     })))
   );
 },[]);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      name: user.displayName,
      description: user.email,   
      message: input,
      photoUrl: user.photoUrl || "" ,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>
      <FlipMove>
      {posts.map(({ id, data: { description, message, photUrl, name } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photUrl={photUrl}
        />
      ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
