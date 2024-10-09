'use client'

import { signOut, useSession } from 'next-auth/react'

// import { useSession } from '@/stores/session-store'
// import { api } from '@/trpc/react';

const LogOutButton = () => {
  const { status } = useSession()
  // const signOutMutation = api.auth.signOut.useMutation({
  //   onSuccess() {
  //     session.update(null);
  //   },
  // });
  if (status !== 'authenticated') return null

  return (
    <button
      className="border-none text-gray-700 hover:text-gray-900"
      type="button"
      onClick={async () => {
        // signOutMutation.mutate();
        await signOut({
          callbackUrl: '/signin',
        })
      }}
    >
      Logout
    </button>
  )
}

export { LogOutButton }
