import { useRouter } from 'next/router'
import React from 'react'

export const UserPreferences: React.FC<{ active?: boolean }> = ({ active }) => {
  const router = useRouter()
  const userData = router.query.id
  return (
    <div>
      <div className="flex justify-between items-start">
        <h2 className="h2 mb-8">User Preferences</h2>
        <button
          className={`btn ${active ? 'btn-primary' : 'btn-default'}`}
          onClick={(e) => router.push(`/user-preferences/edit?id=${userData}`)}
        >
          Edit
        </button>
      </div>
    </div>
  )
}
