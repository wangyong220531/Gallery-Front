import { FC, ReactNode } from "react"
import { Navigate, useLocation } from "react-router-dom"

export interface RedirectProps {
    from: string
    to: string
    children?: ReactNode
}

const Redirect: FC<RedirectProps> = props => {
    const { from, to, children } = props
    const location = useLocation()

    console.log(location.pathname)

    return <>{location.pathname === from ? <Navigate to={to} replace={true} /> : <>{children}</>}</>
}

export default Redirect
