import { FC, useEffect, useState } from "react"

export interface CardProps {
    id?: string
    text: string
}

const Card: FC<CardProps> = props => {
    const { text } = props
    return <div className="w-[100px] h-[160px] bg-blue-500 text-[#fff] flex justify-center items-center">{text}</div>
}

const Gallery: FC = () => {
    const cards: CardProps[] = [
        {
            id: "000",
            text: "A"
        },
        {
            id: "001",
            text: "B"
        },
        {
            id: "002",
            text: "C"
        },
        {
            id: "003",
            text: "D"
        },
        {
            id: "004",
            text: "E"
        },
        {
            id: "005",
            text: "F"
        },
        {
            id: "006",
            text: "G"
        },
        {
            id: "007",
            text: "H"
        },
        {
            id: "008",
            text: "I"
        },
        {
            id: "009",
            text: "J"
        },
        {
            id: "010",
            text: "K"
        },
        {
            id: "011",
            text: "L"
        },
        {
            id: "012",
            text: "M"
        },
        {
            id: "013",
            text: "N"
        },
        {
            id: "014",
            text: "O"
        },
        {
            id: "015",
            text: "P"
        },
        {
            id: "016",
            text: "Q"
        },
        {
            id: "017",
            text: "R"
        },
        {
            id: "018",
            text: "S"
        },
        {
            id: "019",
            text: "T"
        },
        {
            id: "020",
            text: "U"
        },
        {
            id: "021",
            text: "V"
        },
        {
            id: "022",
            text: "W"
        },
        {
            id: "023",
            text: "X"
        },
        {
            id: "024",
            text: "Y"
        },
        {
            id: "025",
            text: "Z"
        }
    ]

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(0)
    const [isSpecial, setIsSpecial] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
            const rowCount = Math.ceil(cards.length / Math.floor(window.innerWidth / 100))
            if (window.innerWidth + 10 !== rowCount * 110) {
                setIsSpecial(true)
            }
            setHeight(rowCount * 160 + (rowCount - 1) * 10)
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <div className="absolute bg-black flex flex-wrap gap-[10px]" style={isSpecial ? { justifyContent: "space-between", width, height } : { width, height }}>
            {cards.map(card => {
                return <Card key={card.id} text={card.text} />
            })}
        </div>
    )
}

export default Gallery
