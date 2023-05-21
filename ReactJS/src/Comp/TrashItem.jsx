import React from 'react';
import MyButton from "./UI/Button/MyButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import PostServise from "../API/PostServise";

const TrashItem = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                ID: {props.post.id}
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.post.title.slice(0, 45)}</h5>
                <p className="card-text">{props.post.body.slice(0, 200)}...</p>
                <MyButton onClick={ async () => await PostServise.getRestore(props.post.id) + props.remove(props.post) }>Відновити</MyButton>
            </div>
        </div>
    );
};

export default TrashItem;
