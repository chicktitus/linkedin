import { Avatar } from '@material-ui/core';
import React, {forwardRef} from 'react';
import InputOption from './InputOption';
import "./Post.css";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const Post = forwardRef(({ name, description, message, photoUrl}, ref) => {
    const user = useSelector(selectUser);
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={user?.photoURL} >{name?.[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltIcon} title="like" color="gray" />
                <InputOption Icon={ChatOutlinedIcon} title="comment" color="gray" />
                <InputOption Icon={ShareOutlinedIcon} title="share" color="gray" />
                <InputOption Icon={SendOutlinedIcon} title="send" color="gray" />
            </div>
        </div>
    );
})

export default Post;
