import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import NotFound from "./Pages/NotFound"
import Auth from "./components/Auth"
import Main from "./Pages/Main"
import Login from "./Pages/Login"
import Detail from "./components/Detail"
import Home from "./Pages/Home"

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Auth child={<Main />}></Auth>}>
                        <Route path="home" element={<Home />} />
                        <Route path="detail/:id" element={<Detail />} />
                    </Route>
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
