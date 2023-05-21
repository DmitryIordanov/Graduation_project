import React from 'react';
import Trash from "../Comp/Trash";

const TrashPage = () => {
    return (
        <div className='container'>
            <h1 style={{textAlign: "center", marginTop: 30, marginBottom: 30}}>Корзина</h1>
            <Trash/>
        </div>
    );
};

export default TrashPage;
