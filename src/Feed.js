import React, { useEffect, useState } from 'react';
import "./Feed.css";
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import InputOption from './InputOption';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import Post from './Post';
import { db } from "./firebase";
import firebase from 'firebase';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';

function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("post")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
         
    }, []);

    const sendPost = (e) => {
        e.preventDefault();

        db.collection("post").add({
            name: user.displayName, 
            description: user.email,
            message:input, 
            photoURL: user.photoURL || "", 
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    };

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon}title='photo' color='#70B5F9'/>
                    <InputOption Icon={SubscriptionsIcon}title='video' color='#E7A33E'/>
                    <InputOption Icon={EventNoteIcon}title='event' color='#C0CBCD'/>
                    <InputOption Icon={CalendarViewDayIcon}title='write article' color='#7FC15E'/>
                </div>
            </div>

        {/*post */}
        <FlipMove>
        {posts.map(({ id, data: {name, description, message, photoURL } }) => ( 
        <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoURL={photoURL}
        />
        )) }
        </FlipMove>
        </div>
    );
}

export default Feed;
