import React, {useContext, useEffect, useState} from 'react';
import MyButton from "./UI/Button/MyButton";
import MyModal from "./UI/MyModal/MyModal";
import PostForm from "./PostForm";
import PostFilter from "./PostFilter";
import MyLoader from "./UI/Loader/MyLoader";
import PostList from "./PostList";
import MyPagination from "./UI/Pagination/MyPagination";
import {AuthCreatePost} from "../context";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostServise from "../API/PostServise";

const PostOutput = ({OutputFilter}) => {
    const {isCreatePost, setIsCreatePost} = useContext(AuthCreatePost)

    const [getTotalPage, setGetTotalPage] = useState({totalPages: ''})
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
    const [totalPage, setTotalPage] = useState(0)
    const [page, setPage] = useState(1)

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const responseTotal = await PostServise.getTotalPage()
        const response = await PostServise.getAll(page)

        setPosts(response.data)
        setGetTotalPage(responseTotal.data)

        setTotalPage(getTotalPage.totalPages)
    })

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    useEffect(() => {
        fetchPosts()
    }, [getTotalPage.totalPages, page])

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div>
            {OutputFilter
                ?<div>
                    {isCreatePost
                        ?<div>
                            <MyButton style={{marginTop: '15px'}} onClick={() => setModal(true)}>
                                Створити пост
                            </MyButton>
                            <hr style={{margin: "15px 0"}}/>
                            <MyModal visible={modal} setVisible={setModal}>
                                <PostForm create={createPost}/>
                            </MyModal>
                        </div>
                        :null
                    }
                    <PostFilter
                        filter={filter}
                        setFilter={setFilter}
                    />
                </div>
                :null
            }
            {postError &&
                <h1 style={{textAlign: "center"}}>Поизошла ошибка {postError}</h1>
            }
            {isPostsLoading
                ?<div style={{display: 'flex', justifyContent: 'center', marginTop: '25px'}}>
                    <MyLoader></MyLoader>
                </div>
                :<div style={{marginBottom: 30}}>
                    <h1 style={{textAlign:"center", color: "#282828"}}>Список постів</h1>
                    <PostList remove={removePost} posts={sortedAndSearchPosts}/>
                </div>
            }
            {OutputFilter
                ?<MyPagination
                    totalPage={totalPage}
                    page={page}
                    changePage={changePage}
                ></MyPagination>
                :null
            }
        </div>
    );
};

export default PostOutput;
