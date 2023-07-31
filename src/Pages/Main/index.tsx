import { FC } from "react"
import Redirect from "../../components/Redirect"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Styles from "./index.module.less"
import { Outlet } from "react-router-dom"

function c(...classNameList: (string | undefined | null | boolean)[]) {
    return (classNameList.filter(item => typeof item === "string") as string[]).map(className => (className.startsWith("_") ? className.slice(1) : Styles[className])).join(" ")
}

const Main: FC = () => {
    return (
        <Redirect from={"/"} to={"/home"}>
            <Header />
            <div className={c("main")}>
                <Outlet />
            </div>
            <Footer />
        </Redirect>
    )
}

export default Main
