import React, {useEffect, useState} from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {useFetching} from "../hooks/useFetching";
import PostServise from "../API/PostServise";
import TrashItem from "./TrashItem";
import MyLoader from "./UI/Loader/MyLoader";

const Trash = () => {
    const [posts, setPosts] = useState([])

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostServise.getTrash()
        setPosts(response.data)
    })

    useEffect(() => {
        fetchPosts()
    }, [])

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    if (!posts.length){
        return (
            <div className='container'>
                <h3 style={{textAlign: 'center', marginTop: 30}}>
                    Корзина пуста, будь ласка поверніться назад!
                </h3>
                <img width='350' style={{display: "block", marginTop: 50, marginLeft: "auto", marginRight: "auto", opacity: .7}} src="/assets/images/trash.png"/>
            </div>
        )
    }

    return (
        <div>
            {isPostsLoading
                ?<div style={{display: 'flex', justifyContent: 'center', marginTop: '25px'}}>
                    <MyLoader></MyLoader>
                </div>
                :<TransitionGroup className='row'>
                    {posts.map((post, index) =>
                        <CSSTransition
                            key={post.id}
                            timeout={500}
                            classNames="post"
                        >
                            <TrashItem remove={removePost} number={index + 1} post={post}/>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            }
        </div>
    );
};

export default Trash;
