import { FC } from "react"
import Gallery from "../../components/Gallery"
import Styles from "./index.module.less"

function c(...classNameList: (string | undefined | null | boolean)[]) {
    return (classNameList.filter(item => typeof item === "string") as string[]).map(className => (className.startsWith("_") ? className.slice(1) : Styles[className])).join(" ")
}

const Home: FC = () => {
    return <div className={c("home")}><Gallery/></div>
}

export default Home
