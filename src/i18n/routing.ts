import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

import { availableLocaleCodes, defaultLocale } from '@/helpers/next.locales'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: availableLocaleCodes,

  // Used when no locale matches
  defaultLocale: defaultLocale.code,
  localePrefix: 'as-needed',
})

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing)
