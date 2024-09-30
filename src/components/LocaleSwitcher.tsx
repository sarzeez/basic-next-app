'use client'

import { useLocale } from 'next-intl'
import type { ChangeEventHandler } from 'react'

import { usePathname, useRouter } from '@/i18n/routing'

import { availableLocaleCodes } from '../helpers/next.locales'

const LocaleSwitcher = () => {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    router.push(pathname, { locale: event.target.value })
    router.refresh()
  }

  return (
    <select
      defaultValue={locale}
      onChange={handleChange}
      className="text-black"
    >
      {availableLocaleCodes.map((elt) => (
        <option key={elt} value={elt}>
          {elt.toUpperCase()}
        </option>
      ))}
    </select>
  )
}
export default LocaleSwitcher
