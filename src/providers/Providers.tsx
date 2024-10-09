import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import React from 'react'

import { getServerAuthSession } from '@/server/auth'

import { SessionProvider } from './SessionProvider'

const Providers = async ({ children }: { children: React.ReactNode }) => {
  const messages = await getMessages()
  const session = await getServerAuthSession()

  return (
    <SessionProvider session={session}>
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
    </SessionProvider>
  )
}

export default Providers
