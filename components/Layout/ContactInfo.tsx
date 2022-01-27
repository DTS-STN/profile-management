import { useRouter } from 'next/router'
import React from 'react'

export const ContactInfo: React.FC<{ active?: boolean }> = ({ active }) => {
  const router = useRouter()
  const userData = router.query.id
  return (
    <div>
      <div className="flex justify-between items-start">
        <h2 className="h2 mb-8">Contact Information</h2>
        <button
          className={`btn ${active ? 'btn-primary' : 'btn-default'}`}
          onClick={(e) => router.push(`/contact-info/edit?id=${userData}`)}
        >
          Edit
        </button>
      </div>
    </div>
  )
}
