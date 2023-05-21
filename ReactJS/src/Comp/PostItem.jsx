import React, {useContext} from 'react';
import MyButton from "./UI/Button/MyButton";
import {useNavigate} from "react-router-dom";
import {AuthCreatePost} from "../context";
import PostServise from "../API/PostServise";

const PostItem = (props) => {
    const {isCreatePost, setIsCreatePost} = useContext(AuthCreatePost)
    const router = useNavigate()

    return (
        <div className='post'>
            <div className="img__posts">
                <img src={props.post.image} alt=""/>
            </div>
            <div className="content__posts">
                <h1 className='title__posts'>{props.post.title.slice(0, 45)}</h1>
                <div className='body__posts'><p>{props.post.body.slice(0, 100)}...</p></div>
                <div className='post__btn'>
                    <MyButton onClick={() => router(`/posts/${props.post.id}`)}>Відкрити</MyButton>
                    {isCreatePost
                        ?<MyButton onClick={ async () => await PostServise.getDeletePostById(props.post.id) + props.remove(props.post) }>Видалити</MyButton>
                        :null
                    }
                </div>
            </div>
        </div>
    );
};

export default PostItem;
