import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

export const FinancialInfo: React.FC<{ active?: boolean }> = ({ active }) => {
  const router = useRouter()
  const userData = router.query.id
  return (
    <div>
      <div className="flex justify-between items-start">
        <h2 className="h2 mb-8">Financial Information</h2>
        <button
          className={`btn ${active ? 'btn-primary' : 'btn-default'}`}
          onClick={(e) => router.push(`/financial-info/edit?id=${userData}`)}
        >
          Edit
        </button>
      </div>
      <p>
        Payments can be deposited directly to your blank account when you
        provide the following information. You can find your Branch,
        Institution, and Account numbers by logging into your online banking or
        contacting your branch. You can also find these numbers on any void
        cheque.
      </p>
      <div className="flex justify-center items-center my-8">
        <Image
          src="/check.png"
          width="533px"
          height="253px"
          alt="Image of a void cheque"
        />
      </div>
      <p className="mb-12">
        The three numbers you will need to enter are at the bottom of the cheque
        from left to right.
      </p>
    </div>
  )
}
