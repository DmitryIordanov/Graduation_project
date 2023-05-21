import React from "react";
import MainFon from "../Comp/StyleComp/MainFon";
import PostOutput from "../Comp/PostOutput";

const Posts = () => {
    return (
        <div className="App">
            <MainFon
                title="Блог"
                desc="Ця сторінка блогу, тут ви можете знайти всі статті та не тільки."
            />
            <div className="container">
                <PostOutput OutputFilter={true}/>
            </div>
        </div>
    );
}

export default Posts;
