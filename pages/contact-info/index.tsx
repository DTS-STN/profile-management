import React, { useState } from 'react'
import { CommonContactInfo } from './commonContactInfo'

export default function Index({ data }) {
  return <CommonContactInfo data={data} isDisabled={true}></CommonContactInfo>
}

export const getServerSideProps = async (_context) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/contact/info/${_context.query.id}`
  )
  const data = await res.json()

  return {
    props: {
      data: data,
    },
  }
}
