import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { NavButtons } from '../NavButtons'

export const UserList: React.FC<{
  data: any
}> = ({ data }) => {
  const [userData, setUserData] = useState(undefined)

  return (
    <div>
      <div className="grid grid-cols-2 mb-14">
        <form>
          <fieldset className="fieldset">
            <legend>
              <h4 className="h4 mb-4">User List</h4>
            </legend>
            <div className="w-1/2 mb-14">
              <Select
                options={data}
                isClearable
                placeholder="Select a user"
                onChange={(e: { value: string; label: string }) => {
                  setUserData(e != null ? e.value : undefined)
                }}
              />
            </div>
          </fieldset>
        </form>
      </div>
      <NavButtons
        fromLocation="#"
        toLocation={userData ? `/personal-info?id=${userData}` : '/'}
      />
    </div>
  )
}
