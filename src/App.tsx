import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import NotFound from "./Pages/NotFound"
import Auth from "./components/Auth"
import Main from "./Pages/Main"
import Login from "./Pages/Login"
import Detail from "./components/Detail"
import Home from "./Pages/Home"
import { useEffect } from "react"
import { wyArraySort } from "wangyong-utils"

interface Person {
id:string
age:number
}

function App() {
    const arr: Person[] = [
        {
            id: "000",
            age: 18
        },
        {
            id: "000",
            age: 21
        },
        {
            id: "000",
            age: 22
        }
    ]

    useEffect(() => {
        console.log(wyArraySort(arr, (a:Person,b:Person) => {
            return a.age - b.age
        }))
    }, [])

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
