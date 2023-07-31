import { FC } from "react"
import Styles from "./index.module.less"

function c(...classNameList: (string | undefined | null | boolean)[]) {
    return (classNameList.filter(item => typeof item === "string") as string[]).map(className => (className.startsWith("_") ? className.slice(1) : Styles[className])).join(" ")
}

export interface InfoCardProps {
    id?: string
    name: string
    identityId: string
    hjd: string
    xzz: string
}

const InfoCard: FC<InfoCardProps> = props => {
    const { id, name, identityId, hjd, xzz } = props
    return (
        <div className={c("info-card")}>
            <div className={c("id")}>{id}</div>
            <div className={c("name")}>{name}</div>
            <div className={c("identityId")}>{identityId}</div>
            <div className={c("hjd")}>{hjd}</div>
            <div className={c("xzz")}>{xzz}</div>
        </div>
    )
}

export default InfoCard
