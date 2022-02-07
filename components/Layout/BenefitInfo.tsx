import React from 'react'

export const BenefitInfo: React.FC<{ active?: boolean }> = ({ active }) => {
  return (
    <div className="flex justify-between items-start">
      <h2 className="h2 mb-8">Current Benefits Status</h2>
    </div>
  )
}
