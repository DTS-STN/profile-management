import Link from 'next/link'
import React from 'react'

export const NavigationHeader: React.VFC<{ path: string }> = ({ path }) => {
  return (
    <ol className="grid grid-cols-3 gap-x-6 gap-y-2.5">
      <li
        className={`rounded py-3 px-6 ${
          path == '/'
            ? 'text-white text-h4 bg-primary'
            : 'text-primary text-h4 border border-primary-border underline'
        }`}
      >
        <Link href="/" passHref>
          <a>1. Personal Information</a>
        </Link>
      </li>
      <li
        className={`rounded py-3 px-6 ${
          path == '/financial-info'
            ? 'text-white text-h4 bg-primary'
            : 'text-primary text-h4 border border-primary-border underline'
        }`}
      >
        <Link href="financial-info" passHref>
          <a>2. Financial Information</a>
        </Link>
      </li>
      <li
        className={`rounded py-3 px-6 ${
          path == '/contact-info'
            ? 'text-white text-h4 bg-primary'
            : 'text-primary text-h4 border border-primary-border underline'
        }`}
      >
        <Link href="/contact-info" passHref>
          <a>3. Contact Information</a>
        </Link>
      </li>
      <li
        className={`rounded py-3 px-6 ${
          path == '/user-preferences'
            ? 'text-white text-h4 bg-primary'
            : 'text-primary text-h4 border border-primary-border underline'
        }`}
      >
        <Link href="/user-preferences" passHref>
          <a>4. User Preferences</a>
        </Link>
      </li>
    </ol>
  )
}
