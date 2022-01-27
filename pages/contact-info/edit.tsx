import React, { useState } from 'react'
import { Layout } from '../../components/Layout'
import { Input } from '../../components/Forms/Input'
import Select from 'react-select'
import { NavButtons } from '../../components/NavButtons'
import { useRouter } from 'next/router'
import countryList from 'react-select-country-list'
import { ErrorLabel } from '../../components/Forms/validation/ErrorLabel'
import { SubmitMessage } from '../../components/Forms/validation/SubmitMessage'
import { useInternationalization } from '../../components/Hooks'
import { CommonContactInfo } from './commonContactInfo'

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
