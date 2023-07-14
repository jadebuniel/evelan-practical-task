"use client"

import React, { SetStateAction, createContext, useState } from 'react'
import { User } from '../utils/types'

export interface UserContextType {
    users: User[];
    setUsers: React.Dispatch<SetStateAction<User[]>>;
}

export const UserContext = createContext<UserContextType>({
    users: [],
    setUsers: () => {}
})

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [users, setUsers] = useState<User[]>([])

    return (
        <UserContext.Provider value={{ users, setUsers}}>
            {children}
        </UserContext.Provider>
    )
}