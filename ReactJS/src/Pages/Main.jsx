import React from 'react';
import MainFon from "../Comp/StyleComp/MainFon";
import PostOutput from "../Comp/PostOutput";

const Main = () => {
    return (
        <div className="App">
            <MainFon
                title="Головна"
                desc="Раді бачити вас на нашому сайті!"
            />
            <div className="container">
                <div className="main_page_block__1">
                    <h2>Це сайт блогу на тему "Lifestyle"</h2>
                    <h4>Тут ви можите зайти цікаву інформацію</h4>
                </div>
                <div className="main_page_block__2">
                    <p><span>Lifestyle</span> - з перекладу це "стиль життя". Це запозичене словосполучення виступає центром цілої низки інновацій, наприклад: Lifestyle Office, Lifestyle Fitness. Так само використовується цей термін у індустрії медіа, журналістика про стиль життя (або лайфстайл-журналістика).</p>
                </div>
                <PostOutput OutputFilter={false}/>
            </div>
        </div>
    );
};

export default Main;
