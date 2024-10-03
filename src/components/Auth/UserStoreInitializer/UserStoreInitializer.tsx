'use client'

import { useEffect, useRef } from 'react'

import { MeQueryResult } from '@/server/auth.types'
import { useSessionStore } from '@/stores/session-store'

type Props = {
  user: MeQueryResult | null
}

export const UserStoreInitializer: React.FC<Props> = ({ user }) => {
  const initialized = useRef(false)

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      useSessionStore.setState({
        data: user,
        status: user ? 'authenticated' : 'unauthenticated',
      })
    }
  }, [user])

  return null
}
