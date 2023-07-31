import { FC } from "react"
import Styles from "./index.module.less"
import Vehicle from "../../assets/vehicle.png"
import { Link } from "react-router-dom"

function c(...classNameList: (string | undefined | null | boolean)[]) {
    return (classNameList.filter(item => typeof item === "string") as string[]).map(className => (className.startsWith("_") ? className.slice(1) : Styles[className])).join(" ")
}

export interface CardProps {
    id: string
    name: string
    imgUrl: string
    captureTime: string
    captureAddress: string
    haveVehicle: boolean
}

const Card: FC<CardProps> = props => {
    const { id, imgUrl, name, haveVehicle } = props
    return (
        <Link to={`/detail/${id}`}>
            <div className={c("card")}>
                {haveVehicle && (
                    <div className={c("tag")}>
                        <img src={Vehicle} width={16} />
                    </div>
                )}
                <img className={c("portrait")} src={imgUrl} alt="" />
                <div className={c("name")}>{name}</div>
                {/* <div className={c("captureTime")}>{captureTime}</div>
                <div className={c("captureAddress")}>{captureAddress}</div> */}
            </div>
        </Link>
    )
}

export default Card
