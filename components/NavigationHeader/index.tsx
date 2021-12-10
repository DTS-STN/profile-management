import Link from 'next/link'
import React from 'react'

export const NavigationHeader: React.VFC<{ path: string }> = ({ path }) => {
  return (
    <ol className="grid grid-cols-3 gap-x-6 gap-y-2.5">
      <Link href="/" passHref>
        <li
          className={`rounded py-3 px-6 cursor-pointer ${
            path == '/'
              ? 'text-white text-h4 bg-primary'
              : 'text-primary text-h4 border border-primary-border underline'
          }`}
        >
          <a>1. Personal Information</a>
        </li>
      </Link>
      <Link href="/financial-info" passHref>
        <li
          className={`rounded py-3 px-6 cursor-pointer ${
            path.includes('/financial-info')
              ? 'text-white text-h4 bg-primary'
              : 'text-primary text-h4 border border-primary-border underline'
          }`}
        >
          <a>2. Financial Information</a>
        </li>
      </Link>
      <Link href="/contact-info" passHref>
        <li
          className={`rounded py-3 px-6 cursor-pointer ${
            path == '/contact-info'
              ? 'text-white text-h4 bg-primary'
              : 'text-primary text-h4 border border-primary-border underline'
          }`}
        >
          <a>3. Contact Information</a>
        </li>
      </Link>
      <Link href="/user-preferences" passHref>
        <li
          className={`rounded py-3 px-6 cursor-pointer ${
            path == '/user-preferences'
              ? 'text-white text-h4 bg-primary'
              : 'text-primary text-h4 border border-primary-border underline'
          }`}
        >
          <a>4. User Preferences</a>
        </li>
      </Link>
    </ol>
  )
}
