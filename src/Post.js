import React from 'react';
import "./Post.css";
import { Avatar } from "@material-ui/core";

import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import InputOption from './InputOption';

function Post({name,description,message,photUrl}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h1>{name}</h1>
                    <p>{description}</p>
                    {/* <p>{message}</p> */}
                </div>
            </div>

            <div className="post__body">
            <p>{message}</p>
            </div>
            <div className="post__buttons">
            <InputOption Icon={ThumbUpAltOutlined} title='Like' color="gray" />
            <InputOption Icon={ChatOutlined} title='comment' color="gray" />
            <InputOption Icon={ShareOutlined} title='Share' color="gray" />
            <InputOption Icon={SendOutlined} title='Send' color="gray" />
            </div>
        </div>
    );
}

export default Post
