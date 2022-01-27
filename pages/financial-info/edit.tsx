import { Input } from '../../components/Forms/Input'
import { Layout } from '../../components/Layout'
import { NavButtons } from '../../components/NavButtons'
import { useState } from 'react'
import { useInternationalization } from '../../components/Hooks'
import { useRouter } from 'next/router'
import { SubmitMessage } from '../../components/Forms/validation/SubmitMessage'
import { CommonFinancialInfo } from './CommonFinancialInfo'

export default function Edit({ data }) {
  return (
    <CommonFinancialInfo data={data} isDisabled={false}></CommonFinancialInfo>
  )
}

export const getServerSideProps = async (_context) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/financial/info/${_context.query.id}`
  )
  const data = await res.json()

  return {
    props: {
      data: data,
    },
  }
}
