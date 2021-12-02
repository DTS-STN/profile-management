import Link from 'next/link'
import React from 'react'

export const NavButtons: React.VFC<{
  fromLocation: string
  toLocation: string
}> = ({ fromLocation, toLocation }) => (
  <div className="flex justify-between items-center">
    <Link href={fromLocation} passHref>
      <a className="btn btn-default">Back</a>
    </Link>
    <Link href={toLocation} passHref>
      <a className="btn btn-primary">Next</a>
    </Link>
  </div>
)
