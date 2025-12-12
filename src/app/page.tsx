import { auth } from '@/auth'
import EditRoleMobile from '@/components/EditRoleMobile'
import connectDb from '@/lib/db'
import User from '@/models/user.model'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function Home() {
  await connectDb()
  const session = await auth()

  // ⭐ EMAIL SE SEARCH KARO
  const user = await User.findOne({ email: session?.user?.email })

  if (!user) {
    redirect("/login")
  }

  const inComplete =
    !user.mobile ||
    !user.role ||
    (!user.mobile && user.role === "user")

  if (inComplete) {
    return <EditRoleMobile />
  }

  return (
    <>
      
    </>
  )
}
