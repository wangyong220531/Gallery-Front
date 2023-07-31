import { FC, ReactNode } from "react"
import { useAccount } from "../Store"
import { Navigate } from "react-router-dom"

interface AuthProps {
    child: ReactNode
}

const Auth: FC<AuthProps> = props => {
    const { child } = props
    const [account] = useAccount()
    return <>{account.token ? <>{child}</> : <Navigate to={"/login"} replace={true} />}</>
}

export default Auth
