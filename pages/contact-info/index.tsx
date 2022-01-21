import React, { useState } from 'react'
import { Layout } from '../../components/Layout'
import { Input } from '../../components/Forms/Input'
import Select from 'react-select'
import { NavButtons } from '../../components/NavButtons'
import { ContactInfo } from '../../components/Layout/ContactInfo'
import { useRouter } from 'next/router'
import countryList from 'react-select-country-list'
import { CommonContactInfo } from './commonContactInfo'

export default function Index({ data }) {
  return <CommonContactInfo data={data} isDisabled={true}></CommonContactInfo>
}

export const getServerSideProps = async (_context) => {
  const res = await fetch(
    `${process.env.API_SERVER_BASE_URL}/user/contact/info/${_context.query.id}`
  )
  const data = await res.json()
  console.log(data)
  return {
    props: {
      data: data,
    },
  }
}
