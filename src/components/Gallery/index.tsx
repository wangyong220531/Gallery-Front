import { FC } from "react"
import Card, { CardProps } from "../Card"
import Styles from "./index.module.less"

function c(...classNameList: (string | undefined | null | boolean)[]) {
    return (classNameList.filter(item => typeof item === "string") as string[]).map(className => (className.startsWith("_") ? className.slice(1) : Styles[className])).join(" ")
}

const Gallery: FC = () => {
    const cardList: CardProps[] = [
        {
            id: "000",
            name: "王一",
            imgUrl: "",
            captureTime: "2023-07-31 00:00:00",
            captureAddress: "淮安市清江浦区清江浦分局",
            haveVehicle: false
        },
        {
            id: "001",
            name: "王二",
            imgUrl: "",
            captureTime: "2023-07-31 00:00:00",
            captureAddress: "淮安市清江浦区清江浦分局",
            haveVehicle: true
        },
        {
            id: "002",
            name: "王三",
            imgUrl: "",
            captureTime: "2023-07-31 00:00:00",
            captureAddress: "淮安市清江浦区清江浦分局",
            haveVehicle: false
        },
        {
            id: "003",
            name: "王四",
            imgUrl: "",
            captureTime: "2023-07-31 00:00:00",
            captureAddress: "淮安市清江浦区清江浦分局",
            haveVehicle: false
        },
        {
            id: "004",
            name: "王五",
            imgUrl: "",
            captureTime: "2023-07-31 00:00:00",
            captureAddress: "淮安市清江浦区清江浦分局",
            haveVehicle: true
        }
    ]

    return (
        <div className={c("gallery")}>
            {cardList.map(card => {
                return <Card key={card.id} id={card.id} name={card.name} captureTime={card.captureTime} captureAddress={card.captureAddress} haveVehicle={card.haveVehicle} imgUrl={card.imgUrl} />
            })}
        </div>
    )
}

export default Gallery
