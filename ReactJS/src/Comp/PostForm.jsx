import React, {useState} from 'react';
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton";
import PostServise from "../API/PostServise";

const PostForm = ({create}) => {
    function getFilename(fullPath) {
        return fullPath.replace(/^.*[\\\/]/, '');
    }

    const [post, setPost] = useState({
        title: '',
        body: '',
        image: ''
    })

    const addNewPost = (e) =>{
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: '', image: ''})
    }

    return (
        <form>
            <h1>Створити пост</h1>
            <MyInput value={post.title} onChange={e => setPost({...post, title: e.target.value})} type="text" placeholder="Назва посту..."/>
            <MyInput value={post.body}  onChange={e => setPost({...post, body: e.target.value})} type="text" placeholder="Опис посту..."/>
            <MyInput value={post.image}  onChange={e => setPost({...post, image: e.target.value})} type="file"/>
            <MyButton onClick={async () => await PostServise.getCreatePostById(post["title"],post["body"], getFilename(post["image"]))}>Створити пост</MyButton>
        </form>
    );
};

export default PostForm;
