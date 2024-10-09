import React from 'react'

import { Link } from '@/i18n/routing'

const ProfilePage = () => {
  return (
    <div>
      This is protected Profile Page <br />
      <Link href="/" className="hover:text-blue-700">
        Home
      </Link>
    </div>
  )
}

export default ProfilePage
