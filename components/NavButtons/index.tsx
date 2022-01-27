import Link from 'next/link'
import React from 'react'

export interface NavButtonProps {
  fromLocation: string
  toLocation: string
}

export const NavButtons: React.VFC<NavButtonProps> = ({
  fromLocation,
  toLocation,
}) => (
  <div className="flex justify-between ml-2" role="navigation">
    <div>
      <Link href={fromLocation} passHref>
        <a className="btn btn-default">Back</a>
      </Link>
    </div>
    <div>
      <Link href={toLocation} passHref>
        <a className="btn btn-primary">Next</a>
      </Link>
    </div>
  </div>
)
