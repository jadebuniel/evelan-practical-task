"use client"
import { UserContext } from "@/context/userContext"
import { User as UserType } from "@/utils/types"
import { useContext, useEffect, useState } from "react"
import axios from 'axios'
import Link from "next/link"



type UserPageTypes = {
    params: {
        id: number
    }
}

export default function User ({ params: { id } } : UserPageTypes) {
    const {users, setUsers} = useContext(UserContext)
    const [user, setUser] = useState<UserType | null>(null)

    useEffect(() => {
        if (users.length <= 0) {
            getUser()
        } else {
            const findUser = users.find(u => u.id == id)
            findUser && setUser(findUser)
        }
    }, [])

    const getUser = async () => {
        const { data: { data } } = await axios.get(`https://reqres.in/api/users/${id}`)
        setUser(data)
    }
    return (
        <>
            { user && (
                <div className='min-h-screen px-8 py-12 md:px-40 md:py-52 grid place-items-center'>
                    <Link href='..' className='bg-white rounded-xl p-12'>
                        <div className="flex gap-6 flex-col md:flex-row">
                            <div className="flex items-center justify-center">
                                <img className="rounded-full" src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
                            </div>
                            <div className="pt-4">
                                <p>ID: {user.id}</p>
                                <p>Full Name: {user.first_name} {user.last_name}</p>
                                <p>Email: {user.email}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )}
        </>
    )
}