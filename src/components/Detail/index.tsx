import { FC } from "react"
import Styles from "./index.module.less"
import { useParams } from "react-router-dom"
import InfoCard from "../InfoCard"

function c(...classNameList: (string | undefined | null | boolean)[]) {
    return (classNameList.filter(item => typeof item === "string") as string[]).map(className => (className.startsWith("_") ? className.slice(1) : Styles[className])).join(" ")
}

const Detail: FC = () => {
    const { id } = useParams()
    return (
        <div className={c("detail")}>
            <InfoCard id={id} name={""} identityId={""} hjd={""} xzz={""} />
        </div>
    )
}

export default Detail
