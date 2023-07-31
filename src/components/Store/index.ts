import { createPersistentStore } from "easy-zustand"
import { createCookieStorage } from "gskj-tools"

export interface Role {
    id: string
    roleName: string
}

export interface Account {
    userName: string
    phone: string
    roles: Role[]
    token: string | null
}

export const useAccount = createPersistentStore<Account>({ userName: "", phone: "", roles: [], token: null }, { name: "account", storage: createCookieStorage() })
