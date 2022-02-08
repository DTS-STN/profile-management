import React, { useState } from 'react'
import { CommonContactInfo } from '../../components/Layout/commonContactInfo'

const RESIDENTIAL_ADDRESS = 1
const MAILING_ADDRESS = 2

export default function Edit({ data }) {
  return <CommonContactInfo data={data} isDisabled={false}></CommonContactInfo>
}

export const getServerSideProps = async (_context: any) => {
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
