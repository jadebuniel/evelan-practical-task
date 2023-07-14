"use client"
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/userContext'
import { GetCharacterResult } from '@/utils/types'
import axios from 'axios'
import { PageContext } from '@/context/pageContext'
import User from '@/components/User'
import Button from '@/components/Button'

export default function Home() {
  const {users, setUsers} = useContext(UserContext)
  const {currentPage, setCurrentPage, canLoadMore, setCanLoadMore} = useContext(PageContext)

  const [isLoading, setIsLoading] = useState<boolean>(false)
  
  useEffect(() => {
    if (users.length <= 0) {
      getUsers()
    }
  }, [])

  const getUsers = async () => {
    setIsLoading(true)
    const {  data: { data, total_pages } }: GetCharacterResult = await axios.get(`https://reqres.in/api/users?page=${currentPage}`)
    if (currentPage <= total_pages) {
      setUsers((prev) => [...prev, ...data])
      setCurrentPage((prev) => prev + 1)
    }

    if (currentPage == total_pages) {
      setCanLoadMore(false)
    }
    setIsLoading(false)
  }

  return (
    <div className='min-h-screen px-8 py-12 md:px-40 md:py-52'>
      <div className='grid place-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12'>
        {users && users.map(user => (
          <User key={user.id} id={user.id} email={user.email} first_name={user.first_name} last_name={user.last_name} avatar={user.avatar} />
        ))}
      </div>
      {users.length > 0 && <Button isLoading={isLoading} handleClick={getUsers} canLoadMore={canLoadMore} />}
    </div>
  )
}
