import { Button } from "antd"
import { FC } from "react"
import { useAccount } from "../../components/Store"
import { Navigate } from "react-router-dom"

const Login: FC = () => {
    const [account, setAccount] = useAccount()

    const login = () => {
        setAccount({ token: "123" })
    }

    return (
        <>
            {account.token ? (
                <Navigate to={"/home"} replace={true}/>
            ) : (
                <form>
                    <Button onClick={login}>登录</Button>
                </form>
            )}
        </>
    )
}

export default Login
