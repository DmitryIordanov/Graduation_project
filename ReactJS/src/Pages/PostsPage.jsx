import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostServise from "../API/PostServise";
import MyLoader from "../Comp/UI/Loader/MyLoader";
import MyButton from "../Comp/UI/Button/MyButton";

const PostsPage = () => {
    const params = useParams()
    const router = useNavigate()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostServise.getById(params.id)
        setPost(response.data)
    })
    const [fetchComments, isLoadingComm, Commerror] = useFetching(async () => {
        const response = await PostServise.getCommentPostById(params.id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div className='container'>
            {isLoading
                ?<div style={{display: 'flex', justifyContent: 'center', marginTop: '25px'}}>
                    <MyLoader></MyLoader>
                </div>
                :<div className="Post__content">
                    <img src={post.image}/>
                    <h1 className="title">{post.title}</h1>
                    <p className="date">{post.created_at}</p>
                    <div className="content">{post.body}</div>
                </div>
            }
            <MyButton onClick={() => router('/posts')}>Повернутися</MyButton>
            <h3 style={{marginTop: 30, marginBottom: 30}}>Коментарі</h3>
            {isLoadingComm
                ?<div style={{display: 'flex', justifyContent: 'center', marginTop: '25px'}}>
                    <MyLoader></MyLoader>
                </div>
                :<div>
                    {comments.map(comm =>
                        <div key={comm.id} className="comment__block">
                            <h5>{comm.email}</h5>
                            <p>{comm.body}</p>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostsPage;
