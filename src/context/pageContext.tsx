"use client"

import React, { createContext, useState } from 'react'

interface PageContextType {
    currentPage: number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
    canLoadMore: boolean,
    setCanLoadMore: React.Dispatch<React.SetStateAction<boolean>>
}

export const PageContext = createContext<PageContextType>({ currentPage: 1, setCurrentPage: () => 1, canLoadMore: true, setCanLoadMore: () => true })

export const PageContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [canLoadMore, setCanLoadMore] = useState<boolean>(true)

    return (
        <PageContext.Provider value={{ currentPage, setCurrentPage, canLoadMore, setCanLoadMore}}>
            {children}
        </PageContext.Provider>
    )
}