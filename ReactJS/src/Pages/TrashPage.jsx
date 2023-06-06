import React, {useContext} from 'react';
import Trash from "../Comp/Trash";
import {AuthCreatePost} from "../context";
import NotFound from "./NotFound";

const TrashPage = () => {
    const {isCreatePost, setIsCreatePost} = useContext(AuthCreatePost)
    if (!isCreatePost) {
        return (
            <NotFound/>
        )
    }
    return (
        <div className='container'>
            <h1 style={{textAlign: "center", marginTop: 30, marginBottom: 30}}>Корзина</h1>
            <Trash/>
        </div>
    );
};

export default TrashPage;
