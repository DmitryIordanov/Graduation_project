import React, {useEffect, useState} from "react";
import '../src/style/App.css';
import '../src/style/Style.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./Comp/UI/Navbar/Navbar";
import AppRouter from "./Comp/AppRouter";
import Footer from "./Comp/UI/Footer/footer";
import {AuthContext, AuthCreatePost} from "./context";

function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [isCreatePost, setIsCreatePost] = useState(true)

    useEffect(() => {
        if (localStorage.getItem('auth')){
            setIsAuth(true)
        }
    }, [])

    return(
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <AuthCreatePost.Provider value={{
                    isCreatePost,
                    setIsCreatePost
                }}>
                    <Navbar/>
                    <AppRouter/>
                    <Footer/>
                </AuthCreatePost.Provider>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}
export default App;
