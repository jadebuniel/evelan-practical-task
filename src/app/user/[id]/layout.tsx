import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'User | Evelan Practical Task',
    description: 'This is a practical task from Evelan GmbH'
  }

export default function UserLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }